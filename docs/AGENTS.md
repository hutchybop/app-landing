# Agent Guidelines for Longrunner Landing App

## Commands

- **Lint**: `npm run lint` (ESLint with Prettier integration)
- **Fix linting**: `npm run lint:fix`
- **Start server**: `node app.js` (runs on port 3000)
- **No test framework** - manual testing required

## Code Style Guidelines

### Imports & Structure

- External imports first, then local imports (see app.js:5-16)
- Use CommonJS require() for Node.js files, ES modules for public assets
- Group related imports with comments

### Naming Conventions

- **Files**: kebab-case for most files, PascalCase for classes (ExpressError.js)
- **Variables**: camelCase
- **Functions**: camelCase for controllers, descriptive names
- **Constants**: UPPER_SNAKE_CASE for environment variables

### Error Handling

- Use ExpressError class for custom errors (utils/ExpressError.js)
- Centralized error handling via utils/errorHandler.js
- Always pass statusCode with error messages

### Code Organization

- Controllers in /controllers, utilities in /utils
- Public assets separated by type (javascripts/, stylesheets/, images/)
- EJS templates in /views with partials for reusable components

### ESLint Configuration

- Node.js environment for server files, browser for public assets
- Prettier integration for consistent formatting
- EJS templates ignored by linter
