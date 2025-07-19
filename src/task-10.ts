interface User {
    id: number;
    name: string;
}

function toUserObjects (users: string[]): User[]{
    return users.map((name, index) => ({
    id: index + 1,
    name: name,
  })); 
}

const users = ["alice", "bob", "charlie"];

const result = toUserObjects(users);

console.log(result);