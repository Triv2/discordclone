'use client'

import { ServerWithMembersWithProfiles } from "@/types"
import { MemberRole } from "@prisma/client";


interface ServerHeaderProps {
  server: ServerWithMembersWithProfiles
  role?:MemberRole;
}

export const ServerHeader = ({ 
  server, 
  role 
}: ServerHeaderProps) => {
  const isAdmin = role === MemberRole.ADMIN;
  const isModerator = isAdmin || role === MemberRole.MODERATOR;
  return(
    <div>
      Server Header
    </div>
  )
}