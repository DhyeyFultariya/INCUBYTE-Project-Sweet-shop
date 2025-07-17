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

  // ---------- restock Sweet -----------
  restockSweet(id, quantity) {
    const sweet = this.sweets.find((sweet) => sweet.id === id);
    if (!sweet) {
      throw new Error("Sweet not found");
    }
    sweet.quantity += quantity;
  }

  // ---------- sort Sweet -----------
  sortSweets(criteria, order) {
    const validCriteria = ["name", "price", "quantity"];
    const validOrders = ["asc", "desc"];
    if (!validCriteria.includes(criteria)) {
      throw new Error("Invalid sort criteria");
    }
    if (!validOrders.includes(order)) {
      throw new Error("Invalid sort order");
    }

    const sorted = [...this.sweets].sort((a, b) => {
      let valueA = a[criteria];
      let valueB = b[criteria];
      if (criteria === "name") {
        valueA = valueA.toLowerCase();
        valueB = valueB.toLowerCase();
      }
      if (valueA < valueB) return order === "asc" ? -1 : 1;
      if (valueA > valueB) return order === "asc" ? 1 : -1;
      return 0;
    });
    return sorted;
  }
}

// Export
if (typeof module !== "undefined" && module.exports) {
  module.exports = SweetShop;
} else {
  window.SweetShop = SweetShop; // Make available in browser
}
