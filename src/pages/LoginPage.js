import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component {
    static navigationOptions = {
        title: 'Bem vindo'
    };

    render() {
        return (
            <View>
                <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder="user@mail.com"
                    />
                </FormRow>
                <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder="******"
                        secureTextEntry
                    />
                </FormRow>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    }
});