import PathFinder from './components/PathFinder'
import Header from './components/Header';
import Footer from './components/Footer';
import Info from './components/Info';

function App() {

  return (
    <div className="App font-disp  text-xl md:text-3xl overflow-x-hidden">
      <Header />
      <main className=''>
        <PathFinder />
        <Info />
      </main>
      <Footer />
    </div>
  );
}

export default App;
