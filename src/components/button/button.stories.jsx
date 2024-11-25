import { Button } from './button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    // Variant och grundläggande props
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      description: 'The visual style variant of the button',
      table: {
        category: 'Appearance'
      }
    },
    children: {
      control: 'text',
      description: 'The content inside the button',
      table: {
        category: 'Content'
      }
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'The type of the button',
      table: {
        category: 'Functionality'
      }
    },

    // Färger och utseende
    backgroundColor: {
      control: 'color',
      description: 'Custom background color',
      table: {
        category: 'Colors'
      }
    },
    textColor: {
      control: 'color',
      description: 'Custom text color',
      table: {
        category: 'Colors'
      }
    },
    borderColor: {
      control: 'color',
      description: 'Custom border color',
      table: {
        category: 'Colors'
      }
    },

    // Storlek och spacing
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Predefined size of the button',
      defaultValue: 'medium',
      table: {
        category: 'Size'
      }
    },
    padding: {
      control: 'object',
      description: 'Custom padding (px, rem, em)',
      defaultValue: { x: '24px', y: '12px' },
      table: {
        category: 'Size'
      }
    },

    // Border och effekter
    borderRadius: {
      control: 'text',
      description: 'Border radius (px, rem, em)',
      defaultValue: '8px',
      table: {
        category: 'Appearance'
      }
    },
    borderWidth: {
      control: 'text',
      description: 'Border width (px)',
      defaultValue: '2px',
      table: {
        category: 'Appearance'
      }
    },
    shadow: {
      control: 'boolean',
      description: 'Enable/disable shadow effect',
      defaultValue: true,
      table: {
        category: 'Effects'
      }
    },
    hoverEffect: {
      control: 'select',
      options: ['none', 'lift', 'glow', 'color'],
      description: 'Hover animation effect',
      defaultValue: 'lift',
      table: {
        category: 'Effects'
      }
    },

    // Typografi
    fontSize: {
      control: 'text',
      description: 'Custom font size (px, rem, em)',
      table: {
        category: 'Typography'
      }
    },
    fontWeight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight',
      table: {
        category: 'Typography'
      }
    }
  }
};

// Grundläggande varianter
export const Primary = {
  args: {
    children: 'Primary Button',
    variant: 'primary'
  }
};

export const Secondary = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary'
  }
};

export const Outline = {
  args: {
    children: 'Outline Button',
    variant: 'outline'
  }
};

// Storlekar
export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  )
};

// Fullt anpassningsbar
export const Playground = {
  args: {
    children: 'Customizable Button',
    variant: 'primary',
    size: 'medium',
    shadow: true,
    hoverEffect: 'lift',
    style: {
      backgroundColor: '#FF5733',
      color: 'white'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Experiment with all available customization options in the controls panel!'
      }
    }
  }
};

// Hover effekter
export const HoverEffects = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button hoverEffect="lift">Lift Effect</Button>
      <Button hoverEffect="glow">Glow Effect</Button>
      <Button hoverEffect="color">Color Effect</Button>
    </div>
  )
};

// Custom styling exempel
export const CustomStyled = {
  args: {
    children: '🎨 Styled Button',
    padding: { x: '32px', y: '16px' },
    borderRadius: '25px',
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: '#6366F1',
    textColor: '#ffffff',
    borderColor: '#4F46E5',
    shadow: true,
    hoverEffect: 'glow'
  }
};