/**
 * Layout compartido para escenas Camila y Diego.
 * Ajusta tamaños y posiciones dentro del canvas 800×600
 * para evitar solapamientos en pantallas pequeñas.
 */

function isCompactView(scene) {

  const display = scene.scale.displaySize

  if (!display) {
    return false
  }

  const portrait = display.height > display.width
  const shortViewport = display.height < 520

  return portrait || shortViewport

}

export function getCamilaDiegoLayout(scene) {

  const width = scene.cameras.main.width || BASE_WIDTH
  const height = scene.cameras.main.height || BASE_HEIGHT
  const compact = isCompactView(scene)

  const marginX = compact ? 28 : 40
  const contentWidth = width - marginX * 2
  const wordWrapWidth = Math.min(compact ? 520 : 580, contentWidth - 24)

  return {
    centerX: width / 2,
    compact,
    marginX,
    contentWidth,
    wordWrapWidth,

    titleY: compact ? 54 : 68,
    titleFontSize: compact ? '32px' : '42px',

    bodyFontSize: compact ? '22px' : '28px',
    bodyLineSpacing: compact ? 8 : 12,

    panelStroke: 0x334155,

    buttonFontSize: compact ? '22px' : '28px',
    buttonHeight: compact ? 58 : 70
  }

}

export function getIntroLayout(layout) {

  const { compact, centerX } = layout

  return {
    ...layout,
    panelY: compact ? 298 : 308,
    panelW: compact ? 680 : 700,
    panelH: compact ? 360 : 400,
    textY: compact ? 248 : 258,
    continueY: compact ? 498 : 512,
    continueW: compact ? 240 : 260
  }

}

export function getGroupsLayout(layout) {

  const { compact, centerX } = layout

  return {
    ...layout,
    titleFontSize: compact ? '30px' : '40px',
    bodyFontSize: compact ? '20px' : '26px',
    bodyLineSpacing: compact ? 7 : 10,

    panelY: compact ? 292 : 302,
    panelW: compact ? 680 : 720,
    panelH: compact ? 390 : 420,

    instructionsY: compact ? 178 : 198,
    timeLabelY: compact ? 318 : 338,
    timeLabelFontSize: compact ? '20px' : '24px',

    timerButtonY: compact ? 368 : 388,
    timerButtonW: compact ? 100 : 110,
    timerButtonH: compact ? 44 : 50,
    timerButtonFontSize: compact ? '18px' : '22px',
    timerButtonXs: compact
      ? [centerX - 130, centerX, centerX + 130]
      : [270, 400, 530],

    timerTextY: compact ? 428 : 448,
    timerTextFontSize: compact ? '36px' : '44px',

    storyButtonY: compact ? 508 : 528,
    storyButtonW: compact ? 280 : 300,
    storyButtonH: compact ? 58 : 65,
    storyButtonFontSize: compact ? '22px' : '26px'
  }

}

export function getVideoLayout(layout) {

  const { compact } = layout

  return {
    ...layout,
    titleY: compact ? 56 : 72,

    panelY: compact ? 268 : 278,
    panelW: compact ? 680 : 700,
    panelH: compact ? 300 : 320,

    textY: compact ? 218 : 228,

    videoButtonY: compact ? 358 : 372,
    videoButtonW: compact ? 290 : 320,
    videoButtonH: compact ? 68 : 80,
    videoButtonFontSize: compact ? '24px' : '30px',

    continueY: compact ? 498 : 518,
    continueW: compact ? 260 : 280
  }

}

export function getReflectionLayout(layout) {

  const { compact } = layout

  return {
    ...layout,
    bodyFontSize: compact ? '20px' : '27px',
    bodyLineSpacing: compact ? 9 : 14,

    panelY: compact ? 302 : 312,
    panelW: compact ? 680 : 720,
    panelH: compact ? 380 : 410,

    questionsY: compact ? 268 : 282,

    finishY: compact ? 512 : 528,
    finishW: compact ? 240 : 260
  }

}
