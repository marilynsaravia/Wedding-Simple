// Este comando activa las animaciones
AOS.init({
    duration: 800,
    once: true
});

tailwind.config = {
  theme: {
    extend: {
      colors: {
        'wedding-bg': '#F5F2EE', 
        'wedding-dark': '#2F362B',
        'wedding-text': '#2F362B', 
      }, 
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['"Montserrat"', 'sans-serif'], 
      }
    }
  }
}

