import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Index";
import { Services } from "../pages/services/Index";
import { DefaultLayout } from "../layouts/defaultLayout/Index";
import { LayoutServices } from "../layouts/layoutServices/Index"

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/servicos" element={<LayoutServices />}>
          <Route path="/servicos/:id" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
