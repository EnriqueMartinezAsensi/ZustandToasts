export type ReduxAction<Type extends string, Payload> = {
  type: Type;
  payload: Payload;
};
