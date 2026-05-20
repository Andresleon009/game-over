const NAV_DEPTH = 1000

const LABELS = {
  back: '← VOLVER',
  menu: '☰ MENÚ'
}

export default function createBackButton(scene, targetScene, mode = 'back') {

    const label = LABELS[mode] || LABELS.back

    const backButton = scene.add.rectangle(
      90,
      50,
      120,
      45,
      0x334155
    ).setInteractive()

    backButton.setStrokeStyle(
      2,
      0xffffff
    )

    backButton.setDepth(NAV_DEPTH)

    const backText = scene.add.text(
      90,
      50,
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