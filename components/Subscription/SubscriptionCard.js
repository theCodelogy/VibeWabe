import Link from "next/link";



const SubscriptionCard = () => {
  return (
    <div>
      {/* <div>
        <div>
          <h2 className="text-3xl  tracking-tight text-center mt-12 sm:text-5xl text-white">Pricing</h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-white">Get started on our free plan and upgrade when you are ready.</p>
        </div>
        <div className="my-24 max-w-[850px] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:gap-12">



          <div className="relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white">Video + Music</h3>
              <p className="absolute top-0 py-1.5 px-4 bg-gradient-to-r from-orange-400 to-zinc-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide transform -translate-y-1/2">
                Most popular
              </p>
              <p className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight text-white">$12</span><span className="ml-1 text-xl font-semibold text-orange-400">/month</span>
              </p>
              <p className="mt-6 text-white">You want to learn and have a personal assistant</p>
              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">30 credits</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Powered by GPT-4 (more accurate)</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Generate video (2 credits)</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Quizz (1 credits) </span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Analytics on the quizz</span>
                </li>
              </ul>
            </div>
            <div>
              <Link href="/subscription/subscriptionForm" className="bg-gradient-to-r from-red-500 to-yellow-500  text-white hover:bg-red-800 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium">Tack It</Link>
            </div>
          </div>


          <div className="relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white">Video</h3>

              <p className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight text-white">$8</span><span className="ml-1 text-xl text-orange-400 font-semibold">/month</span>
              </p>
              <p className="mt-6 text-white">You want to learn and have a personal assistant</p>
              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">30 credits</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Powered by GPT-4 (more accurate)</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Generate video (2 credits)</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Quizz (1 credits) </span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Analytics on the quizz</span>
                </li>
              </ul>
            </div>
            <div>
              <Link href="/subscription/subscriptionForm" className="bg-gradient-to-r from-red-500 to-yellow-500  text-white hover:bg-red-800 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium">Tack It</Link>
            </div>
          </div>


          <div className="relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white">Music</h3>

              <p className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight text-white">$6</span><span className="ml-1 text-xl text-orange-400 font-semibold">/month</span>
              </p>
              <p className="mt-6 text-white">You want to learn and have a personal assistant</p>
              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">30 credits</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Powered by GPT-4 (more accurate)</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Generate video (2 credits)</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Quizz (1 credits) </span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Analytics on the quizz</span>
                </li>
              </ul>
            </div>
            <div>
              <Link href="/subscription/subscriptionForm" className="bg-gradient-to-r from-red-500 to-yellow-500  text-white hover:bg-red-800 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium">Tack It</Link>
            </div>
          </div>

          <div className="relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white">Video + Music</h3>
              <p className="absolute top-0 py-1.5 px-4 bg-gradient-to-r from-orange-400 to-zinc-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide transform -translate-y-1/2">
                Free Trail
              </p>
              <p className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight text-white">$00</span><span className="ml-1 text-xl font-semibold text-orange-400">/1hr</span>
              </p>
              <p className="mt-6 text-white">You want to learn and have a personal assistant</p>
              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">30 credits</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Powered by GPT-4 (more accurate)</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Generate video (2 credits)</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Quizz (1 credits) </span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Analytics on the quizz</span>
                </li>
              </ul>
            </div>
            <div>
              <Link href="/auth/login" className="bg-gradient-to-r from-red-500 to-yellow-500  text-white hover:bg-red-700 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium">Try For Free</Link>
            </div>
          </div>

        </div>
      </div> */}






<div className=" py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-100 md:mb-8 lg:text-3xl xl:mb-12">Pricing</h2>

        <div className="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-2 lg:gap-8">


        <div className="relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white">Video + Music</h3>
              <p className="absolute top-0 py-1.5 px-4 bg-gradient-to-r from-red-500 to-yellow-500  text-white rounded-full text-xs font-semibold uppercase tracking-wide transform -translate-y-1/2">
                Free Trail
              </p>
              <p className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight text-white">$00</span><span className="ml-1 text-xl font-semibold bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">/1hr</span>
              </p>
              <p className="mt-6 text-white">You want to learn and have a personal assistant</p>
              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Experience the full range of features offered in the Video + Music plan for one hour, absolutely free.</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Instant access to premium music tracks and videos without any subscription commitment.</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Option to explore and sample various genres of music and video content during the trial period.</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">No ads or interruptions during the trial period for uninterrupted enjoyment. </span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Easy cancellation at any time with no obligation to continue after the trial expires.</span>
                </li>
              </ul>
            </div>
            <div>
              <Link href="/auth/login" className="bg-gradient-to-r from-red-500 to-yellow-500  text-white hover:bg-red-700 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium">Try For Free</Link>
            </div>
          </div>


        <div className="relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white">Video + Music</h3>
              <p className="absolute top-0 py-1.5 px-4 bg-gradient-to-r from-red-500 to-yellow-500  text-white rounded-full text-xs font-semibold uppercase tracking-wide transform -translate-y-1/2">
                Most popular
              </p>
              <p className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight text-white">$12</span><span className="ml-1 text-xl font-semibold bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">/month</span>
              </p>
              <p className="mt-6 text-white">You want to learn and have a personal assistant</p>
              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Combines all the features of the Music and Video plans for a comprehensive entertainment experience.</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Seamless integration between music and video platforms for a unified user experience.</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Exclusive access to curated playlists that match the mood or theme of the videos being watched.</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Ability to create custom playlists combining both music and video content.</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Priority customer support for any technical issues or inquiries.</span>
                </li>
              </ul>
            </div>
            <div>
              <Link href="/subscription/subscriptionForm" className="bg-gradient-to-r from-red-500 to-yellow-500  text-white hover:bg-red-800 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium">Tack It</Link>
            </div>
          </div>


          <div className="relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white">Video</h3>

              <p className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight text-white">$8</span><span className="ml-1 text-xl bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text font-semibold">/month</span>
              </p>
              <p className="mt-6 text-white">You want to learn and have a personal assistant</p>
              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Unlimited streaming of premium-quality videos in high definition.</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Access to a diverse range of genres, including movies, documentaries, and TV series.</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Option to download videos for offline viewing on multiple devices.</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Ad-free viewing experience with no interruptions. </span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Early access to new releases and exclusive content.</span>
                </li>
              </ul>
            </div>
            <div>
              <Link href="/subscription/subscriptionForm" className="bg-gradient-to-r from-red-500 to-yellow-500  text-white hover:bg-red-800 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium">Tack It</Link>
            </div>
          </div>


          <div className="relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white">Music</h3>

              <p className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight text-white">$6</span><span className="ml-1 text-xl bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text font-semibold">/month</span>
              </p>
              <p className="mt-6 text-white">You want to learn and have a personal assistant</p>
              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Access to a vast library of high-quality music tracks.</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Ability to download and use music tracks without any restrictions.</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">GExclusive access to new releases and updates.</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Ad-free listening experience with uninterrupted playback. </span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Personalized recommendations based on your music preferences.</span>
                </li>
              </ul>
            </div>
            <div>
              <Link href="/subscription/subscriptionForm" className="bg-gradient-to-r from-red-500 to-yellow-500  text-white hover:bg-red-800 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium">Tack It</Link>
            </div>
          </div>

     



          {/* Add more plans here using similar structure */}
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default SubscriptionCard;