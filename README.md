# Sweet Shop Management System

A simple web-based Sweet Shop Management System built with HTML, JavaScript, and Tailwind CSS, following Test-Driven Development (TDD) with Jest for testing.

## Features

1. Add new sweets with ID, name, category, price, and quantity.
2. Delete sweets by ID.

View all available sweets in a table.

1. Search sweets by name, category, or price range.
2. Purchase sweets, reducing stock quantity.
3. Restock sweets, increasing stock quantity.
4. Responsive frontend with Tailwind CSS.

## Setup Instructions

1. **Install Node.js**: Download and install from nodejs.org.

2. **Clone the Repository**:

   ```bash
   git clone https://github.com/DhyeyFultariya/INCUBYTE-Project-Sweet-shop.git
   cd INCUBYTE-Project-Sweet-shop
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Run Tests**:

   ```bash
   npx jest
   ```

5. **Run the Website**:

   - Open `index.html` in a browser, or use a local server:

     ```bash
     npx http-server
     ```

   - Access at `http://localhost:8080`.

## Testing

- Tests are written using Jest in `sweetShop.test.js`.
- Run tests with `npx jest` to verify functionality.
- Tests cover adding, deleting, viewing, searching, purchasing, and restocking sweets.

## Git Workflow

- Initialize: `git init`
- Add README: `git add README.md && git commit -m "Initial commit with README"`
- For each feature:
  - Write test: `git add . && git commit -m "Add test for [feature]"`
  - Implement: `git add . && git commit -m "AI: Implement [feature]"`
- Push: `git push -u origin main`

## Notes

- Built with TDD, ensuring high test coverage.
- Clean, maintainable code following SOLID principles.
- AI used for code generation, marked in commits (e.g., "AI: Implement sort sweet feature").
