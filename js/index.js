// Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

const exchangeRate = 40;
const dollars = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let i = 0; i < dollars.length; i++) {
    const amountInDollars = dollars[i];
    const amountInHryvnia = amountInDollars * exchangeRate;
    console.log(`${amountInDollars} доларів = ${amountInHryvnia} гривень`);
}
