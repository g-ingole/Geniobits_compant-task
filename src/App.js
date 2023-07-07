import './App.css';
import { Home } from './Components/Container/Home';
import { NvBar } from './Components/Container/NvBar';
import { Pages } from './Components/Container/Pages';
import { Elementtt } from './Components/Container/Elementtt';
import { Footer } from './Components/Container/Footer/Footer';
function App() {
  return (
    <div className="App">
      <NvBar />
      <Home />
      <Pages />
      <Elementtt />
      <Footer />
    </div>
  );
}

export default App;
