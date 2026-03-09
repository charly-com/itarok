# PWA Screenshots

Place your PWA screenshot files directly in this directory.

## Required Screenshots:

### 📱 **home.png** (1280×720 - Wide format)
- **Purpose**: Show the main app interface and navigation
- **Use case**: Desktop app stores, wide screen previews
- **Content**: Main menu, navigation options, app branding

### 📱 **lesson.png** (390×844 - Narrow format)
- **Purpose**: Show an active lesson with vocabulary cards
- **Use case**: Mobile app stores, phone previews
- **Content**: Lesson interface, word cards, progress indicators

## How to create screenshots:

1. **Run your app**: `npm run dev` → open `http://localhost:3000`
2. **Take screenshots** at the exact dimensions above
3. **Save as PNG** files with the exact names: `home.png` and `lesson.png`
4. **Place files** directly in this `screenshots/` directory

## Screenshot Guidelines:

- ✅ **High quality** PNG images
- ✅ **Exact dimensions** (don't crop or resize)
- ✅ **Clean interface** - no browser UI, no debugging tools
- ✅ **Representative content** - show real app functionality
- ✅ **Good contrast** - text should be readable
- ✅ **Branded** - include your app's visual identity

## File Structure:
```
public/
  screenshots/
    home.png      ← 1280×720 wide screenshot
    lesson.png    ← 390×844 narrow screenshot
    README.md     ← this file
```

The screenshots will be automatically included in your PWA manifest and displayed in app stores!