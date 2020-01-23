import { Reducer } from "redux";
import { isType } from "typescript-fsa";
import { produce } from "immer";

import { Jpeg } from "..";
import { ChangeImage, ChangeQuality } from "..";

const initialState: Jpeg = { file: null, quality: 1.0 };

export const reducer: Reducer<Jpeg> = (state = initialState, action) => {
  if (isType(action, ChangeImage)) {
    return produce(state, draft => {
      draft.file = action.payload.file;
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
