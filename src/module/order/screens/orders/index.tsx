import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { localizedStrings } from '../../../../localization';

const Orders = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{localizedStrings.this_is_demo}</Text>
        </View>
    );
};

export default Orders;
