import React from "react";
import FriendCard from "../friendCard/FriendCard";

const Friend = ({ friends, handleSelect, selectedFriend }) => {
  return (
    <div>
      <ul>
        {friends.map((friend) => {
          return (
            <FriendCard
              friend={friend}
              key={friend.id}
              handleSelect={handleSelect}
              selectedFriend={selectedFriend}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Friend;
