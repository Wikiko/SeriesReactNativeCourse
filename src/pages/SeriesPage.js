import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SeriesPage = ({ series, ...props }) => (
    <View>
        <Text>SeriesPage</Text>
    </View>
);

const styles = StyleSheet.create({

});

SeriesPage.navigationOptions = {
    title: 'Series'
};

export default SeriesPage;
