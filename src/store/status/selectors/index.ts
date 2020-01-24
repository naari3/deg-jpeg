import { createSelector } from "reselect";
import { State } from "../..";

import { Status } from "..";

export const GetStatus = createSelector(
  (state: State) => state.status,
  (status: Status) => status
);
