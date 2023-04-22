const elem = React.createElement;

class Welcome extends React.Component {
  render() {
    return elem('h1', null, `Hello ${this.props.name}`);
  }
}

class App extends React.Component {
  render() {
    return elem(
      'div',
      null,
      elem(Welcome, { name: 'Gora' }),
      elem(Welcome, { name: 'Dima' }),
      elem(Welcome, { name: 'Lesya' }),
    );
  }
}

const element = elem(App, null);
ReactDOM.render(element, document.getElementById('root'));
