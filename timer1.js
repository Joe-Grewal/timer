const input = process.argv.slice(2);

if (!input) {
  return;
} 

let goodInput = input.filter(num => typeof(num) !== 'number');
goodInput = goodInput.filter(num => num >= 0);
console.log(goodInput);

goodInput.forEach((num, index) => {
    num *= 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, num);
});

// process.stdout.write('\x07');