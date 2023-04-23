class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
  }

  handleClick = () => {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Turned on' : 'Turned off'}
      </button>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Toggle />);
