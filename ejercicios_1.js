console.log('Operaciones')
let a = 40 + 2 * 7 **2
let b = 3+ (2+5)*1+ (3-2*3)
let c = 16 - 8 * (10 - (5 + 4))
let d = (5+3*2)-(7*2)*(3+ (2*3-1))
let e = (24+220)/3*2
let f = (6/3*2)-(7*2)+ (2*(3+ (2/3-1)*4))
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(" ");

/*2--Operaciones aritmeticas*/
console.log('Operaciones aritmeticas')
a= 29.7 + 5.0 ^ 2.0
b = ( (2 - 3) ^ 4 * 5 / (4 + 3 * 9) )
c = 49.38 + 127.73 - 15.02 * 6.83 / 3.22
d =  Math.trunc(19/3) //hallar el cociente de la division con math.trunc
e = 15 % 6
f = ((15 * 8 % 6 + Math.trunc(24/2) ^ 3) ^ 3 / 4) * (5 ^ 1 / 2 + 1 / 4 + 2 ^ 3 - 4)

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);


/*3--Operaciones logicas*/
console.log('Operaciones logicas');
// a) V OR V AND F OR V
let w = true || true && false || true
// b) NOT ( (F OR F) AND (V OR V) OR V )
let x = !((false || false) && (true || true ) || true)
// c) NOT F AND (F OR V) AND (NOT V AND F)
let y = !false && (false || true) && (!true && false)
// d) NOT ( V OR F) AND (F AND V)
let z = !(true || false) && (false && true)
console.log(w);
console.log(x);
console.log(y);
console.log(z);