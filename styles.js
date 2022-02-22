import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.bg};
`;

export const IContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content:space-between;
  background-color: ${props => props.theme.bg};
  padding: 10px;
`;

export const Container1 = styled.View`
  flex: 1;
  background-color: ${props => props.theme.bg};
  margin:20px;
`;

export const Container2 = styled.View`
  flex: 3.5;
  background-color: ${props => props.theme.bg};
  margin-left:20px;
  margin-right:20px;
`;

export const ContainerList = styled.View`
  flex: 5;
  margin: 10px;
  background-color: ${props => props.theme.bg};
  align-items:center;
`;

export const TitleApp = styled.Text`
  font-size: 50px;
  color: white;
  font-family: ${props => props.theme.fonte};
  justify-content:center;
  text-align:center;
  margin-top:60px
`;

export const Txt = styled.Text`
  color: white;
  font-family: ${props => props.theme.fonte};
  font-weight: bold;
  font-size:14px;
`;

export const Title = styled.Text`
  color: white;
  font-family: ${props => props.theme.fonte};
  font-size: 30px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  color: white;
  font-family: ${props => props.theme.fonte};
  font-size: 14px;
`;

export const Btn = styled.TouchableOpacity`
  background-color: #ff3e96;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

export const BtnLogin = styled.TouchableOpacity`
  background-color: #ff3e96;
  height: 40px;
  width: 120px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-left:0;
  margin-right:0;
`;

export const BtnTxt = styled.Text`
  font-family: ${props => props.theme.fonte};
  color: white;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  height: 50px;
  
  padding: 5px;
  border-radius: 5px;
  margin: 10px;
  margin-left:0
  margin-right:0;
  background-color: #203775;
`;
