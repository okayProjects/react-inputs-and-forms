import React, { Component } from 'react';
import './App.css';
import Cash from './Cash';

class App extends Component {

  state = {
    amount: '',
    product: 'electricity'
  }

  static defaultProps = {
    currencies: [
      { id: 0, name: 'zloty', ratio: 1, title: 'Wartość w PLN' },
      { id: 1, name: 'dollar', ratio: 3.65, title: 'Wartość w USD' },
      { id: 2, name: 'euro', ratio: 4.3, title: 'Wartość w Euro' },
      { id: 3, name: 'pund', ratio: 4.72, title: 'Wartość w GBP' },
    ],
    prices: { electricity: .55, gas: 4.79, oranges: 5.5 }
  }


  valueChangeHandler = (e) => {
    this.setState({
      amount: e.target.value
    })
  }

  selectHandler = (e) => {
    this.setState({
      product: e.target.value,
      amount: ''
    })
  }

  insertSuffix = (select) => {
    if (select === 'electricity') {
      return <em>kWH</em>
    }
    else if (select === 'gas') {
      return <em>liters</em>
    }
    else if (select === 'oranges') {
      return <em>kilograms</em>
    } else { return null }
  }

  selectPriceHandler = (select) => {
    return this.props.prices[select]
  }

  render() {
    const { amount, product } = this.state;
    const price = this.selectPriceHandler(product);
    const calculators = this.props.currencies.map(curriency => {
      return (
        <Cash
          key={curriency.id}
          title={curriency.title}
          name={curriency.name}
          ratio={curriency.ratio}
          value={amount}
          price={price} />
      )
    })

    return (
      <div className="App">
        <label>Choose a product:
          <select value={product} onChange={this.selectHandler}>
            <option value='electricity'>Electricity</option>
            <option value='gas'>Gas / Petrol</option>
            <option value='oranges'>Oranges</option>
          </select>
        </label>
        <br />
        <label>
          <input
            type='number'
            value={amount}
            onChange={this.valueChangeHandler}></input>
        </label>
        {this.insertSuffix(this.state.product)}
        {calculators}
      </div>
    );
  }
}

export default App;
