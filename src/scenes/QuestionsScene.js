import Phaser from 'phaser'

import createBackButton from '../utils/createBackButton'
import { getQuestionsSceneLayout } from '../utils/portraitLayout'
import { getSong, DEFAULT_SONG_ID } from '../data/songs'

export default class QuestionsScene extends Phaser.Scene {

  constructor() {
    super('QuestionsScene')
  }

  init(data) {

    this.songId = (data && data.songId) || DEFAULT_SONG_ID

  }

  create() {

    const song = getSong(this.songId)
    const layout = getQuestionsSceneLayout(this)

    const questions = song.discussionQuestions

    // FONDO
    this.cameras.main.setBackgroundColor('#0f172a')

    // BOTÓN VOLVER
    createBackButton(
      this,
      'LyricScene'
    )

    // TÍTULO
    this.add.text(
      layout.centerX,
      layout.titleY,
      '🧠 Reflexionemos',
      {
        fontSize: layout.portrait ? '36px' : '40px',
        color: '#f8fafc',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // PANEL
    const panel = this.add.rectangle(
      layout.centerX,
      layout.panelY,
      layout.panelW,
      layout.panelH,
      0x1e293b,
      0.95
    )

    panel.setStrokeStyle(
      2,
      0x334155
    )

    // PREGUNTAS
    const questionX = layout.portrait ? 100 : 90
    const wrapWidth = layout.portrait ? 580 : 620

    questions.forEach((question, index) => {

      this.add.text(
        questionX,
        layout.questionYs[index],
        question,
        {
          fontSize: layout.portrait ? '23px' : '26px',
          color: '#f8fafc',
          wordWrap: {
            width: wrapWidth
          }
        }
      )

    })

    // BOTÓN CONTINUAR
    const continueButton = this.add.rectangle(
      layout.centerX,
      layout.actionY,
      260,
      layout.portrait ? 64 : 70,
      0x06b6d4
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
        fontSize: layout.portrait ? '24px' : '26px',
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

    // CONTINUAR -> Plenaria (ReflectionScene)
    continueButton.on('pointerdown', () => {

      this.scene.start(
        'ReflectionScene',
        { songId: this.songId }
      )

    })

  }

}