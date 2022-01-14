import React from 'react';

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
  About,
  Accessories,
  Footer
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

          <Accessories>
            <Accessory name="380km/h" icon={speedSvg}/>
            <Accessory name="3.2s" icon={accelerationSvg}/>
            <Accessory name="800 HP" icon={forceSvg}/>
            <Accessory name="Gasoline" icon={gasolineSvg}/>
            <Accessory name="Auto" icon={exchangeSvg}/>
            <Accessory name="2 pessoas" icon={peopleSvg}/>
          </Accessories>

          <About>
          Este é automovel desportivo. Surgiu do lendario 
          touro de lide idultado na praça Real Maestranza de Servilla.
          </About>
        </Content>

        <Footer>
          <Button title="Confirmar" />
        </Footer>
    </Container>
  );
}