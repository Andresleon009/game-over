import Phaser from 'phaser'

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
      400,
      180,
      'logo'
    ).setScale(0.25)

    // ---------- TÍTULO ----------

    this.add.text(
      400,
      320,
      'GAME OVER',
      {
        fontSize: '52px',
        fontStyle: 'bold',
        color: '#f8fafc'
      }
    ).setOrigin(0.5)

    // ---------- SUBTÍTULO ----------

    this.add.text(
      400,
      390,
      'Prevención de violencia\ny reflexión crítica',
      {
        fontSize: '28px',
        color: '#cbd5e1',
        align: 'center',
        lineSpacing: 10
      }
    ).setOrigin(0.5)

    // ---------- BOTÓN ----------

    const boton = this.add.rectangle(
      400,
      520,
      280,
      80,
      0x7c3aed
    ).setInteractive()

    boton.setStrokeStyle(
      2,
      0xffffff
    )

    const textoBoton = this.add.text(
      400,
      520,
      'INGRESAR',
      {
        fontSize: '30px',
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