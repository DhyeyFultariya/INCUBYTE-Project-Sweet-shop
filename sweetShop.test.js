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

  // get all sweets test
  test("should return all sweets", () => {
    sweetShop.addSweet(1001, "Kaju Katli", "Nut-Based", 50, 20);
    sweetShop.addSweet(1002, "Gajar Halwa", "Vegetable-Based", 30, 15);
    expect(sweetShop.getSweets().length).toBe(2);
  });

  // delete sweet test
  test("should delete a sweet by ID", () => {
    sweetShop.addSweet(1001, "Kaju Katli", "Nut-Based", 50, 20);
    sweetShop.deleteSweet(1001);
    expect(sweetShop.getSweets().length).toBe(0);
  });

  // delete sweet when sweet not found test
  test("should throw error when deleting non-existent sweet", () => {
    expect(() => sweetShop.deleteSweet(9999)).toThrow("Sweet not found");
  });

  // search sweets by name test
  test("should search sweets by name", () => {
    sweetShop.addSweet(1001, "Kaju Katli", "Nut-Based", 50, 20);
    sweetShop.addSweet(1002, "Gajar Halwa", "Vegetable-Based", 30, 15);
    const results = sweetShop.searchSweets("name", "Kaju");
    expect(results.length).toBe(1);
    expect(results[0].name).toBe("Kaju Katli");
  });

  // search sweets by category test
  test("should search sweets by category", () => {
    sweetShop.addSweet(1001, "Kaju Katli", "Nut-Based", 50, 20);
    sweetShop.addSweet(1002, "Gulab Jamun", "Milk-Based", 10, 50);
    const results = sweetShop.searchSweets("category", "Nut-Based");
    expect(results.length).toBe(1);
    expect(results[0].category).toBe("Nut-Based");
  });

  // search sweets by price range test
  test("should search sweets by price range", () => {
    sweetShop.addSweet(1001, "Kaju Katli", "Nut-Based", 50, 20);
    sweetShop.addSweet(1002, "Gulab Jamun", "Milk-Based", 10, 50);
    const results = sweetShop.searchSweets("price", { min: 0, max: 20 });
    expect(results.length).toBe(1);
    expect(results[0].name).toBe("Gulab Jamun");
  });

  // purchase sweets test
  test("should purchase sweets and decrease quantity", () => {
    sweetShop.addSweet(1001, "Kaju Katli", "Nut-Based", 50, 20);
    sweetShop.purchaseSweet(1001, 5);
    expect(sweetShop.getSweets()[0].quantity).toBe(15);
  });

  // purchase sweets with invalid quantity test
  test("should throw error when purchasing more than stock", () => {
    sweetShop.addSweet(1001, "Kaju Katli", "Nut-Based", 50, 20);
    expect(() => sweetShop.purchaseSweet(1001, 25)).toThrow("Not enough stock");
  });

  // restock sweets test
  test("should restock sweets and increase quantity", () => {
    sweetShop.addSweet(1001, "Kaju Katli", "Nut-Based", 50, 20);
    sweetShop.restockSweet(1001, 10);
    expect(sweetShop.getSweets()[0].quantity).toBe(30);
  });

  // restock sweets with non-existent sweet test
  test("should throw error when restocking non-existent sweet", () => {
    expect(() => sweetShop.restockSweet(9999, 10)).toThrow("Sweet not found");
  });

  // sort sweets by name in ascending order test
  test("should sort sweets by name in ascending order", () => {
    sweetShop.addSweet(1001, "Kaju Katli", "Nut-Based", 50, 20);
    sweetShop.addSweet(1002, "Gajar Halwa", "Vegetable-Based", 30, 15);
    sweetShop.addSweet(1003, "Gulab Jamun", "Milk-Based", 10, 50);
    const sorted = sweetShop.sortSweets("name", "asc");
    expect(sorted.map((s) => s.name)).toEqual([
      "Gajar Halwa",
      "Gulab Jamun",
      "Kaju Katli",
    ]);
  });

  // sort sweets by price in descending order test
  test("should sort sweets by price in descending order", () => {
    sweetShop.addSweet(1001, "Kaju Katli", "Nut-Based", 50, 20);
    sweetShop.addSweet(1002, "Gajar Halwa", "Vegetable-Based", 30, 15);
    sweetShop.addSweet(1003, "Gulab Jamun", "Milk-Based", 10, 50);
    const sorted = sweetShop.sortSweets("price", "desc");
    expect(sorted.map((s) => s.price)).toEqual([50, 30, 10]);
  });

  // sort sweets by quantity in ascending order test
  test("should sort sweets by quantity in ascending order", () => {
    sweetShop.addSweet(1001, "Kaju Katli", "Nut-Based", 50, 20);
    sweetShop.addSweet(1002, "Gajar Halwa", "Vegetable-Based", 30, 15);
    sweetShop.addSweet(1003, "Gulab Jamun", "Milk-Based", 10, 50);
    const sorted = sweetShop.sortSweets("quantity", "asc");
    expect(sorted.map((s) => s.quantity)).toEqual([15, 20, 50]);
  });

  // sort sweets with invalid criteria test
  test("should throw error for invalid sort criteria", () => {
    expect(() => sweetShop.sortSweets("invalid", "asc")).toThrow(
      "Invalid sort criteria"
    );
  });

  // sort sweets with invalid order test
  test("should throw error for invalid sort order", () => {
    expect(() => sweetShop.sortSweets("name", "invalid")).toThrow(
      "Invalid sort order"
    );
  });
});
