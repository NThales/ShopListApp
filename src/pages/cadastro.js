import React from 'react';
import {BtnTxt, Container, IContainer, Container1, Container2, Title, Txt, Input, Btn} from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

function Cadastro({navigation}) {
  return (
    <Container>
      <Container1>
        <Title>
          <Icon name="square" size={25} color="#ff3e96" />  Criar nova lista
        </Title>
        <Input
        placeholder="   Nome da lista"
        placeholderTextColor={'white'}
      />
      </Container1>
      <Container1>
      <Txt>Selecione uma cor para sua lista</Txt>
        <IContainer>
        <Icon name="circle" size={40} color="#ff3e96" />  
        <Icon name="circle" size={40} color="#40E170" />
        <Icon name="circle" size={40} color="#fff" />
        <Icon name="circle" size={40} color="#00BFFF" />
        <Icon name="circle" size={40} color="#4169E1" />
        <Icon name="circle" size={40} color="#FFFF00" />
        <Icon name="circle" size={40} color="#ff7777" />
        <Icon name="circle" size={40} color="#9932CC" />
        </IContainer>
      </Container1>
      <Container1>
        <Txt>Selecione um ícone para sua lista</Txt>
        <IContainer>
        <Icon name="opencart" size={40} color="#fff" />  
        <Icon name="futbol-o" size={40} color="#fff" />
        <Icon name="plug" size={40} color="#fff" />
        <Icon name="book" size={40} color="#fff" />
        <Icon name="beer" size={40} color="#fff" />
        <Icon name="plane" size={40} color="#fff" />
        <Icon name="music" size={40} color="#fff" />
        </IContainer>
      </Container1>
      <Container2>
        <Btn
        onPress={() => navigation.navigate('Home')}
        >
          <BtnTxt>Criar Lista</BtnTxt>
        </Btn>
      </Container2>
    </Container>
  );
}

export default Cadastro;
