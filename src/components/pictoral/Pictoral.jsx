import {Chip} from '@material-ui/core';
import React from 'react';
import './pictoral.css';

export default function Pictoral({
  image,
  ranking,
  promoted,
  rating,
  rating_remarks,
  tags
}) {
  var img = image.split('.')[0]
  return (
    <div
      className='pictoral'
      // style={{backgroundImage: `url(../../assets/images/college.jpg)`}}
    >
      <div className='promoted'></div>
      <div className='rating'></div>
      <div className='bottom'>
        <div className='tags'>
          {tags.map((d, i) => (
            <Chip key={i} label={d} />
          ))}
        </div>
        <div className='ranking'>{ranking}</div>
      </div>
    </div>
  );
}
