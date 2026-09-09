import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

type ConverterCardProps = {
  emoji: string;
  title: string;
  unitFrom: string;
  unitTo: string;
  color: string;
  toRight: (value: number) => number;
  toLeft: (value: number) => number;
};

export default function ConverterCard({
  emoji,
  title,
  unitFrom,
  unitTo,
  color,
  toRight,
  toLeft,
}: ConverterCardProps) {
  const [invertido, setInvertido] = useState(false);
  const [valor, setValor] = useState('');

  const unidadeEntrada = invertido ? unitTo : unitFrom;
  const unidadeSaida = invertido ? unitFrom : unitTo;

  const numero = parseFloat(valor.replace(',', '.'));
  let resultado = '';
  if (!isNaN(numero)) {
    const calculado = invertido ? toLeft(numero) : toRight(numero);
    resultado = calculado.toFixed(2);
  }

  const inverter = () => {
    setInvertido(!invertido);
    setValor('');
  };

  return (
    <View style={[styles.card, { borderColor: color }]}>
      <View style={styles.headerRow}>
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.conversionRow}>
        <View style={styles.inputBlock}>
          <Text style={styles.label}>{unidadeEntrada}</Text>
          <TextInput
            style={[styles.input, { borderColor: color }]}
            keyboardType="numeric"
            placeholder="0"
            value={valor}
            onChangeText={setValor}
          />
        </View>

        <TouchableOpacity style={[styles.swapButton, { backgroundColor: color }]} onPress={inverter}>
          <Text style={styles.swapText}>⇄</Text>
        </TouchableOpacity>

        <View style={styles.inputBlock}>
          <Text style={styles.label}>{unidadeSaida}</Text>
          <View style={[styles.resultBox, { borderColor: color }]}>
            <Text style={styles.resultText}>{resultado || '0'}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 16, padding: 16, marginBottom: 16, borderWidth: 2,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 14 },
  emoji: { fontSize: 24, marginRight: 8 },
  title: { fontSize: 18, fontWeight: '700', color: '#2b2b2b' },
  conversionRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  inputBlock: { flex: 1 },
  label: { fontSize: 13, color: '#666', marginBottom: 6, fontWeight: '600' },
  input: { borderWidth: 1.5, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 10, fontSize: 16, backgroundColor: '#fafafa' },
  resultBox: { borderWidth: 1.5, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 10, backgroundColor: '#f0f0f0' },
  resultText: { fontSize: 16, fontWeight: '600', color: '#333' },
  swapButton: { width: 38, height: 38, borderRadius: 19, alignItems: 'center', justifyContent: 'center', marginHorizontal: 8, marginTop: 18 },
  swapText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});