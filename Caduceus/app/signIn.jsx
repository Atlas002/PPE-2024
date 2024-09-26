import React, { useState } from "react";
import {styles} from './styles.js';


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

const SignUpForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

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
        <Text style={styles.formTitle}>INSCRIPTION</Text>
        <Text style={styles.formSubtitle}>Apprenons à nous connaître</Text>
        
        <Text style={styles.inputLabel}>Nom</Text>
        <TextInput
          style={styles.inputField}
          value={formData.name}
          onChangeText={(text) => handleInputChange('name', text)}
        />

        <Text style={styles.inputLabel}>Prénom</Text>
        <TextInput
          style={styles.inputField}
          value={formData.surname}
          onChangeText={(text) => handleInputChange('surname', text)}
        />

        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.inputField}
          value={formData.email}
          onChangeText={(text) => handleInputChange('email', text)}
          keyboardType="email-address"
          placeholder="exemple@mail.com"
        />

        <Text style={styles.inputLabel}>Téléphone</Text>
        <TextInput
          style={styles.inputField}
          value={formData.phone}
          onChangeText={(text) => handleInputChange('phone', text)}
          keyboardType="numeric"
          placeholder="Numéro de téléphone"
        />

        <Text style={styles.inputLabel}>Mot de passe</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInputField}
            value={formData.password}
            onChangeText={(text) => handleInputChange('password', text)}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <FontAwesome name={passwordVisible ? "eye" : "eye-slash"} size={24} color="black" />
          </TouchableOpacity>
        </View>

        <Text style={styles.inputLabel}>Confirmer le mot de passe</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInputField}
            value={formData.confirmPassword}
            onChangeText={(text) => handleInputChange('confirmPassword', text)}
            secureTextEntry={!confirmPasswordVisible}
          />
          <TouchableOpacity
            onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
          >
            <FontAwesome name={confirmPasswordVisible ? "eye" : "eye-slash"} size={24} color="black" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleFormSubmit}>
          <Text style={styles.submitButtonText}>Envoyer</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpForm;
