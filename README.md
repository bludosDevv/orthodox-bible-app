# Orthodox Patristic Bible App

A beautiful, fully-featured Orthodox Bible application with complete NKJV Bible, Church Father commentary, catechism books, and saints directory. Built with pure HTML, CSS, and JavaScript with glassmorphism design and Byzantine color palette.

## ✨ Features

### 🏠 Home Page
- **Daily Reading Streak** - Track your reading consistency
- **Daily Bible Verse** - Rotating daily verses from Scripture
- **Daily Church Father Quote** - Wisdom from Orthodox saints
- **Book Recommendations** - Suggested Orthodox theological works with PDF links

### 📖 Bible Page
- **Complete NKJV Bible** - All 66 books with 31,000+ verses
- **Chapter Navigation** - Easy chapter and verse selection
- **Search Functionality** - Search across entire Bible
- **Church Father Commentary** - Click any verse to see patristic interpretation
- **Testament Filtering** - View Old Testament or New Testament books

### ✝️ Catechism Page
- **Orthodox Dogmatic Theology** - Metropolitan Macarius
- **On the Incarnation** - Saint Athanasius
- **On the Holy Spirit** - Saint Basil the Great
- **Exact Exposition of the Orthodox Faith** - Saint John of Damascus

### ⛪ Saints Page
- **Church Father Profiles** - Detailed information about Orthodox saints
- **Saint Biographies** - Life and teachings of venerable saints
- **Feast Days** - Historical periods and commemorations

## 🎨 Design Features

- **Glassmorphism UI** - Frosted glass effects with backdrop blur
- **Byzantine Color Palette** - Gold, purple, red, and blue inspired by Byzantine art
- **Smooth Animations** - Floating elements, bouncing icons, and transitions
- **Dark/Light Theme** - Toggle between light and dark modes
- **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- **Bottom Navigation** - Easy access to all sections on mobile

## 🚀 Quick Start

### Option 1: Open Locally
1. Extract the project files
2. Open `index.html` in your web browser
3. Done! No server required

### Option 2: Run Local Server
```bash
# Navigate to project directory
cd orthodox-bible-app

# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## 📁 Project Structure

```
orthodox-bible-app/
├── index.html          # Main HTML file with page structure
├── styles.css          # Glassmorphism styles and animations
├── app.js              # Main application logic
├── bible-data.json     # Complete NKJV Bible (5.3MB)
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## 🔧 Customization

### Change Colors
Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-gold: #D4AF37;
    --primary-purple: #4A148C;
    --primary-red: #8B0000;
    --primary-blue: #003366;
}
```

### Add More Saints
Edit the `orthodoxSaints` array in `app.js`:

```javascript
const orthodoxSaints = [
    {
        name: 'Saint Name',
        title: 'Position',
        icon: '✨',
        bio: 'Biography...',
        period: '300-400 AD'
    }
];
```

### Add More Catechism Books
Edit `catechismBooks` and `catechismContent` in `app.js`:

```javascript
const catechismBooks = [
    {
        id: 5,
        title: 'New Book',
        author: 'Author Name',
        category: 'Category'
    }
];

const catechismContent = {
    5: `<h3>Title</h3><p>Content...</p>`
};
```

### Add Church Father Commentary
Edit `patristicInterpretations` in `app.js`:

```javascript
const patristicInterpretations = {
    'John 1:1': 'Saint John Chrysostom: "Commentary text..."'
};
```

## 📱 Responsive Breakpoints

- **Desktop** (> 1024px) - Full layout with sidebars
- **Tablet** (768px - 1024px) - Adjusted grid layout
- **Mobile** (< 768px) - Single column with bottom navigation

## 🌐 Deployment

### GitHub Pages
1. Create a GitHub repository
2. Push all files to the repository
3. Enable GitHub Pages in repository settings
4. Your site is live at `username.github.io/repo-name`

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel automatically deploys on push
3. Your site is live with automatic HTTPS

### Netlify
1. Connect your GitHub repository
2. Set build command to empty (static site)
3. Automatic deployments on push

### Traditional Hosting
1. Upload files via FTP
2. No special configuration needed
3. Works on any web hosting

## 📊 Performance

- **Lightweight** - Only ~6KB HTML, ~18KB CSS, ~12KB JS
- **Fast Loading** - Instant page loads with no build process
- **Optimized** - Minimal JavaScript, efficient CSS
- **Smooth Animations** - 60fps animations with GPU acceleration

## 🔍 Search Functionality

The search feature:
- Searches through all 31,000+ Bible verses
- Case-insensitive matching
- Real-time results
- Click any verse to see Church Father commentary

## 💾 Local Storage

The app uses browser localStorage to persist:
- Dark mode preference
- Daily reading streak
- Last visit date
- Bookmarked verses (extensible)

## 🙏 Orthodox Resources

### Bible Data
- [NKJV Bible XML](https://github.com/rwev/bible) - Complete NKJV translation
- [Bible.com API](https://scripture.api.bible/) - Multiple Bible versions
- [Open Scriptures](https://github.com/openscriptures/) - Open source Bible data

### Patristic Content
- [Orthodox Christianity](https://www.orthodoxchristianity.net/)
- [Ancient Faith](https://www.ancientfaith.com/)
- [Orthodox Church Fathers](https://www.ccel.org/)

### Icons
- Unicode symbols (✨, 📖, ✝️, ⛪, 🙏, 📚)
- Custom SVG icons
- Font Awesome icons

## 🎯 Future Enhancements

- [ ] Verse bookmarking and favorites
- [ ] Reading plans and schedules
- [ ] Audio Bible narration
- [ ] Verse comparison across translations
- [ ] Advanced search with filters
- [ ] Cross-references and concordance
- [ ] Topical Bible study
- [ ] User notes and annotations
- [ ] Social sharing features
- [ ] Mobile app wrapper

## 🐛 Troubleshooting

### Bible data not loading
- Check that `bible-data.json` is in the same directory
- Check browser console for errors (F12)
- Verify file size (should be ~5.3MB)

### Styles not applying
- Clear browser cache (Ctrl+Shift+Delete)
- Try different browser
- Check that `styles.css` is in the same directory

### Search not working
- Verify `app.js` is loaded
- Check browser console for errors
- Ensure Bible data is loaded first

### Mobile layout issues
- Test with browser DevTools (F12)
- Check viewport meta tag in HTML
- Verify CSS media queries

## 📝 License

This project is provided for personal and educational use. Ensure you have proper rights to any Bible text and patristic content you include.

## 🤝 Contributing

Feel free to:
- Customize colors and design
- Add more Bible translations
- Expand catechism content
- Improve search functionality
- Enhance mobile experience
- Add new features

## 📞 Support

For issues or questions:
1. Check the README
2. Review code comments
3. Check browser console (F12)
4. Verify file structure

## 🙌 Glory to God

This application is dedicated to the glory of God and the edification of the Orthodox Christian community.

**"In the beginning was the Word, and the Word was with God, and the Word was God."** - John 1:1

---

**Orthodox Patristic Bible © 2025**

*A beautiful, responsive application for studying Scripture and the wisdom of the Church Fathers.*

## Getting Started with GitHub & Vercel

### Step 1: Create GitHub Repository

```bash
# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Orthodox Bible App"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/orthodox-bible-app.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Select your GitHub repository
4. Click "Import"
5. Vercel automatically detects it's a static site
6. Click "Deploy"
7. Your site is live!

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to Settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS setup instructions

## Environment Variables

No environment variables needed! This is a fully static application.

## Build & Deployment

No build process required. Just push to GitHub and Vercel handles the rest.

```bash
# Make changes
git add .
git commit -m "Your message"
git push origin main

# Vercel automatically redeploys!
```

Enjoy your Orthodox Bible App! 🙏✝️
