import React from 'react';
import { useTheme } from 'styled-components';
import { StatusBar } from 'react-native';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar } from '../Calendar';

import ArrowSvg from '../../assets/arrow.svg';

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

export function Scheduling() {
    const theme = useTheme();

    return (
      <Container>
          <Header>
              <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor='transparent'
              />
              <BackButton 
                  onPress={() => {}}
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
                        <DateValue selected={false}>
                            18/06/2021
                        </DateValue>
                    </DeteInfo>

                    <ArrowSvg />
                    
                    <DeteInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={false}>
                            18/06/2021
                        </DateValue>
                    </DeteInfo>
              </RentalPeriod>
          </Header>

          <Content>
            <Calendar />
          </Content>

          <Footer>
              <Button title="Confirmar"/>
          </Footer>
      </Container>
    );
}