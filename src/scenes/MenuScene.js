import Phaser from 'phaser'

import { getStackSceneLayout } from '../utils/portraitLayout'

export default class MenuScene extends Phaser.Scene {

  constructor() {
    super('MenuScene')
  }

  create() {

    const layout = getStackSceneLayout(this, {
      titleY: 90,
      subtitleY: 145,
      buttonYs: [240, 350, 460, 570],
      titleFontSize: '52px',
      subtitleFontSize: '24px',
      buttonFontSize: '24px',
      buttonW: 520,
      buttonH: 85,
      buttonAreaTop: 215,
      buttonAreaBottom: 520
    })

    // ---------- FONDO ----------

    this.cameras.main.setBackgroundColor('#0f172a')

    // ---------- DECORACIÓN ----------

    this.add.circle(
      120,
      layout.portrait ? 90 : 100,
      180,
      0x7c3aed,
      0.10
    )

    this.add.circle(
      700,
      layout.portrait ? 500 : 520,
      220,
      0x06b6d4,
      0.08
    )

    // ---------- TÍTULO ----------

    this.add.text(
      layout.centerX,
      layout.titleY,
      'GAME OVER',
      {
        fontSize: layout.titleFontSize,
        fontStyle: 'bold',
        color: '#f8fafc'
      }
    ).setOrigin(0.5)

    // ---------- SUBTÍTULO ----------

    this.add.text(
      layout.centerX,
      layout.subtitleY,
      'Selecciona una sesión',
      {
        fontSize: layout.subtitleFontSize,
        color: '#cbd5e1'
      }
    ).setOrigin(0.5)

    // ---------- SESIONES ----------

    const sessions = [
      { label: 'Sesión 1\nDiferentes pero iguales', color: 0x06b6d4, scene: 'Session1Scene' },
      { label: 'Sesión 2\nLa violencia se pinta de amor', color: 0x7c3aed, scene: 'Session2Scene' },
      { label: 'Sesión 3\n¡Ponte la camiseta!', color: 0xf59e0b, scene: null },
      { label: 'Sesión 4\nJuntas y juntos paremos la violencia', color: 0x10b981, scene: null }
    ]

    sessions.forEach((session, index) => {

      const button = this.createButton(
        layout.centerX,
        layout.buttonYs[index],
        session.label,
        session.color,
        layout.buttonW,
        layout.buttonH,
        layout.buttonFontSize
      )

      button.on('pointerdown', () => {

        if (session.scene) {
          this.scene.start(session.scene)
        } else {
          alert('Próximamente')
        }

      })

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
        align: 'center',
        color: '#ffffff',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    button.on('pointerover', () => {

      button.setScale(1.02)
      label.setScale(1.02)

    })

    button.on('pointerout', () => {

      button.setScale(1)
      label.setScale(1)

    })

    return button

  }

}
