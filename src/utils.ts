import { Person } from "./types";

export function getName(person: Person): string {
  return `${person.firstName} ${person.lastName ?? ""}`.trim();
}
