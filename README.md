# Patrik Bey - Research Website

A minimal, elegant personal website for Dr. Patrik Bey, Senior Research Fellow at UCL's Queen Square Institute of Neurology.

## GitHub Pages Deployment Instructions

### Option 1: Deploy from Repository Root (Recommended)

1. **Create a new GitHub repository**
   - Go to https://github.com/new
   - Name it `patrik-bey` (or any name you prefer)
   - Make it public

2. **Upload files**
   - Copy all files from this folder to your repository root:
     - `index.html`
     - `portrait.jpg`
     - `assets/` folder (with all JS/CSS files)

3. **Enable GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Under "Source", select **Deploy from a branch**
   - Select **main** branch and **/(root)** folder
   - Click **Save**

4. **Access your site**
   - Your site will be available at: `https://yourusername.github.io/repository-name/`
   - (If using username.github.io repo, it will be at root: `https://yourusername.github.io/`)

### Option 2: Deploy from /docs folder

If you want to keep the source code in the same repository:

1. Move all files to a `docs/` folder in your repository
2. In Settings → Pages, select the **main** branch and **/docs** folder

### File Structure

```
repository-root/
├── index.html          # Main HTML file
├── portrait.jpg        # Profile image
├── assets/             # Static assets
│   ├── index-*.js      # JavaScript bundle
│   └── index-*.css     # CSS bundle
└── README.md           # This file
```

### Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your provider
3. Enable HTTPS in GitHub Pages settings

## About

This website showcases Dr. Patrik Bey's research in:
- AI in Neurology
- Stroke Research
- Neuroimaging Analysis
- Translational Neuroscience

## Credits

Built with React, TypeScript, Tailwind CSS, and Vite.
Design inspired by the Pure Craft aesthetic - minimal, clean, and elegant.
