import React from 'react';
import {
    View, Button, TextInput,
    Text, ActivityIndicator, StyleSheet,
    Alert
} from 'react-native';
import firebase from 'firebase';
import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component {
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
        switch (errorCode) {
            case 'auth/wrong-password':
                return 'Senha incorreta';
            case 'auth/invalid-email':
                return 'E-mail de usuário invalido';
            case 'auth/user-not-found':
                return 'Usuário não encontrado';
            case 'auth/user-disabled':
                return 'Usuário desabilitado';
            default:
                return 'Erro desconhecido';
        }
    }

    tryLogin() {
        this.setState({
            isLoading: true,
            message: ''
        });
        const { mail, password } = this.state;

        const loginUserSuccess = user => this.setState({ message: 'Sucesso' });

        const loginUserFailed = error => this.setState({ message: this.getMessageByErrorCode(error.code) });

        firebase
            .auth()
            .signInWithEmailAndPassword(mail, password)
            .then(loginUserSuccess)
            .catch(error => {
                if (error.code === 'auth/user-not-found') {
                    return Alert.alert(
                        'Usuário não encontrado',
                        'Deseja criar um cadastro com as informações inseridas?',
                        [{
                            text: 'Não',
                            style: 'cancel'
                        }, {
                            text: 'Sim',
                            onPress: () => {
                                const { mail, password } = this.state;
                                firebase
                                    .auth()
                                    .createUserWithEmailAndPassword(mail, password)
                                    .then(loginUserSuccess)
                                    .catch(loginUserFailed);
                            }
                        }],
                        { cancelable: false }
                    );
                }
                return loginUserFailed(error);
            })
            .then(() => this.setState({ isLoading: false }));
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

    renderMessage() {
        const { message } = this.state;
        if (!message) {
            return null;
        }
        return (
            <View>
                <Text>{message}</Text>
            </View>
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
                {this.renderMessage()}
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