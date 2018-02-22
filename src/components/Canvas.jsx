import React from 'react';

const Canvas = () => {
  const style = {
    border: '1px solid black',
  };
  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      style={style}
    >
      <circle cx={25} cy={25} r={10} />
    </svg>
  );
};

export default Canvas;