import '../App.scss';
import { useParams } from 'react-router-dom';
import ChampionsList from './Api'; // Import your custom hook
import { useState, useEffect } from 'react';

function DetailedChampions() {
  const { id } = useParams(); // Get the champion ID from the route parameters
  const champions = ChampionsList(); // Use the custom hook to fetch champions
  const [championData, setChampionData] = useState(null);
  useEffect(() => {
    if (champions.length > 0) {
      // Find the champion by its ID
      const selectedChampion = champions.find(champion => champion.id === id);
      console.log(selectedChampion);
      setChampionData(selectedChampion);
    }
  }, [champions, id]);

  if (!championData) {
    return <p>No champion data found.</p>;
  }

  return (
    <div className="wrapper">
      <header className="header">
        <h1>League of Legends Database</h1>
      </header>
      <div>
        <a href="/" className="back-link">Back to champions</a>
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
        <h2>Skins</h2>
        <div className="skins-grid">
          {championData.skins.map((skins) => (
            <div key={skins.num} className="skin-card">
              <p>{skins.name}</p>
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championData.name}_${skins.num}.jpg`}
                alt={skins.name}
                className="skin-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailedChampions;
