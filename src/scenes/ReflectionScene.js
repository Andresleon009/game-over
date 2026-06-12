import Phaser from 'phaser'

import createBackButton from '../utils/createBackButton'
import { getFlowSceneLayout } from '../utils/portraitLayout'
import { getSong, DEFAULT_SONG_ID } from '../data/songs'

export default class ReflectionScene extends Phaser.Scene {

  constructor() {
    super('ReflectionScene')
  }

  init(data) {

    this.songId = (data && data.songId) || DEFAULT_SONG_ID

  }

  create() {

    const song = getSong(this.songId)

    const layout = getFlowSceneLayout(this, {
      titleY: 120,
      subtitleY: 210,
      panelY: 340,
      panelW: 520,
      panelH: 140,
      contentY: 340,
      actionY: 500,
      rangeMin: 120,
      rangeMax: 500,
      titleFontSize: '40px',
      bodyFontSize: '28px',
      actionFontSize: '26px',
      buttonW: 260,
      buttonH: 70
    })

    // FONDO
    this.cameras.main.setBackgroundColor('#0f172a')

    // BOTÓN VOLVER
    // Nuevo orden: viene de QuestionsScene (discusión grupal)
    createBackButton(
      this,
      'QuestionsScene'
    )

    // TÍTULO - ahora es la Plenaria
    this.add.text(
      layout.centerX,
      layout.titleY,
      '🗣️ Plenaria',
      {
        fontSize: layout.titleFontSize,
        color: '#f8fafc',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // PREGUNTA DE PLENARIA
    this.add.text(
      layout.centerX,
      layout.subtitleY,
      song.plenaryQuestion,
      {
        fontSize: layout.bodyFontSize,
        color: '#cbd5e1',
        align: 'center',
        wordWrap: {
          width: layout.portrait ? 560 : 620
        }
      }
    ).setOrigin(0.5)

    // CAJA
    const inputBox = this.add.rectangle(
      layout.centerX,
      layout.panelY,
      layout.panelW,
      layout.panelH,
      0x1e293b,
      0.95
    )

    inputBox.setStrokeStyle(
      2,
      0x334155
    )

    // TEXTO DE APOYO
    this.add.text(
      layout.centerX,
      layout.contentY,
      'Compartan sus ideas en plenaria con el grupo.',
      {
        fontSize: layout.portrait ? '22px' : '24px',
        color: '#94a3b8',
        align: 'center',
        wordWrap: {
          width: layout.portrait ? 460 : 480
        }
      }
    ).setOrigin(0.5)

    // BOTÓN CONTINUAR
    const continueButton = this.add.rectangle(
      layout.centerX,
      layout.actionY,
      layout.buttonW,
      layout.buttonH,
      0x7c3aed
    ).setInteractive()

    continueButton.setStrokeStyle(
      2,
      0xffffff
    )

    const continueText = this.add.text(
      layout.centerX,
      layout.actionY,
      'CONTINUAR',
      {
        fontSize: layout.actionFontSize,
        color: '#ffffff',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // HOVER
    continueButton.on('pointerover', () => {

      continueButton.setScale(1.03)
      continueText.setScale(1.03)

    })

    continueButton.on('pointerout', () => {

      continueButton.setScale(1)
      continueText.setScale(1)

    })

    // CONTINUAR -> Cierre pedagógico
    continueButton.on('pointerdown', () => {

      this.scene.start(
        'ClosingScene',
        { songId: this.songId }
      )

    })

  }

}