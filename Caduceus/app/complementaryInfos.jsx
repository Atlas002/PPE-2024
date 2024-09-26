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
  Platform,
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const AdditionalInfoForm = () => {
  const [formData, setFormData] = useState({
    birthDate: '',
    gender: '',
    weight: '',
    height: '',
    additionalInfo: ''
  });
  
  const [isGenderDropdownOpen, setGenderDropdownOpen] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleGenderSelect = (gender) => {
    handleInputChange('gender', gender);
    setGenderDropdownOpen(false);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
    handleInputChange('birthDate', currentDate.toLocaleDateString('fr-FR')); // Formatage de la date
  };

  const handleSubmit = () => {
    // Logique d'envoi des données vers la base de données à implémenter
    console.log(formData);
  };

  return (
    <KeyboardAvoidingView
      style={styles.formContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.formTitle}>VOS INFORMATIONS</Text>

        <Text style={styles.inputLabel}>Date de naissance</Text>
        <View style={styles.inputWithIconCompPage}>
          <TextInput
            style={styles.inputFieldCompPage}
            value={formData.birthDate}
            editable={false} // Désactiver la saisie manuelle
            placeholder="JJ/MM/AAAA"
          />
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <FontAwesome name="calendar" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <Text style={styles.inputLabel}>Sexe</Text>
        <TouchableOpacity 
          style={styles.genderDropdownCompPage} 
          onPress={() => setGenderDropdownOpen(!isGenderDropdownOpen)}
        >
          <Text style={styles.dropdownTextCompPage}>
            {formData.gender || "Sélectionner"}
          </Text>
          <FontAwesome name={isGenderDropdownOpen ? "chevron-up" : "chevron-down"} size={24} />
        </TouchableOpacity>
        {isGenderDropdownOpen && (
          <View style={styles.dropdownMenuCompPage}>
            <TouchableOpacity onPress={() => handleGenderSelect("Homme")}>
              <Text style={styles.dropdownItemCompPage}>Homme</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleGenderSelect("Femme")}>
              <Text style={styles.dropdownItemCompPage}>Femme</Text>
            </TouchableOpacity>
          </View>
        )}

        <Text style={styles.inputLabel}>Poids</Text>
        <View style={styles.inputWithUnitCompPage}>
          <TextInput
            style={styles.inputFieldCompPage}
            value={formData.weight}
            onChangeText={(text) => handleInputChange('weight', text)}
            placeholder="Poids"
            keyboardType="numeric"
          />
          <Text style={styles.unitTextCompPage}>kg</Text>
        </View>

        <Text style={styles.inputLabel}>Taille</Text>
        <View style={styles.inputWithUnitCompPage}>
          <TextInput
            style={styles.inputFieldCompPage}
            value={formData.height}
            onChangeText={(text) => handleInputChange('height', text)}
            placeholder="Taille"
            keyboardType="numeric"
          />
          <Text style={styles.unitTextCompPage}>cm</Text>
        </View>

        <Text style={styles.inputLabel}>Informations complémentaires</Text>
        <TouchableOpacity style={styles.addButtonCompPage}>
          <Text style={styles.addButtonTextCompPage}>Ajouter</Text>
        </TouchableOpacity>

        <Text style={styles.footerNoteCompPage}>
          * Vous pouvez configurer ces informations plus tard dans Mon Profil
        </Text>

        <TouchableOpacity style={styles.submitButtonCompPage} onPress={handleSubmit}>
          <Text style={styles.submitButtonTextCompPage}>Envoyer</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AdditionalInfoForm;