const users = { user1: 18273, user2: 92833, user3: 90315 };

const entries = Object.entries(users);

const multipliedEntries = entries.map(([user, id]) => [user, id * 2]);