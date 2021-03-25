import { useState } from 'react';
import biathletes from '../constants/biathletes';
import style from '../styles/Table.module.css';

const Table = () => {
  const [sortedField, setSortedField] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = e => {
    const value = e.target.value;
    setSearchTerm(prev => value);
  };

  let filteredBiathlets = biathletes.filter(biathlet =>
    biathlet.name.includes(searchTerm.toLowerCase())
  );

  filteredBiathlets.forEach(item => (item.name = item.name.toLowerCase()));

  if (sortedField !== null) {
    filteredBiathlets.sort((a, b) => {
      if (a[sortedField] < b[sortedField]) {
        return -1;
      }
      if (a[sortedField] > b[sortedField]) {
        return 1;
      }
      return 0;
    });
  }

  return (
    <div>
      <input type="text" onChange={e => handleChange(e)} />
      <table>
        <caption>Результаты</caption>
        <thead>
          <tr>
            <th>
              <button type="button" onClick={() => setSortedField('place')}>
                Место
              </button>
            </th>
            <th>
              {' '}
              <button type="button" onClick={() => setSortedField('name')}>
                Имя
              </button>
            </th>
            <th>
              {' '}
              <button type="button" onClick={() => setSortedField('accuracy')}>
                Попадания
              </button>
            </th>
            <th>
              {' '}
              <button type="button" onClick={() => setSortedField('shooting')}>
                Скорострельность
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredBiathlets.map(biathlet => (
            <tr key={biathlet.id}>
              <td className={style.table_item}>{biathlet.place}</td>
              <td className={style.table_item_name}>{biathlet.name}</td>
              <td className={style.table_item}>{biathlet.accuracy}</td>
              <td className={style.table_item}>{biathlet.shooting}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
