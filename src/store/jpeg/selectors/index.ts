import { createSelector } from "reselect";
import { State } from "../../";

import { Jpeg } from "..";

export const GetJpeg = createSelector(
  (state: State) => state.jpeg,
  (jpeg: Jpeg) => jpeg
);
