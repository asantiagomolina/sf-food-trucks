# San Francisco Food Truck Explorer

This project was created using:
- [React + Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/)
- [TailwindCSS + PostCSS](https://tailwindcss.com/)
- [Eslint + Prettier](https://eslint.org/)
- [React Tooltip](https://react-tooltip.com/)
- [React Google Maps](https://visgl.github.io/react-google-maps/)
- [FontAwesome](https://fontawesome.com/)

Node version: [v20.16.0 (lts/iron)](https://nodejs.org/en/blog/release/v20.16.0)

# setup .env

.env file is included for convenience however VITE_MAPS_API_KEY would be provided over email for "security" reasons

```bash
VITE_FOOD_TRUCKS_API_ENDPOINT="https://data.sfgov.org/resource/rqzj-sfat.json"
VITE_MAPS_API_KEY="PASTE_API_KEY_HERE"
```

# run the server

```bash
  yarn
  yarn dev
```

# run the test

```bash
  yarn run test
```

## Improvements

- Improve Google maps interaction 
- Implement components Lazy loading 
- Implement FoodTrucksList Lazy List for cards
- Implement Error Boundaries
- Add more Test (only for redux so far)
- Missing/Better Typing
- Throttling/Debounce on changes

