export type Status = {
  url: string;
  quality: number;
  jpegs: string[];
  filename: string;
};

export * from "./actions";
export * from "./selectors";
export { default } from "./reducers";
