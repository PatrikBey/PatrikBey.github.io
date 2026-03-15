# Patrik Bey - Research Website

A minimal, elegant personal website for Dr. Patrik Bey, Senior Research Fellow at UCL's Queen Square Institute of Neurology.

## Design

This website follows the **Pure Craft** aesthetic with:
- Clean, bright background (#fafafa)
- Minimal, elegant typography
- Subtle borders and shadows
- Smooth animations
- Consistent Lucide icons throughout

## GitHub Pages Deployment

### Quick Setup (No Build Required)

1. **Create a new GitHub repository**
   - Go to https://github.com/new
   - Name it `patrik-bey` (or any name)
   - Make it **Public**

2. **Upload files**
   Upload these files to your repository root:
   ```
   ├── index.html      (main website file)
   ├── portrait.png    (profile image)
   └── README.md       (this file)
   ```

3. **Enable GitHub Pages**
   - Go to **Settings** → **Pages**
   - Under "Source", select **Deploy from a branch**
   - Select **main** branch and **/(root)** folder
   - Click **Save**

4. **Your site is live!**
   - URL: `https://yourusername.github.io/repository-name/`

### Making Changes

Simply edit the `index.html` file and commit to GitHub. Changes will be live within minutes.

**To edit text:**
- Open `index.html` in any text editor
- Find the text you want to change
- Save and commit to GitHub

**To change the portrait:**
- Replace `portrait.png` with your new image
- Keep the same filename or update the `src` attribute in HTML

## Research Areas

The website highlights four key research areas:

1. **AI in Neurology** - Machine learning for dementia classification and stroke prediction
2. **Stroke Research** - Lesion-aware MRI processing and recovery prediction
3. **Neuroimaging Analysis** - Multi-modal fMRI, MRI, and PET data processing
4. **Translational Neuroscience** - Graph-based approaches bridging animal and human studies

## Technologies

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first styling (via CDN)
- **Lucide Icons** - Consistent icon set (via CDN)
- **Vanilla JavaScript** - Smooth scrolling and interactions

## Features

- Responsive design (mobile, tablet, desktop)
- Smooth scroll animations
- Hover effects on cards and buttons
- Mobile navigation menu
- Contact button with mailto link
- External links to publications

## Customization

### Change Colors
Edit the CSS in the `<style>` section of `index.html`:
```css
body {
    background-color: #fafafa;  /* Background */
    color: #1a1a1a;              /* Text */
}
.text-muted {
    color: #737373;              /* Secondary text */
}
```

### Add/Remove Publications
Find the Publications section and copy/paste the publication item template.

### Update Contact Info
Search for `patrik.bey@ucl.ac.uk` and replace with your email.

## License

This website template is free to use for personal academic websites.
