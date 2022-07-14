import create from 'zustand';

const useStore = create((set) => ({
  userData: {
    firstName: "Jane",
    lastName: "Doe",
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
        balance: 8789.40,
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
  },
}));

export default useStore;