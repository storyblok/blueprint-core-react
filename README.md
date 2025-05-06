# 🧱 Blank React Space Blueprint

Set up a minimal [React.js](https://react.dev) project integrated with [Storyblok](https://www.storyblok.com/). Use this blueprint with a blank Storyblok space containing the default `page`, `teaser`, `grid`, and `feature` components. Get instant live previews in the Visual Editor. Use this setup to kickstart your next React + Storyblok project.

## ⚙️ Get Started

Install dependencies:

```bash
pnpm install
```

Create a `.env` file and add your preview token:

```env
VITE_STORYBLOK_ACCESS_TOKEN=your-preview-access-token
```

> Find your preview token under **Settings** > **Access Tokens** in your Storyblok space.

Start the development server (requires HTTPS for Visual Editor support):

```bash
pnpm dev
```

Update the Visual Editor settings in your Storyblok space:

1. Go to **Settings** > **Visual Editor**
2. Set `https://localhost:5173/` as the default environment

Open your **Home** story in the Visual Editor to see the live preview in action.

## 📚 Learn More

- Read the [React.js docs](https://react.dev/) to learn the fundamentals.
- Follow the [React Router guide](https://reactrouter.com/) to manage routing.
- Browse the [Storyblok documentation](https://www.storyblok.com/docs) to model and manage content.