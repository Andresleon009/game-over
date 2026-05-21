/**
 * Utilidades para redistribuir contenido en celulares verticales (portrait).
 * El canvas interno sigue siendo 800×600; se aprovecha mejor el eje Y.
 */

import {
  isMobilePortraitViewport,
  getPortraitTitleY,
  parseFontSize,
  PORTRAIT_CONTENT_TOP
} from './responsiveScale'

export function isPortraitMobile(scene) {

  if (isMobilePortraitViewport()) {
    return true
  }

  const parent = scene?.scale?.parentSize

  if (parent?.width && parent?.height) {
    return parent.height > parent.width && parent.width <= 900
  }

  return false

}

export function isTightViewport(scene) {

  if (isPortraitMobile(scene)) {
    return false
  }

  const parent = scene?.scale?.parentSize

  if (parent?.height) {
    return parent.height < 520
  }

  return window.innerHeight < 520

}

export function spreadY(y, portrait, fromMin, fromMax, toMin = PORTRAIT_CONTENT_TOP, toMax = 572) {

  if (!portrait) {
    return y
  }

  const range = fromMax - fromMin

  if (range <= 0) {
    return y
  }

  const t = (y - fromMin) / range

  return Math.round(toMin + t * (toMax - toMin))

}

export function spreadYs(ys, portrait, fromMin, fromMax, toMin, toMax) {

  return ys.map((y) => spreadY(y, portrait, fromMin, fromMax, toMin, toMax))

}

export function spreadButtonYs(portrait, desktopYs, areaTop = 200, areaBottom = 530) {

  if (!portrait) {
    return desktopYs
  }

  if (desktopYs.length === 1) {
    return [Math.round((areaTop + areaBottom) / 2)]
  }

  const step = (areaBottom - areaTop) / (desktopYs.length - 1)

  return desktopYs.map((_, index) => Math.round(areaTop + index * step))

}

export function getCenterX(scene) {

  return scene.cameras.main.width / 2

}

/**
 * Menú y escenas de sesión: título + subtítulo + botones apilados.
 */
export function getStackSceneLayout(scene, desktop) {

  const portrait = isPortraitMobile(scene)
  const centerX = getCenterX(scene)

  if (!portrait) {
    return {
      portrait: false,
      centerX,
      titleY: desktop.titleY,
      subtitleY: desktop.subtitleY,
      buttonYs: desktop.buttonYs,
      titleFontSize: desktop.titleFontSize,
      subtitleFontSize: desktop.subtitleFontSize,
      buttonFontSize: desktop.buttonFontSize,
      buttonW: desktop.buttonW,
      buttonH: desktop.buttonH
    }
  }

  const titleFontSize = desktop.titleFontSizePortrait ?? desktop.titleFontSize
  const subtitleFontSize = desktop.subtitleFontSizePortrait ?? desktop.subtitleFontSize
  const titleY = getPortraitTitleY(titleFontSize)
    ?? desktop.titleYPortrait
    ?? 90
  const subtitleY = desktop.subtitleYPortrait
    ?? titleY + Math.round(parseFontSize(titleFontSize) * 0.5) + 16

  return {
    portrait: true,
    centerX,
    titleY,
    subtitleY,
    buttonYs: spreadButtonYs(
      true,
      desktop.buttonYs,
      Math.max(subtitleY + 36, desktop.buttonAreaTop ?? 200),
      desktop.buttonAreaBottom ?? 528
    ),
    titleFontSize,
    subtitleFontSize,
    buttonFontSize: desktop.buttonFontSizePortrait ?? desktop.buttonFontSize,
    buttonW: desktop.buttonWPortrait ?? desktop.buttonW,
    buttonH: desktop.buttonHPortrait ?? desktop.buttonH
  }

}

/**
 * Flujo título → cuerpo → panel → acción (audio, reflexión, letra, cierre…).
 */
export function getFlowSceneLayout(scene, desktop) {

  const portrait = isPortraitMobile(scene)
  const centerX = getCenterX(scene)
  const rangeMin = desktop.rangeMin ?? desktop.titleY
  const rangeMax = desktop.rangeMax ?? desktop.actionY

  if (!portrait) {
    return {
      portrait: false,
      centerX,
      ...desktop
    }
  }

  const spread = (y) => spreadY(
    y,
    true,
    rangeMin,
    rangeMax,
    desktop.spreadTop ?? PORTRAIT_CONTENT_TOP,
    desktop.spreadBottom ?? 572
  )

  return {
    portrait: true,
    centerX,
    titleY: spread(desktop.titleY),
    subtitleY: desktop.subtitleY != null ? spread(desktop.subtitleY) : undefined,
    bodyY: desktop.bodyY != null ? spread(desktop.bodyY) : undefined,
    panelY: spread(desktop.panelY),
    panelW: desktop.panelWPortrait ?? desktop.panelW,
    panelH: desktop.panelHPortrait ?? desktop.panelH,
    contentY: desktop.contentY != null ? spread(desktop.contentY) : undefined,
    actionY: spread(desktop.actionY),
    titleFontSize: desktop.titleFontSizePortrait ?? desktop.titleFontSize,
    bodyFontSize: desktop.bodyFontSizePortrait ?? desktop.bodyFontSize,
    actionFontSize: desktop.actionFontSizePortrait ?? desktop.actionFontSize,
    buttonH: desktop.buttonHPortrait ?? desktop.buttonH,
    buttonW: desktop.buttonWPortrait ?? desktop.buttonW,
    lineSpacing: desktop.lineSpacingPortrait ?? desktop.lineSpacing
  }

}

export function getAudioSceneLayout(scene) {

  const portrait = isPortraitMobile(scene)
  const centerX = getCenterX(scene)

  if (!portrait) {
    return {
      portrait: false,
      centerX,
      titleY: 90,
      bodyY: 170,
      panelY: 330,
      panelH: 260,
      vizY: 280,
      controlsY: 360,
      continueY: 520
    }
  }

  const titleY = getPortraitTitleY('34px') ?? 70

  return {
    portrait: true,
    centerX,
    titleY,
    bodyY: titleY + 58,
    panelY: 336,
    panelH: 275,
    vizY: 290,
    controlsY: 400,
    continueY: 536
  }

}

export function getQuestionsSceneLayout(scene) {

  const portrait = isPortraitMobile(scene)
  const centerX = getCenterX(scene)

  if (!portrait) {
    return {
      portrait: false,
      centerX,
      titleY: 70,
      panelY: 300,
      panelW: 700,
      panelH: 390,
      questionYs: [140, 240, 340],
      actionY: 530
    }
  }

  const titleY = getPortraitTitleY('36px') ?? 66

  return {
    portrait: true,
    centerX,
    titleY,
    panelY: 303,
    panelW: 680,
    panelH: 400,
    questionYs: spreadYs([140, 240, 340], true, 130, 340, 148, 422),
    actionY: 536
  }

}
