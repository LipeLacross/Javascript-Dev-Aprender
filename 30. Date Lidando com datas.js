const data1 = new Date();
const data2 = new Date('March 06 2019 09:30');
const data3 = new Date(2019, 03, 06, 9, 30);

console.log(data1);

console.log(data3);
date3.setFullYear(2020);
console.log(data3);

console.log(data2.toDateString());
console.log(data2.toTimeString());
console.log(data2.toISOString());

