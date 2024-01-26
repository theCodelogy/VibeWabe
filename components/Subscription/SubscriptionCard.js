import Link from "next/link";



const SubscriptionCard = () => {
  return (
    <div>
      <div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-center mt-12 sm:text-5xl text-white">Pricing</h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-white">Get started on our free plan and upgrade when you are ready.</p>
        </div>
        <div className="my-24 max-w-[850px] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:gap-12">



          <div className="relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white">Video + Music</h3>
              <p className="absolute top-0 py-1.5 px-4 bg-blue-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide transform -translate-y-1/2">
                Most popular
              </p>
              <p className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight text-white">$12</span><span className="ml-1 text-xl font-semibold text-blue-500">/month</span>
              </p>
              <p className="mt-6 text-white">You want to learn and have a personal assistant</p>
              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-500" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">30 credits</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-500" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Powered by GPT-4 (more accurate)</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-500" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Generate video (2 credits)</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-500" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Quizz (1 credits) </span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-500" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Analytics on the quizz</span>
                </li>
              </ul>
            </div>
            <div>
              <Link href="/subscription/subscriptionForm" className="bg-red-600 text-white hover:bg-red-800 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium">Tack It</Link>
            </div>
          </div>


          <div className="relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white">Video</h3>

              <p className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight text-white">$8</span><span className="ml-1 text-xl text-blue-500 font-semibold">/month</span>
              </p>
              <p className="mt-6 text-white">You want to learn and have a personal assistant</p>
              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-500" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">30 credits</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-500" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Powered by GPT-4 (more accurate)</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-500" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Generate video (2 credits)</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-500" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Quizz (1 credits) </span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-500" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Analytics on the quizz</span>
                </li>
              </ul>
            </div>
            <div>
              <Link href="/subscription/subscriptionForm" className="bg-red-600 text-white hover:bg-red-800 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium">Tack It</Link>
            </div>
          </div>


          <div className="relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white">Music</h3>

              <p className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight text-white">$6</span><span className="ml-1 text-xl text-blue-500 font-semibold">/month</span>
              </p>
              <p className="mt-6 text-white">You want to learn and have a personal assistant</p>
              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-500" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">30 credits</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-500" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Powered by GPT-4 (more accurate)</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-500" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Generate video (2 credits)</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-500" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Quizz (1 credits) </span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-500" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Analytics on the quizz</span>
                </li>
              </ul>
            </div>
            <div>
              <Link href="/subscription/subscriptionForm" className="bg-red-600 text-white hover:bg-red-800 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium">Tack It</Link>
            </div>
          </div>

          <div className="relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white">Video + Music</h3>
              <p className="absolute top-0 py-1.5 px-4 bg-blue-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide transform -translate-y-1/2">
                Free Trail
              </p>
              <p className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight text-white">$00</span><span className="ml-1 text-xl font-semibold text-blue-500">/1hr</span>
              </p>
              <p className="mt-6 text-white">You want to learn and have a personal assistant</p>
              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-500" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">30 credits</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-500" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Powered by GPT-4 (more accurate)</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-500" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Generate video (2 credits)</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-500" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Quizz (1 credits) </span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-500" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-white">Analytics on the quizz</span>
                </li>
              </ul>
            </div>
            <div>
              <Link href="/auth/login" className="bg-blue-500 text-white hover:bg-blue-300 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium">Try For Free</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;