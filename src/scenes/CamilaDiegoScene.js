import Phaser from 'phaser'

import createBackButton from '../utils/createBackButton'

export default class CamilaDiegoScene extends Phaser.Scene {

  constructor() {
    super('CamilaDiegoScene')
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

    // ---------- BOTÓN VOLVER ----------

    createBackButton(
      this,
      'Session2Scene'
    )

    // ---------- TÍTULO ----------

    this.add.text(
      400,
      70,
      '🖼️ Camila y Diego',
      {
        fontSize: '42px',
        color: '#f8fafc',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // ---------- PANEL ----------

    const panel = this.add.rectangle(
      400,
      310,
      700,
      420,
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
      250,
      'La siguiente historia muestra\nuna relación que cambia progresivamente.\n\nDivide a las y los participantes\nen pequeños grupos.\n\nEntrega las cartillas desordenadas\npara que puedan organizarlas\nsegún el orden que consideren adecuado.',
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

    // ---------- CONTINUAR ----------

    const continueButton = this.add.rectangle(
      400,
      520,
      260,
      70,
      0x06b6d4
    ).setInteractive()

    continueButton.setStrokeStyle(
      2,
      0xffffff
    )

    const continueText = this.add.text(
      400,
      520,
      'CONTINUAR',
      {
        fontSize: '28px',
        color: '#ffffff',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // ---------- HOVER ----------

    continueButton.on('pointerover', () => {

      continueButton.setScale(1.03)
      continueText.setScale(1.03)

    })

    continueButton.on('pointerout', () => {

      continueButton.setScale(1)
      continueText.setScale(1)

    })

    // ---------- CONTINUAR ----------

    continueButton.on('pointerdown', () => {

      this.scene.start('CamilaDiegoGroupsScene')

    })

  }

}