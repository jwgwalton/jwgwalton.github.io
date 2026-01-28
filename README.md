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
│       └── blog-post-template.html  # Template for creating new posts
├── css/
│   └── style.css         # Main stylesheet
├── js/
│   └── main.js           # JavaScript for interactions
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions workflow for deployment
├── SPEC.md               # Complete specification document
└── CUSTOMIZATION.md      # Guide for customizing the site
```

## Local Development

To run the site locally:

```bash
# Start a simple HTTP server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

## Deployment

The site is automatically deployed to GitHub Pages when you push to the `main` branch, thanks to the GitHub Actions workflow in `.github/workflows/deploy.yml`.

To enable GitHub Pages:
1. Go to your repository Settings
2. Navigate to Pages section
3. Under "Build and deployment", select "GitHub Actions" as the source
4. Push to main branch to trigger deployment

## Adding Blog Posts

1. Copy `blog/posts/blog-post-template.html` to a new file with your desired name (e.g., `2024-01-15-my-first-post.html`)
2. Edit the new file and replace all the placeholder text with your content
3. Update `blog/index.html` to add your post to the listing
4. Update `index.html` to add your post to the featured posts section (if desired)
5. Commit and push to publish

## Customization

1. **Update Personal Information**: Edit the social media links in all HTML files
2. **Add Blog Posts**: Copy `blog/posts/blog-post-template.html` and customize it
3. **Modify Colors**: Update CSS variables in `css/style.css` under `:root`
4. **Add Projects**: Edit `projects.html` to showcase your own projects

See `CUSTOMIZATION.md` for detailed instructions.

## Sample Blog Topics Included

The site includes a blog post template (`blog/posts/blog-post-template.html`) that you can copy and customize for your own posts. Simply duplicate the template, rename it, and fill in your content.

## Technologies

- Pure HTML5, CSS3, and JavaScript (no build process required)
- Modern CSS Grid and Flexbox for layouts
- Responsive design with mobile-first approach
- Semantic HTML for better SEO and accessibility

## License

Feel free to use this template for your own GitHub Pages site!
