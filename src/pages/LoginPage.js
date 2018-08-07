import React from 'react';
import {
    View, Button,
    TextInput, StyleSheet,
    Text, ActivityIndicator,
    Alert
} from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import FormRow from '../components/FormRow';
import { tryLogin } from '../actions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: '',
            password: '',
            message: '',
            isLoading: false
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.tryLogin = this.tryLogin.bind(this);
    }

    static navigationOptions = {
        title: 'Bem vindo'
    };

    componentDidMount() {
        const config = {
            apiKey: "AIzaSyAQm-h2FdciAMZYyMXo7BDukxdr7x0kjOs",
            authDomain: "series-react-native-course.firebaseapp.com",
            databaseURL: "https://series-react-native-course.firebaseio.com",
            projectId: "series-react-native-course",
            storageBucket: "series-react-native-course.appspot.com",
            messagingSenderId: "235332075887"
        };
        firebase.initializeApp(config);
    }

    getMessageByErrorCode(errorCode) {
        console.log(errorCode);
        switch (errorCode) {
            case 'auth/invalid-email':
                return 'E-mail Invalido';
            case 'auth/user-disabled':
                return 'Usuário desabilitado';
            case 'auth/wrong-password':
                return 'Senha incorreta';
            case 'auth/user-not-found':
                return 'Usuário não encontrado';
            default:
                return 'Erro desconhecido';
        }
    }

    tryLogin() {
        this.setState({ isLoading: true });
        const { mail: email, password } = this.state;
        this.props.tryLogin({ email, password })
            .then(user => {
                if (user) {
                    return this.props.navigation.replace('Main');
                }
                this.setState({
                    isLoading: false,
                    message: ''
                });
            })
            .catch(error => {
                this.setState({
                    isLoading: false,
                    message: this.getMessageByErrorCode(error.code)
                });
            });
    }

    onChangeHandler(field) {
        return (value) => {
            this.setState({
                [field]: value
            });
        }
    }

    renderButton() {
        if (this.state.isLoading) {
            return <ActivityIndicator />
        }
        return (
            <Button
                title='Entrar'
                onPress={this.tryLogin}
            />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <FormRow first>
                    <TextInput
                        style={styles.input}
                        placeholder="user@mail.com"
                        value={this.state.mail}
                        onChangeText={this.onChangeHandler('mail')}
                    />
                </FormRow>
                <FormRow last>
                    <TextInput
                        style={styles.input}
                        placeholder="******"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={this.onChangeHandler('password')}
                    />
                </FormRow>
                {this.renderButton()}
                <Text>{this.state.message}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10
    },
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    }
});

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    tryLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);