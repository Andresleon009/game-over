import Phaser from 'phaser'

import createBackButton from '../utils/createBackButton'

export default class ClosingScene extends Phaser.Scene {

  constructor() {
    super('ClosingScene')
  }

  create() {

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
      120,
      180,
      0x06b6d4,
      0.08
    )

    // TÍTULO
    this.add.text(
      400,
      120,
      '✨ Para reflexionar',
      {
        fontSize: '42px',
        color: '#f8fafc',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // PANEL
    const panel = this.add.rectangle(
      400,
      320,
      650,
      320,
      0x1e293b,
      0.95
    )

    panel.setStrokeStyle(
      2,
      0x334155
    )

    // MENSAJE
    this.add.text(
      400,
      300,
      'Las canciones también transmiten ideas,\nroles y formas de relacionarnos.\n\nReflexionar sobre estos mensajes\npuede ayudarnos a construir vínculos\nmás respetuosos y saludables.',
      {
        fontSize: '30px',
        color: '#f8fafc',
        align: 'center',
        lineSpacing: 14,
        wordWrap: {
          width: 540
        }
      }
    ).setOrigin(0.5)

    // BOTÓN FINALIZAR
    const finishButton = this.add.rectangle(
      400,
      540,
      260,
      70,
      0x10b981
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