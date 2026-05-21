import Phaser from 'phaser'

/** Ancho máximo (px) para aplicar modo portrait móvil */
const MOBILE_MAX_WIDTH = 900

export const GAME_BG = '#0f172a'

/**
 * Viewport del navegador (no el canvas escalado).
 * Evita confundir orientación cuando el canvas ENVELOP es más ancho que alto.
 */
export function isMobilePortraitViewport() {

  const w = window.innerWidth
  const h = window.innerHeight

  return h > w && w <= MOBILE_MAX_WIDTH

}

const GAME_WIDTH = 800
const GAME_HEIGHT = 600

/** Coordenada Y base del contenido principal en portrait (más arriba = menos vacío) */
export const PORTRAIT_CONTENT_TOP = 76

/** Separación entre el botón nav y el centro del título (px, coords. juego) */
const NAV_TITLE_GAP = 20

export function parseFontSize(size) {

  return parseInt(String(size).replace('px', ''), 10) || 40

}

/**
 * Y del título en portrait: siempre debajo del botón VOLVER/MENÚ, sin solapar.
 */
export function getPortraitTitleY(titleFontSize) {

  if (!isMobilePortraitViewport()) {
    return null
  }

  const nav = getBackButtonLayout()
  const navBottom = nav.y + nav.height / 2
  const titleHalf = Math.round(parseFontSize(titleFontSize) * 0.52)

  return Math.round(navBottom + NAV_TITLE_GAP + titleHalf)

}

/**
 * Posición del botón VOLVER en portrait + ENVELOP.
 * Se ancla al borde izquierdo visible del canvas (no al centro del juego).
 */
export function getBackButtonLayout() {

  if (!isMobilePortraitViewport()) {
    return {
      x: 90,
      y: 50,
      originX: 0.5,
      width: 120,
      height: 45
    }
  }

  const parentW = window.innerWidth
  const parentH = window.innerHeight
  const scale = Math.max(parentW / GAME_WIDTH, parentH / GAME_HEIGHT)
  const visibleLeft = ((GAME_WIDTH * scale) - parentW) / (2 * scale)

  return {
    x: Math.round(visibleLeft + 8),
    y: 32,
    originX: 0,
    width: 106,
    height: 40
  }

}

function applyScaleMode(game) {

  const scale = game.scale
  const portrait = isMobilePortraitViewport()

  scale.scaleMode = portrait
    ? Phaser.Scale.ENVELOP
    : Phaser.Scale.FIT

  scale.autoCenter = Phaser.Scale.CENTER_BOTH
  scale.updateScale()

}

/**
 * FIT en desktop / tablet horizontal; ENVELOP en móvil vertical
 * para ocupar la altura y quitar bandas blancas.
 */
export function setupResponsiveScale(game) {

  applyScaleMode(game)

  game.scale.on(Phaser.Scale.Events.RESIZE, () => {
    applyScaleMode(game)
  })

  window.addEventListener('orientationchange', () => {

    window.setTimeout(() => applyScaleMode(game), 150)

  })

}
