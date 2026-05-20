import Phaser from 'phaser'

import createBackButton from '../utils/createBackButton'

export default class CamilaDiegoVideoScene extends Phaser.Scene {

  constructor() {
    super('CamilaDiegoVideoScene')
  }

  create() {

    // ---------- FONDO ----------

    this.cameras.main.setBackgroundColor('#0f172a')

    // ---------- TRANSICIÓN ----------

    this.cameras.main.fadeIn(
      250,
      0,
      0,
      0
    )

    // ---------- VOLVER ----------

    createBackButton(
      this,
      'CamilaDiegoGroupsScene'
    )

    // ---------- TÍTULO ----------

    this.add.text(
      400,
      80,
      '🎬 Historia completa',
      {
        fontSize: '42px',
        color: '#f8fafc',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // ---------- PANEL ----------

    const panel = this.add.rectangle(
      400,
      290,
      700,
      330,
      0x1e293b,
      0.95
    )

    panel.setStrokeStyle(
      2,
      0x334155
    )

    // ---------- TEXTO ----------

    this.add.text(
      400,
      240,
      'Después de escuchar las interpretaciones\nde los grupos, presentemos ahora\nel orden correcto de la historia.\n\nObserven cómo cambia progresivamente\nla relación entre Camila y Diego.',
      {
        fontSize: '28px',
        color: '#f8fafc',
        align: 'center',
        lineSpacing: 12,
        wordWrap: {
          width: 580
        }
      }
    ).setOrigin(0.5)

    // ---------- BOTÓN VIDEO ----------

    const videoButton = this.add.rectangle(
      400,
      390,
      320,
      80,
      0xef4444
    ).setInteractive()

    videoButton.setStrokeStyle(
      2,
      0xffffff
    )

    const videoText = this.add.text(
      400,
      390,
      '▶ VER VIDEO',
      {
        fontSize: '30px',
        color: '#ffffff',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // ---------- HOVER ----------

    videoButton.on('pointerover', () => {

      videoButton.setScale(1.03)
      videoText.setScale(1.03)

    })

    videoButton.on('pointerout', () => {

      videoButton.setScale(1)
      videoText.setScale(1)

    })

    // ---------- VIDEO ----------

    videoButton.on('pointerdown', () => {

      window.open(
        'https://www.youtube.com/watch?v=bbRxkAMjYq8',
        '_blank'
      )

    })

    // ---------- CONTINUAR ----------

    const continueButton = this.add.rectangle(
      400,
      530,
      280,
      70,
      0x10b981
    ).setInteractive()

    continueButton.setStrokeStyle(
      2,
      0xffffff
    )

    const continueText = this.add.text(
      400,
      530,
      'REFLEXIONAR',
      {
        fontSize: '28px',
        color: '#ffffff',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    continueButton.on('pointerover', () => {

      continueButton.setScale(1.03)
      continueText.setScale(1.03)

    })

    continueButton.on('pointerout', () => {

      continueButton.setScale(1)
      continueText.setScale(1)

    })

    continueButton.on('pointerdown', () => {

      this.scene.start(
        'CamilaDiegoReflectionScene'
      )

    })

  }

}