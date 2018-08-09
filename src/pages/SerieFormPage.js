import React from 'react';
import {
    View,
    TextInput
    , StyleSheet
} from 'react-native';
import FormRow from '../components/FormRow';

const SerieFormPage = props => (
    <View>
        <FormRow first>
            <TextInput
                style={styles.input}
                placeholder="Titulo"
                value=""
                onChangeText={console.log}
            />
        </FormRow>
    </View>
);

SerieFormPage.navigationOptions = {
    title: 'Nova Série'
};

const styles = StyleSheet.create({
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    }
});

export default SerieFormPage;