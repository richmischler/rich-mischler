import { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Resume } from "./components/Resume";
import { Layout } from "./layout/Layout";

export const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Resume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
