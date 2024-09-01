import React from "react";

import { Portfolio } from "@/portfolio";
import { getProfile } from "@/shared/services";

export default function Page() {
  return <Portfolio profile={getProfile()} />;
}
