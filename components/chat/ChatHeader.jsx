import React from "react";
import { Hash } from "lucide-react";
import MobileToggle from "../MobileToggle";
import UserAvatar from "../UserAvatar";
import SocketIndicator from "../socketIndicator";

// type: channel | conversation

const ChatHeader = ({ serverId, name, type, imageUrl }) => {
  return (
    <div className='text-base font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2'>
      <MobileToggle serverId={serverId} />
      {type === "channel" && (
        <Hash className='w-5 h-5 text-zinc-500 dark:text-zinc-400 mr-2' />
      )}
      {type === "conversation" && (
        <UserAvatar src={imageUrl} className='h-6 w-6 md:h-6 md:w-6 mr-2' />
      )}
      <p className='font-semibold text-base text-black dark:text-white'>
        {name}
      </p>

      <div className='ml-auto flex items-center'>
        <SocketIndicator />
      </div>
    </div>
  );
};

export default ChatHeader;
