import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

const GameSettings = ({ player1, player2, pointToWin, setPlayer1, setPlayer2, setPointToWin, onStartGame }) => {
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Game Settings</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Player 1 Name"
                value={player1}
                onChangeText={setPlayer1}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Player 2 Name"
                value={player2}
                onChangeText={setPlayer2}
            />
            <TextInput
                style={styles.input}
                placeholder="Point to Win"
                value={pointToWin}
                onChangeText={setPointToWin}
                keyboardType="numeric"
            />
            <View style={styles.buttonContainer}>
                <Button title="Start Game" onPress={onStartGame} />
            </View>
        </View>
    )
}

export default GameSettings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        borderRadius: 8,
    },
    buttonContainer: {
        marginTop: 20,
    },
})
