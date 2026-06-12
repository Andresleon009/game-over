import Phaser from 'phaser'

import createBackButton from '../utils/createBackButton'
import { getStackSceneLayout } from '../utils/portraitLayout'
import theme from '../utils/theme'
import { getAvailableSongs } from '../data/songs'

export default class SongSelectScene extends Phaser.Scene {

  constructor() {
    super('SongSelectScene')
  }

  create() {

    this.cameras.main.setBackgroundColor(theme.colors.background)

    const songsList = getAvailableSongs()

    const layout = getStackSceneLayout(this, {
      titleY: 90,
      subtitleY: 145,
      buttonYs: [220, 320, 420, 520],
      titleFontSize: '46px',
      subtitleFontSize: '24px',
      buttonFontSize: '24px',
      buttonW: 540,
      buttonH: 85,
      buttonAreaTop: 195,
      buttonAreaBottom: 565
    })

    createBackButton(
      this,
      'Session1Scene'
    )

    // TÍTULO
    this.add.text(
      layout.centerX,
      layout.titleY,
      'Detrás de la letra',
      {
        ...theme.text.title,
        fontSize: layout.titleFontSize
      }
    ).setOrigin(0.5)

    // SUBTÍTULO
    this.add.text(
      layout.centerX,
      layout.subtitleY,
      'Elige una canción para analizar',
      {
        ...theme.text.subtitle,
        fontSize: layout.subtitleFontSize
      }
    ).setOrigin(0.5)

    // ---------- TARJETAS DE CANCIONES ----------

    songsList.forEach((song, index) => {

      this.createSongButton(
        layout.centerX,
        layout.buttonYs[index],
        song,
        layout.buttonW,
        layout.buttonH,
        layout.buttonFontSize
      )

    })

  }

  createSongButton(x, y, song, width, height, fontSize) {

    const isSensitive = song.sensitivityLevel === 'high'

    const fillColor = isSensitive
      ? theme.colors.panelBg
      : theme.colors.accentPrimary

    const strokeColor = isSensitive
      ? 0xf59e0b
      : 0xffffff

    const button = this.add.rectangle(
      x,
      y,
      width,
      height,
      fillColor,
      isSensitive ? 0.95 : 1
    ).setInteractive()

    button.setStrokeStyle(
      2,
      strokeColor
    )

    const label = this.add.text(
      x,
      isSensitive ? y - 12 : y,
      `${song.title} — ${song.artist}`,
      {
        ...theme.text.button,
        fontSize,
        color: isSensitive ? theme.colors.textPrimary : '#ffffff'
      }
    ).setOrigin(0.5)

    let warningLabel = null

    if (isSensitive) {

      warningLabel = this.add.text(
        x,
        y + 20,
        '⚠ Contenido sensible — criterio del facilitador',
        {
          ...theme.text.body,
          fontSize: '16px',
          color: '#f59e0b'
        }
      ).setOrigin(0.5)

    }

    button.on('pointerover', () => {

      button.setScale(1.02)
      label.setScale(1.02)
      if (warningLabel) warningLabel.setScale(1.02)

    })

    button.on('pointerout', () => {

      button.setScale(1)
      label.setScale(1)
      if (warningLabel) warningLabel.setScale(1)

    })

    button.on('pointerdown', () => {

      this.scene.start('AudioScene', { songId: song.id })

    })

    return button

  }

}