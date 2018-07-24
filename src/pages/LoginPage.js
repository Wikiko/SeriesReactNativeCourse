import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: '',
            password: ''
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.tryLogin = this.tryLogin.bind(this);
    }

    static navigationOptions = {
        title: 'Bem vindo'
    };

    tryLogin(){
        console.log(this.state);
    }

    onChangeHandler(field) {
        return (value) => {
            this.setState({
                [field]: value
            });
        }
    }

    render() {
        return (
            <View>
                <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder="user@mail.com"
                        value={this.state.mail}
                        onChangeText={this.onChangeHandler('mail')}
                    />
                </FormRow>
                <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder="******"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={this.onChangeHandler('password')}
                    />
                </FormRow>
                <FormRow>
                    <Button
                        title='Entrar'
                        onPress={this.tryLogin}
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