import type { Club } from "@hey/types/club";
import type { Payload } from "./getClubs";
import getClubs from "./getClubs";

export const GET_CLUB_QUERY_KEY = "getClub";

const getClub = async (payload: Payload): Promise<Club | null> => {
  try {
    const clubs = await getClubs(payload);

    return clubs?.[0] || null;
  } catch {
    return null;
  }
};

export default getClub;
