import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SeriesPage = ({ series }) => (
    <View>
        <Text>Essa é a series Page</Text>
    </View>
);

const styles = StyleSheet.create({

});

SeriesPage.navigationOptions = {
    title: ''
};

export default SeriesPage;