const input = [1, 2, 3, 4, 5, 6, 7];
function transform(i) {
  return i * 3;
}

const ans = input.map(transform);
console.log(ans);

const input2 = [1, 2, 3, 4, 5, 6, 7];

const ans2 = input2.filter((i) => {
  if (i % 2 == 0) {
    return i;
  }
});

console.log(ans2);