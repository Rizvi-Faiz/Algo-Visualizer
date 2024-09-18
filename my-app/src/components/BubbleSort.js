import React, { useState } from 'react';
import { bubbleSort } from './sortingAlgo.js';
import '../App.css';

function BubbleSortVisualizer() {
  const [array, setArray] = useState(generateArray(10)); 
  const [isSorting, setIsSorting] = useState(false);
  function generateArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 300) + 10);
  }

  const startBubbleSort = async () => {
    const animations = bubbleSort(array);
    const arrayBars = document.getElementsByClassName('bubble-bar');
    setIsSorting(true);

    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx, shouldSwap] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;

      barOneStyle.backgroundColor = 'red';
      barTwoStyle.backgroundColor = 'red';

      await new Promise(resolve => setTimeout(resolve, 10));

      if (shouldSwap) {
        const tempHeight = barOneStyle.height;
        barOneStyle.height = barTwoStyle.height;
        barTwoStyle.height = tempHeight;
      }

      barOneStyle.backgroundColor = 'teal';
      barTwoStyle.backgroundColor = 'teal';
    }
    setIsSorting(false);
  };

  return (
    <div>
      <h1>Bubble Sort Visualizer</h1>
      <div className="array-container">
        {array.map((value, index) => (
          <div
            className="bubble-bar"
            key={index}
            style={{ height: `${value}px`, width: '20px' }}
          ></div>
        ))}
      </div>
      <button onClick={startBubbleSort} disabled={isSorting}>
        {isSorting ? 'Sorting...' : 'Start Bubble Sort'}
      </button>
      <button onClick={() => setArray(generateArray(10))} disabled={isSorting}>
        Reset Array
      </button>
    </div>
  );
}

export default BubbleSortVisualizer;
