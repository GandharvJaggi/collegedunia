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
  nearest_places,
  famous_nearest_places,
  amenties
}) {
  return (
    <div className='collegecard'>
      <Pictoral
        img={image}
        ranking={ranking}
        promoted={promoted}
        rating={rating}
        rating_remarks={rating_remarks}
        tags={tags}
      />
      <Info
        college_name
        discounted_fees
        discount
        original_fees
        fees_cycle
        offertext
        nearest_places
        famous_nearest_places
        rating
        amenties
      />
    </div>
  );
}
