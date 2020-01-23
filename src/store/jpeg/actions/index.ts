import { actionCreatorFactory } from "typescript-fsa";

const actionCreator = actionCreatorFactory("JPEG");

export const ChangeImageUrl = actionCreator<{ url: string }>("CHANGE_IMAGE");
export const ChangeQuality = actionCreator<{ quality: number }>(
  "CHANGE_QUALITY"
);
