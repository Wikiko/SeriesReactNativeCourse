import firebase from 'firebase';
import { Alert } from 'react-native';
import { resolve } from 'url';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN';

const userLoginSuccess = user => ({
    type: USER_LOGIN_SUCCESS,
    user
});

export const USER_LOGOUT = 'USER_LOGOUT';

const userLogout = () => ({
    type: USER_LOGOUT
});

export const tryLogin = ({ email, password }) => dispatch => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch(userLoginSuccess(user));
            return user;
        })
        .catch(error => {
            if (error.code === 'auth/user-not-found') {
                return new Promise((resolve, reject) => {
                    Alert.alert(
                        'Usuário não encontrado',
                        'Deseja criar um cadastro com as infromações inseridas?',
                        [{
                            text: 'Não',
                            onPress: () => resolve(),
                            style: 'cancel'
                        }, {
                            text: 'Sim',
                            onPress: () => {
                                firebase
                                    .auth()
                                    .createUserWithEmailAndPassword(email, password)
                                    .then(user => {
                                        dispatch(userLoginSuccess(user));
                                        return user;
                                    })
                                    .then(resolve)
                                    .catch(reject);
                            }
                        }],
                        { cancelable: false }
                    );
                });
            }
            return Promise.reject(error);
        });
}