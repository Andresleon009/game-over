import { getBackButtonLayout } from './responsiveScale'

const NAV_DEPTH = 1000

const LABELS = {
  back: '← VOLVER',
  menu: '☰ MENÚ'
}

export default function createBackButton(scene, targetScene, mode = 'back') {

    const label = LABELS[mode] || LABELS.back
    const nav = getBackButtonLayout()

    const backButton = scene.add.rectangle(
      nav.x,
      nav.y,
      nav.width,
      nav.height,
      0x334155
    ).setInteractive()

    backButton.setOrigin(nav.originX, 0.5)

    backButton.setStrokeStyle(
      2,
      0xffffff
    )

    backButton.setDepth(NAV_DEPTH)

    const textX = nav.originX === 0
      ? nav.x + nav.width / 2
      : nav.x

    const backText = scene.add.text(
      textX,
      nav.y,
      label,
      {
        fontSize: '20px',
        color: '#ffffff',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)

    backText.setDepth(NAV_DEPTH)
  
    backButton.on('pointerover', () => {
  
      backButton.setScale(1.03)
      backText.setScale(1.03)
  
    })
  
    backButton.on('pointerout', () => {
  
      backButton.setScale(1)
      backText.setScale(1)
  
    })
  
    backButton.on('pointerdown', () => {
  
      scene.scene.start(targetScene)
  
    })
  
  }