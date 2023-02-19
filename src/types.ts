export interface Person {
  firstName: string;
  lastName?: string;
  isLeader: boolean;
  invitations: Invitation[];
}

export interface Invitation {
  eventId: string;
  rsvp: boolean;
}

export interface Match {
  id: string;
  people: Person[];
}

export interface APIResponse {
  exactMatch: Match | null;
  partialMatches: Match[] | null;
  error?: string;
}
