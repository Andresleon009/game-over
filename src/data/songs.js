// src/data/songs.js
//
// Datos de la actividad "Detrás de la letra".
// Cada canción incluye el contenido para la pantalla principal
// (audio, extracto, preguntas) y para la guía del facilitador
// (Fase B). Por ahora hay una sola canción disponible; las demás
// se pueden agregar con available: false para mostrarlas como
// "Próximamente" cuando se construya SongSelectScene (Fase C).

const songs = [

    {
      id: 'cara-bonita',
      available: true,
  
      title: 'Cara Bonita',
      artist: 'Los Kjarkas',
  
      audioKey: 'cancion',
      audioFile: 'audio/cancion1.mp3',
  
      // Extracto mostrado en LyricScene
      fragment: '“Quien busca una mujer cara bonita\nmucha plata debe tener\npara mantener mujer bonita”\n\n(Kjarkas)',
  
      // Pregunta inicial al ver el extracto (LyricScene)
      initialQuestion: '¿De qué crees que habla esta frase?',
  
      // Preguntas de discusión grupal (QuestionsScene)
      discussionQuestions: [
        '1. ¿De qué habla la frase?',
        '2. ¿Qué piensan sobre su contenido?',
        '3. ¿Qué emociones o reacciones les genera?'
      ],
  
      // Pregunta de plenaria (ReflectionScene)
      plenaryQuestion: '¿Creen que este tipo de mensajes puede reproducir violencia o desigualdad?',
  
      // Cierre pedagógico (ClosingScene)
      closingText: 'Las canciones también transmiten ideas\nsobre el amor, el cuerpo, el poder\ny los roles que se espera que cumplamos.\n\nNo se trata de dejar de escuchar música,\nsino de poder identificar estos mensajes\ny decidir qué relaciones queremos construir.',
  
      // Guía breve del facilitador (Fase B)
      guide: {
        objective: 'Reflexionar sobre cómo algunas canciones transmiten ideas sobre roles, amor, poder y relaciones, y cómo esas ideas pueden normalizar la desigualdad o la violencia.',
        suggestion: 'Deja que la música y el fragmento hablen primero. No es necesario explicar de antemano "qué está mal" en la canción: las preguntas abren la conversación, no la cierran.',
        guideQuestions: [
          '¿Alguien ha escuchado esta canción antes? ¿En qué contextos?',
          '¿Conocen otras canciones, de cualquier género, con mensajes similares?',
          '¿Cómo se sentirían si alguien les dijera algo así a ellos/ellas?'
        ],
        role: 'Tu rol es moderar la conversación y dar espacio a distintas opiniones, incluidas las que defienden la canción. No es necesario llegar a una conclusión única.',
        emotionalCare: 'Si alguien comparte una experiencia personal relacionada con violencia o control en una relación, agradece la confianza, no profundices en público y ofrece hablar después en privado si lo necesita.'
      }
    }
  
  ]
  
  export const DEFAULT_SONG_ID = 'cara-bonita'
  
  export function getSong(songId) {
  
    const found = songs.find((song) => song.id === songId)
  
    return found || songs.find((song) => song.id === DEFAULT_SONG_ID)
  
  }
  
  export default songs