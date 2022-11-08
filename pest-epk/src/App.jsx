import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Quotes from './components/Quotes';
import Music from './components/Music';

function App() {
  return (
    <div>
      <Nav />
      <div>
        <Hero />
        <div>
          <About />
          <div>
            <Music />
            <div>
              <Quotes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
