import React from "react";
import { redirect } from "next/navigation";

import db from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import IntitalModal from "@/components/modals/IntitalModal";

const SetupPage = async () => {
  const profile = await initialProfile();

  // if user part of a server
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile?.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/server/${server.id}`);
  }

  return (
    <div>
      <IntitalModal />
    </div>
  );
};

export default SetupPage;
