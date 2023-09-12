'use client'

import { Channel, ChannelType, MemberRole, Server } from "@prisma/client";
import { Hash } from "lucide-react";

interface ServerChannelProps {
  channel: Channel;
  server: Server;
  role?:MemberRole;
}

const iconMap={
  [ChannelType.TEXT]: Hash,
  [ChannelType.AUDIO]: Hash,
  [ChannelType.VIDEO]: Hash,
}

export const ServerChannel = ({
  channel,
  server,
  role
}: ServerChannelProps) => {
  return (
    <div>
      <h1>Server Channel</h1>
    </div>
  )
}