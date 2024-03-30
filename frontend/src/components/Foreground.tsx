import React from 'react'
import Card from './Card'

const Foreground = ({ key, todo }) => {
  return (
    // <div className="grid grid-cols-3 grid-rows-auto gap-4">
    //   <div className="">

    //   </div>
    // </div>
    <div className="z-10 mx-5 my-14">
      <Card todo={todo} />
    </div>
  );
};

export default Foreground