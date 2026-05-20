import Phaser from 'phaser'

export default class Session1Scene extends Phaser.Scene {

  constructor() {
    super('Session1Scene')
  }

  create() {

    this.cameras.main.setBackgroundColor('#0f172a')

    // TÍTULO
    this.add.text(
      400,
      90,
      'Sesión 1',
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
      'Diferentes pero iguales',
      {
        fontSize: '28px',
        color: '#cbd5e1'
      }
    ).setOrigin(0.5)

    // ---------- ACTIVIDAD 1 ----------

    const actividad1 = this.createButton(
      400,
      270,
      '🎵 Detrás de la letra',
      0x06b6d4
    )

    actividad1.on('pointerdown', () => {

      this.scene.start('AudioScene')

    })

    // ---------- ACTIVIDAD 2 ----------

    const actividad2 = this.createButton(
      400,
      390,
      '💭 El sueño increíble',
      0x7c3aed
    )

    actividad2.on('pointerdown', () => {

      alert('Próximamente')

    })

    // ---------- ACTIVIDAD 3 ----------

    const actividad3 = this.createButton(
      400,
      510,
      '🧩 Actividad futura',
      0xf59e0b
    )

    actividad3.on('pointerdown', () => {

      alert('Próximamente')

    })

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

    return button

  }

}