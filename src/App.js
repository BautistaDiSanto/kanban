import { TaskModal } from "./components/taskModal/taskModal";
import { Column } from "./components/column/column";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
        height: "100vh",
      }}
    >
      <Column />
      <Column />
      <Column />
      <TaskModal />
    </div>
  );
}

export default App;
