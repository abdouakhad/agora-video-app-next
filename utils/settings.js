import { createClient, createMicrophoneAndCameraTracks } from 'agora-rtc-react'
const appId = 'a750af582c5d44a49a951f9a42404847'
const token =
  '006a750af582c5d44a49a951f9a42404847IAChEL2P7KBW/W2rc8xjzZrL7qg1vKOjQa7Z8fcZQJil5GTNKL8AAAAAEAAn2yw636IbYgEAAQDfohti'

export const config = { mode: 'rtc', codec: 'vp8', appId, token }
export const useClient = createClient(config)
export const useMicrophoneAndCameraTracks =
  createMicrophoneAndCameraTracks(config)

export const channelName = 'main'
