import React from "react";

const UserContext = React.createContext(
    {
        userList: [],
        addNewUser: (newUser) => { }
    }
);

export default UserContext;