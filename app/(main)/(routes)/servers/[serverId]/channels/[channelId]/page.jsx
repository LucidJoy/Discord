import React from "react";
import { currentProfile } from "@/lib/currentProfile";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import db from "@/lib/db";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatInput from "@/components/chat/ChatInput";

const ChannelId = async ({ params }) => {
  const profile = await currentProfile();

  if (!profile) return redirectToSignIn();

  const channel = await db.channel.findUnique({
    where: {
      id: params.channelId,
    },
  });

  const member = await db.member.findFirst({
    where: {
      id: params.serverId,
      profileId: profile.id,
    },
  });

  if (!channel || !channel) redirect("/");

  return (
    <div className='bg-white dark:bg-[#313338] flex flex-col h-full'>
      <ChatHeader
        name={channel.name}
        serverId={channel.serverId}
        type='channel'
      />

      <div className='flex-1'>Future Messages</div>
      <ChatInput
        name={channel.name}
        type='channel'
        apiUrl='/api/socket/messages'
        query={{
          channelId: channel.id,
          serverId: channel.serverId,
        }}
      />
    </div>
  );
};

export default ChannelId;
