import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native';

import Arquivo1_KmhMph from '../componentes/Arquivo1_KmhMph';
import Arquivo2_LitroGalao from '../componentes/Arquivo2_LitroGalao';
import Arquivo3_CelsiusFahrenheit from '../componentes/Arquivo3_CelsiusFahrenheit';
import Arquivo4_MetrosPolegadas from '../componentes/Arquivo4_MetrosPolegadas';

export default function Index() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}> Conversor de Medidas</Text>
          <Text style={styles.headerSubtitle}>
            Digite um valor e toque em ⇄ para inverter a conversão
          </Text>
        </View>

        <Arquivo1_KmhMph />
        <Arquivo2_LitroGalao />
        <Arquivo3_CelsiusFahrenheit />
        <Arquivo4_MetrosPolegadas />

        <Text style={styles.footer}>Atividade Prática 4.1 • React Native</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F3F4F6' },
  container: { padding: 16, paddingBottom: 32 },
  header: { marginBottom: 20, marginTop: 10, alignItems: 'center' },
  headerTitle: { fontSize: 26, fontWeight: '800', color: '#1F2937' },
  headerSubtitle: { fontSize: 13, color: '#6B7280', marginTop: 4, textAlign: 'center' },
  footer: { textAlign: 'center', color: '#9CA3AF', fontSize: 12, marginTop: 12 },
});