# AI Engineer Blog

A professional GitHub Pages site for an AI Engineer to blog about artificial intelligence, machine learning, and deep learning topics.

## Features

- **Modern, Responsive Design**: Clean, professional layout optimized for all devices
- **AI-Themed Aesthetics**: Purple/blue gradient color scheme with modern typography
- **Blog System**: Complete blogging platform with sample posts on AI/ML topics
- **Project Showcase**: Portfolio page to highlight AI/ML projects
- **About Page**: Professional background and expertise information
- **Mobile-First**: Fully responsive design that works on desktop, tablet, and mobile

## Structure

```
├── index.html              # Homepage with featured posts
├── about.html             # About page with background and expertise
├── projects.html          # Projects/portfolio page
├── blog/
│   ├── index.html        # Blog listing page
│   └── posts/            # Individual blog posts
│       ├── 2024-03-10-fine-tuning-llms.html
│       ├── 2024-02-20-mlops-best-practices.html
│       └── 2024-01-15-getting-started-with-transformers.html
├── css/
│   └── style.css         # Main stylesheet
├── js/
│   └── main.js           # JavaScript for interactions
└── SPEC.md               # Complete specification document
```

## Local Development

To run the site locally:

```bash
# Start a simple HTTP server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

## Customization

1. **Update Personal Information**: Edit the social media links in all HTML files
2. **Add Blog Posts**: Create new HTML files in `blog/posts/` following the existing format
3. **Modify Colors**: Update CSS variables in `css/style.css` under `:root`
4. **Add Projects**: Edit `projects.html` to showcase your own projects

## Sample Blog Topics Included

- Fine-tuning Large Language Models: A Practical Guide
- MLOps Best Practices: From Notebook to Production
- Getting Started with Transformer Architectures

## Technologies

- Pure HTML5, CSS3, and JavaScript (no build process required)
- Modern CSS Grid and Flexbox for layouts
- Responsive design with mobile-first approach
- Semantic HTML for better SEO and accessibility

## License

Feel free to use this template for your own GitHub Pages site!
