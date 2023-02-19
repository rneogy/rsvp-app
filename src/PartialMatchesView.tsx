import { Button } from "@blueprintjs/core";
import { useState } from "react";
import MatchView from "./MatchView";
import { Match } from "./types";

interface PartialMatchesViewProps {
  partialMatches: Match[];
}

export default function PartialMatchesView(
  props: PartialMatchesViewProps
): JSX.Element {
  const { partialMatches } = props;
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  if (selectedMatch) {
    return <MatchView match={selectedMatch} />;
  }

  return (
    <div className="partial-match-view">
      <h2>Are you...</h2>
      {partialMatches.map((match) => (
        <div key={match.id}>
          <Button
            intent="primary"
            onClick={() => setSelectedMatch(match)}
            className="match-button"
          >
            Yes
          </Button>
          {match.people
            .map((person) => person.firstName + " " + person.lastName)
            .join(", ")}
        </div>
      ))}
    </div>
  );
}
