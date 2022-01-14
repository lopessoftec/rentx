import React from 'react';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { Button } from '../../components/Button';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Descriptions,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  Dateinfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';

export function SchedulingDetails() {
  const theme = useTheme();

  return (
    <Container>
        <Header>
            <BackButton onPress={() => {}}/>
        </Header>

        <CarImages>
          <ImageSlider 
            imageUrl={['https://pngimg.com/uploads/audi/audi_PNG99491.png']}
          />
        </CarImages>

        <Content>
          <Details>
            <Descriptions>
              <Brand>Lamborghini</Brand>
              <Name>Huracan</Name>
            </Descriptions>

            <Rent>
              <Period>Ao dia</Period>
              <Price>R$ 580,00</Price>
            </Rent>
          </Details>

          <Accessories>
            <Accessory name="380km/h" icon={speedSvg}/>
            <Accessory name="3.2s" icon={accelerationSvg}/>
            <Accessory name="800 HP" icon={forceSvg}/>
            <Accessory name="Gasoline" icon={gasolineSvg}/>
            <Accessory name="Auto" icon={exchangeSvg}/>
            <Accessory name="2 pessoas" icon={peopleSvg}/>
          </Accessories>

          <RentalPeriod>
            <CalendarIcon>
              <Feather 
                name="calendar"
                size={RFValue(24)}
                color={theme.colors.shape}
              />
            </CalendarIcon>

            <Dateinfo>
              <DateTitle>DE</DateTitle>
              <DateValue>18/06/2021</DateValue>
            </Dateinfo>

            <Feather 
              name="chevron-right"
              size={RFValue(10)}
              color={theme.colors.text}
            />

            <Dateinfo>
              <DateTitle>DE</DateTitle>
              <DateValue>18/06/2021</DateValue>
            </Dateinfo>

          </RentalPeriod>

          <RentalPrice>
            <RentalPriceLabel>TOTAL</RentalPriceLabel>
            <RentalPriceDetails>
              <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
              <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
            </RentalPriceDetails>
          </RentalPrice>
        </Content>

        <Footer>
          <Button title="Confirmar" />
        </Footer>
    </Container>
  );
}