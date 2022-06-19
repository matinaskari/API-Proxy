import { clients } from "../DB/clients.json";

export const tokenChecker = (token: string) => {
  for (let i = 0; i < clients.length; i++) {
    if (clients[i].token === token) return clients[i];
  }
  return false;
};
