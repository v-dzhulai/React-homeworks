function Welcome(props) {
  return <h1>Hello {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Oleksandr" />
      <Welcome name="Sasha" />
      <Welcome name="Bodya" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
