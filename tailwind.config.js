module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'ubuntu_by_arman1992': "url('/backgrounds/ubuntu_by_arman1992.jpg')",
        'ubuntu-default-greyscale-wallpaper': "url('/backgrounds/ubuntu-default-greyscale-wallpaper.png')",
        'ubuntu2_by_arman1992': "url('/backgrounds/ubuntu2_by_arman1992.jpg')",
        'Blue_flower_by_Elena_Stravoravdi': "url('/backgrounds/Blue_flower_by_Elena_Stravoravdi.jpg')",
        'Cherry_Tree_in_Lakones_by_elenastravoravdi': "url('/backgrounds/Cherry_Tree_in_Lakones_by_elenastravoravdi.jpg')",
        'DSC2943_by_kcpru': "url('/backgrounds/DSC2943_by_kcpru.jpg')",
        'Jammy-Jellyfish_WP_4096x2304_Grey': "url('/backgrounds/Jammy-Jellyfish_WP_4096x2304_Grey.png')",
        'Mirror_by_Uday_Nakade': "url('/backgrounds/Mirror_by_Uday_Nakade.jpg')",
        'Optical_Fibers_in_Dark_by_Elena_Stravoravdi': "url('/backgrounds/Optical_Fibers_in_Dark_by_Elena_Stravoravdi.jpg')",
        'canvas_by_roytanck': "url('/backgrounds/canvas_by_roytanck.jpg')",
        'jj_dark_by_Hiking93': "url('/backgrounds/jj_dark_by_Hiking93.jpg')",
        'jj_light_by_Hiking93': "url('/backgrounds/jj_light_by_Hiking93.jpg')",
        'warty-final-ubuntu': "url('/backgrounds/warty-final-ubuntu.png')",
      }),
    },
  },
  plugins: [],
}
