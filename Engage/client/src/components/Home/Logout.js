import React from 'react'
import { myFirebase, myFirestore } from '../../Config/MyFirebase'

const auth=myFirebase.auth();

const Logout = () => {


    return auth.currentUser && (
        <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )

}

export default Logout
