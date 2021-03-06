import React from 'react';
import { ScrollView, Text, StyleSheet, Image } from 'react-native';
import Line from '../components/Line';
import LongText from '../components/LongText';

export default class SerieDetailPage extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { serie } = navigation.state.params;
        return {
            title: serie.title
        };
    }

    render() {
        const { serie } = this.props.navigation.state.params;
        return (
            <ScrollView>
                <Image
                    style={styles.image}
                    source={{
                        uri: serie.img
                    }}
                />
                <Line label="Titulo" content={serie.title} />
                <Line label="Gênero" content={serie.gender} />
                <Line label="Nota" content={serie.rate} />
                <LongText label="Descrição" content={serie.description} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
        resizeMode: "contain"
    }
});