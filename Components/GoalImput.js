import React, { useState } from 'react';
import {
    Button, StyleSheet,
    TextInput, View
} from 'react-native';
export default function GoalImput(props) {
    const [textImput, setTextImput] = useState()
    function addTextHandler(enterdText) {
        setTextImput(enterdText)
    }
    function addGoleText() {
        props.addGoleText(textImput)
        setTextImput('')
    }
    return (
        <>
            <View style={styles.disign}>
                <TextInput
                    style={styles.input}
                    onChangeText={addTextHandler}
                    value={textImput}
                />

                <Button title="Add To Do" onPress={addGoleText} />
            </View>
        </>
    )
}
const styles = StyleSheet.create({

    input: {
        height: 50,
        width: '70%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    disign: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

        paddingBottom: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },

})