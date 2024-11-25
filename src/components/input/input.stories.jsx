import { Input } from './input';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    // Basic
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url', 'search', 'date'],
      description: 'Input type',
      table: { category: 'Basic' }
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      table: { category: 'Basic' }
    },

    // Appearance
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Input size',
      table: { category: 'Appearance' }
    },
    theme: {
      control: 'select',
      options: ['light', 'dark', 'primary'],
      description: 'Color theme',
      table: { category: 'Appearance' }
    },
    width: {
      control: 'select',
      options: ['auto', 'full'],
      description: 'Input width',
      table: { category: 'Appearance' }
    },

    // Style
    borderStyle: {
      control: 'select',
      options: [null, 'none', 'bottom', 'thick'],
      description: 'Border style',
      table: { category: 'Style' }
    },
    fontWeight: {
      control: 'select',
      options: [null, 'normal', 'medium', 'semibold'],
      description: 'Font weight',
      table: { category: 'Style' }
    },

    // States
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: { category: 'States' }
    },
    error: {
      control: 'boolean',
      description: 'Error state',
      table: { category: 'States' }
    },
    success: {
      control: 'boolean',
      description: 'Success state',
      table: { category: 'States' }
    },
    errorMessage: {
      control: 'text',
      description: 'Error message',
      table: { category: 'States' }
    },

    // Effects
    animate: {
      control: 'boolean',
      description: 'Animation on focus',
      table: { category: 'Effects' }
    }
  }
};

// Basic Input
export const Basic = {
  args: {
    placeholder: 'Enter text...',
    type: 'text'
  }
};

// Themes
export const Themes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <Input theme="light" placeholder="Light theme" />
      <Input theme="dark" placeholder="Dark theme" />
      <Input theme="primary" placeholder="Primary theme" />
    </div>
  )
};

// Sizes
export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <Input size="small" placeholder="Small input" />
      <Input size="medium" placeholder="Medium input" />
      <Input size="large" placeholder="Large input" />
    </div>
  )
};

// Border Styles
export const BorderStyles = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <Input borderStyle="none" placeholder="No border" />
      <Input borderStyle="bottom" placeholder="Bottom border only" />
      <Input borderStyle="thick" placeholder="Thick border" />
    </div>
  )
};

// States
export const States = {
  args: {
    type: "url",
    placeholder: "",
    error: true
  },
  render:() => (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <Input disabled placeholder="Disabled input" />
      <Input error errorMessage="This field is required" placeholder="Error state" />
      <Input success placeholder="Success state" />
    </div>
  )
};

// With Icons
export const WithIcons = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <Input
        iconLeft={<span>🔍</span>}
        placeholder="Search..."
      />
      <Input
        iconRight={<span>📧</span>}
        placeholder="Enter email..."
        type="email"
      />
      <Input
        iconLeft={<span>🔒</span>}
        iconRight={<span>👁</span>}
        placeholder="Enter password..."
        type="password"
      />
    </div>
  )
};

// Typography
export const Typography = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <Input fontWeight="normal" placeholder="Normal weight" />
      <Input fontWeight="medium" placeholder="Medium weight" />
      <Input fontWeight="semibold" placeholder="Semibold weight" />
    </div>
  )
};

// Animated
export const Animated = {
  args: {
    animate: true,
    placeholder: 'Focus to see animation',
    theme: 'primary'
  }
};

// Fully Featured
export const FullyFeatured = {
  args: {
    type: 'email',
    size: 'large',
    theme: 'primary',
    borderStyle: 'thick',
    fontWeight: 'medium',
    animate: true,
    iconLeft: <span>📧</span>,
    iconRight: <span>✓</span>,
    placeholder: 'Enter your email...',
    width: 'full'
  }
};