class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'coconut' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    alert(`Your favorite flavor: ${this.state.value}`);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Select your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">grapefruit</option>
            <option value="lime">lime</option>
            <option value="coconut">coconut</option>
            <option value="mango">mango</option>
          </select>
        </label>
        <input type="submit" value="Send" />
      </form>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FlavorForm />);
