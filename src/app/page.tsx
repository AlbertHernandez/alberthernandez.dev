import React from "react";
import { Portfolio } from "src/app/Portfolio";

import { profile } from "@/config/profile";

export default function Page() {
  return <Portfolio profile={profile} />;
}
