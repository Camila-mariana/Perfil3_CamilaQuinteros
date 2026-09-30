import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Reemplaza estos datos con tu información personal.
const estudiante = {
  nombre: 'Camila Mariana Quinteros Gomez',
  carnet: '20240059',
  seccion: 'Sección B',
  grupo: 'Grupo 1',
};

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Información del estudiante</Text>

        <Text style={styles.label}>Nombre</Text>
        <Text style={styles.value}>{estudiante.nombre}</Text>

        <Text style={styles.label}>Carnet</Text>
        <Text style={styles.value}>{estudiante.carnet}</Text>

        <Text style={styles.label}>Sección y grupo</Text>
        <Text style={styles.value}>
          {estudiante.seccion} - {estudiante.grupo}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Api')}
      >
        <Text style={styles.buttonText}>Ver productos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: 20,
    marginBottom: 24,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2F5D8A',
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    color: '#777777',
    marginTop: 8,
  },
  value: {
    fontSize: 17,
    color: '#222222',
  },
  button: {
    backgroundColor: '#2F5D8A',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
