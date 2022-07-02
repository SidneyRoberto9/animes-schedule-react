import { useState } from 'react';

import { useJikan } from '../../hooks/useJikan';
import { Container } from './style';

export function Filter() {
  const { jikanBase, filterAnime } = useJikan();
  const [year, setYear] = useState('');
  const [premiered, setPremiered] = useState('');

  function filtrar() {
    filterAnime({ year, premiered });
  }

  const selectPremier = [
    { pt: 'Primavera', en: 'Spring' },
    { pt: 'Outono', en: 'Fall' },
    { pt: 'Inverno', en: 'Winter' },
    { pt: 'Verão', en: 'Summer' },
  ];
  const selectYear = [];
  for (let year = new Date().getFullYear(); year !== 1990; year--) {
    selectYear.push(year);
  }

  return (
    <Container>
      <select
        name='year'
        id='year'
        onChange={(e) => setYear(e.target.value)}
        defaultValue={'DEFAULT'}>
        {selectYear.map((row) => (
          <option key={row} value={row}>
            {row}
          </option>
        ))}
        <option hidden value='DEFAULT'>
          Escolha...
        </option>
      </select>

      <select
        name='season'
        id='season'
        onChange={(e) => setPremiered(e.target.value)}
        defaultValue={'DEFAULT'}>
        {selectPremier.map((season) => (
          <option key={season.en} value={season.en}>
            {season.pt}
          </option>
        ))}
        <option hidden value='DEFAULT'>
          Escolha...
        </option>
      </select>

      <button onClick={filtrar}> Aplicar </button>
      <button onClick={jikanBase}> Remover </button>
    </Container>
  );
}
