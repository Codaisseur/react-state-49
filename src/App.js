import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Content from "./components/Content";

const products = [
  {
    name: "car",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/2013-2016_Toyota_Corolla_%28ZRE172R%29_SX_sedan_%282018-09-17%29_01.jpg/1600px-2013-2016_Toyota_Corolla_%28ZRE172R%29_SX_sedan_%282018-09-17%29_01.jpg",
  },
  {
    name: "bike",
    imageUrl:
      "https://static.trainlinecontent.com/content/vul/fleet-components/toc-information/ns-train.jpg",
  },
  {
    name: "bus",
    imageUrl:
      "https://static.trainlinecontent.com/content/vul/fleet-components/toc-information/ns-train.jpg",
  },
  {
    name: "train",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/2013-2016_Toyota_Corolla_%28ZRE172R%29_SX_sedan_%282018-09-17%29_01.jpg/1600px-2013-2016_Toyota_Corolla_%28ZRE172R%29_SX_sedan_%282018-09-17%29_01.jpg",
  },
];

function App() {
  const textColor = "#00ff15";
  return (
    <div className='App'>
      <header className='App-header'>
        <Title text='React day 2' subtitle='State and useEffect' alert={true} />
        <Content productList={products} />
      </header>
    </div>
  );
}

export default App;
