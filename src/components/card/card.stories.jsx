import { Card } from './card';

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    // Content
    children: {
      control: 'text',
      description: 'Card content',
      table: { category: 'Content' }
    },
    title: {
      control: 'text',
      description: 'Card title',
      table: { category: 'Content' }
    },
    subtitle: {
      control: 'text',
      description: 'Card subtitle',
      table: { category: 'Content' }
    },
    header: {
      control: 'text',
      description: 'Header content',
      table: { category: 'Content' }
    },
    footer: {
      control: 'text',
      description: 'Footer content',
      table: { category: 'Content' }
    },

    // Size and Layout
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Card size',
      table: { category: 'Size & Layout' }
    },
    padding: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Padding size',
      table: { category: 'Size & Layout' }
    },
    layout: {
      control: 'select',
      options: [null, 'col', 'col center', 'col between'],
      description: 'Layout style',
      table: { category: 'Size & Layout' }
    },

    // Typography
    fontSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Font size',
      table: { category: 'Typography' }
    },
    fontWeight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight',
      table: { category: 'Typography' }
    },

    // Appearance
    theme: {
      control: 'select',
      options: ['light', 'dark', 'primary', 'success', 'warning', 'danger'],
      description: 'Color theme',
      table: { category: 'Appearance' }
    },
    hover: {
      control: 'select',
      options: [null, 'lift', 'glow', 'color', 'scale'],
      description: 'Hover effect',
      table: { category: 'Appearance' }
    },
    shadow: {
      control: 'select',
      options: [null, 'default', 'large'],
      description: 'Shadow size',
      table: { category: 'Appearance' }
    },
    showBorder: {
      control: 'boolean',
      description: 'Show border',
      table: { category: 'Appearance' }
    },
    borderStyle: {
      control: 'select',
      options: ['default', 'thick', 'dashed'],
      description: 'Border style',
      table: { category: 'Appearance' }
    },
    customStyle: {
      control: 'object',
      description: 'Custom CSS styles',
      table: { category: 'Appearance' }
    }
  }
};

// Basic Card
export const Basic = {
  args: {
    title: 'Card Title',
    subtitle: 'Card Subtitle',
    children: 'This is a basic card with title and subtitle.',
    shadow: 'default'
  }
};

// All Themes
export const Themes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', padding: '1rem', background: '#f5f5f5' }}>
      <Card title="Light Theme" theme="light">Default light theme</Card>
      <Card title="Dark Theme" theme="dark">Dark theme variant</Card>
      <Card title="Primary Theme" theme="primary">Primary theme variant</Card>
      <Card title="Success Theme" theme="success">Success theme variant</Card>
      <Card title="Warning Theme" theme="warning">Warning theme variant</Card>
      <Card title="Danger Theme" theme="danger">Danger theme variant</Card>
    </div>
  )
};

// Typography Variants
export const Typography = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Card title="Small Font" fontSize="sm" fontWeight="normal">
        Small font with normal weight
      </Card>
      <Card title="Medium Font" fontSize="md" fontWeight="semibold">
        Medium font with semibold weight
      </Card>
      <Card title="Large Font" fontSize="lg" fontWeight="bold">
        Large font with bold weight
      </Card>
    </div>
  )
};

// Hover Effects
export const HoverEffects = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Card title="Lift Effect" hover="lift">
        Hover to lift up
      </Card>
      <Card title="Glow Effect" hover="glow">
        Hover to glow
      </Card>
      <Card title="Color Effect" hover="color">
        Hover to change brightness
      </Card>
      <Card title="Scale Effect" hover="scale">
        Hover to scale up
      </Card>
    </div>
  )
};

// Border Styles
export const Borders = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Card title="Default Border" showBorder={true}>
        Default border style
      </Card>
      <Card title="Thick Border" showBorder={true} borderStyle="thick">
        Thick border style
      </Card>
      <Card title="Dashed Border" showBorder={true} borderStyle="dashed">
        Dashed border style
      </Card>
    </div>
  )
};

// Layout Examples
export const Layouts = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Card 
        title="Column Layout"
        layout="col center"
        theme="primary"
        shadow="large"
      >
        <div>Top content</div>
        <div>Middle content</div>
        <div>Bottom content</div>
      </Card>
      <Card 
        title="Space Between"
        layout="col between"
        theme="success"
        shadow="large"
        style={{ height: '300px' }}
      >
        <div>Top content</div>
        <div>Middle content</div>
        <div>Bottom content</div>
      </Card>
    </div>
  )
};

// Fully Featured Example
export const FullyFeatured = {
  args: {
    title: '🎉 Featured Card',
    subtitle: 'Complete Example with All Features',
    theme: 'primary',
    size: 'large',
    padding: 'large',
    shadow: 'large',
    hover: 'lift',
    showBorder: true,
    borderStyle: 'thick',
    fontSize: 'lg',
    fontWeight: 'bold',
    layout: 'col center',
    header: 'Custom Header',
    footer: 'Custom Footer',
    children: 'This card showcases all available features including custom typography, borders, shadows, and layout.',
    customStyle: {
      '--card-radius': '16px',
      '--card-content-padding': '24px'
    }
  }
};