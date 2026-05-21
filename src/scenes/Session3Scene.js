import Phaser from 'phaser'

import createBackButton from '../utils/createBackButton'
import { getStackSceneLayout } from '../utils/portraitLayout'

export default class Session3Scene extends Phaser.Scene {

  constructor() {
    super('Session3Scene')
  }

  create() {

    this.cameras.main.setBackgroundColor('#0f172a')

    const layout = getStackSceneLayout(this, {
      titleY: 90,
      subtitleY: 145,
      buttonYs: [320, 460],
      titleFontSize: '46px',
      subtitleFontSize: '28px',
      buttonFontSize: '28px',
      buttonW: 500,
      buttonH: 90,
      buttonAreaTop: 280,
      buttonAreaBottom: 510
    })

    createBackButton(
      this,
      'MenuScene',
      'menu'
    )

    // TÍTULO
    this.add.text(
      layout.centerX,
      layout.titleY,
      'Sesión 3',
      {
        fontSize: layout.titleFontSize,
        color: '#f8fafc',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // SUBTÍTULO
    this.add.text(
      layout.centerX,
      layout.subtitleY,
      '¡Ponte la camiseta!',
      {
        fontSize: layout.subtitleFontSize,
        color: '#cbd5e1'
      }
    ).setOrigin(0.5)

    // ACTIVIDAD 1
    this.createButton(
      layout.centerX,
      layout.buttonYs[0],
      '🎭 Historias propias',
      0x06b6d4,
      layout
    )

    // ACTIVIDAD 2
    this.createButton(
      layout.centerX,
      layout.buttonYs[1],
      '🧩 Próximamente',
      0xf59e0b,
      layout
    )

  }

  createButton(x, y, text, color, layout) {

    const button = this.add.rectangle(
      x,
      y,
      layout.buttonW,
      layout.buttonH,
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
        fontSize: layout.buttonFontSize,
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