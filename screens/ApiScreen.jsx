import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Loading from '../components/Loading';
import useFetchData from '../hooks/useFetchData';

const API_URL = 'https://fakestoreapi.com/products';

export default function ApiScreen() {
  const { data, loading, error, refetch } = useFetchData(API_URL);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
        <TouchableOpacity style={styles.button} onPress={refetch}>
          <Text style={styles.buttonText}>Reintentar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.content}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card
          image={item.image}
          title={item.title}
          description={item.description}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#F5F5F5',
  },
  content: {
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  error: {
    fontSize: 15,
    color: '#B00020',
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2F5D8A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
