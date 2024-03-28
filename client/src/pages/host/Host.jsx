import React, { useState , useEffect, useCallback } from 'react'
import { useSocket } from '../../provider/Socket';
import { useNavigate } from 'react-router-dom';

const Host = () => {
  const navigate  = useNavigate()
  const { socket  } = useSocket();

  const [user, setUser] = useState({
    
    emailId: "",
    roomId: "",
    
  });


  const handleRoomJoined = useCallback((roomId) => {
    //  console.log("joined room" , roomId);
    navigate(`/room/${roomId}`)
  } , [navigate] )

  useEffect(() => {
     socket.on('joined-room' , handleRoomJoined  )
 
      return () => {
          socket.off('joined-room' , handleRoomJoined)
      }

  } , [ handleRoomJoined ,  socket])

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

const handleJoinRoom = () => {
  const { roomId, emailId } = user;
  socket.emit('join-room' , {roomId  , emailId } )

}
  return (

    <div>
      
       <input type="text" 
       name="emailId" 
       id=""
        placeholder='enter your email here'
        value={user.emailId}
        onChange={handleChange}
         />
       <input type="text" 
       name="roomId" id=""
       placeholder='enter room code' 
       value={user.roomId}
       onChange={handleChange}

       />

       <button onClick={handleJoinRoom} > Enter room </button>
       
    </div>
  )
}

export default Host
