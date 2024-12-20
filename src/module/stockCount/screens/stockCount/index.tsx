import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/store';
import { increment, decrement } from '../../../../redux/slices/counterSlice';

const StockCount = () => {
    const dispatch = useDispatch<AppDispatch>();
    const value = useSelector((state: RootState) => state.counterReducer.value);

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Counting Example</Text>
            <Text style={styles.title}>Counter: {value}</Text>
            <Button title="Increment" onPress={handleIncrement} />
            <Button title="Decrement" onPress={handleDecrement} />
        </View>
    );
};

export default StockCount;
