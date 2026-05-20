import Phaser from 'phaser'

export default class IntroScene extends Phaser.Scene {

  constructor() {
    super('IntroScene')
  }

  create() {

    this.cameras.main.setBackgroundColor('#0f172a')

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

    const panel = this.add.rectangle(
      400,
      300,
      650,
      420,
      0x1e293b,
      0.96
    )

    panel.setStrokeStyle(
      3,
      0x334155
    )

    this.add.text(
      400,
      120,
      'GAME OVER',
      {
        fontSize: '50px',
        fontStyle: 'bold',
        color: '#f8fafc'
      }
    ).setOrigin(0.5)

    this.add.text(
      400,
      180,
      'Prevención de violencia\ny reflexión crítica',
      {
        fontSize: '28px',
        color: '#cbd5e1',
        align: 'center'
      }
    ).setOrigin(0.5)

    this.add.text(
      400,
      280,
      'Explora sesiones y actividades\npara reflexionar sobre igualdad,\nrelaciones y convivencia.',
      {
        fontSize: '24px',
        color: '#e2e8f0',
        align: 'center',
        lineSpacing: 12
      }
    ).setOrigin(0.5)

    const boton = this.add.rectangle(
      400,
      450,
      260,
      75,
      0x7c3aed
    ).setInteractive()

    boton.setStrokeStyle(
      2,
      0xffffff
    )

    const textoBoton = this.add.text(
      400,
      450,
      'INGRESAR',
      {
        fontSize: '28px',
        fontStyle: 'bold',
        color: '#ffffff'
      }
    ).setOrigin(0.5)

    boton.on('pointerover', () => {

      boton.setScale(1.03)
      textoBoton.setScale(1.03)

    })

    boton.on('pointerout', () => {

      boton.setScale(1)
      textoBoton.setScale(1)

    })

    boton.on('pointerdown', () => {

      this.scene.start('MenuScene')

    })

  }

}