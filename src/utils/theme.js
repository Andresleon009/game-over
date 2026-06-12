const theme = {

    colors: {
  
      // Fondo general de la escena (string, válido para setBackgroundColor)
      backgroundHex: '#0f172a',
  
      // Decoraciones (círculos) -> números para Phaser
      decorationViolet: 0x8b5cf6,
      decorationCyan: 0x22d3ee,
  
      // Color principal de acento (botones, etc.) -> número
      accentPrimary: 0x6366f1,
  
      // Paneles / tarjetas (usado por SongSelectScene)
      panel: 0x1e293b,
  
      // Colores de texto -> strings
      textPrimary: '#f1f5f9',
      textOnAccent: '#ffffff',
  
      // Colores por sesión (botones del menú) -> números
      sessions: {
        session1: 0x6366f1,
        session2: 0xec4899,
        session3: 0x22c55e,
        session4: 0xf59e0b
      }
  
    },
  
    text: {
  
      title: {
        fontFamily: 'Arial, sans-serif',
        fontSize: '48px',
        color: '#f1f5f9',
        fontStyle: 'bold'
      },
  
      subtitle: {
        fontFamily: 'Arial, sans-serif',
        fontSize: '24px',
        color: '#cbd5e1'
      },
  
      button: {
        fontFamily: 'Arial, sans-serif',
        fontSize: '24px',
        color: '#ffffff',
        fontStyle: 'bold'
      },
  
      body: {
        fontFamily: 'Arial, sans-serif',
        fontSize: '18px',
        color: '#f1f5f9'
      }
  
    },
  
    button: {
      strokeWidth: 2,
      strokeColor: 0xffffff,
      hoverScale: 1.04
    }
  
  }
  
  export default theme