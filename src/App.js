import UserList from "./components/Users/UserList";
import AddUsers from "./components/Users/AddUsers";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <UserList />
      <AddUsers />
    </div>
  );
}
