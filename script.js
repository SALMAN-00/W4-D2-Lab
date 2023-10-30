console.log(`______________Q1______________

`);
for (i = 0; i <= 25; i++) {
  if (i % 2 === 0) {
    console.log(`Even ${i}`);
  }
}
for (i = 1; i <= 10; i++) {
  console.log(`${i} sequer = ${i * i}`);
}

for (i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(`Odd ${i}`);
  }
}

console.log(`

_____________________________________________________________

`);

console.log(`______________Q2______________

`);
/*
var num1 = 0;
var num2 = 1;
var num;
for( i = 0; i<=;){


}
*/
console.log(`

_____________________________________________________________

`);

console.log(`______________Q3______________

`);

for (i = 0; i <= 10; i++) {
  console.log(`${i} sequer = ${i * i}`);
}

for (i = 1; i <= 3; i++) {
  for (j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
console.log(`

_____________________________________________________________

`);

for (i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(`Odd ${i}`);
    continue;
  } else if (i % 2 === 0) {
    console.log(`Even ${i}`);
    break;
  }
}
console.log(`

_____________________________________________________________

`);
let hight = 170;
let weight = 50;
let IBM = (hight * 2) / weight;
if (IBM < 15) {
  console.log(`نقص حاد جدا بالوزن`);
} else if (IBM >= 15 && IBM <= 16) {
  console.log(`نقص حاد  بالوزن`);
} else if (IBM > 16 && IBM <= 18.5) {
  console.log(`نقص   بالوزن`);
} else if (IBM > 18.5 && IBM <= 25) {
  console.log(`   وزن طبيعي`);
} else if (IBM > 25 && IBM <= 30) {
  console.log(`   زيادة بالوزن`);
} else if (IBM > 30 && IBM <= 35) {
  console.log(`   سمنة درجة اولى `);
} else if (IBM > 35 && IBM <= 40) {
  console.log(`   سمنة درجة الثانية `);
} else if (IBM > 40) {
  console.log(`   سمنة  مفرطة `);
}
