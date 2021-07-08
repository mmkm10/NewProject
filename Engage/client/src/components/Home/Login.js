import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';

import { myFirebase, myFirestore } from '../../Config/MyFirebase';

const auth = myFirebase.auth();

function Login() {
    const [user] = useAuthState(auth);

    const signInWithGoogle = () => {
        const provider = new myFirebase.auth.GoogleAuthProvider();
        if (!user) {
            // User not logged in, start login.
            auth().signInWithPopup(provider);
        } else {
            // user logged in, go to home page.
            window.location='Login';
        }
    }

    return (
        <>
            <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        </>

    )
}

export default Login;