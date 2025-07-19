type User = {
    username: string;
    age: number;
    city?: string;
}

type Role = "admin" | "user" | "guest";

function createUserCard(obj: User, role: Role): string {
     const city = obj.city && obj.city.trim() !== "" ? obj.city : "Unknown";
    return `${obj.username} (${obj.age}) — ${role} from ${city}`
}

console.log(createUserCard({ username: "Anna", age: 25, city: "Kyiv" }, "admin"));
// Anna (25) — admin from Kyiv

console.log(createUserCard({ username: "Max", age: 30 }, "guest"));
// Max (30) — guest from Unknown