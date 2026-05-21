import { PORTRAIT_CONTENT_TOP } from './responsiveScale'
import {
  isPortraitMobile,
  isTightViewport,
  spreadY
} from './portraitLayout'

export function getClosingLayout(scene) {

  const width = scene.cameras.main.width
  const centerX = width / 2
  const portrait = isPortraitMobile(scene)
  const tight = isTightViewport(scene)
  const fromMin = 100
  const fromMax = 518

  return {
    centerX,
    portrait,
    tight,

    titleY: portrait ? 76 : tight ? 82 : 100,
    titleFontSize: portrait ? '36px' : tight ? '34px' : '40px',

    panelY: portrait
      ? spreadY(295, true, fromMin, fromMax, PORTRAIT_CONTENT_TOP, 572)
      : tight ? 285 : 295,
    panelW: portrait ? 640 : tight ? 620 : 650,
    panelH: portrait ? 320 : tight ? 310 : 330,

    textY: portrait
      ? spreadY(272, true, fromMin, fromMax, PORTRAIT_CONTENT_TOP, 572)
      : tight ? 265 : 272,
    bodyFontSize: portrait ? '24px' : tight ? '22px' : '26px',
    bodyLineSpacing: portrait ? 11 : tight ? 9 : 12,
    wordWrapWidth: portrait ? 520 : tight ? 500 : 540,

    finishY: portrait
      ? spreadY(518, true, fromMin, fromMax, PORTRAIT_CONTENT_TOP, 572)
      : tight ? 508 : 518,
    finishW: portrait ? 250 : tight ? 240 : 260,
    buttonHeight: portrait ? 62 : tight ? 58 : 68,
    buttonFontSize: portrait ? '26px' : tight ? '24px' : '28px'
  }

}
