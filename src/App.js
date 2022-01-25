import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FindUpdate from "./components/Update/FindUpdate";
function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Form" exact element={<Form />} />
            <Route path="/Update" exact element={<FindUpdate />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
