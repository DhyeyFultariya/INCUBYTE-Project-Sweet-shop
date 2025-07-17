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
  test('should search sweets by name', () => {
    sweetShop.addSweet(1001, 'Kaju Katli', 'Nut-Based', 50, 20);
    sweetShop.addSweet(1002, 'Gajar Halwa', 'Vegetable-Based', 30, 15);
    const results = sweetShop.searchSweets('name', 'Kaju');
    expect(results.length).toBe(1);
    expect(results[0].name).toBe('Kaju Katli');
  });

  // search sweets by category test
  test('should search sweets by category', () => {
    sweetShop.addSweet(1001, 'Kaju Katli', 'Nut-Based', 50, 20);
    sweetShop.addSweet(1002, 'Gulab Jamun', 'Milk-Based', 10, 50);
    const results = sweetShop.searchSweets('category', 'Nut-Based');
    expect(results.length).toBe(1);
    expect(results[0].category).toBe('Nut-Based');
  });

  // search sweets by price range test
  test('should search sweets by price range', () => {
    sweetShop.addSweet(1001, 'Kaju Katli', 'Nut-Based', 50, 20);
    sweetShop.addSweet(1002, 'Gulab Jamun', 'Milk-Based', 10, 50);
    const results = sweetShop.searchSweets('price', { min: 0, max: 20 });
    expect(results.length).toBe(1);
    expect(results[0].name).toBe('Gulab Jamun');
  });

});
