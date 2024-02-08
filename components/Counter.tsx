import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };

  return (
    <>
      <View style={styles.box}>
        <Text style={styles.titleText}>This is My Counter</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.numberText}>{count}</Text>
      </View>
      <View style={styles.box}>
        <TouchableOpacity style={styles.buttonMinus} onPress={handleMinus} disabled={count === 0}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonPlus} onPress={handleAdd} disabled={count === 10}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  titleText: {
    fontSize: 30,
    fontWeight: '800',
  },
  numberText: {
    fontSize: 100,
    fontWeight: '800',
    color: '#33691e',
  },
  buttonMinus: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ffa726',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPlus: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4fc3f7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 50,
    fontWeight: '800',
    paddingBottom: 3,
  },
});
