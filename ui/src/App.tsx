import { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Resume } from "./components/resume/Resume";
import { Layout } from "./layout/Layout";

export const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
