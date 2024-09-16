import React from "react";

import { profile } from "@/config/profile";

import { Portfolio } from "./components";

export default function Page() {
  return <Portfolio profile={profile} />;
}
