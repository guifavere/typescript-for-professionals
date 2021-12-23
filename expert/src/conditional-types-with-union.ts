type NoEmpty<T> = T extends null | undefined ? never : T;

type Example = NoEmpty<string | null>;
type Expanded0 = NoEmpty<string> | NoEmpty<null>;
type Expanded1 =
  (string extends null | undefined ? never : string)
  | (null extends null | undefined ? never : string);
type Expanded2 = string | never;
type Result = string;
