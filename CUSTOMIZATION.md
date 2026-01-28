# Customization Guide

## Adding Blog Posts

To add a new blog post:

1. **Copy the template**: Duplicate `blog/posts/blog-post-template.html` to a new file with a descriptive name:
   ```bash
   cp blog/posts/blog-post-template.html blog/posts/2024-01-15-my-first-post.html
   ```

2. **Edit the new file**: Replace all placeholder text (marked with `[...]`) with your actual content:
   - Title, date, reading time, tags
   - Introduction and sections
   - Code examples, lists, and other content

3. **Update blog listing**: Add your post to `blog/index.html`:
   ```html
   <article class="blog-post-item">
       <div class="post-meta">
           <span class="post-date">January 15, 2024</span>
           <span class="post-reading-time">5 min read</span>
       </div>
       <h2><a href="posts/2024-01-15-my-first-post.html">My First Post</a></h2>
       <p>Brief description of your post...</p>
       <div class="post-tags">
           <span class="tag">AI</span>
           <span class="tag">Tutorial</span>
       </div>
   </article>
   ```

4. **Update homepage** (optional): Add your post to the featured posts section in `index.html`

5. **Commit and push**: Your changes will be automatically deployed via GitHub Actions

## Social Media Links
The following social media links are currently placeholders and should be updated with your actual profile URLs:

- **LinkedIn**: Update `https://linkedin.com` to `https://linkedin.com/in/your-username`
- **Twitter**: Update `https://twitter.com` to `https://twitter.com/your-username`
- **GitHub**: Already set to `https://github.com/jwgwalton` but can be updated as needed

These placeholder links appear in:
- index.html (footer)
- about.html (footer and content)
- projects.html (footer)
- blog/index.html (footer)
- All blog post pages (footer)

## Other Customizations
- Update the hero text and about section with your own content
- Add your own blog posts in `blog/posts/`
- Add your own projects in `projects.html`
- Customize colors by modifying CSS variables in `css/style.css`
