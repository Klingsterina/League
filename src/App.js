import './App.css';
import useFetchChampions from './Components/Api';
import Champion from './Components/Champion';
import { useState } from "react";


function App() {
  const champions = useFetchChampions();
  const [filteredList, setFilteredList] = useState(champions) ;
  const [searchQuery, setSearchQuery] = useState("");

  const searchHandler = (e) => {
    const query = e.target.value.toLowerCase();
    console.log(query)
    setSearchQuery(query);

    const newFilteredList = champions.filter(champion => champion.name.toLowerCase().includes(query))
    setFilteredList(query.trim() !== "" ? newFilteredList : champions)
  }

  return (
    <div className="Wrapper">
      <header className='header'>
        <h1>
          League of Legends database
        </h1>
      </header>

      <h1 className='tempTitle'>Champions</h1>
      <input
        placeholder='Skrifa hér til að leita'
        type="text"
        value={searchQuery}
        onChange={searchHandler}
      />
      <ul className='cards'>
        {filteredList.map(champion => (
          <Champion key={champion.index} champion={champion} />
        ))}
      </ul>
    </div>
  );
}

export default App;
