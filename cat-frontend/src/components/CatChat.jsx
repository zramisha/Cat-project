import React from 'react';
import { FaCat } from 'react-icons/fa';

const CatChat = ({catSize="80", catColor="gray", bubbleColor="warning", chatText="Meeew!"}) => {
  return (
    <div>
        <div className='relative flex w-56 justify-center'>
          <FaCat size={catSize} color={catColor} />
          <div className='absolute -top-4 -right-8'>
            <div className="chat chat-start">
            <div className={`chat-bubble chat-bubble-${bubbleColor}`}>{chatText}</div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default CatChat;