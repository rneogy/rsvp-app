import {
  Button,
  ControlGroup,
  FormGroup,
  InputGroup,
  Spinner,
} from "@blueprintjs/core";
import { useState } from "react";
import "./App.css";
import MatchView from "./MatchView";
import PartialMatchesView from "./PartialMatchesView";
import { APIResponse } from "./types";

type AsyncValue<T> =
  | {
      status: "idle";
    }
  | {
      status: "loading";
    }
  | {
      status: "success";
      value: T;
    }
  | {
      status: "error";
      error: Error;
    };

function App() {
  const [name, setName] = useState("");
  const [asyncStatus, setAsyncStatus] = useState<AsyncValue<APIResponse>>({
    status: "idle",
  });

  function handleSubmit() {
    setAsyncStatus({ status: "loading" });
    fetch(
      `https://api.guests.xogrp.com/v1/weddings/bf4f2114-3c15-4d8d-ba91-7b27d7b50dda/guests?full_name=${encodeURIComponent(
        name
      )}`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setAsyncStatus({
          status: "success",
          value: json,
        });
      })
      .catch((err) => {
        setAsyncStatus({
          status: "error",
          error: err,
        });
      });
  }

  return (
    <div className="App">
      <h1>Dress Code</h1>
      <div>
        {asyncStatus.status === "idle" && (
          <FormGroup label="Provide your name:">
            <ControlGroup>
              <InputGroup
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
              />
              <Button
                intent="primary"
                disabled={name.length === 0}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </ControlGroup>
          </FormGroup>
        )}
        {asyncStatus.status === "loading" && <Spinner />}
        {asyncStatus.status === "success" && (
          <div>
            {asyncStatus.value.exactMatch && (
              <MatchView match={asyncStatus.value.exactMatch} />
            )}
            {asyncStatus.value.partialMatches && (
              <div>
                <PartialMatchesView
                  partialMatches={asyncStatus.value.partialMatches}
                />
              </div>
            )}
            {asyncStatus.value.error && (
              <div>
                <h3>No invitation found for {name}</h3>
                <Button
                  intent="primary"
                  onClick={() => setAsyncStatus({ status: "idle" })}
                >
                  Try again
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
