import Phaser from 'phaser'

import createBackButton from '../utils/createBackButton'

export default class Session2Scene extends Phaser.Scene {

  constructor() {
    super('Session2Scene')
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
      'Sesión 2',
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
      'La violencia se pinta de amor',
      {
        fontSize: '28px',
        color: '#cbd5e1'
      }
    ).setOrigin(0.5)

    // ACTIVIDAD 1
    this.createButton(
      400,
      270,
      '⚙️ La máquina',
      0x06b6d4
    )

    // ACTIVIDAD 2
    this.createButton(
      400,
      390,
      '🖼️ Camila y Diego',
      0x7c3aed
    )

    // ACTIVIDAD 3
    this.createButton(
      400,
      510,
      '🧩 Próximamente',
      0xf59e0b
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