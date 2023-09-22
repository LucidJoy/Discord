"use client";

import { ChannelType, MemberRole } from "@prisma/client";
import React from "react";
import ActionTooltip from "../ActionTooltip";
import { Plus, Settings } from "lucide-react";
import { useModal } from "@/hooks/useModalStore";

const ServerSection = ({ label, role, sectionType, channelType, server }) => {
  const { onOpen } = useModal();

  return (
    <div className='flex items-center justify-between py-2'>
      <p className='text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400'>
        {label}
      </p>
      {role !== MemberRole.GUEST && sectionType === "channels" && (
        <ActionTooltip label='Create Channels' side='top'>
          <button
            className='text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition'
            onClick={() => onOpen("createChannel", { channelType })}
          >
            <Plus className='w-4 h-4' />
          </button>
        </ActionTooltip>
      )}

      {role === MemberRole.ADMIN && sectionType === "members" && (
        <ActionTooltip label='Manage Members' side='top'>
          <button
            className='text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition'
            onClick={() => onOpen("members", { server })}
          >
            <Settings className='w-4 h-4' />
          </button>
        </ActionTooltip>
      )}
    </div>
  );
};

export default ServerSection;
