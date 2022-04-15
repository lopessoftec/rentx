import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

// BorderlessButton botão quie não tem borda e nem fundo
import { BorderlessButton } from 'react-native-gesture-handler';

import {
  Container,
  IconContainer,
  InputText
} from './styles';

interface Props extends TextInputProps{
  iconName: React.ComponentProps<typeof Feather>['name'] //['name'] especifia que só quer o nome
}

export function PasswordInput({
  iconName,
  ...rest
} : Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const theme = useTheme();

  function handlePasswordVisibilityChange(){
    // prevState poderia ser qualquer nome, pega o valor atual e inverte
    setIsPasswordVisible(prevState => !prevState);
  }

  return (
    <Container>
      <IconContainer>
        <Feather 
          name={iconName}
          size={24}
          color={theme.colors.text_detail}
        />
      </IconContainer>

      <InputText
        secureTextEntry={isPasswordVisible}
        {...rest}
       />

      <BorderlessButton onPress={handlePasswordVisibilityChange} >
        <IconContainer>
          <Feather 
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={24}
            color={theme.colors.text_detail}
          />
        </IconContainer>
      </BorderlessButton>
    </Container>
  );
}