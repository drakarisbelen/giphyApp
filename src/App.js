import "./App.css";
import "./assets/css/app.css";
import Nav from "./components/Nav";
import Features from "./components/Features";
import Gif from "./components/Gif";
function App() {
  return (
    <div className="App">
      <Nav />
      <Features />
      <Gif />
    </div>
  );
}

export default App;
