class SweetShop {
  constructor() {
    this.sweets = [];
  }

  // ---------- add Sweet -----------
  addSweet(id, name, category, price, quantity) {
    if (this.sweets.some((sweet) => sweet.id === id)) {
      throw new Error("Sweet with this ID already exists");
    }
    this.sweets.push({ id, name, category, price, quantity });
  }

  // ---------- get all sweets -----------
  getSweets() {
    return this.sweets;
  }

  // ---------- delete Sweet -----------
  deleteSweet(id) {
    const index = this.sweets.findIndex((sweet) => sweet.id === id);
    if (index === -1) {
      throw new Error("Sweet not found");
    }
    this.sweets.splice(index, 1);
  }

  // ---------- search Sweet -----------
  searchSweets(criteria, value) {
    if (criteria === "name") {
      return this.sweets.filter((sweet) =>
        sweet.name.toLowerCase().includes(value.toLowerCase())
      );
    } else if (criteria === "category") {
      return this.sweets.filter(
        (sweet) => sweet.category.toLowerCase() === value.toLowerCase()
      );
    } else if (criteria === "price") {
      return this.sweets.filter(
        (sweet) => sweet.price >= value.min && sweet.price <= value.max
      );
    }
    return [];
  }

  // ---------- purchase Sweet -----------
  purchaseSweet(id, quantity) {
    const sweet = this.sweets.find((sweet) => sweet.id === id);
    if (!sweet) {
      throw new Error("Sweet not found");
    }
    if (sweet.quantity < quantity) {
      throw new Error("Not enough stock");
    }
    sweet.quantity -= quantity;
  }
}

// Export
if (typeof module !== "undefined" && module.exports) {
  module.exports = SweetShop;
} else {
  window.SweetShop = SweetShop; // Make available in browser
}
