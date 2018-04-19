import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class HomeScreen extends React.Component {
    render() {
        return(
            <View>
                <Text>HomeScreen</Text>
                <Text>HomeScreen</Text>
                <Text>HomeScreen</Text>
                <Text>HomeScreen</Text>
                <Text>HomeScreen</Text>

                <Button
                title="Cardapio"
                onPress={() => this.props.navigation.navigate('Cardapio')}
                />
            </View>
        )
    }
}

export default HomeScreen;
