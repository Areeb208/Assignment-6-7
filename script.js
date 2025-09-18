//Q.1 | Write a function that checks if the string "Hello, welcome to JavaScript!" contains the word "JavaScript"
let a = "Hello, welcome to JavaScript!";

if (a.includes("JavaScript")) {
    console.log("Yes, it contains JavaScript");
}

//Q.2 | Create a function that takes "hello world" and returns it in uppercase.
let b = "hello world";
console.log(b.toUpperCase());

//Q.3 | Given the string " Learn JS ", remove the leading and trailing spaces.
let c = " Learn JS ";
console.log(c.trim());

//Q.4 | Write a function that compares "React" and "react" and returns true if they are equal, ignoring case.
let d = "React";
let e = "react";
console.log(d.toLowerCase() === e.toLowerCase());

//Q.5 | Write a function that counts how many vowels are in "JavaScript is fun".
let f = "JavaScript is fun";
let count = 0;

for (let i = 0; i < f.length; i++) {
    let ch = f[i].toLowerCase();

    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
        count++;
    }
}

console.log(count);

//Q.6 | Given "user@example.com", extract and return "example.com".
let g = "user@example.com";
console.log(g.split("@")[1]);

//Q.7 | Write a function that takes a number (hour in 24-hour format) and returns "Good morning" if before 12, "Good afternoon" if between 12 and 18, and "Good evening" otherwise.
let hour = 12;

if (hour < 12) {
    console.log("Good morning");
} else if (hour < 18) {
    console.log("Good afternoon");
} else {
    console.log("Good evening");
}

//Q.8 | Write a function that checks if a password is strong. A strong password must be at least 8 characters long and contain at least one number. Return "Strong" or "Weak".
let password = "hello123";
let hasNumber = false;

for (let i = 0; i < password.length; i++) {
    let ch = password[i];
    if (ch >= "0" && ch <= "9") {
        hasNumber = true;
        break;
    }
}

if (password.length >= 8 && hasNumber) {
    console.log("Strong");
} else {
    console.log("Weak");
}

//Q.9 | Write a function that takes "Learn JavaScript step by step" and returns "Learn-JavaScript-step-by-step".
let j = "Learn JavaScript step by step";
console.log(j.replace(/ /g, "-"));

//Q.10 | Write a function that checks if the string "Frontend" starts with the letter "F".
let k = "Frontend";

if (k.startsWith("F")) {
    console.log("It starts with F");
} else {
    console.log("It doesn't start with F");
}

//🔹 For Loop (5 Questions)

console.log("Q.11")

//Q.11 | Print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Q.12")

//Q.12 | Print the even numbers between 1 and 20 using a for loop.
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

console.log("Q.13")

//Q.13 | Print the multiplication table of 7 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + (7 * i));
}

console.log("Q.14")

//Q.14 | Print numbers from 10 down to 1 using a for loop.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("Q.15")

//Q.15 | Find the sum of first 50 natural numbers using a for loop.
let sum = 0;

for (let i = 1; i <= 50; i++) {
    sum += i;
}

console.log("Sum of first 50 natural numbers is:", sum);

// 🔹 While Loop (5 Questions)

console.log("Q.16");

//Q.16 | Print numbers from 1 to 5 using a while loop.
let h = 1;

while (h <= 5) {
    console.log(h);
    h++;
}

console.log("Q.17")

//Q.17 | Print the odd numbers from 1 to 15 using a while loop.
let o = 1;

while (o <= 15) {
    console.log(o);
    o += 2;
}

console.log("Q.18")

//Q.18 | Find the factorial of 5 using a while loop.
let p = 1;
let fact = 1;

while (p <= 5) {
    fact *= p;
    p++;
}

console.log("Factorial of 5 is:", fact);

console.log("Q.19");

//Q.19 | Print numbers from 20 to 10 using a while loop.
let i = 20;

while (i >= 10) {
    console.log(i);
    i--;
}

console.log("Q.20")

//Q.20 | Keep printing numbers until the sum becomes greater than 30 using a while loop.
let m = 1;
let add = 0;

while (add <= 30) {
    console.log(m);
    add += m;
    m++;
}

console.log("Final Sum:", add);

// 🔹 Do While Loop (5 Questions)

console.log("Q.21");

//Q.21 | Print numbers from 1 to 5 using a do...while loop.
let dw1 = 1;

do {
    console.log(dw1);
    dw1++;
} while (dw1 <= 5);

console.log("Q.22");

//Q.22 | Print the multiples of 3 up to 30 using a do...while loop.
let dw2 = 3;

do {
    console.log(dw2);
    dw2 += 3;
} while (dw2 <= 30);

console.log("Q.23");

//Q.23 | Print numbers in reverse order from 15 down to 1 using a do...while loop.
let dw3 = 15;

do {
    console.log(dw3);
    dw3--;
} while (dw3 >= 1);

console.log("Q.24");

//Q.24 | Print numbers until the product exceeds 1000 using a do...while loop.
let dw4 = 1;
let product = 1;

do {
    console.log(dw4);
    product *= dw4;
    dw4++;
} while (product <= 1000);

console.log("Final Product:", product);

console.log("Q.25");

//Q.25 | Use a do...while loop to print numbers from 1 to 10, but skip 5.
let dw5 = 1;

do {
    if (dw5 !== 5) {
        console.log(dw5);
    }
    dw5++;
} while (dw5 <= 10);

// 🔹 Conditional Statements (5 Questions)

console.log("Q.26");

//Q.26 | Take a number and check if it is positive, negative, or zero.
let num1 = -3;

if (num1 > 0) {
    console.log("Positive");
} else if (num1 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

console.log("Q.27");

//Q.27 | Check if a number is even or odd.
let num2 = 7;

if (num2 % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

console.log("Q.28");

//Q.28 | Print the largest of three numbers using if-else.
let a1 = 12, a2 = 25, a3 = 19;

if (a1 >= a2 && a1 >= a3) {
    console.log("Largest is:", a1);
} else if (a2 >= a1 && a2 >= a3) {
    console.log("Largest is:", a2);
} else {
    console.log("Largest is:", a3);
}

console.log("Q.29");

//Q.29 | Check if a given year is a leap year or not.
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year, "is a Leap Year");
} else {
    console.log(year, "is NOT a Leap Year");
}

console.log("Q.30");

//Q.30 | Take a number between 1–7 and print the day of the week (1 = Monday, etc.).
let dayNum = 3;

if (dayNum === 1) {
    console.log("Monday");
} else if (dayNum === 2) {
    console.log("Tuesday");
} else if (dayNum === 3) {
    console.log("Wednesday");
} else if (dayNum === 4) {
    console.log("Thursday");
} else if (dayNum === 5) {
    console.log("Friday");
} else if (dayNum === 6) {
    console.log("Saturday");
} else if (dayNum === 7) {
    console.log("Sunday");
} else {
    console.log("Invalid number (must be 1-7)");
}
