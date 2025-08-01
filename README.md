# Ncinga Logo

A React component that displays the animated Ncinga logo with transparent background support.

## ✨ Features

- 🎬 **Animated GIF logo** - Smooth animation playback
- 🎨 **Transparent background** - Seamlessly blends with any background
- 📦 **Embedded asset** - No external dependencies or path issues
- 🔧 **Fully customizable** - Size, styling, and behavior options
- 💪 **TypeScript support** - Full type definitions included
- 📱 **Responsive** - Works on all screen sizes

## Installation

```bash
npm install ncinga-logo
```

## Usage

### Basic Usage (Transparent Background)
```tsx
import React from 'react';
import { GifDisplay } from 'ncinga-logo';

function App() {
  return (
    <div style={{ background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)' }}>
      {/* Logo will blend seamlessly with the gradient */}
      <GifDisplay 
        width={200} 
        height={200} 
      />
    </div>
  );
}

export default App;
```

### With Shadow Effect
```tsx
import React from 'react';
import { GifDisplay } from 'ncinga-logo';

function App() {
  return (
    <div>
      <GifDisplay 
        width={200} 
        height={200}
        showShadow={true} // Adds a subtle drop shadow
        className="my-logo"
      />
    </div>
  );
}

export default App;
```

### Custom Styling
```tsx
import React from 'react';
import { GifDisplay } from 'ncinga-logo';

function App() {
  return (
    <div>
      <GifDisplay 
        width={300} 
        height={300}
        className="custom-logo"
        alt="Custom Ncinga Logo"
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes |
| `width` | `number` | `undefined` | Image width in pixels |
| `height` | `number` | `undefined` | Image height in pixels |
| `alt` | `string` | `'Ncinga Logo Animation'` | Alt text for accessibility |
| `gifSrc` | `string` | `undefined` | Custom GIF URL (when useEmbedded=false) |
| `useEmbedded` | `boolean` | `true` | Use embedded GIF vs external source |
| `showShadow` | `boolean` | `false` | Add drop shadow effect |

## 🎨 Transparency Support

The Ncinga logo has a **transparent background** and will seamlessly blend with any background:

- ✅ Gradient backgrounds
- ✅ Pattern backgrounds  
- ✅ Image backgrounds
- ✅ Dark themes
- ✅ Light themes
- ✅ Complex layouts

## 📱 Responsive Example

```tsx
import React from 'react';
import { GifDisplay } from 'ncinga-logo';
import './App.css';

function ResponsiveLogo() {
  return (
    <div className="logo-container">
      <GifDisplay className="responsive-logo" />
    </div>
  );
}

// CSS
.logo-container {
  display: flex;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
}

.responsive-logo img {
  width: 150px;
  height: 150px;
}

@media (min-width: 768px) {
  .responsive-logo img {
    width: 200px;
    height: 200px;
  }
}

@media (min-width: 1024px) {
  .responsive-logo img {
    width: 250px;
    height: 250px;
  }
}
```

## 🎯 Common Use Cases

### Header Logo
```tsx
<header style={{ background: '#2c3e50', padding: '1rem' }}>
  <GifDisplay width={120} height={120} />
</header>
```

### Loading Screen
```tsx
<div style={{ 
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}}>
  <GifDisplay width={200} height={200} />
</div>
```

### Footer Branding
```tsx
<footer style={{ background: '#34495e', color: 'white' }}>
  <GifDisplay width={80} height={80} />
</footer>
```

## License

ISC
