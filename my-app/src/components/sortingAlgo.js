//Bubble Sort

export function bubbleSort(array) {
    const animations = [];
    let arr = [...array]; //[... (arrayname)] is used to create copy of array so now both array and arr have same elements
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        // Push indices that are being compared
        animations.push([j, j + 1]);
        // Push indices to swap if they are in the wrong order
        if (arr[j] > arr[j + 1]) {
          animations.push([j, j + 1, true]);
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        } else {
          animations.push([j, j + 1, false]);
        }
      }
    }
    return animations;
  }
  
//insertion Sort

export function insertionSort(arra) {
    const animations = [];
    let arr = [...arra];
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        animations.push([i, j, 'compare']);
        while (j >= 0 && arr[j] > key) {
            animations.push([j, j + 1, 'compare']);

            animations.push([j + 1, arr[j], 'overwrite']);
            arr[j + 1] = arr[j];
            j--;
            if (j >= 0) {
                animations.push([i, j, 'compare']);
            }
        }
        animations.push([j + 1, key, 'overwrite']);
        arr[j + 1] = key;
    }
    return animations;
}



