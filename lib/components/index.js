import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  state = {
    answer: 42,
  };
  render() {
    return (
        //React.createElement('h2', null, 'Hello React')
        <h2>Hello React -- {this.state.answer}</h2>
    );
  }
}

ReactDom.render(
    //React.createElement(App),
    <App />,
    document.getElementById('root'),
);