import Phaser from 'phaser'

import createBackButton from '../utils/createBackButton'
import { getFlowSceneLayout } from '../utils/portraitLayout'
import { getSong, DEFAULT_SONG_ID } from '../data/songs'

export default class LyricScene extends Phaser.Scene {

  constructor() {
    super('LyricScene')
  }

  init(data) {

    this.songId = (data && data.songId) || DEFAULT_SONG_ID

  }

  create() {

    const song = getSong(this.songId)

    const layout = getFlowSceneLayout(this, {
      titleY: 100,
      panelY: 300,
      panelW: 620,
      panelH: 260,
      contentY: 300,
      actionY: 520,
      rangeMin: 100,
      rangeMax: 520,
      titleFontSize: '38px',
      bodyFontSize: '30px',
      actionFontSize: '26px',
      buttonW: 260,
      buttonH: 70,
      panelHPortrait: 280
    })

    // FONDO
    this.cameras.main.setBackgroundColor('#0f172a')

    // BOTÓN VOLVER
    // Nuevo orden: viene de AudioScene (reproducción)
    createBackButton(
      this,
      'AudioScene'
    )

    // TÍTULO
    this.add.text(
      layout.centerX,
      layout.titleY,
      '🎵 Fragmento de la canción',
      {
        fontSize: layout.titleFontSize,
        color: '#f8fafc',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // PREGUNTA INICIAL
    this.add.text(
      layout.centerX,
      layout.titleY + 55,
      song.initialQuestion,
      {
        fontSize: layout.portrait ? '20px' : '22px',
        color: '#94a3b8',
        align: 'center',
        wordWrap: {
          width: layout.portrait ? 500 : 560
        }
      }
    ).setOrigin(0.5)

    // PANEL FRASE
    const lyricPanel = this.add.rectangle(
      layout.centerX,
      layout.panelY,
      layout.panelW,
      layout.panelH,
      0x1e293b,
      0.95
    )

    lyricPanel.setStrokeStyle(
      2,
      0x334155
    )

    // LETRA
    this.add.text(
      layout.centerX,
      layout.contentY,
      song.fragment,
      {
        fontSize: layout.bodyFontSize,
        color: '#f8fafc',
        align: 'center',
        lineSpacing: layout.portrait ? 13 : 16,
        wordWrap: {
          width: layout.portrait ? 500 : 520
        }
      }
    ).setOrigin(0.5)

    // BOTÓN REFLEXIONAR
    const nextButton = this.add.rectangle(
      layout.centerX,
      layout.actionY,
      layout.buttonW,
      layout.buttonH,
      0x06b6d4
    ).setInteractive()

    nextButton.setStrokeStyle(
      2,
      0xffffff
    )

    const nextText = this.add.text(
      layout.centerX,
      layout.actionY,
      'REFLEXIONAR',
      {
        fontSize: layout.actionFontSize,
        color: '#ffffff',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // HOVER
    nextButton.on('pointerover', () => {

      nextButton.setScale(1.03)
      nextText.setScale(1.03)

    })

    nextButton.on('pointerout', () => {

      nextButton.setScale(1)
      nextText.setScale(1)

    })

    // CONTINUAR -> discusión grupal
    nextButton.on('pointerdown', () => {

      this.scene.start(
        'QuestionsScene',
        { songId: this.songId }
      )

    })

  }

}