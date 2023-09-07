import React from "react";
import Button from "../Button/Button";

export default function FriendCard({ friend, handleSelect, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.img} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          I owe {friend.name} {Math.abs(friend.balance)} DT
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes me {Math.abs(friend.balance)} DT
        </p>
      )}
      {friend.balance === 0 && (
        <p className="">Me and {friend.name} are even</p>
      )}
      <Button onClick={() => handleSelect(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
