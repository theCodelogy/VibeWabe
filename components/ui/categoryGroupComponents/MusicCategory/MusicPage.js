"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
// import ReactAudioPlayer from "react-audio-player";
// import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';



const MusicPage = () => {
    // const [musics, setmusics] = useState([]);

    const music = [
        {
            "id": 1,
            "musicTitle": "O priotoma - tranding music",
            "musicImg": "https://soundcloud.com/suicidal-idol/ecstacy-slowed",
            "musicAudio": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1596166914&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
            "language": "Bangla",
            "musicCategory": "ScienceFiction",
            "releaseDate": "2023-05-15",
            "singerName": "Serene Sounds"
        },
        {
            "id": 2,
            "musicTitle": "Chere Jeyona",
            "musicImg": "https://i.ibb.co/wdHL3cx/375x375bb.jpg",
            "musicAudio": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1553270944&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
            "language": "Bangla",
            "musicCategory": "Sad",
            "releaseDate": "2023-05-15",
            "singerName": "Serene Sounds"
        },
        {
            "id": 3,
            "musicTitle": "Xefer x Muza - Jhumka (Official Music Video)",
            "musicImg": "https://i.ibb.co/jbXvLkw/Jhumka-English-2023-20230121020930-500x500.jpg",
            "musicAudio": "https://www.youtube.com/embed/HXRKYqdddjM?si=jMQBbMhvDcW8E8XB",
            "language": "Bangla",
            "musicCategory": "Hip-hop",
            "releaseDate": "2023-05-15",
            "singerName": " x Muza"
        },
        {
            "id": 4,
            "musicTitle": "Bujhina Toh Tai (বুঝিনা তো তাই )",
            "musicImg": "https://i.ibb.co/mB7Fn2j/maxresdefault-3.jpg",
            "musicAudio": "https://www.youtube.com/embed/HXRKYqdddjM?si=jMQBbMhvDcW8E8XB",
            "language": "Bangla",
            "musicCategory": "Hip-hop",
            "releaseDate": "2023-05-15",
            "singerName": "Nusraat Faria"
        }
    ]

        // useEffect(()=>{
        //     fetch('../../../../music.json')
        //     .then(res => res.json())
        //     .then(data => setmusics(data))
        // },[])
    return (
        <div>
            this is music page
            {
                music.map(music => <>
                <div key={music?.id}>
                    <p className="text-red-500">{music.musicTitle}</p>
                    <div className="bg-red-500 p-5 flex">
                    {/* <AudioPlayer
                        autoPlay
                        src={music.musicAudio}
                        onPlay={e => console.log("onPlay")}
                        // other props here
                    /> */}
                    {/* <ReactPlayer
                        url={music.musicAudio}
                        controls={false} 
                        /> */}
                        <iframe
                        src={music.musicAudio}
                        title={music.musicTitle}
                        width="10%"
                        height="50%"
                        />
                    {/* <ReactAudioPlayer
                        url={music.musicAudio}
                        autoPlay
                        controls
                    /> */}
                    </div>
                </div>
                
                </>)
            }
        </div>
    );
};

export default MusicPage;