const urlPrefix = process.env.NODE_ENV === "production" ? "/Desktop" : ""

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'ubuntu_by_arman1992': `url('${urlPrefix}/backgrounds/ubuntu_by_arman1992.jpg')`,
        'ubuntu-default-greyscale-wallpaper': `url('${urlPrefix}/backgrounds/ubuntu-default-greyscale-wallpaper.png')`,
        'ubuntu2_by_arman1992': `url('${urlPrefix}/backgrounds/ubuntu2_by_arman1992.jpg')`,
        'Blue_flower_by_Elena_Stravoravdi': `url('${urlPrefix}/backgrounds/Blue_flower_by_Elena_Stravoravdi.jpg')`,
        'Cherry_Tree_in_Lakones_by_elenastravoravdi': `url('${urlPrefix}/backgrounds/Cherry_Tree_in_Lakones_by_elenastravoravdi.jpg')`,
        'DSC2943_by_kcpru': `url('${urlPrefix}/backgrounds/DSC2943_by_kcpru.jpg')`,
        'Jammy-Jellyfish_WP_4096x2304_Grey': `url('${urlPrefix}/backgrounds/Jammy-Jellyfish_WP_4096x2304_Grey.png')`,
        'Mirror_by_Uday_Nakade': `url('${urlPrefix}/backgrounds/Mirror_by_Uday_Nakade.jpg')`,
        'Optical_Fibers_in_Dark_by_Elena_Stravoravdi': `url('${urlPrefix}/backgrounds/Optical_Fibers_in_Dark_by_Elena_Stravoravdi.jpg')`,
        'canvas_by_roytanck': `url('${urlPrefix}/backgrounds/canvas_by_roytanck.jpg')`,
        'jj_dark_by_Hiking93': `url('${urlPrefix}/backgrounds/jj_dark_by_Hiking93.jpg')`,
        'jj_light_by_Hiking93': `url('${urlPrefix}/backgrounds/jj_light_by_Hiking93.jpg')`,
        'warty-final-ubuntu': `url('${urlPrefix}/backgrounds/warty-final-ubuntu.png')`,
      }),
    },
  },
  plugins: [],
}
