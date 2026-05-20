import Phaser from 'phaser'

import createBackButton from '../utils/createBackButton'

export default class Session4Scene extends Phaser.Scene {

  constructor() {
    super('Session4Scene')
  }

  create() {

    this.cameras.main.setBackgroundColor('#0f172a')

    createBackButton(
      this,
      'MenuScene'
    )

    // TÍTULO
    this.add.text(
      400,
      90,
      'Sesión 4',
      {
        fontSize: '46px',
        color: '#f8fafc',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // SUBTÍTULO
    this.add.text(
      400,
      145,
      'Juntas y juntos paremos la violencia',
      {
        fontSize: '24px',
        color: '#cbd5e1',
        align: 'center'
      }
    ).setOrigin(0.5)

    // ACTIVIDAD 1
    this.createButton(
      400,
      250,
      '🧠 Memory conceptual',
      0x06b6d4
    )

    // ACTIVIDAD 2
    this.createButton(
      400,
      370,
      '🏆 Premiación',
      0x7c3aed
    )

    // ACTIVIDAD 3
    this.createButton(
      400,
      490,
      '✨ Cierre final',
      0x10b981
    )

  }

  createButton(x, y, text, color) {

    const button = this.add.rectangle(
      x,
      y,
      500,
      90,
      color
    ).setInteractive()

    button.setStrokeStyle(
      2,
      0xffffff
    )

    const label = this.add.text(
      x,
      y,
      text,
      {
        fontSize: '28px',
        color: '#ffffff',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    button.on('pointerover', () => {

      button.setScale(1.03)
      label.setScale(1.03)

    })

    button.on('pointerout', () => {

      button.setScale(1)
      label.setScale(1)

    })

    button.on('pointerdown', () => {

      alert('Próximamente')

    })

  }

}