"use client";

import { useState } from "react";
import { login, signup } from "./actions";

export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true); // Állapot annak nyomon követésére, hogy melyik form látszik

    return (
        <div>
            <h1>{isLogin ? "Log in" : "Sign up"}</h1>
            {isLogin ? (
                <form>
                    <label htmlFor="email">Email:</label>
                    <input id="email" name="email" type="email" required />
                    <label htmlFor="password">Password:</label>
                    <input id="password" name="password" type="password" required />
                    <button formAction={login}>Log in</button>
                </form>
            ) : (
                <form>
                    <label htmlFor="email">Email:</label>
                    <input id="email" name="email" type="email" required />
                    <label htmlFor="password">Password:</label>
                    <input id="password" name="password" type="password" required />
                    <button formAction={signup}>Sign up</button>
                </form>
            )}
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Switch to Sign up" : "Switch to Log in"}
            </button>
        </div>
    );
}
