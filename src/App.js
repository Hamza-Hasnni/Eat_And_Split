import { useState } from "react";
import Button from "./components/Button/Button";
import AddFriend from "./components/addFriend/AddFriend";
import Friend from "./components/friend/Friends";
import SplitBill from "./components/splitBill/SplitBill";
const friendList = [
  {
    id: 1,
    name: "Hamza",
    img: "https://i.pravatar.cc/48?img=3",
    balance: -20,
  },
  {
    id: 2,
    name: "Mouna",
    img: "https://i.pravatar.cc/48?img=5",
    balance: 0,
  },
  {
    id: 3,
    name: "Chiheb",
    img: "https://i.pravatar.cc/48?img=7",
    balance: -5,
  },
  {
    id: 4,
    name: "Zahra",
    img: "https://i.pravatar.cc/48?img=1",
    balance: -40,
  },
  {
    id: 5,
    name: "ABS",
    img: "https://i.pravatar.cc/48?img=8",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(friendList);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const handleSelectedFriend = (friend) => {
    setSelectedFriend(friend);
    setShowAddFriend(false);
    setSelectedFriend(() => (selectedFriend?.id === friend.id ? null : friend));
  };
  const handleShowAddFriend = () => {
    setShowAddFriend(!showAddFriend);
    setSelectedFriend(null);
  };
  const handleAddFriend = (friend) => {
    setFriends([...friends, friend]);
    setShowAddFriend(false);
  };
  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <Friend
          friends={friends}
          handleSelect={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <AddFriend handleAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>

      {selectedFriend && (
        <SplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
