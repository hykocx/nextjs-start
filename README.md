# @hykocx/nextjs-start

A Next.js starter template with Tailwind CSS and custom configuration.

## Usage

Create a new Next.js project with this template:

```bash
npx @hykocx/nextjs-start
```

This command will:
1. Initialize a new Next.js project with Tailwind CSS
2. Configure path aliases (@-imports)
3. Disable dev indicators
4. Add custom template files and components
5. Set up favicon generation script

## What's Included

- **Next.js** with App Router
- **Tailwind CSS v4** with custom theme
- **Path aliases** configured (`@*` maps to root)
- **Favicon generation** script with SVG support
- **Screenshot placeholder** for documentation

## After Installation

```bash
# Install dependencies (if not already done)
npm install

# Start development server
npm run dev

# Generate favicon from SVG
npm run make-favicon
```