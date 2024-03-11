import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../layouts/index";
import { Home } from "../pages/home/Index";
import { Services } from "../pages/services/Index";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/servicos/:id" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
