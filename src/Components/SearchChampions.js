import '../App.scss';
import useFetchChampions from './Api';
import Champion from './Champion';
import { useState, useEffect } from "react";


function SearchChampions() {
  const champions = useFetchChampions();
  const [filteredList, setFilteredList] = useState(champions);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (champions.length > 0) {
      setFilteredList(champions);
      setIsLoading(false);
    }
  }, [champions]);

  const searchHandler = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const newFilteredList = champions.filter(champion =>
      champion.name.toLowerCase().includes(query)
    );
    setFilteredList(query.trim() !== "" ? newFilteredList : champions);
  };

  return (
    <div className="wrapper">
      <header className='header'>
        <h1>League of Legends database</h1>
      </header>
      <h1 className='temptitle'>Champions</h1>
      <input
        placeholder='Skrifa hér til að leita'
        type="text"
        value={searchQuery}
        onChange={searchHandler}
      />
      {isLoading ? (
        <p>Loading champions...</p>
      ) : filteredList.length === 0 ? (
        <p>No champions match your search.</p>
      ) : (
        <ul className="cards">
          {filteredList.map(champion => (
            <Champion key={champion.index} champion={champion} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchChampions;
