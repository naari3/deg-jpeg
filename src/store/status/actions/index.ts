import { actionCreatorFactory } from "typescript-fsa";

const actionCreator = actionCreatorFactory("JPEG");

export const ChangeImageUrl = actionCreator<{ url: string }>("CHANGE_IMAGE");
export const ChangeQuality =
  actionCreator<{ quality: number }>("CHANGE_QUALITY");
export const AddJpeg = actionCreator<{ src: string }>("ADD_JPEG");
export const ChangeJpegSet =
  actionCreator<{ srces: string[] }>("CHANGE_JPEG_SET");
export const ChangeFilename =
  actionCreator<{ filename: string }>("CHANGE_FILENAME");
