# Recipe Finder App

Welcome to the Recipe Finder App, a web application built with React and styled using TailwindCSS. This app offers a seamless experience for users to find recipes via the [dummyjson.com/recipes](https://dummyjson.com/recipes) API. It supports search functionality and filtering by difficulty and preparation time, showcasing a modern, responsive design.

## Getting Started

### Prerequisites

Before you start, ensure you have the following installed on your system:

- Node.js (v17.3.0 or higher recommended)
- npm (v8.3.0 or higher recommended)

### Installation

To set up the project locally, follow these steps:

1. Clone the repository to your machine.
2. Navigate to the project directory.
3. Install dependencies with `npm install`.
4. Launch the application in development mode by running `npm start`.

After starting the application, it should automatically open in your default browser

## About the Application

### Features

- **Search Functionality**: Users can search for recipes by name. The search results update dynamically based on the user's submission.
- **Filtering Options**: Recipes can be filtered by difficulty (easy, medium) and total time (quick, normal, long).
- **Responsive Layout**: A 3-column grid displays the search results, which adjusts based on the screen size for optimal viewing on all devices.
- **URL Parameters**: Users can directly navigate to a URL with specific search parameters to find recipes matching their criteria. For example, `http://localhost:3000/?search=chicken&difficulty=easy&time=normal`.

### Application Requirements

- A maximum of 8 recipes are displayed to the user at a time.
- The first item in the list is highlighted and occupies more space for emphasis.
- Users can apply three filters: text search, difficulty, and total time.
- The application allows for filtering by name, difficulty, and total time simultaneously, using one option per filter.

### Recipe Cards

- The first card in the search results spans two columns, providing a visual highlight. This layout adjusts for smaller screens to ensure readability.
- Each card displays the recipe name, an accompanying image, the difficulty level, and both the preparation and cook times.

## Bonus Concepts that were Considered

**What are some ways to go about making this search page accessible?**
This page can become more accessiblle by using clear labels, ensuring keyboards and screen readers are supported, and using semantic HTML tags.

Making this search page accessible involves using clear labels, ensuring keyboard and screen reader support, and employing semantic HTML.

**How would I make this page responsive on mobile?**
The application uses Tailwind's responsive classes to ensure a fluid experience across all device sizes.

**How would I handle page parameters being passed to the URL? (i.e. ?search=pizza&difficulty=easy)**
The app leverages React's `useEffect()` and `useLocation()` hooks to parse URL parameters and fetch relevant recipes when the parameters change.

## Notes & Thoughts

I added eslint to the project to mantain consistency and help with code quality.

Given more time I would address an issue where a user can go to a url like `http://localhost:3000/?price=300&fruit=orange` and still be presented with all the products.

I would also look for a way to refactor the `App.jsx` component to limit bloat and improve code readability and maintainability
