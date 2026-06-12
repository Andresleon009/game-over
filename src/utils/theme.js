// src/utils/theme.js
//
// Theme central de GAME OVER.
// Define paleta de colores, tipografía y estilos base
// para mantener consistencia visual entre escenas.
//
// IMPORTANTE:
// - Este archivo NO controla posiciones, layouts ni lógica
//   responsive. Eso sigue en portraitLayout.js / responsiveScale.js.
// - Cada escena sigue decidiendo su propio fontSize según
//   portrait/desktop; theme.js solo aporta color, peso y
//   familia tipográfica.
// - Por ahora se usa una fuente de sistema (sin Google Fonts)
//   para no tocar index.html.

const fontFamily = '"Segoe UI", Arial, sans-serif'

export const colors = {

  // Fondo general de la plataforma
  background: 0x0f172a,
  backgroundHex: '#0f172a',

  // Superficies / paneles (tarjetas, recuadros de instrucciones)
  panel: 0x1e293b,
  panelHex: '#1e293b',
  panelBorder: 0x334155,
  panelBorderHex: '#334155',

  // Texto
  textPrimary: '#f1f5f9',
  textSecondary: '#94a3b8',
  textOnAccent: '#ffffff',

  // Acentos principales
  accentPrimary: 0x8b5cf6,       // violeta - CTA principal
  accentPrimaryHex: '#8b5cf6',
  accentSecondary: 0x38bdf8,     // celeste - apoyo / hover / temporizador
  accentSecondaryHex: '#38bdf8',
  accentSuccess: 0x34d399,       // verde - cierres positivos / "tiempo finalizado"
  accentSuccessHex: '#34d399',

  // Decoración (círculos de fondo en Intro/Menú)
  decorationViolet: 0x8b5cf6,
  decorationCyan: 0x38bdf8,

  // Colores por sesión (versión más cohesionada de los originales)
  sessions: {
    session1: 0x38bdf8, // celeste
    session2: 0x8b5cf6, // violeta
    session3: 0xd97706, // ámbar atenuado
    session4: 0x34d399  // verde
  }

}

export const text = {

  title: {
    fontFamily,
    fontStyle: 'bold',
    color: colors.textPrimary
  },

  subtitle: {
    fontFamily,
    color: colors.textSecondary
  },

  body: {
    fontFamily,
    color: colors.textSecondary
  },

  button: {
    fontFamily,
    fontStyle: 'bold',
    color: colors.textOnAccent
  }

}

export const button = {
  fill: colors.accentPrimary,
  strokeColor: 0xffffff,
  strokeWidth: 2,
  hoverScale: 1.04
}

export const panel = {
  fill: colors.panel,
  strokeColor: colors.panelBorder,
  strokeWidth: 2
}

export default {
  colors,
  text,
  button,
  panel
}