export type UserToken = {
    readonly token: string
    readonly email: string
};

export interface TokenStorageInterface {
    getUser(): UserToken | undefined;

    isLoggedIn(): boolean;

    login(user: UserToken): void;

    logout(): void;
}

export class TokenStorage implements TokenStorageInterface {
    public getUser(): UserToken | undefined {
        const user = localStorage.getItem("user");

        if (user != null) {
            return JSON.parse(user);
        }

        return undefined;
    }

    public isLoggedIn() {
        return localStorage.getItem("user") !== null;
    }

    public login(user: UserToken) {
        localStorage.setItem("user", JSON.stringify(user));
    }

    public logout() {
        localStorage.removeItem("user");
    }
}
