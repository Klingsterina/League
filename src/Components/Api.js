import { useState, useEffect } from "react";

export default function ChampionsList() {
    const [champions, setChampions] = useState([]);

    useEffect(() => {
        const fetchChampions = async () => {
          try {
            const response = await fetch('https://ddragon.leagueoflegends.com/cdn/13.22.1/data/en_US/champion.json');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
      
            const data = await response.json();
            const championsData = data?.data ?? {};
      
            const championsArray = Object.values(championsData).map(championData => {
              return {
                img: `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/champion/${championData.image.full}`,
                index: championData.key,
                name: championData.name,
                title: championData.title,
                tags: championData.tags
              };
            });

            const limetedChampionsArray = championsArray.slice(0, 24);
      
            setChampions(limetedChampionsArray);
          } catch (error) {
            console.error('Error fetching Champion data:', error);
          }
        };
      
        fetchChampions();
      }, []);

      return champions;
    };