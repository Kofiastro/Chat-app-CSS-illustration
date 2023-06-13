/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        Rubik: ['Rubik', 'sans-serif']
      },

      colors: {
        //Text colors 
        PaleViolet: 'hsl(276, 100%, 81%)',
        ModerateViolet: 'hsl(276, 55%, 52%)',
        DesaturatedDarkViolet: 'hsl(271, 15%, 43%)',
        GrayishBlue: 'hsl(206, 6%, 79%)',
        VeryDarkDesaturatedViolet: 'hsl(271, 36%, 24%)',
        DarkGrayishViolet: 'hsl(270, 7%, 64%)',
        // Gradients
        LightMagenta: 'hsl(293, 100%, 63%)',
        LightViolet: 'hsl(264, 100%, 61%)',
        White: 'hsl(0, 0%, 100%)',
        LightGrayishViolet_appBackrnd: 'hsl(270, 20%, 96%)',
        VeryDarkDesaturatedViolet_submitBtnBackrnd: 'hsl(271, 36%, 24%)',
        VeryLightMagenta_radioBtnOut: 'hsl(289, 100%, 72%)',
        Bubble:'hsl(276, 41%, 93%)'
      },
    },
  },
  plugins: [],
}

