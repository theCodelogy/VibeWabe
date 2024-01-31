"use client";
import Image from "next/image";
import musicImg1 from "@/assets/Musics/EQBPRw6WoAUvrF0.png"
// import ReactAudioPlayer from "react-audio-player";
// import audioplay from "@/public/better-day-186374.mp3"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const MusicBanner = () => {
    return (
        <div className=" mb-32">
            <div className="relative">
          <div className="h-[790px]">
            <Image 
              className="object-cover object-center w-full h-full blur-sm"
              src={musicImg1}
              alt=''
             />
            <div className="absolute inset-0 flex flex-col items-start justify-center bg-gradient-to-r from-zinc-900  opacity-100 transition-opacity duration-300">
            <section className=" container mx-auto">
            <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
              <div className="flex w-full mx-auto text-left">
                <div className="relative inline-flex items-center mx-auto align-middle">
                  <div className="flex justify-between lg:flex-row flex-col gap-6">
                    <div>
                        <h1 className="max-w-5xl md:text-5xl lg:text-6xl  text-4xl font-bold leading-none tracking-tighter text-white ">
                        Music to <span className="font-extralight text-5xl text-red-500">back up</span> <br/> your story <br className="hidden lg:block"/>
                        
                        </h1>
                        <p className="text-lg lg:w-10/12 w-auto my-9 text-zinc-300">Hear whats trending for free in the SoundCloud community. Save tracks, follow artists and build playlists. All for free.</p>
                        <div className=" rounded-lg sm:mt-0">
                            <button className="text-white bg-gradient-to-r from-red-600 to-zinc-400  border-0 py-2 px-6 focus:outline-none hover:from-zinc-400 hover:to-red-600 font-semibold duration-300 transition rounded text-md">Listen More Music</button>
                        </div>
                    </div>
                    <div className="lg:w-6/12">
                        <div>
                            <Image className=" w-full" src={musicImg1}
                            alt=''/>
                        </div>
                    <AudioPlayer
                        autoPlay
                        src="../../../better-day-186374.mp3"
                        onPlay={e => console.log("onPlay")}
                        // other props here
                    />
                    {/* <ReactAudioPlayer
                    src={audioplay}
                    autoPlay
                    controls
                    /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
            </div>
          </div>
            </div>
        </div>
    );
};

export default MusicBanner;