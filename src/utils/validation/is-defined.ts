const isDefined = <TValue>(
  value: TValue
): value is Exclude<TValue, null | undefined> =>
  value !== null && value !== undefined;

export default isDefined;
