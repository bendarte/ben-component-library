# Ben Component Library

A modern, customizable React component library featuring beautiful UI components. Built with Storybook and styled with CSS modules for maximum flexibility and maintainability.

## 🎨 Features

- **Themeable Components**: Light, Dark, and Primary themes for all components
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Accessibility**: ARIA support and keyboard navigation
- **Modern Styling**: CSS Modules with CSS Variables for easy customization
- **Interactive Documentation**: Full Storybook integration with live examples

## 📦 Components

### Button
- Multiple themes (light, dark, primary)
- Size variants (small, medium, large)
- States (hover, focus, disabled, loading)
- Custom icons support
- Hover animations

### Card
- Flexible layout system
- Theme support
- Customizable borders and shadows
- Animation effects
- Header and footer sections
- Responsive behavior

### Input
- Theme variants
- Icon support (left/right)
- Validation states
- Clear button option
- Custom styling options
- Accessibility features

### SearchBar
- Advanced search functionality
- Loading states
- Clear button
- Custom themes
- Keyboard navigation
- Mobile optimization

## 🛠 Tech Stack

- React 18
- Storybook 8
- CSS Modules
- PropTypes
- Vite

## 🚀 Getting Started

1. Install the package:
```bash
npm install @my-components/component-library-modules
```

2. Import components:
```jsx
import { Button, Card, Input, SearchBar } from '@my-components/component-library-modules';
```

3. Use in your React app:
```jsx
function App() {
  return (
    <div>
      <Card theme="primary">
        <h2>Welcome!</h2>
        <Input placeholder="Enter your name" />
        <Button>Submit</Button>
      </Card>
    </div>
  );
}
```

## 💻 Development

1. Clone the repository:
```bash
git clone https://github.com/bendarte/ben-component-library.git
```

2. Install dependencies:
```bash
npm install
```

3. Start Storybook:
```bash
npm run storybook
```

## 📚 Documentation

Full documentation and live examples available in Storybook. Run `npm run storybook` and visit:
- Component API documentation
- Interactive examples
- Theme customization
- Accessibility guidelines
- Responsive demos

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## 📄 License

MIT © [Ben]
