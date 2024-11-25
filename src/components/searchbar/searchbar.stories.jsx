import { SearchBar } from './searchbar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
  argTypes: {
    // Basic
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      table: { category: 'Basic' }
    },
    onSearch: {
      action: 'searched',
      description: 'Callback when search is triggered',
      table: { category: 'Basic' }
    },
    onChange: {
      action: 'changed',
      description: 'Callback on input change',
      table: { category: 'Basic' }
    },

    // Appearance
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'SearchBar size',
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
      description: 'SearchBar width',
      table: { category: 'Appearance' }
    },
    rounded: {
      control: 'boolean',
      description: 'Rounded corners',
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

    // Icons
    searchIcon: {
      control: 'text',
      description: 'Search icon',
      table: { category: 'Icons' }
    },
    clearIcon: {
      control: 'text',
      description: 'Clear icon',
      table: { category: 'Icons' }
    },
    loadingIcon: {
      control: 'text',
      description: 'Loading icon',
      table: { category: 'Icons' }
    },

    // States
    loading: {
      control: 'boolean',
      description: 'Loading state',
      table: { category: 'States' }
    },
    clearable: {
      control: 'boolean',
      description: 'Show clear button',
      table: { category: 'States' }
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
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

// Basic SearchBar
export const Basic = {
  args: {
    placeholder: 'Search...',
  },
  parameters: {
    docs: {
      source: {
        code: '<SearchBar placeholder="Search..." />'
      },
    },
  }
};

// Themes
export const Themes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <SearchBar theme="light" placeholder="Light theme" />
      <SearchBar theme="dark" placeholder="Dark theme" />
      <SearchBar theme="primary" placeholder="Primary theme" />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<SearchBar theme="light" placeholder="Light theme" />
<SearchBar theme="dark" placeholder="Dark theme" />
<SearchBar theme="primary" placeholder="Primary theme" />
        `
      },
    },
  }
};

// Sizes
export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <SearchBar size="small" placeholder="Small searchbar" />
      <SearchBar size="medium" placeholder="Medium searchbar" />
      <SearchBar size="large" placeholder="Large searchbar" />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<SearchBar size="small" placeholder="Small searchbar" />
<SearchBar size="medium" placeholder="Medium searchbar" />
<SearchBar size="large" placeholder="Large searchbar" />
        `
      },
    },
  }
};

// Border Styles
export const BorderStyles = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <SearchBar borderStyle="none" placeholder="No border" />
      <SearchBar borderStyle="bottom" placeholder="Bottom border only" />
      <SearchBar borderStyle="thick" placeholder="Thick border" />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<SearchBar borderStyle="none" placeholder="No border" />
<SearchBar borderStyle="bottom" placeholder="Bottom border only" />
<SearchBar borderStyle="thick" placeholder="Thick border" />
        `
      },
    },
  }
};

// States
export const States = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <SearchBar loading placeholder="Loading state" />
      <SearchBar disabled placeholder="Disabled state" />
      <SearchBar clearable={false} placeholder="No clear button" />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<SearchBar loading placeholder="Loading state" />
<SearchBar disabled placeholder="Disabled state" />
<SearchBar clearable={false} placeholder="No clear button" />
        `
      },
    },
  }
};

// Custom Icons
export const CustomIcons = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <SearchBar 
        searchIcon="🔎"
        clearIcon="❌"
        loadingIcon="🔄"
        loading
        placeholder="Custom icons"
      />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<SearchBar 
  searchIcon="🔎"
  clearIcon="❌"
  loadingIcon="🔄"
  loading
  placeholder="Custom icons"
/>
        `
      },
    },
  }
};

// Rounded
export const Rounded = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <SearchBar rounded placeholder="Rounded searchbar" />
      <SearchBar rounded theme="primary" placeholder="Rounded with theme" />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<SearchBar rounded placeholder="Rounded searchbar" />
<SearchBar rounded theme="primary" placeholder="Rounded with theme" />
        `
      },
    },
  }
};

// Animated
export const Animated = {
  args: {
    animate: true,
    placeholder: 'Focus to see animation',
    theme: 'primary'
  },
  parameters: {
    docs: {
      source: {
        code: '<SearchBar animate theme="primary" placeholder="Focus to see animation" />'
      },
    },
  }
};

// Fully Featured
export const FullyFeatured = {
  args: {
    size: 'large',
    theme: 'primary',
    borderStyle: 'thick',
    fontWeight: 'semibold',
    rounded: true,
    animate: true,
    searchIcon: '🔍',
    clearIcon: '✨',
    loadingIcon: '🔄',
    placeholder: 'Type to search...',
    width: 'full'
  },
  parameters: {
    docs: {
      source: {
        code: `
<SearchBar
  size="large"
  theme="primary"
  borderStyle="thick"
  fontWeight="semibold"
  rounded
  animate
  searchIcon="🔍"
  clearIcon="✨"
  loadingIcon="🔄"
  placeholder="Type to search..."
  width="full"
/>
        `
      },
    },
  }
};