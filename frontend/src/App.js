import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/Index.scss";
import { Routes, Route } from "react-router-dom";
import MeetingRoom from "./pages/MeetingRoom";
import TeacherDashboard from "./pages/TeacherDashboard";
import TherapistRoom from "./pages/TherapistRoom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class" element={<MeetingRoom />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/therapist-dashboard" element={<TherapistRoom />} />
      </Routes>
    </div>
  );
}

export default App;
