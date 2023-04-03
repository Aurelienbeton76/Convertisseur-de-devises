import './styles.scss';


function Currencies({ currencies }) {
  return (
    <div className="currencies">
      <div className="currencies__title">
        Currencies
      </div>
      <ul className="currencies__list">
        {currencies.map((currency) => (
        
          <li className="currencies__list-item" key={currency.name}>
            {currency.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Currencies;
