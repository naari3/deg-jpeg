import { Reducer } from "redux";
import { isType } from "typescript-fsa";
import { produce } from "immer";

import { Status } from "..";
import {
  ChangeImageUrl,
  ChangeQuality,
  AddJpeg,
  ChangeJpegSet,
  ChangeFilename,
} from "..";

const initialState: Status = {
  url: "",
  quality: 92,
  jpegs: [],
  filename: "",
};

export const reducer: Reducer<Status> = (state = initialState, action) => {
  if (isType(action, ChangeImageUrl)) {
    return produce(state, (draft) => {
      draft.url = action.payload.url;
    });
  }
  if (isType(action, ChangeQuality)) {
    return produce(state, (draft) => {
      draft.quality = action.payload.quality;
    });
  }
  if (isType(action, AddJpeg)) {
    return produce(state, (draft) => {
      draft.jpegs.push(action.payload.src);
    });
  }
  if (isType(action, ChangeJpegSet)) {
    return produce(state, (draft) => {
      draft.jpegs = action.payload.srces.map((s) => s);
    });
  }
  if (isType(action, ChangeFilename)) {
    return produce(state, (draft) => {
      draft.filename = action.payload.filename;
    });
  }
  return state;
};

export default reducer;
