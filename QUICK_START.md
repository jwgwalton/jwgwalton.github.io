# Quick Start Guide

## Your AI Engineer Blog Site is Ready! 🎉

This site is now ready to deploy to GitHub Pages with automatic deployment.

## Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/jwgwalton/jwgwalton.github.io
2. Click on **Settings**
3. In the left sidebar, click on **Pages**
4. Under "Build and deployment", select **Source: GitHub Actions**
5. Click **Save**

## Step 2: Deploy Your Site

When you merge this PR to the `main` branch, GitHub Actions will automatically deploy your site to:
**https://jwgwalton.github.io/**

The deployment happens automatically every time you push to `main`.

## Step 3: Customize Your Site

### Update Social Media Links
Edit these files and replace placeholder URLs:
- `index.html` (footer)
- `about.html` (footer and content links)
- `projects.html` (footer)
- `blog/index.html` (footer)
- `blog/posts/blog-post-template.html` (footer)

Replace:
- `https://linkedin.com` → `https://linkedin.com/in/your-username`
- `https://twitter.com` → `https://twitter.com/your-username`

### Write Your First Blog Post

1. **Copy the template:**
   ```bash
   cp blog/posts/blog-post-template.html blog/posts/2024-01-28-my-first-post.html
   ```

2. **Edit the new file:**
   - Replace `[Your Blog Post Title]` with your actual title
   - Replace `[Date]` with the publication date
   - Replace `[X] min read` with estimated reading time
   - Replace `[Tag1]`, `[Tag2]`, etc. with relevant tags
   - Fill in your content in the sections

3. **Add to blog listing** (`blog/index.html`):
   ```html
   <article class="blog-post-item">
       <div class="post-meta">
           <span class="post-date">January 28, 2024</span>
           <span class="post-reading-time">5 min read</span>
       </div>
       <h2><a href="posts/2024-01-28-my-first-post.html">My First Post</a></h2>
       <p>A brief description of your post...</p>
       <div class="post-tags">
           <span class="tag">AI</span>
           <span class="tag">Tutorial</span>
       </div>
   </article>
   ```

4. **Add to homepage** (`index.html`):
   Update the featured posts section with your new post.

5. **Commit and push:**
   ```bash
   git add .
   git commit -m "Add my first blog post"
   git push
   ```
   
   GitHub Actions will automatically deploy your changes!

## Step 4: Personalize Content

### Update About Page
Edit `about.html`:
- Replace placeholder text with your actual background
- Update expertise areas
- Add your education and certifications
- Customize the philosophy section

### Update Projects Page
Edit `projects.html`:
- Replace example projects with your own
- Update project descriptions
- Link to your actual GitHub repositories
- Add screenshots or demos if available

### Customize Colors (Optional)
Edit `css/style.css` and modify the CSS variables under `:root`:
```css
:root {
    --primary-color: #6366f1;  /* Change to your preferred color */
    --secondary-color: #8b5cf6;
    --accent-color: #06b6d4;
    /* ... */
}
```

## File Structure

```
your-repo/
├── index.html                    # Homepage
├── about.html                    # About page
├── projects.html                 # Projects page
├── blog/
│   ├── index.html               # Blog listing
│   └── posts/
│       └── blog-post-template.html  # Copy this for new posts
├── css/
│   └── style.css                # Styles
├── js/
│   └── main.js                  # JavaScript
├── .github/
│   └── workflows/
│       └── deploy.yml           # Auto-deployment workflow
├── SPEC.md                      # Full specification
├── CUSTOMIZATION.md             # Detailed customization guide
└── README.md                    # Documentation
```

## Monitoring Deployment

After pushing to main:
1. Go to the **Actions** tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Once complete (usually < 1 minute), your site is live!

## Need Help?

- See `CUSTOMIZATION.md` for detailed customization instructions
- See `SPEC.md` for the complete specification
- See `README.md` for technical documentation

## Next Steps

1. ✅ Merge this PR to `main`
2. ✅ Enable GitHub Pages in repository settings
3. ✅ Wait for deployment to complete
4. ✅ Visit https://jwgwalton.github.io/
5. ✅ Start blogging!

Happy blogging! 🚀
