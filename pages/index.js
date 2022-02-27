import { useState } from 'react'
import { Button } from '@material-ui/core'
import dynamic from 'next/dynamic'

const VideoCall = dynamic(import('../components/call/VideoCall'), { ssr: false });
// import VideoCall from '../components/call/VideoCall'
function HomePage() {
  const [inCall, setInCall] = useState(false)
  return (
    <div  className='HomePage' style={{ height: '100%' }}>
      {inCall ? (
        <VideoCall setInCall={setInCall} />
      ) : (
        <Button
          variant='contained'
          color='primary'
          onClick={() => setInCall(true)}
        >
          Join Call
        </Button>
      )}
      
       {/* hello world */}
    </div>
  )
}

export default HomePage
