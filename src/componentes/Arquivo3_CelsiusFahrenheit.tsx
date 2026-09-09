import React from 'react';
import ConverterCard from './ConverterCard';

export default function Arquivo3_CelsiusFahrenheit() {
  const celsiusParaFahrenheit = (c: number) => (c * 9) / 5 + 32;
  const fahrenheitParaCelsius = (f: number) => ((f - 32) * 5) / 9;

  return (
    <ConverterCard emoji="🌡️" title="Temperatura (°C ↔ °F)" unitFrom="°C" unitTo="°F"
      color="#EF4444" toRight={celsiusParaFahrenheit} toLeft={fahrenheitParaCelsius} />
  );
}