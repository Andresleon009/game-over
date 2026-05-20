import Phaser from 'phaser'

import createBackButton from '../utils/createBackButton'
import { getClosingLayout } from '../utils/closingSceneLayout'

export default class ClosingScene extends Phaser.Scene {

  constructor() {
    super('ClosingScene')
  }

  create() {

    const layout = getClosingLayout(this)

    // FONDO
    this.cameras.main.setBackgroundColor('#0f172a')

    // BOTÓN VOLVER
    createBackButton(
      this,
      'QuestionsScene'
    )

    // DECORACIÓN
    this.add.circle(
      650,
      layout.compact ? 95 : 110,
      180,
      0x06b6d4,
      0.08
    )

    // TÍTULO
    this.add.text(
      layout.centerX,
      layout.titleY,
      '✨ Para reflexionar',
      {
        fontSize: layout.titleFontSize,
        color: '#f8fafc',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // PANEL
    const panel = this.add.rectangle(
      layout.centerX,
      layout.panelY,
      layout.panelW,
      layout.panelH,
      0x1e293b,
      0.95
    )

    panel.setStrokeStyle(
      2,
      0x334155
    )

    // MENSAJE
    this.add.text(
      layout.centerX,
      layout.textY,
      'Las canciones también transmiten ideas,\nroles y formas de relacionarnos.\n\nReflexionar sobre estos mensajes\npuede ayudarnos a construir vínculos\nmás respetuosos y saludables.',
      {
        fontSize: layout.bodyFontSize,
        color: '#f8fafc',
        align: 'center',
        lineSpacing: layout.bodyLineSpacing,
        wordWrap: {
          width: layout.wordWrapWidth
        }
      }
    ).setOrigin(0.5)

    // BOTÓN FINALIZAR
    const finishButton = this.add.rectangle(
      layout.centerX,
      layout.finishY,
      layout.finishW,
      layout.buttonHeight,
      0x10b981
    ).setInteractive()

    finishButton.setStrokeStyle(
      2,
      0xffffff
    )

    const finishText = this.add.text(
      layout.centerX,
      layout.finishY,
      'FINALIZAR',
      {
        fontSize: layout.buttonFontSize,
        color: '#ffffff',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // HOVER
    finishButton.on('pointerover', () => {

      finishButton.setScale(1.03)
      finishText.setScale(1.03)

    })

    finishButton.on('pointerout', () => {

      finishButton.setScale(1)
      finishText.setScale(1)

    })

    // FINALIZAR
    finishButton.on('pointerdown', () => {

      this.scene.start('Session1Scene')

    })

  }

}
