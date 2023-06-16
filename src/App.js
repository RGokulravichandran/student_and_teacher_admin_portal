import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import ButtonAppBar from "./Components/AppBar";
import { PageNotFound } from "./Components/PageNotFound";
import Teachers from "./Components/Teachers";
import Students from "./Components/Students";
import OpenIconSpeedDial from "./Components/DialogBox";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Teachers" element={<Teachers />} />
          <Route path="/Students" element={<Students />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
