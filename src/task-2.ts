type Currency = "USD" | "EUR" | "UAH";

interface ConvertCurrencyInt {
  amount: number;
  currency: Currency;
}

function convertCurrency({ amount, currency }: ConvertCurrencyInt): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 50, currency: "USD" });
convertCurrency({ amount: 150, currency: "EUR" });
convertCurrency({ amount: 900, currency: "UAH" });