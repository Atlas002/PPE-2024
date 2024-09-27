/*
import React, { useState } from "react";
import {styles} from './styles.js';
import { useRouter } from 'expo-router'; // Import useRouter for navigation

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  });
  const [menuVisible, setMenuVisible] = useState(false);
  const router = useRouter(); // Initialize the router for navigation

  const navigateToPage = (url) => {
    if (menuVisible) {
      toggleMenu();
    }
    router.push(url);
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleFormSubmit = () => {
    // Logique d'envoi des données vers la base de données à implémenter
    console.log(formData);
  };

  return (
    <KeyboardAvoidingView
      style={styles.formContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.formTitle}>CONNEXION</Text>
        <Text style={styles.formSubtitle}>Heureux de vous revoir</Text>
        
        <Text style={styles.inputLabel}>Adresse Email ou Identifiant</Text>
        <TextInput
          style={styles.inputField}
          value={formData.identifier}
          onChangeText={(text) => handleInputChange('identifier', text)}
          keyboardType="default"
          placeholder="Email ou Identifiant"
        />

        <Text style={styles.inputLabel}>Mot de passe</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInputField}
            value={formData.password}
            onChangeText={(text) => handleInputChange('password', text)}
            secureTextEntry={!passwordVisible}
            
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <FontAwesome name={passwordVisible ? "eye" : "eye-slash"} size={24} color="black" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleFormSubmit}>
          <Text style={styles.submitButtonText}>Connexion</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;
*/


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const [prenom, setPrenom] = useState('');

  useEffect(() => {
    fetch('http://sql104.infinityfree.com:3306/user/1')
      .then((response) => response.json())
      .then((data) => {
        if (data.Prenom) {
          setPrenom(data.Prenom);
        } else {
          setPrenom('Utilisateur non trouvé');
        }
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
        setPrenom('Erreur de chargement');
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Prénom de l'utilisateur: {prenom}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});