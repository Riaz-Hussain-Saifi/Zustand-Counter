export const loginSchema = {
    name: "login",
    title: "Login",
    type: "document",
    fields: [
        {
            name: "username",
            title: "User Name",
            type: "string"
        },
        {
            name: "email",
            title: "Email",
            type: "string"
        },
        {
            name: "password",
            title: "Password",
            type: "string"
        }
    ]
}