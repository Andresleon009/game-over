export default function createBackButton(scene, targetScene) {

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
  
    const backText = scene.add.text(
      90,
      50,
      '← VOLVER',
      {
        fontSize: '20px',
        color: '#ffffff',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5)
  
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