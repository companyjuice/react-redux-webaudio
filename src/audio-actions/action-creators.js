/*-~-~-~-~-~-~-~-~-~-~- Create an AudioContext Node -~-~-~-~-~-~-~-~-~-~-*/
export const createGlobalAudioContext = () => ({
  type: 'CREATE_AUDIO_CONTEXT'
});


/*-~-~-~-~-~-~-~-~-~-~-~-~-~- Create Source Nodes -~-~-~-~-~-~-~-~-~-~-~-~-~-*/
export const createOscillator = (name) => ({
  type: 'CREATE_OSCILLATOR',
  name
});


/*-~-~-~-~-~-~-~-~-~-~-~-~-~- Create Audio Nodes -~-~-~-~-~-~-~-~-~-~-~-~-~-*/
export const createGain = (name) => ({
  type: 'CREATE_GAIN',
  name
});


/*-~-~-~-~-~-~-~-~-~-~-~- AudioContext Methods -~-~-~-~-~-~-~-~-~-~-~-*/
export const suspendAudioContext = () => ({
  type: 'SUSPEND_AUDIO_CONTEXT'
});

export const resumeAudioContext = () => ({
  type: 'RESUME_AUDIO_CONTEXT'
});

export const closeAudioContext = () => ({
  type: 'CLOSE_AUDIO_CONTEXT'
});


/*-~-~-~-~-~-~-~-~-~-~-~- Source Node Methods -~-~-~-~-~-~-~-~-~-~-~-*/
export const oscillatorStart = (name, time) => ({
  type: 'START_OSCILLATOR_NODE',
  name,
  time
});


/*-~-~-~-~-~-~-~-~-~-~-~- Audio Node Methods -~-~-~-~-~-~-~-~-~-~-~-*/
export const connectAudioNodes = (connectThisNode, toThatNode) => ({
  type: 'CONNECT',
  connectThisNode,
  toThatNode
});

export const setParam = (param, value) => ({
  type: 'SET_PARAM',
  param,
  value
});