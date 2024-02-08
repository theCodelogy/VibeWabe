"use client";
import Image from "next/image";
//images
import radio1 from "@/assets/channelImage/radio1.jpg";
import radio2 from "@/assets/channelImage/radio2.png";
import radio3 from "@/assets/channelImage/radio3.png";
import radio4 from "@/assets/channelImage/radio4.png";
import radio5 from "@/assets/channelImage/radio5.png";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Radio = () => {
  return (
    <div className="px-5 container mx-auto mt-20">
      <div>
        <h2 className="text-white text-xl font-bold">Fm Radio</h2>
      </div>
      {/* radio section */}
      <div className="mt-10 grid grid-cols-3 lg:grid-cols-7 gap-5  lg:mx-auto">
        <div
          onClick={() => document.getElementById("my_modal_1").showModal()}
          className="bg-slate-800 w-[120px] h-[120px] flex justify-center items-center rounded-md"
        >
          <div>
            <Image
              className="w-[80px] mx-auto h-[80px]  rounded-full transition duration-300  transform hover:scale-105"
              src={radio1}
              alt="slice image"
            />
            <h2 className="text-base text-slate-300 ">Radio Mirchi</h2>
            {/* modal */}
            <dialog
              id="my_modal_1"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box bg-zinc-700">
                <h3 className="font-bold text-lg text-slate-300">
                  Welcome to{" "}
                  <span className="text-red-500 text-xl">Radio Mirchi!!</span>
                </h3>
                <div className="py-4 flex justify-around gap-5">
                  <Image
                    className="w-[100px] h-[100px]  rounded-md transition duration-300  transform hover:scale-105"
                    src={radio1}
                    alt="slice image"
                  />
                  <div className="text-sm text-slate-300">
                  <h2 className="font-bold">98.3 FM</h2>
                  <h2><span className="font-bold">Language</span>: Hindi, Punjabi, Telugu, Malayalam, Tamil, Kannada, Bengali, Gujarati, Multilingual, International, Marathi.</h2>
                  <h2><span className="font-bold">Genre:</span> Bollywood, indian music.</h2>
                  </div>
                </div>
                <AudioPlayer
                className="rounded-lg"
                  showJumpControls={false}
                  customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                  autoPlayAfterSrcChange={false}
                  customProgressBarSection={[]}
                  src="https://n12.radiojar.com/nhq0vcqwuueuv?rj-tok=AAABjXhK2UAAYSklHxNCsAqggg&rj-ttl=5"
                  onPlay={(e) => console.log("onPlay")}
                />
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm text-red-500 border-none bg-slate-300">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        {/* column2 */}
        <div 
         onClick={() => document.getElementById("my_modal_2").showModal()}
        className="bg-slate-800 w-[120px] h-[120px] flex justify-center items-center rounded-md">
          <div>
            <Image
              className="w-[80px] mx-auto h-[80px]  rounded-full transition duration-300  transform hover:scale-105"
              src={radio2}
              alt="slice image"
            />
            <h2 className="text-base text-slate-300 ">Hit 96.7</h2>
              {/* modal */}
              <dialog
              id="my_modal_2"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box bg-zinc-700">
                <h3 className="font-bold text-lg text-slate-300">
                  Welcome to{" "}
                  <span className="text-red-500 text-xl">Radio Mirchi!!</span>
                </h3>
                <div className="py-4 flex justify-around gap-5">
                  <Image
                    className="w-[100px] h-[100px]  rounded-md transition duration-300  transform hover:scale-105"
                    src={radio1}
                    alt="slice image"
                  />
                  <div className="text-sm text-slate-300">
                  <h2 className="font-bold">98.3 FM</h2>
                  <h2><span className="font-bold">Language</span>: Hindi, Punjabi, Telugu, Malayalam, Tamil, Kannada, Bengali, Gujarati, Multilingual, International, Marathi.</h2>
                  <h2><span className="font-bold">Genre:</span> Bollywood, indian music.</h2>
                  </div>
                </div>
                <AudioPlayer
                className="rounded-lg"
                  showJumpControls={false}
                  customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                  autoPlayAfterSrcChange={false}
                  customProgressBarSection={[]}
                  src="https://n12.radiojar.com/nhq0vcqwuueuv?rj-tok=AAABjXhK2UAAYSklHxNCsAqggg&rj-ttl=5"
                  onPlay={(e) => console.log("onPlay")}
                />
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm text-red-500 border-none bg-slate-300">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        {/* column3 */}
        <div 
        onClick={() => document.getElementById("my_modal_3").showModal()}
        className="bg-slate-800 w-[120px] h-[120px] flex justify-center items-center rounded-md">
          <div>
            <Image
              className="w-[80px] mx-auto h-[80px]  rounded-full transition duration-300  transform hover:scale-105"
              src={radio2}
              alt="slice image"
            />
            <h2 className="text-base text-slate-300 ">Hit 96.7</h2>
             {/* modal */}
             <dialog
              id="my_modal_3"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box bg-zinc-700">
                <h3 className="font-bold text-lg text-slate-300">
                  Welcome to{" "}
                  <span className="text-red-500 text-xl">Radio Mirchi!!</span>
                </h3>
                <div className="py-4 flex justify-around gap-5">
                  <Image
                    className="w-[100px] h-[100px]  rounded-md transition duration-300  transform hover:scale-105"
                    src={radio1}
                    alt="slice image"
                  />
                  <div className="text-sm text-slate-300">
                  <h2 className="font-bold">98.3 FM</h2>
                  <h2><span className="font-bold">Language</span>: Hindi, Punjabi, Telugu, Malayalam, Tamil, Kannada, Bengali, Gujarati, Multilingual, International, Marathi.</h2>
                  <h2><span className="font-bold">Genre:</span> Bollywood, indian music.</h2>
                  </div>
                </div>
                <AudioPlayer
                className="rounded-lg"
                  showJumpControls={false}
                  customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                  autoPlayAfterSrcChange={false}
                  customProgressBarSection={[]}
                  src="https://n12.radiojar.com/nhq0vcqwuueuv?rj-tok=AAABjXhK2UAAYSklHxNCsAqggg&rj-ttl=5"
                  onPlay={(e) => console.log("onPlay")}
                />
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm text-red-500 border-none bg-slate-300">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
         {/* column4 */}
        <div
         onClick={() => document.getElementById("my_modal_4").showModal()}
         className="bg-slate-800 w-[120px] h-[120px] flex justify-center items-center rounded-md">
          <div>
            <Image
              className="w-[80px] mx-auto h-[80px]  rounded-full transition duration-300  transform hover:scale-105"
              src={radio3}
              alt="slice image"
            />
            <h2 className="text-base text-slate-300 ">Virgin Radio</h2>
             {/* modal */}
             <dialog
              id="my_modal_4"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box bg-zinc-700">
                <h3 className="font-bold text-lg text-slate-300">
                  Welcome to{" "}
                  <span className="text-red-500 text-xl">Radio Mirchi!!</span>
                </h3>
                <div className="py-4 flex justify-around gap-5">
                  <Image
                    className="w-[100px] h-[100px]  rounded-md transition duration-300  transform hover:scale-105"
                    src={radio1}
                    alt="slice image"
                  />
                  <div className="text-sm text-slate-300">
                  <h2 className="font-bold">98.3 FM</h2>
                  <h2><span className="font-bold">Language</span>: Hindi, Punjabi, Telugu, Malayalam, Tamil, Kannada, Bengali, Gujarati, Multilingual, International, Marathi.</h2>
                  <h2><span className="font-bold">Genre:</span> Bollywood, indian music.</h2>
                  </div>
                </div>
                <AudioPlayer
                className="rounded-lg"
                  showJumpControls={false}
                  customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                  autoPlayAfterSrcChange={false}
                  customProgressBarSection={[]}
                  src="https://n12.radiojar.com/nhq0vcqwuueuv?rj-tok=AAABjXhK2UAAYSklHxNCsAqggg&rj-ttl=5"
                  onPlay={(e) => console.log("onPlay")}
                />
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm text-red-500 border-none bg-slate-300">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        {/* column5 */}
        <div
        onClick={() => document.getElementById("my_modal_5").showModal()}
         className="bg-slate-800 w-[120px] h-[120px] flex justify-center items-center rounded-md">
          <div>
            <Image
              className="w-[80px] mx-auto h-[80px]  rounded-full transition duration-300  transform hover:scale-105"
              src={radio4}
              alt="slice image"
            />
            <h2 className="text-base text-slate-300 ">Fm Radio</h2>
             {/* modal */}
             <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box bg-zinc-700">
                <h3 className="font-bold text-lg text-slate-300">
                  Welcome to{" "}
                  <span className="text-red-500 text-xl">Radio Mirchi!!</span>
                </h3>
                <div className="py-4 flex justify-around gap-5">
                  <Image
                    className="w-[100px] h-[100px]  rounded-md transition duration-300  transform hover:scale-105"
                    src={radio1}
                    alt="slice image"
                  />
                  <div className="text-sm text-slate-300">
                  <h2 className="font-bold">98.3 FM</h2>
                  <h2><span className="font-bold">Language</span>: Hindi, Punjabi, Telugu, Malayalam, Tamil, Kannada, Bengali, Gujarati, Multilingual, International, Marathi.</h2>
                  <h2><span className="font-bold">Genre:</span> Bollywood, indian music.</h2>
                  </div>
                </div>
                <AudioPlayer
                className="rounded-lg"
                  showJumpControls={false}
                  customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                  autoPlayAfterSrcChange={false}
                  customProgressBarSection={[]}
                  src="https://n12.radiojar.com/nhq0vcqwuueuv?rj-tok=AAABjXhK2UAAYSklHxNCsAqggg&rj-ttl=5"
                  onPlay={(e) => console.log("onPlay")}
                />
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm text-red-500 border-none bg-slate-300">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        {/* column6 */}
        <div
        onClick={() => document.getElementById("my_modal_6").showModal()} 
        className="bg-slate-800 w-[120px] h-[120px] flex justify-center items-center rounded-md">
          <div>
            <Image
              className="w-[80px] mx-auto h-[80px]  rounded-full transition duration-300  transform hover:scale-105"
              src={radio5}
              alt="slice image"
            />
            <h2 className="text-base text-slate-300 ">Fm Radio</h2>
             {/* modal */}
             <dialog
              id="my_modal_6"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box bg-zinc-700">
                <h3 className="font-bold text-lg text-slate-300">
                  Welcome to{" "}
                  <span className="text-red-500 text-xl">Radio Mirchi!!</span>
                </h3>
                <div className="py-4 flex justify-around gap-5">
                  <Image
                    className="w-[100px] h-[100px]  rounded-md transition duration-300  transform hover:scale-105"
                    src={radio1}
                    alt="slice image"
                  />
                  <div className="text-sm text-slate-300">
                  <h2 className="font-bold">98.3 FM</h2>
                  <h2><span className="font-bold">Language</span>: Hindi, Punjabi, Telugu, Malayalam, Tamil, Kannada, Bengali, Gujarati, Multilingual, International, Marathi.</h2>
                  <h2><span className="font-bold">Genre:</span> Bollywood, indian music.</h2>
                  </div>
                </div>
                <AudioPlayer
                className="rounded-lg"
                  showJumpControls={false}
                  customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                  autoPlayAfterSrcChange={false}
                  customProgressBarSection={[]}
                  src="https://n12.radiojar.com/nhq0vcqwuueuv?rj-tok=AAABjXhK2UAAYSklHxNCsAqggg&rj-ttl=5"
                  onPlay={(e) => console.log("onPlay")}
                />
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm text-red-500 border-none bg-slate-300">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        {/* column7 */}
        <div
        onClick={() => document.getElementById("my_modal_7").showModal()}
         className="bg-slate-800 w-[120px] h-[120px] flex justify-center items-center rounded-md">
          <div>
            <Image
              className="w-[80px] mx-auto h-[80px]  rounded-full transition duration-300  transform hover:scale-105"
              src={radio1}
              alt="slice image"
            />
            <h2 className="text-base text-slate-300 ">Fm Radio</h2>
             {/* modal */}
             <dialog
              id="my_modal_7"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box bg-zinc-700">
                <h3 className="font-bold text-lg text-slate-300">
                  Welcome to{" "}
                  <span className="text-red-500 text-xl">Radio Mirchi!!</span>
                </h3>
                <div className="py-4 flex justify-around gap-5">
                  <Image
                    className="w-[100px] h-[100px]  rounded-md transition duration-300  transform hover:scale-105"
                    src={radio1}
                    alt="slice image"
                  />
                  <div className="text-sm text-slate-300">
                  <h2 className="font-bold">98.3 FM</h2>
                  <h2><span className="font-bold">Language</span>: Hindi, Punjabi, Telugu, Malayalam, Tamil, Kannada, Bengali, Gujarati, Multilingual, International, Marathi.</h2>
                  <h2><span className="font-bold">Genre:</span> Bollywood, indian music.</h2>
                  </div>
                </div>
                <AudioPlayer
                className="rounded-lg"
                  showJumpControls={false}
                  customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                  autoPlayAfterSrcChange={false}
                  customProgressBarSection={[]}
                  src="https://n12.radiojar.com/nhq0vcqwuueuv?rj-tok=AAABjXhK2UAAYSklHxNCsAqggg&rj-ttl=5"
                  onPlay={(e) => console.log("onPlay")}
                />
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm text-red-500 border-none bg-slate-300">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radio;
