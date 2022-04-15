import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex-direction: row;
`;

export const IconContainer = styled.View`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;

  margin-right: 2px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

// flex: 1; preenche todos os espaços
export const InputText = styled(TextInput)`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;

  padding: 0 23px;
`;

// BorderlessButton botão quie não tem borda e nem fundo
export const ChangePasswordVisibilityButton = styled(BorderlessButton)``;