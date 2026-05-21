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

/**
 * Posición del botón VOLVER en portrait + ENVELOP.
 * Se ancla al borde izquierdo visible del canvas (no al centro del juego).
 */
export function getBackButtonLayout() {

  if (!isMobilePortraitViewport()) {
    return {
      x: 90,
      originX: 0.5,
      width: 120
    }
  }

  const parentW = window.innerWidth
  const parentH = window.innerHeight
  const scale = Math.max(parentW / GAME_WIDTH, parentH / GAME_HEIGHT)
  const visibleLeft = ((GAME_WIDTH * scale) - parentW) / (2 * scale)

  return {
    x: Math.round(visibleLeft + 16),
    originX: 0,
    width: 112
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
