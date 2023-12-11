/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'senatoAccademico': '#FFFF8D',
        'consiglioAmministrazione': '#dddddd',
        'nucleoValutazione': '#F8BBD0',
        'comitatoSport': '#A5D6A7',
        'consiglioAmministrazioneErsu': '#fc8511',
        'consiglioDipartimento': '#B3E5FC',
        'consiglioCdl': '#E0E0E0',
        'scuolaMedicina': '#dddddd',
      }
    },
  },
  purge: {
    options: {
      safelist: [
        //TODO: handle with regex, use every class that ends with -applicationType
        'bg-senatoAccademico',
        'bg-consiglioAmministrazione',
        'bg-nucleoValutazione',
        'bg-comitatoSport',
        'bg-consiglioAmministrazioneErsu',
        'bg-consiglioDipartimento',
        'bg-consiglioCdl',
        'bg-scuolaMedicina',
      ]
    }
  },
  daisyui: {
    themes: ["winter"],
  },
  plugins: [require("daisyui")],
}