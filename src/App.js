import Header from "./components/Header";
import ListItems from "./components/ListItems";
// import Filterbar from "./components/Filterbar";

import { JobProvider } from "./components/JobContext/JobContext";
function App() {
  return (
    <>
      <Header />
      <JobProvider>
        {/* <Filterbar /> */}
        <ListItems />
      </JobProvider>
    </>
  );
}

export default App;
