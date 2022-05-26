import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useNetInfo } from '@react-native-community/netinfo';

import { getAcessoryicon } from '../../utils/getAcessoryicon';
import { Car as ModelCar } from '../../database/model/Car';

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from './styles';

import { useTheme } from 'styled-components';

interface Props extends RectButtonProps {
  data: ModelCar;
}

export function Car({ data, ...rest }: Props) {
  const netInfo = useNetInfo();

  const MotorIcon = getAcessoryicon(data.fuel_type);

  const theme = useTheme();

  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.period}</Period>
            <Price>{`R$ ${netInfo.isConnected === true ? data.price : '...'}`}</Price>
          </Rent>

          <Type>
            <MotorIcon
              fill={theme.colors.header}
            />
          </Type>
        </About>
      </Details>

      <CarImage
        source={{ uri: data.thumbnail }}
        resizeMode='contain'
      />
    </Container>
  );
}