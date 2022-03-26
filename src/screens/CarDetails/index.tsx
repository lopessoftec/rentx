import React from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { StatusBar } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate
} from 'react-native-reanimated';

import { Button } from '../../components/Button';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';

import { getAcessoryicon } from '../../utils/getAcessoryicon';
import { CarDTO } from '../../dtos/CarDTO';

import {
  Container,
  Header,
  CarImages,
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

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { car } = route.params as Params;

  const scrollY = useSharedValue(0);
  const scrolHandle = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y; //armazena a posição do scroll
    console.log(event.contentOffset.y);
  });

  //irá fazer desapareecer o carro
  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP
      )
    }
  })

  function handleConfirmRental() {
    navigation.navigate('Scheduling', {car});
  }

  function handleBack(){
    navigation.goBack();
  }

  return (
    <Container>
      <StatusBar 
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <Animated.View
        style={[headerStyleAnimation]}
      >
        <Header>
          <BackButton onPress={handleBack} />
        </Header>

        <CarImages>
          <ImageSlider
            imageUrl={car.photos}
          />
        </CarImages>
      </Animated.View>

      <Animated.ScrollView contentContainerStyle={{
        paddingHorizontal: 24,
        paddingTop: getStatusBarHeight(),
      }}
      showsHorizontalScrollIndicator={false}
      onScroll={scrolHandle}
      >
        <Details>
          <Descriptions>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Descriptions>

          <Rent>
            <Period>car.rent.period</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {
            car.accessories.map(accessory => (
              <Accessory 
              key={accessory.type}
              name={accessory.name} 
              icon={getAcessoryicon(accessory.type)} />
            ))
          }
        </Accessories>

        <About>
          {car.about}
          {car.about}
          {car.about}
          {car.about}
          {car.about}
        </About>
      </Animated.ScrollView>

      <Footer>
        <Button title="Escolher periodo do aluguel" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}