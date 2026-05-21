import Phaser from 'phaser'

import { isPortraitMobile, getCenterX } from '../utils/portraitLayout'

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

    this.cameras.main.setBackgroundColor('#0f172a')

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
      0x7c3aed,
      0.12
    )

    this.add.circle(
      700,
      520,
      220,
      0x06b6d4,
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
        fontSize: portrait ? '46px' : '52px',
        fontStyle: 'bold',
        color: '#f8fafc'
      }
    ).setOrigin(0.5)

    // ---------- SUBTÍTULO ----------

    this.add.text(
      centerX,
      subtitleY,
      'Prevención de violencia\ny reflexión crítica',
      {
        fontSize: portrait ? '25px' : '28px',
        color: '#cbd5e1',
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
      0x7c3aed
    ).setInteractive()

    boton.setStrokeStyle(
      2,
      0xffffff
    )

    const textoBoton = this.add.text(
      centerX,
      buttonY,
      'INGRESAR',
      {
        fontSize: portrait ? '27px' : '30px',
        fontStyle: 'bold',
        color: '#ffffff'
      }
    ).setOrigin(0.5)

    // ---------- HOVER ----------

    boton.on('pointerover', () => {

      boton.setScale(1.04)
      textoBoton.setScale(1.04)

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