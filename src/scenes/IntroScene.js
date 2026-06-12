import Phaser from 'phaser'

import { isPortraitMobile, getCenterX } from '../utils/portraitLayout'
import theme from '../utils/theme'

export default class IntroScene extends Phaser.Scene {

  constructor() {
    super('IntroScene')
  }

  preload() {

    this.load.image(
      'logo',
      'images/logo.png'
    )

  }

  create() {

    const portrait = isPortraitMobile(this)
    const centerX = getCenterX(this)
    const logoY = portrait ? 155 : 180
    const titleY = portrait ? 288 : 320
    const subtitleY = portrait ? 365 : 390
    const buttonY = portrait ? 530 : 520

    // ---------- FONDO ----------

    this.cameras.main.setBackgroundColor(theme.colors.backgroundHex)

    // ---------- TRANSICIÓN ----------

    this.cameras.main.fadeIn(
      300,
      0,
      0,
      0
    )

    // ---------- DECORACIÓN ----------

    this.add.circle(
      120,
      100,
      180,
      theme.colors.decorationViolet,
      0.12
    )

    this.add.circle(
      700,
      520,
      220,
      theme.colors.decorationCyan,
      0.08
    )

    // ---------- LOGO GRANDE ----------

    this.add.image(
      centerX,
      logoY,
      'logo'
    ).setScale(portrait ? 0.22 : 0.25)

    // ---------- TÍTULO ----------

    this.add.text(
      centerX,
      titleY,
      'GAME OVER',
      {
        ...theme.text.title,
        fontSize: portrait ? '46px' : '52px'
      }
    ).setOrigin(0.5)

    // ---------- SUBTÍTULO ----------

    this.add.text(
      centerX,
      subtitleY,
      'Prevención de violencia\ny reflexión crítica',
      {
        ...theme.text.subtitle,
        fontSize: portrait ? '25px' : '28px',
        align: 'center',
        lineSpacing: 10
      }
    ).setOrigin(0.5)

    // ---------- BOTÓN ----------

    const boton = this.add.rectangle(
      centerX,
      buttonY,
      portrait ? 260 : 280,
      portrait ? 72 : 80,
      theme.colors.accentPrimary
    ).setInteractive()

    boton.setStrokeStyle(
      theme.button.strokeWidth,
      theme.button.strokeColor
    )

    const textoBoton = this.add.text(
      centerX,
      buttonY,
      'INGRESAR',
      {
        ...theme.text.button,
        fontSize: portrait ? '27px' : '30px'
      }
    ).setOrigin(0.5)

    // ---------- HOVER ----------

    boton.on('pointerover', () => {

      boton.setScale(theme.button.hoverScale)
      textoBoton.setScale(theme.button.hoverScale)

    })

    boton.on('pointerout', () => {

      boton.setScale(1)
      textoBoton.setScale(1)

    })

    // ---------- CLICK ----------

    boton.on('pointerdown', () => {

      this.cameras.main.fadeOut(
        200,
        0,
        0,
        0
      )

      this.time.delayedCall(200, () => {

        this.scene.start('MenuScene')

      })

    })

  }

}