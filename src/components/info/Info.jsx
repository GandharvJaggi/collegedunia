import React from 'react';
import './info.css';

export default function Info({
  college_name,
  discounted_fees,
  discount,
  original_fees,
  fees_cycle,
  offertext,
  nearest_place,
  famous_nearest_places,
  rating,
  amenties
}) {
  return (
    <div className='info'>
      <div className='left'>
        <div className='name'>{college_name}</div>
        <div className='near'>
          {nearest_place.map((d) => (
            <div className='near-item'>{d}</div>
          ))}
        </div>
        <div className='famous'>{famous_nearest_places}</div>
      </div>
      <div className='right'>
        <div className='disfee'>{discounted_fees}</div>
        <div className='dis'>{discount}</div>
        <div className='fee'>{original_fees}</div>
          <div className="cycle">{fees_cycle}</div>
      </div>
      <div className='bottom'>
          <div className="offer">{offertext}</div>
          <div className="am">{amenties.map((d)=> <div className="am-item">{d}</div>)}</div>
      </div>
    </div>
  );
}
