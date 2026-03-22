# Partner Logos

This directory is for storing partner company logos for the RBS Global Ventures website.

## How to Add Partner Logos

### 1. Download Logos Manually

Visit each partner website and download their logos:

1. **Agni Steels** - https://agnisteels.com/
2. **Arise Steel** - https://www.arisesteel.com/
3. **Metstar** - https://metstar.in/
4. **Ambica Steels** - https://ambicasteels.com/
5. **DCW Limited** - https://dcwltd.com/
6. **NLC India** - https://www.nlcindia.in/
7. **VinFast Auto** - https://vinfastauto.in/en
8. **Palladam Steels** - (website URL needed)

### 2. Save Logos in This Directory

Save each logo with a standardized name format:
- `agni-steels.png` or `agni-steels.svg`
- `arise-steel.png` or `arise-steel.svg`
- `metstar.png` or `metstar.svg`
- `ambica-steels.png` or `ambica-steels.svg`
- `dcw-limited.png` or `dcw-limited.svg`
- `nlc-india.png` or `nlc-india.svg`
- `vinfast-auto.png` or `vinfast-auto.svg`
- `palladam-steels.png` or `palladam-steels.svg`

### 3. Recommended Logo Specifications

- **Format**: PNG (with transparent background) or SVG
- **Dimensions**: 200x200 pixels minimum
- **File Size**: Keep under 100KB for optimal loading
- **Color**: Original brand colors (code will handle grayscale/hover effects)

### 4. Update the Partners Component

Once logos are added, update `src/app/components/Partners.tsx` to use the actual images:

```tsx
// Replace the gradient icon divs with:
<div className="w-16 h-16 mx-auto mb-3 relative">
  <img
    src="/partners/agni-steels.png"
    alt="Agni Steels"
    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all"
  />
</div>
```

### 5. Public Directory Setup

Make sure the logos are accessible by placing them in the public directory:
- Move logos to `public/partners/` directory for production
- Update import paths accordingly

## Current Status

Currently using gradient-colored icon placeholders in the Partners component. Replace with actual logos for production deployment.

## Notes

- Logos should be high-quality and represent the brands accurately
- Consider having both light and dark versions if needed
- Test hover effects and responsiveness after adding real logos

