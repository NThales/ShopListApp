import React from 'react';
import {ContainerList, Container1, Container, Title, Txt} from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity} from 'react-native';

function Home({navigation}) {
  return (
    <Container>
      <Container1>
        <Title>
          <Icon name="square" size={25} color="#ff3e96" />  Minhas Listas
          <TouchableOpacity
          onPress={() => navigation.navigate('Cadastro')}
          >
            <Txt style={{fontSize:16}}>     +</Txt>
          </TouchableOpacity>
        </Title>
        <ContainerList>
          <Txt>Conteúdo</Txt>
        </ContainerList>
      </Container1>
    </Container>
  );
}

export default Home;
