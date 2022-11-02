//Таск на змінні:
//1) Створити дві змінні a та b.Виведіть у консоль результат їх множення.
const a = 1;
const b = 2;
const ab = a * b;
console.log("ab :>>", ab);
//Короткий варіант:
//console.log("a * b =", a * b);

//2) Створіть дві змінні c та d.Виведіть у консоль результат ділення першого на друге.
const c = 4;
const d = 2;
const cd = c / d;
console.log("cd :>>", cd);
//Короткий варіант:
//console.log("c / d =", c / d);

//3) Створіть дві змінні e та f.Виведіть у консоль результат додавання.
const e = 3;
const f = 6;
const ef = e + f;
console.log("ef :>>", ef);
//Короткий варіант:
//console.log("e + f =", e + f);

//4) Визначте змінні зі значеннями 11,true,'java script','100' і виведіть їх у консоль.
const numberVariable1 = 11;
console.log("numberVariable1", numberVariable1);

const boolValue = true;
console.log("boolValue", boolValue);

const Name = "java script";
console.log("Name", Name);

const numberVariable2 = 100;
console.log("numberVariable2", numberVariable2);

//5) Переробіть наведений код так, щоб у ньому використовувалися операції +=, -=, *=, /=, ++, --
//let num = 1;
//num = num + 11;
let num = 1;
num += 11;
console.log("num :>>", num);

//num = num – 11;
let num1 = 1;
num1 -= 11;
console.log("num1 :>>", num1);

//num = num * 11;
let num2 = 1;
num2 *= 11;
console.log("num2 :>>", num2);

//num = num / 11;
let num3 = 1;
num3 /= 11;
console.log("num3 :>>", num3);

//num = num + 1;
let num4 = 1;
num4 += 1;
console.log("num4 :>>", num4);

//num = num – 1;
let num5 = 1;
num5 -= 1;
console.log("num5 :>>", num5);

/************************************************* *****************/

//Таски на prompt (вводити з допомогою prompt, виводити з допомогою alert):

//1) Запитати число у користувача, піднести його до квадрату і вивести результат.
const inputValue = Number(prompt("Enter a number:"));
const alert = inputValue ** 2;
console.log("alert :>> ", alert);

//2) Вивести середнє арифметичне двох чисел. Числа запитувати у користувача.
const aa = +prompt("input value");
const bb = Number(prompt("input value"));
const results = (a + b) / 2;
console.log("Yuor result is ");
//3) Перевести кількість хвилин на секунди та вивести 'результат. Число хвилин запитувати у користувача.
const a1 = Number(prompt("input value"));
const result = a * 60;
console.log("Your result is");
//4) Створіть змінну greeting зі значенням 'Hello,' і оголосіть змінну userName. Запитайте ім'я користувача та внесіть це значення у змінну userName. Виведіть повідомлення з привітанням, наприклад, 'Hello, Vasya!'. (згадайте про конкатенацію)
let userName = prompt("input value");
const greeting = "Hello + userName )!";
console.log("greeting :>>", greeting);
