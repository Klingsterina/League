import React from 'react';
import { Link } from 'react-router-dom';

const Champion = ({ champion }) => (
  <div className='card col-n'>
    <h3 className='champion-name'>{champion.name}</h3>
    <Link to={`/champion/${champion.id}`}>
      <img src={champion.img} alt={champion.name} />
    </Link>
    <p className='champion-title'>{champion.title}</p>
    {champion.tags.length > 1 ? (
      <p className='tags'>
        {champion.tags.map((tag, index) => (
          <span className='tag' key={index}>
            {index > 0 && <div className="tag-separator"> </div>}
            {tag}
          </span>
        ))}
      </p>
    ) : (
      <p className='tag'>
        {champion.tags[0] || 'No tags'}
      </p>
    )}
  </div>
);

export default Champion;
