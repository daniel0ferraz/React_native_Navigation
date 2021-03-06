import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import useProdutores from './src/hooks/useProdutores';

import Home from './src/telas/Home';
import Cesta from './src/telas/Cesta';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  const produtores = useProdutores(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />

      <NavigationContainer>
        <Home melhoresProdutores={false} />
        {/* {produtores.length > 0 && (
        <Cesta
          produtor={{
            nome: produtores[0].nome,
            imagem: produtores[0].imagem,
          }}
          {...produtores[0].cestas[0]}
        />
      )} */}
      </NavigationContainer>
    </SafeAreaView>
  );
}
