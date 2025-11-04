interface ApiResponse<T> {
    data: T | null;
    status: number;
    message?: string | null;
    error?: string;
}

interface User {
    id: number;
    firstName: string;
    lastName?: string;
    nickname?: string;
    email?: string;
}

const response: ApiResponse<User> = {
    data: {
        id: 1,
        firstName: "Taya",
        lastName: "Gagarkina",
        nickname: "xpuwie"
    },
    status: 200,
    message: "successfully pupupuuu"
}

console.log(response);