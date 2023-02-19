import { DressCode, EventMap } from "./constants";
import { Match } from "./types";
import { getName } from "./utils";

interface MatchViewProps {
  match: Match;
}

export default function MatchView(props: MatchViewProps): JSX.Element {
  const { match } = props;
  const firstPerson = match.people[0];
  const { invitations } = firstPerson;
  const events = invitations.map((invitation) => EventMap[invitation.eventId]);
  return (
    <>
      <h2>{match.people.map(getName).join(", ")}</h2>
      <div>
        {events.map((event) => (
          <div key={event}>
            <h4>For the {event}, please wear:</h4>
            <div>{DressCode[event]}</div>
          </div>
        ))}
      </div>
    </>
  );
}
