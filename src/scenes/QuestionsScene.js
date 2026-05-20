import Phaser from 'phaser'

import createBackButton from '../utils/createBackButton'

export default class QuestionsScene extends Phaser.Scene {

  constructor() {
    super('QuestionsScene')
  }

  create() {

    // FONDO
    this.cameras.main.setBackgroundColor('#0f172a')

    // BOTÓN VOLVER
    createBackButton(
      this,
      'LyricScene'
    )

    // TÍTULO
    this.add.text(
      400,
      70,
      '🧠 Reflexionemos',
      {
        fontSize: '40px',
        color: '#f8fafc',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // PANEL
    const panel = this.add.rectangle(
      400,
      300,
      700,
      390,
      0x1e293b,
      0.95
    )

    panel.setStrokeStyle(
      2,
      0x334155
    )

    // PREGUNTA 1
    this.add.text(
      90,
      140,
      '1. ¿De qué habla la frase?',
      {
        fontSize: '26px',
        color: '#f8fafc',
        wordWrap: {
          width: 620
        }
      }
    )

    // PREGUNTA 2
    this.add.text(
      90,
      240,
      '2. ¿Qué piensas sobre el contenido de la frase?',
      {
        fontSize: '26px',
        color: '#f8fafc',
        wordWrap: {
          width: 620
        }
      }
    )

    // PREGUNTA 3
    this.add.text(
      90,
      340,
      '3. ¿Crees que estas canciones pueden influir en cómo vemos o tratamos a otras personas?',
      {
        fontSize: '26px',
        color: '#f8fafc',
        wordWrap: {
          width: 620
        }
      }
    )

    // BOTÓN CONTINUAR
    const continueButton = this.add.rectangle(
      400,
      530,
      260,
      70,
      0x06b6d4
    ).setInteractive()

    continueButton.setStrokeStyle(
      2,
      0xffffff
    )

    const continueText = this.add.text(
      400,
      530,
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

      this.scene.start('ClosingScene')

    })

  }

}