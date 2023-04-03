import { useState } from 'react';
import './styles.scss';


interface ICurrency {
  name: string
  rate: number
}


interface CurrenciesProps {
  currencies: ICurrency[]
  onClickCurrency: (currency: ICurrency) => void
}


function Currencies({ currencies, onClickCurrency }: CurrenciesProps) {
  console.log('currencies');

  const [search, setSearch] = useState('');

  const filteredCurrencies = currencies.filter(
    (currency) => currency.name.includes(search),
  );

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearch(newValue);
  };

  return (
    <div className="currencies">
      <input
        className="currencies__search"
        type="search"
        placeholder="Rechercher une currency"
        value={search}
        onChange={handleChangeSearch}
      />
      <ul className="currencies__list">
        {filteredCurrencies.map((currency) => (

          <li
            className="currencies__list-item"
            key={currency.name}
          >
            <button
              type="button"
              className="currencies__list-item-btn"
  
              onClick={() => onClickCurrency(currency)}
            >
              {currency.name}
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default Currencies;


