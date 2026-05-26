type Person = { name: string; age: number };
type Address = { street: string; city: string };

type PersonWithAddress = Person & Address;

const user: PersonWithAddress = {
  name: "Alice",
  age: 30,
  street: "123 Main St",
  city: "Tech City"
};