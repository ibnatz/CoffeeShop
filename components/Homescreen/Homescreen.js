// components/HomeScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Alert } from 'react-native';

const coffeeBeans = [
  { id: '1', name: 'Arabica' },
  { id: '2', name: 'Robusta' },
  { id: '3', name: 'Liberica' },
  { id: '4', name: 'Excelsa' },
];

const coffeeDrinks = [
  { id: '5', name: 'Espresso' },
  { id: '6', name: 'Cappuccino' },
  { id: '7', name: 'Latte' },
  { id: '8', name: 'Americano' },
  { id: '9', name: 'Mocha' },
];

const renderItem = (item) => (
  <View style={styles.card}>
    <Text style={styles.itemName}>{item.name}</Text>
    <View style={styles.buttonRow}>
      <Button title="Add to Cart" onPress={() => Alert.alert('Cart', `${item.name} added to cart!`)} />
      <Button title="❤️ Favorite" color="tomato" onPress={() => Alert.alert('Favorites', `${item.name} favorited!`)} />
    </View>
  </View>
);

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Coffee Beans</Text>
      <FlatList
        data={coffeeBeans}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderItem(item)}
      />
      <Text style={styles.header}>Coffee Drinks</Text>
      <FlatList
        data={coffeeDrinks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderItem(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#4B3832',
  },
  card: {
    backgroundColor: '#F3F3F3',
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 2,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
