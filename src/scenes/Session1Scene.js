import Phaser from 'phaser'

import createBackButton from '../utils/createBackButton'
import { getStackSceneLayout } from '../utils/portraitLayout'

export default class Session1Scene extends Phaser.Scene {

  constructor() {
    super('Session1Scene')
  }

  create() {

    this.cameras.main.setBackgroundColor('#0f172a')

    const layout = getStackSceneLayout(this, {
      titleY: 90,
      subtitleY: 145,
      buttonYs: [270, 390, 510],
      titleFontSize: '46px',
      subtitleFontSize: '28px',
      buttonFontSize: '28px',
      buttonW: 500,
      buttonH: 90,
      buttonAreaTop: 235,
      buttonAreaBottom: 515
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
      'Sesión 1',
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
      'Diferentes pero iguales',
      {
        fontSize: layout.subtitleFontSize,
        color: '#cbd5e1'
      }
    ).setOrigin(0.5)

    // ---------- ACTIVIDAD 1 ----------

    const actividad1 = this.createButton(
      layout.centerX,
      layout.buttonYs[0],
      '🎵 Detrás de la letra',
      0x06b6d4,
      layout.buttonW,
      layout.buttonH,
      layout.buttonFontSize
    )

    actividad1.on('pointerdown', () => {

      this.scene.start('SongSelectScene')

    })

    // ---------- ACTIVIDAD 2 ----------

    const actividad2 = this.createButton(
      layout.centerX,
      layout.buttonYs[1],
      '💭 El sueño increíble',
      0x7c3aed,
      layout.buttonW,
      layout.buttonH,
      layout.buttonFontSize
    )

    actividad2.on('pointerdown', () => {

      alert('Próximamente')

    })

    // ---------- ACTIVIDAD 3 ----------

    const actividad3 = this.createButton(
      layout.centerX,
      layout.buttonYs[2],
      '🧩 Actividad futura',
      0xf59e0b,
      layout.buttonW,
      layout.buttonH,
      layout.buttonFontSize
    )

    actividad3.on('pointerdown', () => {

      alert('Próximamente')

    })

  }

  createButton(x, y, text, color, width, height, fontSize) {

    const button = this.add.rectangle(
      x,
      y,
      width,
      height,
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
        fontSize,
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

    return button

  }

}