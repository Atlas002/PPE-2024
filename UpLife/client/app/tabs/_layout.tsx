import { Link, Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, Text } from 'react-native';

export default function TabLayout() {
  return (
    <View style={styles.container}>
      {/* Liens "Sign In" et "Sign Up" en haut */}
      <View style={styles.linkContainer}>
        <Link href="/login" style={styles.link}>
          <Text style={styles.linkText}>Sign In</Text>
        </Link>
        <Link href="/signup" style={styles.link}>
          <Text style={styles.linkText}>Sign Up</Text>
        </Link>
      </View>

      {/* Onglets (Tabs) en dessous */}
      <Tabs
        screenOptions={{
          headerShown: false, // Supprime le header par défaut
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Accueil',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Explorer',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  link: {
    marginHorizontal: 10,
  },
  linkText: {
    fontSize: 16,
    color: 'blue',
  },
});
