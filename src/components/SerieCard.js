import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native';

// O componente funciona com isFirst column para quando
// é primeira ou segunda coluna. Por exemplo se for uma lista com mais de 2
// colunas não funcionaria.
const SerieCard = ({ serie, isFirstColumn }) => (
    <View style={[
        styles.container,
        isFirstColumn ? styles.firstColumn : styles.lastColumn
    ]}>
        <View style={styles.card}>
            <Image
                source={{ uri: serie.img }}
                aspectRatio={1}
                resizeMode="cover"
            />
            <View style={styles.cardTitleWrapper}>
                <Text style={styles.cardTitle}>{serie.title}</Text>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        // solução 1 para o problema de numero impar de itens na FlatList com 2 columns.
        width: '50%',
        // solucao 2 com flex sem padding e margin no componente filho
        // flex: .5,
        padding: 5,
        height: Dimensions.get('window').width / 2,
        // borderWidth: 1,
        // borderColor: 'blue'
    },
    card: {
        flex: 1,
        borderWidth: 1,
        // solucao 2.
        // margin: 10
    },
    cardTitleWrapper: {
        backgroundColor: 'black',
        height: 50,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        opacity: .8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardTitle: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    firstColumn: {
        paddingLeft: 10
    },
    lastColumn: {
        paddingRight: 10
    }
});

export default SerieCard;