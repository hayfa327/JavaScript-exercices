function createCounter (startValue = 0 )  {
    let count = startValue; 
    return {
      increment() {
      count++; 
      return count; 
    }, 
   
    decrement() {
      count--;
      return count;
    },

    getCount() {
      return count;
    }
  }; 
} 


const counter = createCounter(5);
createCounter(); 
console.log(counter.getCount());  // 5
console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.decrement()); // 6
console.log(counter.getCount());