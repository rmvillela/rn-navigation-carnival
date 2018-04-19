import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class CardapioScreen extends React.Component {
    render() {
        return(
            <View>
                <Text>CardapioScreen</Text>
                <Text>CardapioScreen</Text>
                <Text>CardapioScreen</Text>
                <Text>CardapioScreen</Text>
                <Text>CardapioScreen</Text>

                <Button
                title="Detalhe"
                onPress={() => this.props.navigation.navigate('Detalhe')}
                />
            </View>
        )
    }
}

export default CardapioScreen;