function* countUpTo3() {
  yield 1;
  yield 2;
  yield 3;
}

const sounter = countUpTo3();

console.log(sounter.next()); // { value: 1, done: false }
console.log(sounter.next()); // { value: 2, done: false }
console.log(sounter.next()); // { value: 3, done: false }
console.log(sounter.next()); // { value: undefined, done: true }