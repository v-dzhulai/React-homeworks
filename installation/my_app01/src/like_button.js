class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) return 'You liked this.';

    // return React.createElement('button', { onClick: () => this.setState({ liked: true }) }, 'Like');

    return <button onClick={() => this.setState({ liked: true })}>Like</button>;
  }
}

let domContainer = document.querySelector('#like_btn_container');
// const root = ReactDOM.createRoot(domContainer);
// root.render(React.createElement(LikeButton));
ReactDOM.render(<LikeButton />, domContainer);
