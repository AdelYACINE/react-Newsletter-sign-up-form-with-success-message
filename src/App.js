import { useContext } from "react";
import Card from "./component/Card";
import Popup from "./component/Popup";

import { Context } from "./context/Context";

function App() {
  const { showPopup } = useContext(Context);

  return <div className="App">{!showPopup ? <Card /> : <Popup />}</div>;
}

export default App;
