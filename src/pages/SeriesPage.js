import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import SerieCard from '../components/SerieCard';
import { isOdd } from '../util';

import series from '../../series.json';

const SeriesPage = ({ ...props }) => (
    <View>
        <FlatList
            data={series}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item, index }) => (
                <SerieCard serie={item} isFirstColumn={isOdd(index)} />
            )}
            numColumns={2}
            ListHeaderComponent={props => (<View style={styles.marginTop} />)}
            ListFooterComponent={props => (<View style={styles.marginBottom} />)}
        />
    </View>
);

const styles = StyleSheet.create({
    marginTop: {
        marginTop: 5
    },
    marginBottom: {
        marginBottom: 5
    }
});

SeriesPage.navigationOptions = {
    title: 'Series',
};

export default SeriesPage;