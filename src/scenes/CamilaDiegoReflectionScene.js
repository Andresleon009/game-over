import Phaser from 'phaser'

import createBackButton from '../utils/createBackButton'
import { getCamilaDiegoLayout, getReflectionLayout } from '../utils/camilaDiegoLayout'

export default class CamilaDiegoReflectionScene extends Phaser.Scene {

  constructor() {
    super('CamilaDiegoReflectionScene')
  }

  create() {

    const layout = getReflectionLayout(getCamilaDiegoLayout(this))

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
      'CamilaDiegoVideoScene'
    )

    // ---------- TÍTULO ----------

    this.add.text(
      layout.centerX,
      layout.titleY,
      '💬 Reflexionemos',
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

    // ---------- PREGUNTAS ----------

    this.add.text(
      layout.centerX,
      layout.questionsY,
      '• ¿Qué observaron en la relación\nentre Camila y Diego?\n\n• ¿Cómo fue cambiando el trato\nde Diego hacia Camila?\n\n• ¿Cómo creen que se sentía Camila?\n\n• ¿Qué situaciones les llamaron\nmás la atención?\n\n• ¿Qué señales de violencia\naparecieron en la historia?',
      {
        fontSize: layout.bodyFontSize,
        color: '#f8fafc',
        align: 'left',
        lineSpacing: layout.bodyLineSpacing,
        wordWrap: {
          width: layout.wordWrapWidth
        }
      }
    ).setOrigin(0.5, 0.5)

    // ---------- CIERRE ----------

    const finishButton = this.add.rectangle(
      layout.centerX,
      layout.finishY,
      layout.finishW,
      layout.buttonHeight,
      0x06b6d4
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

    // ---------- HOVER ----------

    finishButton.on('pointerover', () => {

      finishButton.setScale(1.03)
      finishText.setScale(1.03)

    })

    finishButton.on('pointerout', () => {

      finishButton.setScale(1)
      finishText.setScale(1)

    })

    // ---------- FINALIZAR ----------

    finishButton.on('pointerdown', () => {

      this.scene.start('Session2Scene')

    })

  }

}
