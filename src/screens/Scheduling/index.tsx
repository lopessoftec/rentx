import React, { useState } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';

import { useTheme } from 'styled-components';
import { StatusBar } from 'react-native';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { 
    Calendar, 
    DayProps, 
    generateInterval,
    MarkedDateProps
} from '../../components/Calendar';

import ArrowSvg from '../../assets/arrow.svg';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { CarDTO } from '../../dtos/CarDTO';

import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DeteInfo,
    DateTitle,
    DateValue,
    Content,
    Footer,
} from './styles';
import { format } from 'date-fns';

interface RentalPeriod {
    startFormatted: string;
    endFormatted: string;
}

interface Params {
    car: CarDTO;
}

export function Scheduling() {
    const [ lastSelectedDate, setLastSelectedDate ] = useState<DayProps>({} as DayProps);
    const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);
    
    const theme = useTheme();
    const navigation = useNavigation<any>();

    const route = useRoute();
    const { car } = route.params as Params;

    function handleConfirmRental() {
        navigation.navigate('SchedulingDetails', {
            car,
            dates: Object.keys(markedDates)
        });      
    }

    function handleBack() {
        navigation.goBack();
    }

    function handleChangeDate(date: DayProps){
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date;

        if(start.timestamp > end.timestamp){
            start = end;
            end = start;
        }

        setLastSelectedDate(end);
        const interval = generateInterval(start, end);
        setMarkedDates(interval);

        const firstDate = Object.keys(interval)[0];
        const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

        setRentalPeriod({
            startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
            endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
        })
    }

    return (
        <Container>
            <Header>
                <StatusBar
                    barStyle="light-content"
                    translucent
                    backgroundColor='transparent'
                />
                <BackButton
                    onPress={handleBack}
                    color={theme.colors.shape}
                />

                <Title>
                    Escolha uma {'\n'}
                    data de inicio e {'\n'}
                    fim do aluguel
                </Title>

                <RentalPeriod>
                    <DeteInfo>
                        <DateTitle>DE</DateTitle>
                        {/* !! se tem conteudo verdaderio, se não tem fica falso */}
                        <DateValue selected={!!rentalPeriod.startFormatted}>
                            {rentalPeriod.startFormatted}
                        </DateValue>
                    </DeteInfo>

                    <ArrowSvg />

                    <DeteInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={!!rentalPeriod.endFormatted}>
                        {rentalPeriod.endFormatted}
                        </DateValue>
                    </DeteInfo>
                </RentalPeriod>
            </Header>

            <Content>
                <Calendar 
                    markedDates={markedDates}
                    onDayPress={handleChangeDate}
                />
            </Content>

            <Footer>
                <Button 
                title="Confirmar" 
                onPress={handleConfirmRental} 
                enabled={!!rentalPeriod.startFormatted}
                />
            </Footer>
        </Container>
    );
}