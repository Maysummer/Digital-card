import photo from './assets/photo_card.jpeg'
import './App.css';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={photo} alt="" className="image" />
      </header>
      <main className='main'>
        <Info />
        <About />
        <Interests />
      </main>
      <Footer />
    </div>
  );
}

export default App;
 