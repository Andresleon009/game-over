import Phaser from 'phaser'

export default class MenuScene extends Phaser.Scene {

  constructor() {
    super('MenuScene')
  }

  create() {

    // FONDO
    this.cameras.main.setBackgroundColor('#0f172a')

    // DECORACIÓN
    this.add.circle(
      120,
      100,
      180,
      0x7c3aed,
      0.10
    )

    this.add.circle(
      700,
      520,
      220,
      0x06b6d4,
      0.08
    )

    // TÍTULO
    this.add.text(
      400,
      90,
      'GAME OVER',
      {
        fontSize: '52px',
        fontStyle: 'bold',
        color: '#f8fafc'
      }
    ).setOrigin(0.5)

    // SUBTÍTULO
    this.add.text(
      400,
      145,
      'Selecciona una sesión',
      {
        fontSize: '24px',
        color: '#cbd5e1'
      }
    ).setOrigin(0.5)

    // ---------- SESIÓN 1 ----------

    const sesion1 = this.createButton(
      400,
      240,
      'Sesión 1\nDiferentes pero iguales',
      0x06b6d4
    )

    sesion1.on('pointerdown', () => {

      this.scene.start('Session1Scene')

    })

    // ---------- SESIÓN 2 ----------

    const sesion2 = this.createButton(
      400,
      350,
      'Sesión 2\nLa violencia se pinta de amor',
      0x7c3aed
    )

    sesion2.on('pointerdown', () => {

      alert('Próximamente')

    })

    // ---------- SESIÓN 3 ----------

    const sesion3 = this.createButton(
      400,
      460,
      'Sesión 3\n¡Ponte la camiseta!',
      0xf59e0b
    )

    sesion3.on('pointerdown', () => {

      alert('Próximamente')

    })

    // ---------- SESIÓN 4 ----------

    const sesion4 = this.createButton(
      400,
      570,
      'Sesión 4\nJuntas y juntos paremos la violencia',
      0x10b981
    )

    sesion4.on('pointerdown', () => {

      alert('Próximamente')

    })

  }

  createButton(x, y, text, color) {

    const button = this.add.rectangle(
      x,
      y,
      520,
      85,
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
        fontSize: '24px',
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