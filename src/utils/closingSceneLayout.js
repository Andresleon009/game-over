function isCompactView(scene) {

  const display = scene.scale.displaySize

  if (!display) {
    return false
  }

  const portrait = display.height > display.width
  const shortViewport = display.height < 520

  return portrait || shortViewport

}

export function getClosingLayout(scene) {

  const width = scene.cameras.main.width
  const centerX = width / 2
  const compact = isCompactView(scene)

  return {
    centerX,
    compact,

    titleY: compact ? 82 : 100,
    titleFontSize: compact ? '34px' : '40px',

    panelY: compact ? 285 : 295,
    panelW: compact ? 620 : 650,
    panelH: compact ? 310 : 330,

    textY: compact ? 258 : 272,
    bodyFontSize: compact ? '22px' : '26px',
    bodyLineSpacing: compact ? 9 : 12,
    wordWrapWidth: compact ? 500 : 540,

    finishY: compact ? 500 : 518,
    finishW: compact ? 240 : 260,
    buttonHeight: compact ? 58 : 68,
    buttonFontSize: compact ? '24px' : '28px'
  }

}
