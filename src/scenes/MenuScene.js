import Phaser from 'phaser'

import { getStackSceneLayout } from '../utils/portraitLayout'
import theme from '../utils/theme'

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

    this.cameras.main.setBackgroundColor(theme.colors.backgroundHex)

    // ---------- DECORACIÓN ----------

    this.add.circle(
      120,
      layout.portrait ? 90 : 100,
      180,
      theme.colors.decorationViolet,
      0.10
    )

    this.add.circle(
      700,
      layout.portrait ? 500 : 520,
      220,
      theme.colors.decorationCyan,
      0.08
    )

    // ---------- TÍTULO ----------

    this.add.text(
      layout.centerX,
      layout.titleY,
      'GAME OVER',
      {
        ...theme.text.title,
        fontSize: layout.titleFontSize
      }
    ).setOrigin(0.5)

    // ---------- SUBTÍTULO ----------

    this.add.text(
      layout.centerX,
      layout.subtitleY,
      'Selecciona una sesión',
      {
        ...theme.text.subtitle,
        fontSize: layout.subtitleFontSize
      }
    ).setOrigin(0.5)

    // ---------- SESIONES ----------

    const sessions = [
      { label: 'Sesión 1\nDiferentes pero iguales', color: theme.colors.sessions.session1, scene: 'Session1Scene' },
      { label: 'Sesión 2\nLa violencia se pinta de amor', color: theme.colors.sessions.session2, scene: 'Session2Scene' },
      { label: 'Sesión 3\n¡Ponte la camiseta!', color: theme.colors.sessions.session3, scene: null },
      { label: 'Sesión 4\nJuntas y juntos paremos la violencia', color: theme.colors.sessions.session4, scene: null }
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
      theme.button.strokeWidth,
      theme.button.strokeColor
    )

    const label = this.add.text(
      x,
      y,
      text,
      {
        ...theme.text.button,
        fontSize,
        align: 'center'
      }
    ).setOrigin(0.5)

    button.on('pointerover', () => {

      button.setScale(theme.button.hoverScale)
      label.setScale(theme.button.hoverScale)

    })

    button.on('pointerout', () => {

      button.setScale(1)
      label.setScale(1)

    })

    return button

  }

}