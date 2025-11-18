
type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

const filterActiveUsers = (users: User[]): User[] => {
    return users.filter(user => user.isActive);
}
