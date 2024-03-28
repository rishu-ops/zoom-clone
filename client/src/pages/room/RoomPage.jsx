import React, { useCallback, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useSocket } from '../../provider/Socket'
import { usePeer } from '../../provider/Peer';



const RoomPage = () => {
  const { socket } = useSocket();
  const { peer, createOffer, createAnswer , setRemoteAns , sendStream , remoteStream  } = usePeer();

  const [ mystream , setMySteam ] = useState(null);
  const [remoteEmailId , setremoteEmailId ] = useState();
  

  const handleNewUserJoined = useCallback(async (data) => {

    const { emailId } = data;
    console.log('new user joined', emailId);
    const offer = await createOffer();
    socket.emit('call-user', { emailId, offer })
    setremoteEmailId(emailId )
     
  }, [createOffer, socket]
  );

  const handleIncomingCall = useCallback
    (async (data) => {
      const { from, offer } = data;
      console.log("incoming call from ", from, offer);
      const ans = await createAnswer(offer);
      socket.emit('call-accepted', { emailId: from, ans })
      setremoteEmailId(from )
    }, [createAnswer, socket]
    )

  const handleCallAccepting = useCallback

    (async (data) => {
       
       const { ans } = data ;
       console.log('call get Accecpted' , ans );
       await setRemoteAns(ans);
       

       

    } , [setRemoteAns  ]);


    const getuserMediaStream = useCallback( async() => {
         const stream = await navigator.mediaDevices.getUserMedia({audio : true , video : true}  )
         setMySteam(stream)
         
    }      , [])

         
     const handleNegotiation =  useCallback(() => {
       const localOffer = peer.localDescription;

      socket.emit('call-user' ,  {
        emailId : remoteEmailId , offer : localOffer 
      })
 } , [peer.localDescription , remoteEmailId , socket]) 


  useEffect(() => {

    socket.on('user-joined', handleNewUserJoined);
    socket.on('incoming-call', handleIncomingCall);
    socket.on('call-accepted', handleCallAccepting)

     
    return () => {
      socket.off('user-joined', handleNewUserJoined)
      socket.off('incoming-call', handleIncomingCall)
      socket.off('call-accepted', handleCallAccepting )
    }

  }, [handleIncomingCall, handleNewUserJoined, handleCallAccepting ,socket])

  useEffect(() => {
    peer.addEventListener('negotiationneeded' , handleNegotiation )
     
     return () =>  ( 
      peer.removeEventListener('negotiationneeded' , handleNegotiation)
 
     )
  } , [] )
  
useEffect(() => {
  
   getuserMediaStream();

} , [])

  return (
    <div>
      <h1>room page </h1>
      <button onClick={ e => sendStream(mystream)}> Send my video </button>
    <ReactPlayer url={mystream} playing />
    <ReactPlayer url={remoteStream} playing />
    </div>
  )
}

export default RoomPage
