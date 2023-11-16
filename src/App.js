import './App.css';
import useFetchChampions from './Components/Api';
import Champion from './Components/Champion';


function App() {
  const champions = useFetchChampions();

  return (
    <div className="Wrapper">
      <header className='header'>
        <h1>
          League of Legends database
        </h1>
      </header>

      <h1>Champions</h1>
    <section className='col-4'>
        <ul className='cards'>
          {champions.map(champion => (
            <Champion key={champion.index} champion={champion} />
          ))}
        </ul>
    </section>
    </div>
  );
}

export default App;
