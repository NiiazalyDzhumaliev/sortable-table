import { useState } from 'react';
import style from '../styles/Table.module.css';

const Table = () => {
  const [sortedField, setSortedField] = useState(null);

  const biathletes = [
    {
      id: 1,
      name: 'Эндре Стрёмсхайм',
      place: 1,
      accuracy: 89,
      shooting: 23.5,
    },
    {
      id: 2,
      name: 'Якко Олави Ранта',
      place: 2,
      accuracy: 94,
      shooting: 24.6,
    },

    {
      id: 3,
      name: 'Габриэл Стегмайр',
      place: 3,
      accuracy: 92.1,
      shooting: 25.1,
    },
    {
      id: 4,
      name: 'Антон Бабиков',
      place: 4,
      accuracy: 85,
      shooting: 24,
    },
    {
      id: 5,
      name: 'Миха Довжан',
      place: 5,
      accuracy: 92.4,
      shooting: 24.9,
    },
    {
      id: 6,
      name: 'Томмазо Джакомел',
      place: 6,
      accuracy: 91.5,
      shooting: 28.2,
    },
    {
      id: 7,
      name: 'Скотт Гоу',
      place: 7,
      accuracy: 84.5,
      shooting: 30.2,
    },
    {
      id: 8,
      name: 'Алекс Чисар',
      place: 8,
      accuracy: 97.5,
      shooting: 35.2,
    },
    {
      id: 9,
      name: 'Айдан Миллар',
      place: 9,
      accuracy: 91.2,
      shooting: 31.9,
    },
    {
      id: 10,
      name: 'Александер-Фьелд Андерсен',
      place: 10,
      accuracy: 84.2,
      shooting: 28.9,
    },
  ];

  let sortedBiathletes = [...biathletes];

  sortedBiathletes.forEach(item => (item.name = item.name.toLowerCase()));

  if (sortedField !== null) {
    sortedBiathletes.sort((a, b) => {
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
        {sortedBiathletes.map(biathlet => (
          <tr key={biathlet.id}>
            <td className={style.table_item}>{biathlet.place}</td>
            <td className={style.table_item_name}>{biathlet.name}</td>
            <td className={style.table_item}>{biathlet.accuracy}</td>
            <td className={style.table_item}>{biathlet.shooting}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
