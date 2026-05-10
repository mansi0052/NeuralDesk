import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Research from "./pages/Research";
import Billing from "./pages/Billing";
import Team from "./pages/Team";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";

/* NEW */
import Chat from "./pages/chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>

<Route
  path="/"
  element={<LandingPage />}
/>

        <Route element={<AppLayout />}>


          {/* Main Pages */}
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/research"
            element={<Research />}
          />

          <Route
            path="/billing"
            element={<Billing />}
          />

          <Route
            path="/team"
            element={<Team />}
          />

          <Route
            path="/notifications"
            element={<Notifications />}
          />

          <Route
            path="/settings/*"
            element={<Settings />}
          />

          {/* NEW AI CHAT PAGE */}
          <Route
            path="/chat"
            element={<Chat />}
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;