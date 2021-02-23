import "./App.css";
import Title from "./components/Title";
import LikeCounter from "./components/LikeCounter";
import ArticleList from "./components/ArticleList";

function App() {
  // const textColor = "#00ff15";
  return (
    <div className='App'>
      <header className='App-header'>
        <Title text='React day 2' subtitle='State and useEffect' alert={true} />
        {/* <LikeCounter /> */}
        <ArticleList />
      </header>
    </div>
  );
}

export default App;
