import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';
 
import {
  Container,
  Header,
  TotalCars,
  HeaderContent
} from './styles';

export function Home() {
  const carDataOne = {
    brand: 'Audi',
    name: 'R$ 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://pngimg.com/uploads/audi/audi_PNG99491.png',
  }
  const carDataTwo = {
    brand: 'Porsche',
    name: 'Panamera',
    rent: {
      period: 'AO DIA',
      price: 340,
    },
    thumbnail: 'https://purepng.com/public/uploads/large/purepng.com-porsche-panamera-white-carcarvehicletransportporsche-961524659258pfvb8.png',
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
        <Logo
          width={RFValue(108)}
          height={RFValue(12)}
        />
        <TotalCars>
          Total de 12 carros
        </TotalCars>
        </HeaderContent>
      </Header>

      <Car data={carDataOne}/>
      <Car data={carDataTwo}/>

    </Container>
  );
}