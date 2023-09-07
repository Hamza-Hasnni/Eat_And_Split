import React, { useState } from "react";
import Button from "../Button/Button";
import "./splitBill.css";

export default function SplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const friendPaying = paidByUser < bill ? bill - paidByUser : "";
  const [whoPaid, setWhoPaid] = useState("user");
  const handleSplit = (e) => {
    e.preventDefault();
    if (bill === "" || paidByUser === "") return;
    onSplitBill(whoPaid === "user" ? friendPaying : -paidByUser);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSplit}>
      <h2>SPLITT A BILL WITH {selectedFriend.name}</h2>
      <label htmlFor="bill-value">💰 Bill value</label>
      <input type="number" onChange={(e) => setBill(Number(e.target.value))} />
      <label htmlFor="expense">🤵 My expense</label>
      <input
        type="number"
        onChange={(e) => setPaidByUser(Number(e.target.value))}
      />
      <label htmlFor="friend-expense">🧑‍🤝‍🧑 {selectedFriend.name} expense</label>
      <input type="text" disabled value={friendPaying} />
      <label htmlFor="who-pay"> 🤑 Who paying the bill</label>
      <select onChange={(e) => setWhoPaid(e.target.value)}>
        <option value="user">Me</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
