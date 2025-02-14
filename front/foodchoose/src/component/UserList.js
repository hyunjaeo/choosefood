import React from "react";

function User({ user, onRemove }) {
    const {username, id} = user;
    return (
        <div id='addedIngredientContainer'>
            <span id='addedIngredient'>{username}
            <button id='deleteButton' onClick={() => onRemove(id)}>x</button>
            </span>
        </div>
    );
}


function UserList({ users, onRemove }) {
    return (
        <div id='wrap2'>
            {users.map((user) => (
                <User user={user} key={user.id} onRemove={onRemove} />
            ))}
        </div>
    );
}
export default UserList;