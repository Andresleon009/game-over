import Phaser from 'phaser'

import createBackButton from '../utils/createBackButton'
export default class ReflectionScene extends Phaser.Scene {

  constructor() {
    super('ReflectionScene')
  }

  create() {

    // FONDO
    this.cameras.main.setBackgroundColor('#0f172a')

    // BOTÓN VOLVER
    createBackButton(
      this,
      'AudioScene'
    )

    // TÍTULO
    this.add.text(
      400,
      120,
      '💭 Primera impresión',
      {
        fontSize: '40px',
        color: '#f8fafc',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // PREGUNTA
    this.add.text(
      400,
      210,
      '¿Qué te hizo pensar esta canción?',
      {
        fontSize: '28px',
        color: '#cbd5e1'
      }
    ).setOrigin(0.5)

    // CAJA
    const inputBox = this.add.rectangle(
      400,
      340,
      520,
      140,
      0x1e293b,
      0.95
    )

    inputBox.setStrokeStyle(
      2,
      0x334155
    )

    // TEXTO PLACEHOLDER
    this.add.text(
      400,
      340,
      'Escribe aquí tu reflexión...',
      {
        fontSize: '24px',
        color: '#94a3b8'
      }
    ).setOrigin(0.5)

    // BOTÓN CONTINUAR
    const continueButton = this.add.rectangle(
      400,
      500,
      260,
      70,
      0x7c3aed
    ).setInteractive()

    continueButton.setStrokeStyle(
      2,
      0xffffff
    )

    const continueText = this.add.text(
      400,
      500,
      'CONTINUAR',
      {
        fontSize: '26px',
        color: '#ffffff',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // HOVER
    continueButton.on('pointerover', () => {

      continueButton.setScale(1.03)
      continueText.setScale(1.03)

    })

    continueButton.on('pointerout', () => {

      continueButton.setScale(1)
      continueText.setScale(1)

    })

    // CONTINUAR
    continueButton.on('pointerdown', () => {

      this.scene.start('LyricScene')

    })

  }

}