import { useState } from "react";

import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ProtectedRoute, Register, Landing, Error } from "./pages";
import {
  Addjobs,
  Stats,
  SharedLayout,
  Profile,
  AllJobs,
} from "./pages/dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>

              <SharedLayout />
            </ProtectedRoute>
            
          }
        >
          <Route index element={<Stats />} />

          <Route path="/all-jobs" element={<AllJobs />} />
          <Route path="/add-job" element={<Addjobs />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
