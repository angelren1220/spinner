const symbols = ['\r|   ', '\r/   ','\r-   ', '\r\\   ', '\r|   '];
for (let i = 0; i < symbols.length; i++) {
  setTimeout(() => {
    process.stdout.write(symbols[i]);
  }, 100 * (i + 1));
}
process.stdout.write('hello from spinner1.js... \rheyyy\n');