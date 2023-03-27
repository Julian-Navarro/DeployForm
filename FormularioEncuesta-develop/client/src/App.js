import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Survey from "./components/Surveys/Survey";
import FormSurvey from "./components/FormSurvey/FormSurvey";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Survey />}></Route>
        <Route exact path="/survey" element={<FormSurvey />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
