import create from 'zustand';

const useStore = create((set) => ({
  userData: {
    firstName: "Jane",
    lastName: "Doe",
  },
  cards: [
    {
      cardNumber: "0264",
      company: "Visa",
      cardType: "Debit",
      balance: 2456.6,
      expiryDate: "06 25",
    },
    {
      cardNumber: "4281",
      company: "PayPal",
      cardType: "Credit",
      balance: 7456.34,
      expiryDate: "04 25",
    },
    {
      cardNumber: "7465",
      company: "Mastercard",
      cardType: "Debit",
      balance: 8789.4,
      expiryDate: "06 26",
    },
    {
      cardNumber: "4248",
      company: "Discover",
      cardType: "Credit",
      balance: 17435.99,
      expiryDate: "07 25",
    },
  ],
  expenses: [
    {
      category: "Clothing",
      item_name: "Nike Store",
      type: "expense",
      price: 124.0,
      cardNumber: "0264",
      date: "17/07/2022",
    },
    {
      category: "Investments",
      item_name: "SIP",
      type: "expense",
      price: 100,
      cardNumber: "0264",
      date: "17/07/2022",
    },
    {
      category: "Groceries",
      item_name: "Vegetables",
      type: "expense",
      price: 20,
      cardNumber: "0264",
      date: "17/07/2022",
    },
  ],
  incomes: [],
}));

export default useStore;