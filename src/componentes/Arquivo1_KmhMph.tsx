import React from 'react';
import ConverterCard from './ConverterCard';

export default function Arquivo1_KmhMph() {
  const kmhParaMph = (kmh: number) => kmh / 1.60934;
  const mphParaKmh = (mph: number) => mph * 1.60934;

  return (
    <ConverterCard emoji="🚗" title="Velocidade (km/h ↔ mph)" unitFrom="km/h" unitTo="mph"
      color="#3B82F6" toRight={kmhParaMph} toLeft={mphParaKmh} />
  );
}