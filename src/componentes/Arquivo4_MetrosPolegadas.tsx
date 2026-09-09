import React from 'react';
import ConverterCard from './ConverterCard';

export default function Arquivo4_MetrosPolegadas() {
  const metrosParaPolegadas = (m: number) => m / 0.0254;
  const polegadasParaMetros = (inch: number) => inch * 0.0254;

  return (
    <ConverterCard emoji="📏" title="Comprimento (m ↔ in)" unitFrom="Metros" unitTo="Polegadas"
      color="#A855F7" toRight={metrosParaPolegadas} toLeft={polegadasParaMetros} />
  );
}