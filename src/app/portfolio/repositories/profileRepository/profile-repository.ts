import { Profile } from "@/shared/types";

import { albertHernandezProfile } from "./data/albertHernandezProfile";

export const getProfile = (): Profile => {
  return albertHernandezProfile;
};
