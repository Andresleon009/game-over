import Phaser from 'phaser'

import createBackButton from '../utils/createBackButton'
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

    createBackButton(
      this,
      'Session1Scene'
    )

    // ---------- DECORACIÓN ----------

    this.add.circle(
      650,
      120,
      180,
      0x06b6d4,
      0.10
    )

    // ---------- TÍTULO ----------

    this.add.text(
      400,
      90,
      '🎧 Escucha con atención',
      {
        fontSize: '38px',
        color: '#f8fafc',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // ---------- TEXTO ----------

    this.add.text(
      400,
      170,
      'Escucha el fragmento musical\ny luego comparte tu primera impresión.',
      {
        fontSize: '24px',
        color: '#cbd5e1',
        align: 'center',
        lineSpacing: 10
      }
    ).setOrigin(0.5)

    // ---------- PANEL ----------

    const audioPanel = this.add.rectangle(
      400,
      330,
      620,
      260,
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
        280,
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

            bar.y = 280 - (randomHeight / 2)

          })

        } else {

          bars.forEach((bar) => {

            bar.height = 40

            bar.y = 280 - (40 / 2)

          })

        }

      }

    })

    // ---------- BOTÓN PLAY ----------

    const playButton = this.add.rectangle(
      240,
      360,
      160,
      70,
      0x06b6d4
    ).setInteractive()

    playButton.setStrokeStyle(
      2,
      0xffffff
    )

    const playText = this.add.text(
      240,
      360,
      '▶ PLAY',
      {
        fontSize: '24px',
        color: '#ffffff',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    // ---------- BOTÓN PAUSA ----------

    const pauseButton = this.add.rectangle(
      400,
      360,
      160,
      70,
      0x7c3aed
    ).setInteractive()

    pauseButton.setStrokeStyle(
      2,
      0xffffff
    )

    const pauseText = this.add.text(
      400,
      360,
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
      360,
      160,
      70,
      0xf59e0b
    ).setInteractive()

    replayButton.setStrokeStyle(
      2,
      0xffffff
    )

    const replayText = this.add.text(
      560,
      360,
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
      400,
      520,
      260,
      70,
      0x10b981
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