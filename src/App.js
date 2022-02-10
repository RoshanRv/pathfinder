import PathFinder from './components/PathFinder'
import Header from './components/Header';

function App() {

  return (
    <div className="App font-disp  text-xl md:text-3xl overflow-x-hidden">
      <Header />
      <main className='bg-black/90'>
        <PathFinder />
      </main>
    </div>
  );
}

export default App;
