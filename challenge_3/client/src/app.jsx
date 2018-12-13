import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //form one 
      name: null,
      email: null,
      password: null,
      //form two
      address1: null,
      address2: null,
      city: null,
      state: null,
      zipCode: null,
      phoneNum: null,
      //form three
      ccNum: null,
      exprDate: null,
      cvv: null,
      billingZip: null
    }
  }
  render() {
    return (
      <div></div>
    )
  }
}

export default App;