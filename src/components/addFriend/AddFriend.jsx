import React, { useState } from "react";
import Button from "../Button/Button";
import "./addFriends.css";

export default function AddFriend({ handleAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/50?img=2");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name || !image) return;

    const date = new Date();
    const newFriend = {
      id: date.getMilliseconds(),
      name: name,
      img: image,
      balance: 0,
    };
    handleAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/50?img=2");
  };

  return (
    <form onSubmit={handleAdd}>
      <label htmlFor="name">🧑‍🤝‍🧑 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="name">📷 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
