import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import PostsPage from "./pages/PostsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<DashboardPage />} />
        <Route exact path="/posts" element={<PostsPage />} />
      </Routes>
    </div>
  );
}

export default App;
