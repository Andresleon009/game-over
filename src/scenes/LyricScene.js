import Phaser from 'phaser'

import createBackButton from '../utils/createBackButton'

export default class LyricScene extends Phaser.Scene {

  constructor() {
    super('LyricScene')
  }

  create() {

    // FONDO
    this.cameras.main.setBackgroundColor('#0f172a')

    // BOTÓN VOLVER
    createBackButton(
      this,
      'ReflectionScene'
    )

    // TÍTULO
    this.add.text(
      400,
      100,
      '🎵 Fragmento de la canción',
      {
        fontSize: '38px',
        color: '#f8fafc',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // PANEL FRASE
    const lyricPanel = this.add.rectangle(
      400,
      300,
      620,
      260,
      0x1e293b,
      0.95
    )

    lyricPanel.setStrokeStyle(
      2,
      0x334155
    )

    // LETRA
    this.add.text(
      400,
      300,
      '“Quien busca una mujer cara bonita mucha plata debe tener para mantener mujer bonita”\n\n(Kjarkas)',
      {
        fontSize: '30px',
        color: '#f8fafc',
        align: 'center',
        lineSpacing: 16,
        wordWrap: {
          width: 520
        }
      }
    ).setOrigin(0.5)

    // BOTÓN REFLEXIONAR
    const nextButton = this.add.rectangle(
      400,
      520,
      260,
      70,
      0x06b6d4
    ).setInteractive()

    nextButton.setStrokeStyle(
      2,
      0xffffff
    )

    const nextText = this.add.text(
      400,
      520,
      'REFLEXIONAR',
      {
        fontSize: '26px',
        color: '#ffffff',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // HOVER
    nextButton.on('pointerover', () => {

      nextButton.setScale(1.03)
      nextText.setScale(1.03)

    })

    nextButton.on('pointerout', () => {

      nextButton.setScale(1)
      nextText.setScale(1)

    })

    // CLICK
    nextButton.on('pointerdown', () => {

      this.scene.start('QuestionsScene')

    })

  }

}