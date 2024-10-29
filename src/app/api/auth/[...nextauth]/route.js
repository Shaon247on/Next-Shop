import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions ={
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    required: true,
                    placeholder: "your email"
                },
                password: {
                    label: "Password",
                    type: "password",
                    required: true,
                    placeholder: "enter a password"
                }
            },
            async authorize(credentials) {
                const {email, password} = credentials

                if(!credentials){
                    return null
                }
                if(email){
                    const currentUser = users.find(user=> user.email === email)
                    console.log(currentUser);
                    if(currentUser){
                        if(currentUser.password === password){
                            return currentUser
                        }
                    }
                }
                return null
            }
        })
    ]
}
const handler = NextAuth()

const users = [
    {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com",
        password: "Rango247on"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "janesmith@example.com",
        password: "Rango247on"
    },
    {
        id: 3,
        name: "Mike Johnson",
        email: "mikejohnson@example.com",
        password: "Rango247on"
    },
    {
        id: 4,
        name: "Emily Brown",
        email: "emilybrown@example.com",
        password: "Rango247on"
    }
];

export { handler as GET, handler as POST }