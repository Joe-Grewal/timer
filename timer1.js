const input = process.argv.slice(2);

if (!input) {
  return;
} 

let goodInput = input.filter(num => !isNaN(num));
goodInput = goodInput.filter(num => num >= 0);

goodInput.forEach((num, index) => {
    num *= 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, num);
});