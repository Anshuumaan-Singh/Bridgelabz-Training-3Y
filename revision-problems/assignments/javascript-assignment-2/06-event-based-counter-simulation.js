function createCounter() {
  let count = 0;

  function logCount(action) {
    console.log(`${action}: count is now ${count}`);
  }

  function increment() {
    count++;
    logCount("Increment click");
  }

  function decrement() {
    count--;
    logCount("Decrement click");
  }

  return { increment, decrement };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
