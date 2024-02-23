'use client'
import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const Massenger = () => {
    return (
        <div className='fixed bottom-10 left-10 z-50'>
            <FacebookProvider   appId="300576049697948" chatSupport>
        <CustomChat  greetingDialogDisplay="hide" greetingDialogMessage="Welcome to our Messenger chat! How can we assist you today?"  greetingDialogDelay={5000} pageId="111475185009504" minimized={false}/>
      </FacebookProvider>  
        </div>
    );
};

export default Massenger;