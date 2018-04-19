import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './src/screens/HomeScreen'
import CardapioScreen from './src/screens/CardapioScreen'
import DetalheItem from './src/screens/DetalheItem'

import { StackNavigator, DrawerNavigator } from 'react-navigation'


const HomeStack = StackNavigator(
  {
    Home: { 
      screen: HomeScreen 
    },
    Cardapio: { 
      screen: CardapioScreen 
    }
  }
)

const CardapioStack = StackNavigator(
  {
    Cardapio: { 
      screen: CardapioScreen 
    },
    Detalhe: {
      screen: DetalheItem
    }
  }
)

const Drawer = DrawerNavigator({
  Home: { 
    screen: HomeStack 
  },
  Cardapio: { 
    screen: CardapioStack 
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Drawer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
