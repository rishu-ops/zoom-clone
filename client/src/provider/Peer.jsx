import React, { useMemo , useEffect, useState, useCallback } from "react";

const PeerContext = React.createContext(null);


export const usePeer = () => React.useContext(PeerContext)

export const PeerProvider = ({ children }) => {

    const [ remoteStream , setRemoteStream ] = useState(null);


    const peer = useMemo(() => new RTCPeerConnection({

        urls: [
            "stun:stun.l.google.com:19302",
            "stun:global.stun.twilio.com:3478",

        ]
    }), []);


    const createOffer = async () => {

        const offer = await peer.createOffer();
        await peer.setLocalDescription(offer);
        return offer;
    }

    const createAnswer = async(offer) => {
        await peer.setRemoteDescription(offer);
        const answer = await peer.createAnswer();
        await peer.setLocalDescription(answer) ;
        return answer ;  
    };

    const setRemoteAns = async(ans) => {
     
        await peer.setRemoteDescription(ans);
    }

const sendStream = async (stream) => {
    const tracks = stream.getTracks();

    for (const track of tracks) {
        // Check if the track is already added
        const senders = peer.getSenders();
        const isTrackAdded = senders.some(sender => sender.track === track);

        // Add the track only if it's not already added
        if (!isTrackAdded) {
            peer.addTrack(track, stream);
        }
    }
};


     const handleTrackEvent = useCallback((ev) => {
        const streams = ev.streams ;
        setRemoteStream(streams[0])
     } , [peer] )

     useEffect(() => {
         peer.addEventListener('track' , handleTrackEvent )
         return ( ) => {
          peer.removeEventListener('track' , handleTrackEvent)    

         }

     } , [   handleTrackEvent ,  peer] )

    return (
        <PeerContext.Provider value={{ peer, createOffer , createAnswer , setRemoteAns , sendStream , remoteStream }}>
            {children}
        </PeerContext.Provider>
    )
}