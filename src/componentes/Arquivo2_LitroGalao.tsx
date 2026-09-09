import React from 'react';
import ConverterCard from './ConverterCard';

export default function Arquivo2_LitroGalao() {
  const litroParaGalao = (litros: number) => litros / 3.78541;
  const galaoParaLitro = (galoes: number) => galoes * 3.78541;

  return (
    <ConverterCard emoji="🛢️" title="Volume (Litro ↔ Galão Americano)" unitFrom="Litros" unitTo="Galões (US)"
      color="#10B981" toRight={litroParaGalao} toLeft={galaoParaLitro} />
  );
}