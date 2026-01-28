"use server";

import { userService } from "@/services/user.services";

export const getSessionAction = async () => {
  return await userService.getSession();
};
