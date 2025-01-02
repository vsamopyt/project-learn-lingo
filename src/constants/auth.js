export const regexEmail = /^\S+@\S+\.\S+$/;
export const signInElements = [
    {isBtn: false, name: "name", type: "text", placeholder:"name" },
    {isBtn: false, name: "email", type: "text", placeholder:"email" },
    {isBtn: false, name: "password", type: "password", placeholder:"password", icons: true },
    {isBtn: true, name: "password", type: "submit", value: "Sign Up", idKey:"sign-up"},
]
export const logInElements = [
    {isBtn: false, name: "email", type: "text", placeholder:"email" },
    {isBtn: false, name: "password", type: "password", placeholder:"password", icons: true },
    {isBtn: true, type: "submit", value: "Log In", idKey:"log-in"},

]

export const logOutElements = [
    {isBtn: true, type: "button", value: "Cancel"},
    {isBtn: true, type: "submit", value: "Log Out", idKey:"log-out"},
    
]