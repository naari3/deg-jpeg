export type Jpeg = {
  file: File | null;
  quality: number;
};

export * from "./actions";
export * from "./selectors";
export { default } from "./reducers";
