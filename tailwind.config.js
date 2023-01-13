/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./PUBLIC/index.html",
  "./PUBLIC/style.css"
  ],
  theme: {
    extend: {
      screens: {
        xs: '300px',/** 300-639 || mobile phones || am done */
      },
      colors: {
        primary:"var(--primary)",
        
        pri1:"var(--pri1)",
        
        pri2:"var(--pri2)",
        
        pri3:"var(--pri3)",

        pri4:"var(--pri4)",

        pri5:"var(--pri5)",

        light_bg_bright:"var(--bg_bright)",

        light_bg_dim:"var(--bg_dim)",

        light_border_bright:"var(--border_bright)",

        light_border_dim:"var(--border_dim)",

        light_txt:"var(--light_txt)",

        light_txt1:"var(--light_txt1)",

        light_txt2:"var(--light_txt2)",
      },
      fontFamily: {
        clicker: [
          'Clicker Script',
        ],
        poppins: [
          'Poppins',
        ],
      },
    },
  },
  plugins: [],
}
