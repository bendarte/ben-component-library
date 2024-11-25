# Component Library

A modern React component library featuring reusable UI components built with Storybook and styled with Tailwind CSS.

## Available Components

### Button
- Primary, Submit, and Custom variants
- Configurable type and styling
- Built with Tailwind CSS using ui- prefix

### Input
- Optional icon support
- Customizable placeholder
- Responsive design
- Tailwind styling

### SearchBar
- Integrated search functionality
- Combines Input and Button components
- Customizable placeholder
- Search callback support

### Card
- Flexible content display
- Icon support
- Responsive design
- Multiple variants

## Tech Stack

- React
- Storybook 8.4.5
- Tailwind CSS
- PropTypes
- Vite

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run Storybook to view components:
```bash
npm run storybook
```

## Development

Components are located in `src/components/` with the following structure:
```
src/
  components/
    button/
    input/
    searchbar/
    card/
```

Each component has:
- Component file (*.jsx)
- Stories file (*.stories.jsx)
- PropTypes validation
- Tailwind styling with ui- prefix (prevents style conflicts when used in other projects)
