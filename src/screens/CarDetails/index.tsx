import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

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
  About,
} from './styles';

export function CarDetails() {
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

          <About>
          Este é automovel desportivo. Surgiu do lendario 
          touro de lide idultado na praça Real Maestranza de Servilla.
          </About>
        </Content>
    </Container>
  );
}