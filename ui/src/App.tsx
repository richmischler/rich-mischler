import { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact } from "./components/contact/Contact";
import { Home } from "./components/home/Home";
import { Resume } from "./components/resume/Resume";
import { Services } from "./components/services/Services";
import { Layout } from "./layout/Layout";

export const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
