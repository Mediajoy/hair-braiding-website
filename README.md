<img src="public/tailwindlogo.png" width="300">

# Hair Braiding Salon Website

A modern, responsive website for a hair braiding salon built with HTML, CSS, and JavaScript, styled with Tailwind CSS and DaisyUI.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Easy to update content
- Fast loading times

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5000](http://localhost:5000) in your browser

## Building for Production

To create a production build:

```bash
npm run build
```

This will generate optimized CSS in the `public` directory.

## Deployment

This site is configured to deploy to Netlify. To deploy:

1. Push your code to a GitHub, GitLab, or Bitbucket repository
2. Log in to [Netlify](https://www.netlify.com/)
3. Click "Add new site" > "Import an existing project"
4. Select your Git provider and choose the repository
5. Click "Deploy site"

Netlify will automatically detect the build settings from the `netlify.toml` file.

## Project Structure

- `public/` - Contains all static assets (HTML, images, built CSS/JS)
- `input.css` - Source CSS file with Tailwind directives
- `tailwind.config.js` - Tailwind CSS configuration
- `netlify.toml` - Netlify deployment configuration
- `package.json` - Project dependencies and scripts

## Customization

- Update the content in the HTML files in the `public` directory
- Modify styles by editing `input.css` and rebuilding
- Add new pages by creating HTML files in the `public` directory and linking to them

## License

This project is open source and available under the ISC License.