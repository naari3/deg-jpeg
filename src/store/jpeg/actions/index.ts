import { actionCreatorFactory } from "typescript-fsa";

const actionCreator = actionCreatorFactory("JPEG");

export const ChangeImage = actionCreator<{ file: File }>("CHANGE_IMAGE");
export const ChangeQuality = actionCreator<{ quality: number }>(
  "CHANGE_QUALITY"
);
