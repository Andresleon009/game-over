import Phaser from 'phaser'

import IntroScene from './scenes/IntroScene'
import MenuScene from './scenes/MenuScene'

import Session1Scene from './scenes/Session1Scene'
import Session2Scene from './scenes/Session2Scene'
import Session3Scene from './scenes/Session3Scene'
import Session4Scene from './scenes/Session4Scene'

import AudioScene from './scenes/AudioScene'
import ReflectionScene from './scenes/ReflectionScene'
import LyricScene from './scenes/LyricScene'
import QuestionsScene from './scenes/QuestionsScene'
import ClosingScene from './scenes/ClosingScene'

const config = {

  type: Phaser.AUTO,

  width: 800,
  height: 600,

  backgroundColor: '#0f172a',

  scale: {

    mode: Phaser.Scale.FIT,

    autoCenter: Phaser.Scale.CENTER_BOTH

  },

  scene: [

    IntroScene,
    MenuScene,

    Session1Scene,
    Session2Scene,
    Session3Scene,
    Session4Scene,

    AudioScene,
    ReflectionScene,
    LyricScene,
    QuestionsScene,
    ClosingScene

  ]

}

new Phaser.Game(config)