for (let i = 0; i < 2; i++) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 100 + i * 700);
  
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300 + i * 700);
  
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500 + i * 700);
  
  setTimeout(() => {
    process.stdout.write('\r\\   '); 
  }, 700 + i * 700);  

}

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100 + 1500);

process.stdout.write('hello from spinner1.js... \rheyyy\n');
setTimeout(() => {
  console.log("\n");
}, 1700);