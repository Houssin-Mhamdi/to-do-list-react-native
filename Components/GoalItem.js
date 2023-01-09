import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
export default function GoalItem({ text, onDeleted, id }) {
    return (
        <View style={styles.lists}>
            <Pressable
                android_ripple={{ color: '#EEEEEE' }}
                onPress={onDeleted.bind(this, id)}>
                <Text style={styles.texte}>{text}</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    lists: {
        marginLeft: 0,
        fontSize: 20,
        marginTop: 10,
        backgroundColor: 'purple',

        borderRadius: 10,
    },
    texte: {
        padding: 10,
        color: 'white',

    }


})