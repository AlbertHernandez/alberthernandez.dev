import { Profile } from "@/shared/types";

import { albertHernandezProfile } from "./data/albert-hernandez-profile";

export const getProfile = (): Profile => {
  return albertHernandezProfile;
};
