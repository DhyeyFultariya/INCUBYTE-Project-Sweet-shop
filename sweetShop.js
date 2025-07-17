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
    const index = this.sweets.findIndex(sweet => sweet.id === id);
    if (index === -1) {
      throw new Error('Sweet not found');
    }
    this.sweets.splice(index, 1);
  }

  
}

// Export
if (typeof module !== "undefined" && module.exports) {
  module.exports = SweetShop;
} else {
  window.SweetShop = SweetShop; // Make available in browser
}
