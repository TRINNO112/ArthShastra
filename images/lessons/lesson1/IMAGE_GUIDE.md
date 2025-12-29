# Images Guide for Lesson 1: Economics and Economies

## Where to Place Images

Place all lesson 1 images in this folder:
`public/images/lessons/lesson1/`

## Recommended Images to Add

### 1. **ppc-curve.png** - Production Possibility Curve
- Shows the trade-off between two goods
- Should show a downward sloping curve
- Label axes: Good X and Good Y
- Show points on, inside, and outside the curve
**Use in:** Economic Problem section

### 2. **scarcity-diagram.png** - Scarcity Concept
- Visual showing unlimited wants vs limited resources
- Use icons: multiple people (wants) vs few resources (coins, land, etc.)
**Use in:** Economic Problem section

### 3. **circular-flow.png** - Circular Flow of Economy
- Simple 2-sector model showing households and firms
- Arrows showing flow of goods, services, money
**Use in:** Introduction section

### 4. **micro-vs-macro.png** - Comparison Visual
- Split image showing:
  - Left: Single tree (Microeconomics)
  - Right: Entire forest (Macroeconomics)
**Use in:** Microeconomics vs Macroeconomics section

### 5. **opportunity-cost.png** - Opportunity Cost Concept
- Visual showing choice between two options
- Arrow pointing to "cost" of choosing one over another
**Use in:** Problem of Choice section

### 6. **economy-types.png** - Three Types of Economies
- Three circles or panels showing:
  - Controlled (Government building icon)
  - Market (Free market/shops icon)
  - Mixed (Both combined)
**Use in:** Types of Economies section

### 7. **central-problems.png** - Three Central Problems
- Triangle diagram with three questions:
  - What to produce?
  - How to produce?
  - For whom to produce?
**Use in:** Problem of Choice section

### 8. **supply-demand.png** - Basic Supply-Demand Curve
- Classic X-shaped intersection
- Label equilibrium point
**Use in:** Market Economy section (optional)

## How to Add Images to Code

In `PremiumLesson1.jsx`, add images like this:

```jsx
<div className="lesson-image">
  <img
    src="/images/lessons/lesson1/ppc-curve.png"
    alt="Production Possibility Curve"
  />
  <p className="image-caption">
    Production Possibility Curve showing trade-offs
  </p>
</div>
```

## Where to Find/Create These Images

### Option 1: Create Your Own (Recommended)
- Use **Canva** (free) - canva.com
- Use **Excalidraw** (free) - excalidraw.com
- Use **Draw.io** (free) - draw.io

### Option 2: AI Image Generation
- Use **Microsoft Designer** (free with Bing)
- Use **Leonardo.ai** (free tier available)
- Prompt: "Simple economics diagram showing [concept], clean minimal style, educational"

### Option 3: Free Resources
- **Unsplash** - unsplash.com (high-quality free images)
- **Pexels** - pexels.com (free stock photos)
- **Pixabay** - pixabay.com (free images)

### Option 4: Screenshot from YouTube
- Search "Economics diagrams" on YouTube
- Find educational videos with clear diagrams
- Screenshot and crop the diagram
- Give credit if using

## Image Specifications

- **Format:** PNG (for diagrams with transparency) or JPG (for photos)
- **Size:** 800-1200px width (will auto-resize)
- **File size:** Keep under 200KB for fast loading
- **Style:** Clean, minimal, professional
- **Colors:** Match your theme (dark backgrounds work better)

## Quick Steps to Add Images

1. **Create/Download** your image
2. **Save** it in `public/images/lessons/lesson1/`
3. **Name** it appropriately (e.g., `ppc-curve.png`)
4. **Reference** it in the code: `/images/lessons/lesson1/ppc-curve.png`
5. **Test** by running `npm run dev`

## Styling Already Added in CSS

The CSS file (`PremiumLesson.css`) already has image styling:

```css
.lesson-image {
  /* Styles for image container */
}

.lesson-image img {
  /* Styles for the image */
}

.image-caption {
  /* Styles for caption below image */
}
```

You just need to add the HTML in the JSX file!

## Example in Code

Look for `{/* ADD IMAGE HERE */}` comments in `PremiumLesson1.jsx` - those mark where images should go.
