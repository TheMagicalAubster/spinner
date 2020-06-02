const spinner = "| / - \ - | / - \ - | / - \ - | / - \ - | / - \ - "
let delay = 100

for (let char of spinner) {
    setTimeout(() => {
        process.stdout.write(`\r${char} `);
      }, delay);

      delay += 100;
}

