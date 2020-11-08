import React from 'react';
import Info from '../info/Info';
import Pictoral from '../pictoral/Pictoral';
import './collegecard.css';

export default function CollegeCard({
  image,
  ranking,
  promoted,
  rating,
  rating_remarks,
  tags,
  college_name,
  discounted_fees,
  discount,
  original_fees,
  fees_cycle,
  offertext,
  nearest_place,
  famous_nearest_places,
  amenties
}) {
  return (
    <div className='collegecard'>
      <Pictoral {...{image, ranking, promoted, rating, rating_remarks, tags}} />
      <Info
        {...{
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
        }}
      />
    </div>
  );
}
