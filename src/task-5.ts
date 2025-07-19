type UserInput = {
    name: string;
    age: number;
}

type User = UserInput & {
    isAdmin: boolean;
}

function createUser({ name, age }: UserInput): User {
  return {
    name,
    age,
    isAdmin: false
  };
}

console.log(createUser({ name: "Alice", age: 30 }));