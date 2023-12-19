// Юзер вводить число. З'ясувати, чи є воно простим. Простим називається ціле число,
// більше ніж 1, яке не має інших дільників, крім 1 і себе (1 не є простим).

const user_inputString = prompt("Введіть число:");
const number = Number(user_inputString);

if (!isNaN(number) && Number.isInteger(number) && user_inputString?.trim()) {
    let isPrime = true;
    if (number >= 2) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }

        }
        if (isPrime) {
            alert(number + " є простим числом.");
        } else {
            alert(number + " не є простим числом.");
        }
    } else {
        alert("Будь ласка, введіть число більше або рівне 2.");

    }
}

else {
    alert("Будь ласка, введіть правильне ціле число.");
}