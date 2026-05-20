import Phaser from 'phaser'

import createBackButton from '../utils/createBackButton'

export default class CamilaDiegoReflectionScene extends Phaser.Scene {

  constructor() {
    super('CamilaDiegoReflectionScene')
  }

  create() {

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
      400,
      70,
      '💬 Reflexionemos',
      {
        fontSize: '42px',
        color: '#f8fafc',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // ---------- PANEL ----------

    const panel = this.add.rectangle(
      400,
      320,
      720,
      430,
      0x1e293b,
      0.95
    )

    panel.setStrokeStyle(
      2,
      0x334155
    )

    // ---------- PREGUNTAS ----------

    this.add.text(
      400,
      290,
      '• ¿Qué observaron en la relación\nentre Camila y Diego?\n\n• ¿Cómo fue cambiando el trato\nde Diego hacia Camila?\n\n• ¿Cómo creen que se sentía Camila?\n\n• ¿Qué situaciones les llamaron\nmás la atención?\n\n• ¿Qué señales de violencia\naparecieron en la historia?',
      {
        fontSize: '27px',
        color: '#f8fafc',
        align: 'left',
        lineSpacing: 14,
        wordWrap: {
          width: 580
        }
      }
    ).setOrigin(0.5)

    // ---------- CIERRE ----------

    const finishButton = this.add.rectangle(
      400,
      540,
      260,
      70,
      0x06b6d4
    ).setInteractive()

    finishButton.setStrokeStyle(
      2,
      0xffffff
    )

    const finishText = this.add.text(
      400,
      540,
      'FINALIZAR',
      {
        fontSize: '28px',
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