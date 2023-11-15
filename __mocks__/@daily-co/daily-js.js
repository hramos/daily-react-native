const EventEmitter = require('events');

const createCallObject = (properties) => {
  const emitter = new EventEmitter;

  return {
    ...emitter,
    abortTestWebsocketConnectivity: jest.fn(),
    accessState: jest.fn(),
    activeSpeakerMode: jest.fn(),
    addFakeParticipant: jest.fn(),
    cycleCamera: jest.fn(),
    cycleMic: jest.fn(),
    destroy: jest.fn(),
    detectAllFaces: jest.fn(),
    enumerateDevices: jest.fn(async () => ({
      devices: [],
    })),
    exitFullscreen: jest.fn(),
    geo: jest.fn(),
    getActiveSpeaker: jest.fn(),
    getCpuLoadStats: jest.fn(async () => ({
      cpuLoadState: 'low',
      cpuLoadStateReason: 'none'
    })),
    getDailyLang: jest.fn(),
    getInputDevices: jest.fn(async () => ({
      camera: {},
      mic: {},
      speaker: {},
    })),
    getInputSettings: jest.fn(async () => ({
      video: {
        processor: {
          type: 'none',
        },
      },
    })),
    getMeetingSession: jest.fn(),
    getNetworkStats: jest.fn(),
    getNetworkTopology: jest.fn(),
    getReceiveSettings: jest.fn(async () => {}),
    getSendSettings: jest.fn(() => null),
    iframe: jest.fn(),
    isDestroyed: jest.fn(() => undefined),
    join: jest.fn(),
    leave: jest.fn(),
    load: jest.fn(),
    loadCss: jest.fn(),
    localAudio: jest.fn(),
    localVideo: jest.fn(),
    meetingSessionState: jest.fn(() => ({
      data: undefined,
      topology: 'none',
    })),
    meetingState: jest.fn(),
    emit: jest.fn(emitter.emit),
    off: jest.fn(emitter.off),
    on: jest.fn(emitter.on),
    once: jest.fn(emitter.once),
    participants: jest.fn(() => ({
      local: {
        local: true,
        session_id: 'local'
      }
    })),
    participantCounts: jest.fn(() => ({
      hidden: 0,
      present: 0,
    })),
    preAuth: jest.fn(),
    properties,
    requestAccess: jest.fn(),
    requestFullscreen: jest.fn(),
    room: jest.fn(),
    sendAppMessage: jest.fn(),
    setActiveSpeakerMode: jest.fn(),
    setBandwidth: jest.fn(),
    setDailyLang: jest.fn(),
    setProxyUrl: jest.fn(),
    setIceConfig: jest.fn(),
    setInputDevicesAsync: jest.fn(),
    setLocalAudio: jest.fn(),
    setLocalVideo: jest.fn(),
    setNetworkTopology: jest.fn(),
    setOutputDeviceAsync: jest.fn(),
    setPlayNewParticipantSound: jest.fn(),
    setShowLocalVideo: jest.fn(),
    setShowNamesMode: jest.fn(),
    setShowParticipantsBar: jest.fn(),
    setSubscribeToTracksAutomatically: jest.fn(),
    setTheme: jest.fn(),
    setUserName: jest.fn(),
    showLocalVideo: jest.fn(),
    showParticipantsBar: jest.fn(),
    startCamera: jest.fn(),
    startLiveStreaming: jest.fn(),
    startRecording: jest.fn(),
    startScreenShare: jest.fn(),
    startTranscription: jest.fn(),
    stopLiveStreaming: jest.fn(),
    stopRecording: jest.fn(),
    stopScreenShare: jest.fn(),
    stopTranscription: jest.fn(),
    subscribeToTracksAutomatically: jest.fn(),
    testWebsocketConnectivity: jest.fn(),
    theme: jest.fn(),
    updateInputSettings: jest.fn(),
    updateLiveStreaming: jest.fn(),
    updateParticipant: jest.fn(),
    updateParticipants: jest.fn(),
    updateReceiveSettings: jest.fn(async () => {}),
    updateRecording: jest.fn(),
    updateSendSettings: jest.fn(async () => null),
    waitingParticipants: jest.fn(),
    updateWaitingParticipant: jest.fn(),
    updateWaitingParticipants: jest.fn(),
  }
};

const mockedDailyCall = {
  createCallObject,
  supportedBrowser: jest.fn(),
  version: jest.fn(),
};

module.exports = mockedDailyCall;
