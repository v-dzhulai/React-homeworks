function Avatar(props) {
  return <img className="Avatar" src={props.avatarUrl} alt={props.name} />;
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar avatarUrl={props.avatarUrl} name={props.name} />
      <div className="UserInfo-name">{props.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo avatarUrl={props.author.avatarUrl} name={props.author.name} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date}</div>
    </div>
  );
}

function App() {
  return (
    <Comment
      author={{ name: 'Victor', avatarUrl: 'https://www.w3schools.com/howto/img_avatar.png' }}
      text="some text"
      date={new Date().toString()}
    />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
