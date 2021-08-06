function averageLength() { 
  // good luck
  let arr = [...arguments][0];
  
  let avg = Math.round(arr.reduce((acc, curr) => acc + curr.length, 0)/arr.length)
  
  return arr.map(el => el[0].repeat(avg))
}