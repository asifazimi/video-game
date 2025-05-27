# Game Explorer - Game Search App

A responsive and interactive React + TypeScript application for exploring Android Indie Games. Users can search, filter by genre or platform, and sort games based on various criteria such as name, popularity, or release date.

---

## Tech Stack

- **Framework**: [React.js](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Chakra UI](https://chakra-ui.com/)
- **Data Fetching**: [React Query](https://tanstack.com/query/latest)
- **State Management**: Context API & React Query
- **Routing**: React Router DOM
- **Bundler**: [Vite](https://vitejs.dev/)

---

## Project Structure

```
.vscode/             # VS Code settings
dist/                # Build output
node_modules/        # Project dependencies
public/              # Static assets
src/
├── assets/          # Images and media files
├── components/      # Reusable UI components
├── data/            # Static data or mock data
├── hooks/           # Custom React hooks
├── services/        # API service logic
├── App.tsx          # Main app component
├── index.css        # Global styles
├── main.tsx         # Entry point
├── test.ts          # Test file (if any)
├── vite-env.d.ts    # Vite TypeScript config
```

---

## Features

- Browse Android indie games by genre
- Filter by platform (Android, iOS, PC, Console, etc.)
- Sort by:
- Name
- Release Date
- Relevance
- Popularity
- Rating
- Search bar for finding games by name
- Fully responsive and mobile-friendly design
- Data fetching and caching using React Query
- State sharing across components using Context API

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/asifazimi/video-game.git
cd vidoe-game
```

### 2. Install dependencies

```bash
npm install
# or
yarn
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

### 4. Build the project

```bash
npm run build
# or
yarn build
```

### 5. Preview the production build

```bash
npm run preview
# or
yarn preview
```

---

### Clean Code

- It is always a good idea to organize the imports, with organize imports shorcut
- To avoid duplication of imports, we can use reference to go and check out where the import is used, so if not used anywhere in the code, we can delete it.

---

## Demo

- Sidebar with genre categories
- Filterable and sortable grid of games
- Cross-platform icons and rating badges
- Search functionality at the top
- Fully dark-themed and Chakra UI styled

---

## Notes

- Ensure you have **Node.js** and **npm/yarn** installed.
- The project uses **Vite** for fast development and build times.
- TypeScript ensures better maintainability and type safety.

---

## Contributions

Feel free to fork, open issues, or submit pull requests.
