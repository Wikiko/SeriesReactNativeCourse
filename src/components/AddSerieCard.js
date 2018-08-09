import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';

// O componente funciona com isFirst column para quando
// é primeira ou segunda coluna. Por exemplo se for uma lista com mais de 2
// colunas não funcionaria.
const AddSerieCard = ({ serie, isFirstColumn, onPress }) => (
    <TouchableOpacity style={[
        styles.container,
        isFirstColumn ? styles.firstColumn : styles.lastColumn
    ]}
    onPress={onPress}>
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={require('../../resources/add.png')}
            />
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        // solução 1 para o problema de numero impar de itens na FlatList com 2 columns.
        width: '50%',
        // solucao 2 com flex sem padding e margin no componente filho
        // flex: .5,
        padding: 5,
        height: Dimensions.get('window').width / 2,
    },
    card: {
        flex: 1,
        borderWidth: 1,
        // solucao 2.
        // margin: 10
    },
    firstColumn: {
        paddingLeft: 10
    },
    lastColumn: {
        paddingRight: 10
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

export default AddSerieCard;