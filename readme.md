# TMDB Explorer

This is an Expo managed project.

## Getting Started

To use the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone git@github.com:goff-studio/tmdb-explorer.git
   ```
2. Navigate to the project directory:
   ```sh
   cd tmdb-explorer
   ```
3. Install the packages:
   ```sh
   yarn install
   ```
4. Get a TMDB API key and set it in `features/tmdb/api.ts`:
   ```typescript
   // features/tmdb/api.ts
   const API_KEY = 'YOUR_API_KEY'
   ```
5. Start the project:
   ```sh
   yarn start
   ```

## Project Structure

The directory structure is based on one of React's recommendations to group files by their features. More information
about this method can be found [here](https://legacy.reactjs.org/docs/faq-structure.html#grouping-by-features-or-routes)
.

## Networking and Caching

For networking, caching, and better error handling, the project uses `react-query` and `axios`.
Additionally, `react-query` and `async-storage` are used to implement the logic for storing data in local storage.

## Animations

For animations, the project uses `react-native-reanimated`. The animations use custom animated styles as well as
built-in animations for entering and exiting.

## Navigation

For navigation, the project uses `react-navigation`. The project uses bottom tabs as well as stacks. A simple custom tab
bar is implemented using `react-native-reanimated`.
