import Phaser from 'phaser'

import createBackButton from '../utils/createBackButton'
import { getAudioSceneLayout } from '../utils/portraitLayout'

export default class AudioScene extends Phaser.Scene {

  constructor() {
    super('AudioScene')
  }

  preload() {

    this.load.audio(
      'cancion',
      'audio/cancion1.mp3'
    )

  }

  create() {

    // ---------- TRANSICIÓN ENTRADA ----------

    this.cameras.main.fadeIn(
      250,
      0,
      0,
      0
    )

    // ---------- FONDO ----------

    this.cameras.main.setBackgroundColor('#0f172a')

    // ---------- BOTÓN VOLVER ----------

    const layout = getAudioSceneLayout(this)

    createBackButton(
      this,
      'Session1Scene'
    )

    // ---------- DECORACIÓN ----------

    this.add.circle(
      650,
      layout.portrait ? 100 : 120,
      180,
      0x06b6d4,
      0.10
    )

    // ---------- TÍTULO ----------

    this.add.text(
      layout.centerX,
      layout.titleY,
      '🎧 Escucha con atención',
      {
        fontSize: layout.portrait ? '34px' : '38px',
        color: '#f8fafc',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // ---------- TEXTO ----------

    this.add.text(
      layout.centerX,
      layout.bodyY,
      'Escucha el fragmento musical\ny luego comparte tu primera impresión.',
      {
        fontSize: layout.portrait ? '22px' : '24px',
        color: '#cbd5e1',
        align: 'center',
        lineSpacing: layout.portrait ? 9 : 10
      }
    ).setOrigin(0.5)

    // ---------- PANEL ----------

    const audioPanel = this.add.rectangle(
      layout.centerX,
      layout.panelY,
      layout.portrait ? 600 : 620,
      layout.panelH,
      0x1e293b,
      0.95
    )

    audioPanel.setStrokeStyle(
      2,
      0x334155
    )

    // ---------- AUDIO ----------

    const musica = this.sound.add('cancion')

    // ---------- VISUALIZADOR ----------

    const bars = []

    const startX = 280

    for (let i = 0; i < 12; i++) {

      const bar = this.add.rectangle(
        startX + (i * 20),
        layout.vizY,
        12,
        40,
        0x06b6d4
      )

      bars.push(bar)

    }

    // ---------- ANIMACIÓN ----------

    this.time.addEvent({

      delay: 260,

      loop: true,

      callback: () => {

        if (musica.isPlaying) {

          bars.forEach((bar) => {

            const randomHeight = Phaser.Math.Between(
              35,
              70
            )

            bar.height = randomHeight

            bar.y = layout.vizY - (randomHeight / 2)

          })

        } else {

          bars.forEach((bar) => {

            bar.height = 40

            bar.y = layout.vizY - (40 / 2)

          })

        }

      }

    })

    // ---------- BOTÓN PLAY ----------

    const playButton = this.add.rectangle(
      240,
      layout.controlsY,
      160,
      layout.portrait ? 64 : 70,
      0x06b6d4
    ).setInteractive()

    playButton.setStrokeStyle(
      2,
      0xffffff
    )

    const playText = this.add.text(
      240,
      layout.controlsY,
      '▶ PLAY',
      {
        fontSize: '24px',
        color: '#ffffff',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // ---------- BOTÓN PAUSA ----------

    const pauseButton = this.add.rectangle(
      layout.centerX,
      layout.controlsY,
      160,
      layout.portrait ? 64 : 70,
      0x7c3aed
    ).setInteractive()

    pauseButton.setStrokeStyle(
      2,
      0xffffff
    )

    const pauseText = this.add.text(
      layout.centerX,
      layout.controlsY,
      '⏸ PAUSA',
      {
        fontSize: '24px',
        color: '#ffffff',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // ---------- BOTÓN REINICIAR ----------

    const replayButton = this.add.rectangle(
      560,
      layout.controlsY,
      160,
      layout.portrait ? 64 : 70,
      0xf59e0b
    ).setInteractive()

    replayButton.setStrokeStyle(
      2,
      0xffffff
    )

    const replayText = this.add.text(
      560,
      layout.controlsY,
      '↺ OTRA VEZ',
      {
        fontSize: '22px',
        color: '#ffffff',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // ---------- HOVERS ----------

    const buttons = [
      playButton,
      pauseButton,
      replayButton
    ]

    const texts = [
      playText,
      pauseText,
      replayText
    ]

    buttons.forEach((button, index) => {

      button.on('pointerover', () => {

        button.setScale(1.03)
        texts[index].setScale(1.03)

      })

      button.on('pointerout', () => {

        button.setScale(1)
        texts[index].setScale(1)

      })

    })

    // ---------- PLAY ----------

    playButton.on('pointerdown', () => {

      if (!musica.isPlaying) {

        musica.play()

      }

    })

    // ---------- PAUSA ----------

    pauseButton.on('pointerdown', () => {

      if (musica.isPlaying) {

        musica.pause()

      }

    })

    // ---------- REINICIAR ----------

    replayButton.on('pointerdown', () => {

      musica.stop()
      musica.play()

    })

    // ---------- CONTINUAR ----------

    const continueButton = this.add.rectangle(
      layout.centerX,
      layout.continueY,
      260,
      layout.portrait ? 64 : 70,
      0x10b981
    ).setInteractive()

    continueButton.setStrokeStyle(
      2,
      0xffffff
    )

    const continueText = this.add.text(
      layout.centerX,
      layout.continueY,
      'CONTINUAR',
      {
        fontSize: '26px',
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

    // ---------- CONTINUAR ----------

    continueButton.on('pointerdown', () => {

      musica.stop()

      // TRANSICIÓN SALIDA

      this.cameras.main.fadeOut(
        200,
        0,
        0,
        0
      )

      this.time.delayedCall(200, () => {

        this.scene.start('ReflectionScene')

      })

    })

  }

}