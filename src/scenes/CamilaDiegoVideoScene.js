import Phaser from 'phaser'

import createBackButton from '../utils/createBackButton'
import { getCamilaDiegoLayout, getVideoLayout } from '../utils/camilaDiegoLayout'

export default class CamilaDiegoVideoScene extends Phaser.Scene {

  constructor() {
    super('CamilaDiegoVideoScene')
  }

  create() {

    const layout = getVideoLayout(getCamilaDiegoLayout(this))

    // ---------- FONDO ----------

    this.cameras.main.setBackgroundColor('#0f172a')

    // ---------- TRANSICIÓN ----------

    this.cameras.main.fadeIn(
      250,
      0,
      0,
      0
    )

    // ---------- VOLVER ----------

    createBackButton(
      this,
      'CamilaDiegoGroupsScene'
    )

    // ---------- TÍTULO ----------

    this.add.text(
      layout.centerX,
      layout.titleY,
      '🎬 Historia completa',
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
      'Después de escuchar las interpretaciones\nde los grupos, presentemos ahora\nel orden correcto de la historia.\n\nObserven cómo cambia progresivamente\nla relación entre Camila y Diego.',
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

    // ---------- BOTÓN VIDEO ----------

    const videoButton = this.add.rectangle(
      layout.centerX,
      layout.videoButtonY,
      layout.videoButtonW,
      layout.videoButtonH,
      0xef4444
    ).setInteractive()

    videoButton.setStrokeStyle(
      2,
      0xffffff
    )

    const videoText = this.add.text(
      layout.centerX,
      layout.videoButtonY,
      '▶ VER VIDEO',
      {
        fontSize: layout.videoButtonFontSize,
        color: '#ffffff',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // ---------- HOVER ----------

    videoButton.on('pointerover', () => {

      videoButton.setScale(1.03)
      videoText.setScale(1.03)

    })

    videoButton.on('pointerout', () => {

      videoButton.setScale(1)
      videoText.setScale(1)

    })

    // ---------- VIDEO ----------

    videoButton.on('pointerdown', () => {

      window.open(
        'https://www.youtube.com/watch?v=bbRxkAMjYq8',
        '_blank'
      )

    })

    // ---------- CONTINUAR ----------

    const continueButton = this.add.rectangle(
      layout.centerX,
      layout.continueY,
      layout.continueW,
      layout.buttonHeight,
      0x10b981
    ).setInteractive()

    continueButton.setStrokeStyle(
      2,
      0xffffff
    )

    const continueText = this.add.text(
      layout.centerX,
      layout.continueY,
      'REFLEXIONAR',
      {
        fontSize: layout.buttonFontSize,
        color: '#ffffff',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    continueButton.on('pointerover', () => {

      continueButton.setScale(1.03)
      continueText.setScale(1.03)

    })

    continueButton.on('pointerout', () => {

      continueButton.setScale(1)
      continueText.setScale(1)

    })

    continueButton.on('pointerdown', () => {

      this.scene.start(
        'CamilaDiegoReflectionScene'
      )

    })

  }

}
