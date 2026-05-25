interface User {
    readonly id: number;
    name: string;
    email: string;
}

interface PremiumUser extends User {
    membershipLevel?: string;
}

function printUserDetails(user: PremiumUser): void {
    console.log(`ID: ${user.id}, Name: ${user.name}, Level: ${user.membershipLevel ?? "Standard"}`);
}

const user: PremiumUser = { 
    id: 1, 
    name: "Alice", 
    email: "alice@example.com", 
    membershipLevel: "Gold" 
};

printUserDetails(user);