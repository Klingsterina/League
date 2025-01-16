import { useState, useEffect } from "react";

export default function ChampionsList() {
  const [champions, setChampions] = useState([]);

  const fetchChampionDetails = async (id) => {
    const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/15.1.1/data/en_US/champion/${id}.json`);
    if (!response.ok) throw new Error('Failed to fetch champion details');
    const data = await response.json();
    return data.data[id];
  };
  
  useEffect(() => {
    const fetchChampions = async () => {
      try {
        const response = await fetch('https://ddragon.leagueoflegends.com/cdn/15.1.1/data/en_US/champion.json');
        if (!response.ok) throw new Error('Failed to fetch champion list');
        const data = await response.json();
        const championsData = data?.data ?? {};
  
        const championsArray = await Promise.all(
          Object.values(championsData).map(async (championData) => {
            const detailedData = await fetchChampionDetails(championData.id);
            return {
              img: `https://ddragon.leagueoflegends.com/cdn/15.1.1/img/champion/${championData.image.full}`,
              index: championData.key,
              id: championData.id,
              name: championData.name,
              title: championData.title,
              tags: championData.tags,
              skins: detailedData.skins || []
            };
          })
        );
  
        setChampions(championsArray);
      } catch (error) {
        console.error('Error fetching Champion data:', error);
      }
    };
  
    fetchChampions();
  }, []);
  

  return champions;
}
