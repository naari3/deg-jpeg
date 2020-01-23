import { Reducer } from "redux";
import { isType } from "typescript-fsa";
import { produce } from "immer";

import { Jpeg } from "..";
import { ChangeImageUrl, ChangeQuality } from "..";

const initialState: Jpeg = { url: "", quality: 1.0 };

export const reducer: Reducer<Jpeg> = (state = initialState, action) => {
  if (isType(action, ChangeImageUrl)) {
    return produce(state, draft => {
      draft.url = action.payload.url;
    });
  }
  if (isType(action, ChangeQuality)) {
    return produce(state, draft => {
      draft.quality = action.payload.quality;
    });
  }
  return state;
};

export default reducer;
