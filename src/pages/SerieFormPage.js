import React from 'react';
import {
    View,
    TextInput
    , StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import FormRow from '../components/FormRow';
import { setField } from '../actions';

const SerieFormPage = ({ title, gender, rate, img, description, setField }) => (
    <View>
        <FormRow first>
            <TextInput
                style={styles.input}
                placeholder="Titulo"
                value={title}
                onChangeText={value => setField('title', value)}
            />
        </FormRow>
        <FormRow>
            <TextInput
                style={styles.input}
                placeholder="URL da Imagem"
                value={img}
                onChangeText={value => setField('img', value)}
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

const mapStateToProps = state => state.serieForm;

const mapDispatchToProps = {
    setField
};

export default connect(mapStateToProps, mapDispatchToProps)(SerieFormPage);