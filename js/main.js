'use script';

for (let i = 1; i <= 10; i++) {
  if(i%3 === 0) {
    continue;
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if(i%3 === 0) {
    break;
  }
  console.log(i);
}