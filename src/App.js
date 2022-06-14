import { BrowserRouter } from "react-router-dom";
import Body from "./elem/body/body";
import PablicRoute from "./route/route";
function App() {
  return (
    <BrowserRouter>
      <PablicRoute />
    </BrowserRouter>
  );
}

export default App;
