import Phaser from 'phaser'

import createBackButton from '../utils/createBackButton'
import { getCamilaDiegoLayout, getIntroLayout } from '../utils/camilaDiegoLayout'

export default class CamilaDiegoScene extends Phaser.Scene {

  constructor() {
    super('CamilaDiegoScene')
  }

  create() {

    const layout = getIntroLayout(getCamilaDiegoLayout(this))

    // ---------- FONDO ----------

    this.cameras.main.setBackgroundColor('#0f172a')

    // ---------- TRANSICIÓN ----------

    this.cameras.main.fadeIn(
      250,
      0,
      0,
      0
    )

    // ---------- BOTÓN VOLVER ----------

    createBackButton(
      this,
      'Session2Scene'
    )

    // ---------- TÍTULO ----------

    this.add.text(
      layout.centerX,
      layout.titleY,
      '🖼️ Camila y Diego',
      {
        fontSize: layout.titleFontSize,
        color: '#f8fafc',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // ---------- PANEL ----------

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
      layout.panelStroke
    )

    // ---------- TEXTO ----------

    this.add.text(
      layout.centerX,
      layout.textY,
      'La siguiente historia muestra\nuna relación que cambia progresivamente.\n\nDivide a las y los participantes\nen pequeños grupos.\n\nEntrega las cartillas desordenadas\npara que puedan organizarlas\nsegún el orden que consideren adecuado.',
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

    // ---------- CONTINUAR ----------

    const continueButton = this.add.rectangle(
      layout.centerX,
      layout.continueY,
      layout.continueW,
      layout.buttonHeight,
      0x06b6d4
    ).setInteractive()

    continueButton.setStrokeStyle(
      2,
      0xffffff
    )

    const continueText = this.add.text(
      layout.centerX,
      layout.continueY,
      'CONTINUAR',
      {
        fontSize: layout.buttonFontSize,
        color: '#ffffff',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // ---------- HOVER ----------

    continueButton.on('pointerover', () => {

      continueButton.setScale(1.03)
      continueText.setScale(1.03)

    })

    continueButton.on('pointerout', () => {

      continueButton.setScale(1)
      continueText.setScale(1)

    })

    // ---------- CONTINUAR ----------

    continueButton.on('pointerdown', () => {

      this.scene.start('CamilaDiegoGroupsScene')

    })

  }

}
