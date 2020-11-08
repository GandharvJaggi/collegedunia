import React, {useCallback, useEffect, useState} from 'react';
import CollegeCard from '../collegecard/CollegeCard';
import './list.css';
import data from '../../assets/colleges.json';
import useIntersect from '../../hooks/useIntersect';

export default function CollegeList() {
  const listdata = data.colleges;
  const [index, setindex] = useState(1);
  const [loading, setloading] = useState(false);
  const [list, setList] = useState(listdata.slice(0, 10));

  const [ref, entry] = useIntersect({threshold: 1.0});

  const getList = useCallback(() => {
    // setList()
    setindex(index + 1);
    let a = index >= 5 ? 0 : index - 1;
    let b = index >= 5 ? 1 : index;

    setList([...list, ...listdata.slice(a * 10, b * 10)]);
    setloading(false);
  }, [index, list, listdata]);

  useEffect(() => {
    console.log(entry.intersectionRatio);
    if (entry.intersectionRatio === 1) {
      setloading(true);
      getList();
    }
  }, [entry, getList]);
  return (
    <div id='collegelist'>
      {list.map((d, i) => (
        <CollegeCard key={i} {...d} />
      ))}
      <div className={`loading ${!loading ? 'hide' : ''}`}>loading</div>
      <div className={loading ? 'hide' : ''} ref={ref}></div>
    </div>
  );
}
