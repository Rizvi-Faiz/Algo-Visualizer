import React, { useState } from 'react';
import { insertionSort } from './sortingAlgo.js'; // Assuming this is the file name
import '../App.css';

function InsertionSortVisualizer() {
  const [array, setArray] = useState(generateArray(20));
  const [isSorting, setIsSorting] = useState(false);

  // Helper to generate random array
  function generateArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 300) + 10);
  }

  const startInsertionSort = async () => {
    const animations = insertionSort([...array]);
    const arrayBars = document.getElementsByClassName('array-bar');
    setIsSorting(true);

    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdxOrValue, action] = animations[i];

      if (action === 'compare') {
        // Change color to show comparison
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdxOrValue].style;
        const color = 'red';
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;

        // Revert color after delay
        await new Promise(resolve => setTimeout(resolve, 100));
        barOneStyle.backgroundColor = 'teal';
        barTwoStyle.backgroundColor = 'teal';
      } else if (action === 'overwrite') {
        // Overwrite the height of the bar
        const barOneStyle = arrayBars[barOneIdx].style;
        await new Promise(resolve => setTimeout(resolve, 100));
        barOneStyle.height = `${barTwoIdxOrValue}px`;
      }
    }

    setIsSorting(false);
  };

  return (
    <div>
      <h1>Insertion Sort Visualizer</h1>
      <div className="array-container">
        {array.map((value, index) => (
          <div
            className="array-bar"
            key={index}
            style={{ height: `${value}px`, width: '20px' }}
          ></div>
        ))}
      </div>
      <button onClick={startInsertionSort} disabled={isSorting}>
        {isSorting ? 'Sorting...' : 'Start Insertion Sort'}
      </button>
      <button onClick={() => setArray(generateArray(20))} disabled={isSorting}>
        Reset Array
      </button>
    </div>
  );
}

export default InsertionSortVisualizer;
