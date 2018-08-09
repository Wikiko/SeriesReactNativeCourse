import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import SerieCard from '../components/SerieCard';
import { isEven } from '../util';

import series from '../../series.json';
import AddSerieCard from '../components/AddSerieCard';

const SeriesPage = ({ ...props }) => (
    <View>
        <FlatList
            data={[...series, { isLast: true }]}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => (
                item.isLast
                    ? <AddSerieCard
                        isFirstColumn={isEven(index)}
                        onPress={() => props.navigation.navigate('SerieForm')}/>
                    : <SerieCard
                        serie={item}
                        isFirstColumn={isEven(index)}
                        onPress={() => props.navigation.navigate('SerieDetail', { serie: item })}
                    />

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