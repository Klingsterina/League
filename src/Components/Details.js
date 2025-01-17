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
      <div className="champion-container">
        <div className="champion-info">
          <h1 className='champion-name'>{championData.name}</h1>
          <p className='champion-title'>{championData.title}</p>
          <img
            src={championData.img}
            alt={championData.name}
            className="champion-image"
          />
          <div className='tags'>
            {championData.tags.map((tag, index) => (
              <span key={index} className='tag'>
                {tag}
                {index < championData.tags.length - 1}
              </span>
            ))}
          </div>
        </div>
        <div className='spells-container'>
          <div className='spells-grid'>
            {championData.spells.map((spell) => (
              <div key={spell.id} className='spell-card'>
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/15.1.1/img/spell/${spell.image.full}`}
                  alt={spell.name}
                  className='spell-image'
                />
                <p className='spell-name'>{spell.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='statsAndTips-container'>
        <h2 className='stats-h2'>Stats</h2>
        <div className="stats-grid">
        {Object.keys(championData.stats).map((stat) => (
          <div key={stat} className="stat-card">
            <p className="stat">
              {stat}: {championData.stats[stat]}
            </p>
          </div>
        ))}
        </div>
        <div className='tips-grid'>
          <div className='tips'>
            <h2 className='tips-h2'>Tips</h2>
            <p>{championData.allytips}</p>
          </div>
          <div className='tips'>
            <h2 className='tips-h2'>Counter Tips</h2>
            <p>{championData.enemytips}</p>
          </div>
        </div>
      </div>
      <div className='lore-container'>
        <h2 className='lore-h2'>Lore</h2>
        <p className='lore'>{championData.lore}</p>
      </div>
      <div>
        <h2 className='skins-h2'>Skins</h2>
        <div className="skins-grid">
          {championData.skins.map((skins) => (
            <div key={skins.num} className="skin-card">
              <p className='skin-name'>{skins.name}</p>
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
