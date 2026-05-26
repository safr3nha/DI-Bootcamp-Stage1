interface ToStringable {
  toString(): string;
}

function formatInput<T extends ToStringable>(input: T): string {
  return (input as ToStringable).toString().toUpperCase();
}