import React from 'react';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';

const Canvas = () => {
  // viewbox defines that your canvas and contents must fit a particular container
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
  return (
    // SVG does not use z-index, so elements must be defined in stacking order.. i.e, sky is background so it goes first
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}
    >
      <Sky />
      <Ground />
      <CannonPipe rotation={45} />
      <CannonBase />
    </svg>
  );
};

export default Canvas;