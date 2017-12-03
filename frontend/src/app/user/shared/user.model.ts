export class User {
    id: number;
    username: string;

    static fromToken(token): User {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        const json = JSON.parse(window.atob(base64));

        const user = new User();
        user.id = json._id;
        user.username = json.username;

        return user;
    }
}
