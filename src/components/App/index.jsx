/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import Amount from '../Amount';
import Currencies from '../Currencies';
import Header from '../Header';
import currencies from '../../data/currencies';
import './styles.scss';
import Toggler from '../Toggler';

class App extends Component {
 
  constructor(props) {
    super(props);


    this.state = {
      baseAmount: 1,
      open: false,

      currency: currencies[0],
    };
  }

  handleClickCurrency(currencyClicked) {
    this.setState({
      currency: currencyClicked,
    });
  }

  toggle() {

    const { open } = this.state;

    this.setState({
      open: !open,
    });
  }


  render() {

    const { open, baseAmount, currency } = this.state;
    return (
      <div className="app">
        {/* Équivalent à {Header({ baseAmount: 50 })} */}
        <Header baseAmount={baseAmount} />
        {/* Affichage conditionnel, si open === true => currencies va s'afficher,
        sinon il sera retirer du DOM */}
        <Toggler
      
          onClickToggle={() => this.toggle()}
          open={open}
        />
        {open && (
        <Currencies
          currencies={currencies}
          onClickCurrency={(currencyClicked) => this.handleClickCurrency(currencyClicked)}
        />
        )}
        <Amount
          value={currency.rate}
   
          currency={currency.name}
        />
      </div>
    );
  }
}

export default App;
