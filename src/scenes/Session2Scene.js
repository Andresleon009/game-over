import Phaser from 'phaser'

import createBackButton from '../utils/createBackButton'
import { getStackSceneLayout } from '../utils/portraitLayout'

export default class Session2Scene extends Phaser.Scene {

  constructor() {
    super('Session2Scene')
  }

  create() {

    // ---------- FONDO ----------

    this.cameras.main.setBackgroundColor('#0f172a')

    // ---------- BOTÓN VOLVER ----------

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

    // ---------- TÍTULO ----------

    this.add.text(
      layout.centerX,
      layout.titleY,
      'Sesión 2',
      {
        fontSize: layout.titleFontSize,
        color: '#f8fafc',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // ---------- SUBTÍTULO ----------

    this.add.text(
      layout.centerX,
      layout.subtitleY,
      'La violencia se pinta de amor',
      {
        fontSize: layout.subtitleFontSize,
        color: '#cbd5e1'
      }
    ).setOrigin(0.5)

    // ---------- ACTIVIDAD 1 ----------

    this.createButton(
      layout.centerX,
      layout.buttonYs[0],
      '⚙️ La máquina',
      0x06b6d4,
      null,
      layout
    )

    // ---------- ACTIVIDAD 2 ----------

    this.createButton(
      layout.centerX,
      layout.buttonYs[1],
      '🖼️ Camila y Diego',
      0x7c3aed,
      'CamilaDiegoScene',
      layout
    )

    // ---------- ACTIVIDAD 3 ----------

    this.createButton(
      layout.centerX,
      layout.buttonYs[2],
      '🧩 Próximamente',
      0xf59e0b,
      null,
      layout
    )

  }

  createButton(x, y, text, color, targetScene, layout) {

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

    // ---------- HOVER ----------

    button.on('pointerover', () => {

      button.setScale(1.03)
      label.setScale(1.03)

    })

    button.on('pointerout', () => {

      button.setScale(1)
      label.setScale(1)

    })

    // ---------- CLICK ----------

    button.on('pointerdown', () => {

      if (targetScene) {

        this.scene.start(targetScene)

      } else {

        alert('Próximamente')

      }

    })

  }

}