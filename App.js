import React, { useState }  from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('green');

  const colors = ['green', 'blue', 'brown', 'yellow', 'red', 'black'];

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {colors.map((color) => (
        <TouchableOpacity
          key={color}
          style={[styles.button, { backgroundColor: color }]}
          onPress={() => setBackgroundColor(color)}
        >
          <Text style={styles.buttonText}>{color.toUpperCase()}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 15,
    width: '80%',
    marginVertical: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;