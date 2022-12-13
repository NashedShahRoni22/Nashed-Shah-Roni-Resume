import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router/routes";

function App() {
  return (
    <section className="bg-[#00001E]">
      <RouterProvider router={router} />
      <Toaster />
    </section>
  );
}

export default App;
