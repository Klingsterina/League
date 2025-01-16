import '../App.scss';
import { useParams } from 'react-router-dom';
import ChampionsList from './Api'; // Import your custom hook
import { useState, useEffect } from 'react';

function DetailedChampion() {
  const { id } = useParams(); // Get the champion ID from the route parameters
  const champions = ChampionsList(); // Use the custom hook to fetch champions
  const [championData, setChampionData] = useState(null);

  useEffect(() => {
    if (champions.length > 0) {
      // Find the champion by its ID (key)
      const selectedChampion = champions.find(champion => champion.name === id);
      setChampionData(selectedChampion);
    }
  }, [champions, id]);

  if (!championData) {
    return <p>No champion data Found</p>;
  }

  return (
    <div className="wrapper">
      <header className="header">
        <h1>League of Legends Database</h1>
      </header>
      <div>
        <a href="/" className='back-link'>Back to champions</a>
      </div>
      <div className="champion-details">
        <h1>{championData.name}</h1>
        <p>{championData.title}</p>
        <img
          src={championData.img}
          alt={championData.name}
          className="champion-image"
        />
        <div className="tags">
          <strong>Tags: </strong>
          {championData.tags.join(', ')}
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default DetailedChampion;
