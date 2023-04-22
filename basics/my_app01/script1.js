class Welcome extends React.Component {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="Victor" />
        <Welcome name="Yana" />
        <Welcome name="Vladyslav" />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
