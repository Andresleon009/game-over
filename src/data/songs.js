// src/data/songs.js
//
// Datos de la actividad "Detrás de la letra".
// Cada canción incluye el contenido para la pantalla principal
// (audio, extracto, preguntas) y para la guía del facilitador.

const songs = [

  {
    id: 'cara-bonita',
    available: true,

    title: 'Cara Bonita',
    artist: 'Los Kjarkas',

    audioKey: 'cancion',
    audioFile: 'audio/cancion1.mp3',

    fragment: '“Quien busca una mujer cara bonita\nmucha plata debe tener\npara mantener mujer bonita”\n\n(Kjarkas)',

    initialQuestion: '¿De qué crees que habla esta frase?',

    discussionQuestions: [
      '1. ¿De qué habla la frase?',
      '2. ¿Qué piensan sobre su contenido?',
      '3. ¿Qué emociones o reacciones les genera?'
    ],

    plenaryQuestion: '¿Creen que este tipo de mensajes puede reproducir violencia o desigualdad?',

    closingText: 'Las canciones también transmiten ideas\nsobre el amor, el cuerpo, el poder\ny los roles que se espera que cumplamos.\n\nNo se trata de dejar de escuchar música,\nsino de poder identificar estos mensajes\ny decidir qué relaciones queremos construir.',

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
  },

  {
    id: 'despacito',
    available: true,

    title: 'Despacito',
    artist: 'Luis Fonsi',

    audioKey: 'despacito',
    audioFile: 'audio/despacito.mp3',

    fragment: '“Quiero ver cuánto amor a ti te cabe\ndespacito... despacito”\n\n(Luis Fonsi)',

    initialQuestion: '¿Qué tipo de relación o situación describe esta frase?',

    discussionQuestions: [
      '1. ¿Qué imagen del deseo y la seducción transmite esta frase?',
      '2. ¿Cómo se describe el acercamiento entre las personas?',
      '3. ¿Qué emociones o reacciones les genera escucharla?'
    ],

    plenaryQuestion: '¿Creen que canciones como esta nos ayudan o nos dificultan hablar de límites y consentimiento en una relación?',

    closingText: 'Las canciones sobre deseo y seducción\nson parte de la cultura popular\ny no tienen nada de malo en sí mismas.\n\nPero también es una oportunidad\npara pensar cómo se construyen\nel respeto, los límites\ny el consentimiento\nen una relación.',

    guide: {
      objective: 'Explorar cómo se representan el deseo, el cuerpo y la seducción en la música popular, y abrir espacio para hablar de límites y consentimiento.',
      suggestion: 'Es un tema que puede generar risas o incomodidad inicial; eso es normal. No fuerces seriedad desde el principio, pero guía la conversación hacia el respeto y los límites.',
      guideQuestions: [
        '¿Qué diferencia hay entre seducir y presionar a alguien?',
        '¿Cómo saben si la otra persona está de acuerdo con un acercamiento?',
        '¿Han visto esta dinámica reflejada en otras canciones o medios?'
      ],
      role: 'Modera con naturalidad, sin moralizar. El objetivo es que el grupo piense, no que reciba un sermón sobre "lo correcto".',
      emotionalCare: 'Si el tema incomoda a alguien o surge una broma que incomoda a otra persona, valida esa incomodidad sin señalar a nadie y redirige la conversación al grupo.'
    }
  },

  {
    id: 'cholero',
    available: true,

    title: 'Cholero',
    artist: 'Tupay',

    audioKey: 'cholero',
    audioFile: 'audio/cholero.mp3',

    fragment: '“Soy cholero, parrandero,\ntengo una en cada barrio\ny a todas las quiero”\n\n(Tupay)',

    initialQuestion: '¿Qué imagen de "ser hombre" se presenta en esta frase?',

    discussionQuestions: [
      '1. ¿Qué dice esta frase sobre cómo debe comportarse un hombre?',
      '2. ¿Por qué creen que este tipo de actitud se presenta como algo positivo o gracioso?',
      '3. ¿Qué emociones o reacciones les genera?'
    ],

    plenaryQuestion: '¿Creen que este tipo de mensajes refuerza ideas sobre lo que "se espera" de los hombres, y qué efecto puede tener eso en las relaciones?',

    closingText: 'Muchas canciones presentan tener varias parejas\nal mismo tiempo, sin que la otra persona lo sepa,\ncomo algo divertido o admirable.\n\nPensar en esto no es juzgar a quien escucha\nestas canciones, sino preguntarnos\nqué idea de masculinidad y de relaciones\nestamos normalizando sin darnos cuenta.',

    guide: {
      objective: 'Identificar cómo ciertas canciones asocian la masculinidad con "conquistar" a muchas personas, y reflexionar sobre cómo eso normaliza la falta de honestidad o compromiso en las relaciones.',
      suggestion: 'Es un tema que puede generar identificación o defensa ("es solo una canción, no hay que tomarlo tan a pecho"). Está bien que surja esa opinión; el objetivo es que convivan distintas miradas.',
      guideQuestions: [
        '¿De dónde creen que viene la idea de que "tener muchas parejas" es algo a presumir?',
        '¿Cómo se sentiría alguien si descubre que su pareja tiene "una en cada barrio"?',
        '¿Conocen canciones que presenten la fidelidad o el compromiso de forma similar (como algo "cool")?'
      ],
      role: 'No se trata de decir que está "mal" disfrutar la canción, sino de generar pensamiento crítico sobre los mensajes que repetimos sin pensar.',
      emotionalCare: 'Si surgen comentarios que generalizan ("los hombres son así", "las mujeres son así"), recuerda al grupo que estamos hablando de mensajes culturales, no juzgando a las personas presentes.'
    },

    sensitivityLevel: 'medium'
  },

  {
    id: 'cuatro-babys',
    available: true,

    title: 'Cuatro Babys',
    artist: 'Maluma',

    audioKey: 'cuatroBabys',
    audioFile: 'audio/cuatro-babys.mp3',

    fragment: '“Tengo cuatro babys\ny todas me llaman papi...\nninguna me pone problema,\nninguna me pide cadena”\n\n(Maluma)',

    initialQuestion: '¿Cómo se describe a las personas mencionadas en esta frase?',

    discussionQuestions: [
      '1. ¿Cómo se habla de las "babys" en esta frase: como personas, o como algo más?',
      '2. ¿Qué se valora de ellas según la canción ("no ponen problema", "no piden cadena")?',
      '3. ¿Qué emociones o reacciones les genera escuchar esto?'
    ],

    plenaryQuestion: '¿Qué relación hay entre este tipo de letras y la idea de tener poder o control sobre otras personas?',

    closingText: 'Algunas canciones presentan a las personas\ncomo objetos que se "tienen" o se "coleccionan",\nvalorando que "no den problemas" ni pidan nada a cambio.\n\nHablar de esto no es prohibir la canción,\nes preguntarnos qué dice esa idea\nsobre el respeto, el valor de las personas\ny el poder en una relación.',

    guide: {
      objective: 'Identificar lenguaje que cosifica a las personas (tratarlas como objetos o posesiones) y reflexionar sobre cómo eso se relaciona con el poder y el control en las relaciones.',
      suggestion: 'Esta canción usa lenguaje más explícito que las anteriores. Si el grupo es de menor edad o el contexto no es adecuado, considera usar otra canción de la lista. Si la usas, enfoca la conversación en el lenguaje ("cómo se nombra a las personas"), no en detalles explícitos de la letra.',
      guideQuestions: [
        '¿Qué palabras se usan en esta frase para hablar de las personas? ¿Suenan a personas o a objetos?',
        '¿Por qué se valora que alguien "no dé problemas" o "no pida nada"?',
        '¿Qué relación hay entre tener "varias" personas a la vez y la idea de poder?'
      ],
      role: 'Mantén la conversación centrada en el análisis del lenguaje y los mensajes, no en la letra completa ni en detalles explícitos. Si el grupo se desvía hacia bromas o comentarios fuera de lugar, redirige con calma.',
      emotionalCare: 'Este tema puede tocar experiencias de control o cosificación vividas por participantes. Si alguien comparte algo personal, agradece la confianza, no profundices en público y ofrece espacio privado después.'
    },

    sensitivityLevel: 'high',
    contentNote: 'Contiene lenguaje explícito. Recomendada para grupos adultos o adolescentes mayores, según criterio del facilitador.'
  }

]

export const DEFAULT_SONG_ID = 'cara-bonita'

export function getSong(songId) {

  const found = songs.find((song) => song.id === songId)

  return found || songs.find((song) => song.id === DEFAULT_SONG_ID)

}

export function getAvailableSongs() {

  return songs.filter((song) => song.available)

}

export default songs