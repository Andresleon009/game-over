/**
 * Layout compartido para escenas Camila y Diego.
 * Ajusta tamaños y posiciones dentro del canvas 800×600.
 * En portrait móvil redistribuye verticalmente; desktop casi igual.
 */

import { getPortraitTitleY, PORTRAIT_CONTENT_TOP } from './responsiveScale'
import {
  isPortraitMobile,
  isTightViewport,
  spreadY
} from './portraitLayout'

export function getCamilaDiegoLayout(scene) {

  const width = scene.cameras.main.width || 800
  const portrait = isPortraitMobile(scene)
  const tight = isTightViewport(scene)

  const marginX = portrait ? 28 : tight ? 32 : 40
  const contentWidth = width - marginX * 2
  const wordWrapWidth = Math.min(
    portrait ? 540 : tight ? 520 : 580,
    contentWidth - 24
  )

  return {
    centerX: width / 2,
    portrait,
    tight,
    marginX,
    contentWidth,
    wordWrapWidth,

    titleY: portrait
      ? (getPortraitTitleY('34px') ?? 88)
      : tight ? 54 : 68,
    titleFontSize: portrait ? '34px' : tight ? '32px' : '42px',

    bodyFontSize: portrait ? '23px' : tight ? '22px' : '28px',
    bodyLineSpacing: portrait ? 10 : tight ? 8 : 12,

    panelStroke: 0x334155,

    buttonFontSize: portrait ? '24px' : tight ? '22px' : '28px',
    buttonHeight: portrait ? 62 : tight ? 58 : 70
  }

}

function spreadContent(y, portrait, fromMin, fromMax) {

  return spreadY(y, portrait, fromMin, fromMax, PORTRAIT_CONTENT_TOP, 572)

}

export function getIntroLayout(layout) {

  const { portrait, tight } = layout

  if (!portrait) {
    return {
      ...layout,
      panelY: tight ? 298 : 308,
      panelW: tight ? 680 : 700,
      panelH: tight ? 360 : 400,
      textY: 258,
      continueY: tight ? 498 : 512,
      continueW: tight ? 240 : 260
    }
  }

  // Portrait: título arriba, bloque de instrucciones dentro del panel, sin solapar
  return {
    ...layout,
    titleY: getPortraitTitleY('32px') ?? 86,
    titleFontSize: '32px',
    bodyFontSize: '20px',
    bodyLineSpacing: 9,
    wordWrapWidth: Math.min(layout.wordWrapWidth, 500),
    panelY: 322,
    panelW: 680,
    panelH: 355,
    textY: 312,
    continueY: 524,
    continueW: 250
  }

}

export function getGroupsLayout(layout) {

  const { portrait, tight, centerX } = layout
  const fromMin = 68
  const fromMax = 528

  return {
    ...layout,
    titleFontSize: portrait ? '32px' : tight ? '30px' : '40px',
    bodyFontSize: portrait ? '21px' : tight ? '20px' : '26px',
    bodyLineSpacing: portrait ? 9 : tight ? 7 : 10,

    panelY: portrait ? 305 : tight ? 292 : 302,
    panelW: portrait ? 700 : tight ? 680 : 720,
    panelH: portrait ? 400 : tight ? 390 : 420,

    instructionsY: spreadContent(198, portrait, fromMin, fromMax),
    timeLabelY: spreadContent(338, portrait, fromMin, fromMax),
    timeLabelFontSize: portrait ? '22px' : tight ? '20px' : '24px',

    timerButtonY: spreadContent(388, portrait, fromMin, fromMax),
    timerButtonW: portrait ? 105 : tight ? 100 : 110,
    timerButtonH: portrait ? 46 : tight ? 44 : 50,
    timerButtonFontSize: portrait ? '19px' : tight ? '18px' : '22px',
    timerButtonXs: portrait || tight
      ? [centerX - 130, centerX, centerX + 130]
      : [270, 400, 530],

    timerTextY: spreadContent(448, portrait, fromMin, fromMax),
    timerTextFontSize: portrait ? '38px' : tight ? '36px' : '44px',

    storyButtonY: spreadContent(528, portrait, fromMin, fromMax),
    storyButtonW: portrait ? 285 : tight ? 280 : 300,
    storyButtonH: portrait ? 60 : tight ? 58 : 65,
    storyButtonFontSize: portrait ? '23px' : tight ? '22px' : '26px'
  }

}

export function getVideoLayout(layout) {

  const { portrait, tight } = layout
  const fromMin = 72
  const fromMax = 518

  return {
    ...layout,
    titleY: portrait ? 78 : tight ? 56 : 72,

    panelY: spreadContent(278, portrait, fromMin, fromMax),
    panelW: portrait ? 700 : tight ? 680 : 700,
    panelH: portrait ? 310 : tight ? 300 : 320,

    textY: spreadContent(228, portrait, fromMin, fromMax),

    videoButtonY: spreadContent(372, portrait, fromMin, fromMax),
    videoButtonW: portrait ? 300 : tight ? 290 : 320,
    videoButtonH: portrait ? 72 : tight ? 68 : 80,
    videoButtonFontSize: portrait ? '26px' : tight ? '24px' : '30px',

    continueY: spreadContent(518, portrait, fromMin, fromMax),
    continueW: portrait ? 265 : tight ? 260 : 280
  }

}

export function getReflectionLayout(layout) {

  const { portrait, tight } = layout
  const fromMin = 68
  const fromMax = 528

  return {
    ...layout,
    bodyFontSize: portrait ? '21px' : tight ? '20px' : '27px',
    bodyLineSpacing: portrait ? 10 : tight ? 9 : 14,

    panelY: spreadContent(312, portrait, fromMin, fromMax),
    panelW: portrait ? 700 : tight ? 680 : 720,
    panelH: portrait ? 390 : tight ? 380 : 410,

    questionsY: spreadContent(282, portrait, fromMin, fromMax),

    finishY: spreadContent(528, portrait, fromMin, fromMax),
    finishW: portrait ? 250 : tight ? 240 : 260
  }

}
