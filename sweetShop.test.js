const SweetShop = require("./sweetShop");

describe("SweetShop", () => {
  let sweetShop;

  // Initialize SweetShop before each test
  beforeEach(() => {
    sweetShop = new SweetShop();
  });

  // add sweet test
  test("should add a sweet with valid details", () => {
    sweetShop.addSweet(1001, "Kaju Katli", "Nut-Based", 500, 20);
    const sweets = sweetShop.getSweets();
    expect(sweets.length).toBe(1);
    expect(sweets[0]).toEqual({
      id: 1001,
      name: "Kaju Katli",
      category: "Nut-Based",
      price: 500,
      quantity: 20,
    });
  });

  // add sweet with same id test
  test("should throw error when adding sweet with duplicate ID", () => {
    sweetShop.addSweet(1001, "Kaju Katli", "Nut-Based", 50, 20);
    expect(() =>
      sweetShop.addSweet(1001, "Gulab Jamun", "Milk-Based", 10, 50)
    ).toThrow("Sweet with this ID already exists");
  });

  
});
