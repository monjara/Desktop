module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'ubuntu-default': "url('/backgrounds/warty-final-ubuntu.png')",
        'ubuntu-grey': "url('/backgrounds/ubuntu-default-greyscale-wallpaper.png')",
        'brad': "url('/backgrounds/brad-huchteman-stone-mountain.jpg')",
        'hardy': "url('/backgrounds/hardy_wallpaper_uhd.png')",
        'joshua': "url('/backgrounds/joshua-coleman-something-yellow.jpg')",
        'matt': "url('/backgrounds/matt-mcnulty-nyc-2nd-ave.jpg')",
        'ryan': "url('/backgrounds/ryan-stone-skykomish-river.jpg')",
      }),
    },
  },
  plugins: [],
}
