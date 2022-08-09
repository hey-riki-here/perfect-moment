import './App.css';
import Navbar from "./components/Navbar/Navbar"
import { FooterContainer } from './containers/footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Content</h1>
      <FooterContainer />
    </div>
  );
}

export default App;
