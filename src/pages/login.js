import React from 'react';

import { Container, Container1, TitleApp,Txt,BtnLogin,BtnTxt,Title,Input } from '../../styles';
import {
  StatusBar,
  TouchableOpacity
} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';

function Login({navigation}) {
  return (
    <Container>
      <Container1>
    <StatusBar backgroundColor={'#192B5C'}/>
      <TouchableOpacity>
      
        <TitleApp>{<Icon name="opencart" size={50} color="#ff3e96"/>} ShopList</TitleApp>
      </TouchableOpacity>

      <Txt style={{marginBottom:120, textAlign:'center'}}>Sua lista de compras digital!</Txt>

      <Title><Icon name="square" size={25} color="#ff3e96"/> Entrar</Title>

      <Input
        placeholder="   Email"
        placeholderTextColor={'white'}
      />

      <Input
        placeholder="   Senha"
        placeholderTextColor={'white'}
      />

      <BtnLogin
        onPress={() => navigation.navigate('Home')}>
        <BtnTxt>Entrar</BtnTxt>
      </BtnLogin>
      </Container1>
    </Container>
  );
}

export default Login;
