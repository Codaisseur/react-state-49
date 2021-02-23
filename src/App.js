import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Content from "./components/Content";
import LikeCounter from "./components/LikeCounter";

function App() {
  const textColor = "#00ff15";
  return (
    <div className='App'>
      <header className='App-header'>
        <Title text='React day 2' subtitle='State and useEffect' alert={true} />
        <LikeCounter />
      </header>
    </div>
  );
}

export default App;
