function describeValue(val: number | string): string {
  if (typeof val === "number") {
    return "This is a number";
  } else {
    return "This is a string";
  }
}