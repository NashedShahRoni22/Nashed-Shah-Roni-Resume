import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router/routes";

function App() {
  return (
    <section className="bg-[#00001E]">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
