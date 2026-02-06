import React from "react";
import "./App.css";
import { Provider } from "react-redux";
// Make sure these folder names match your sidebar exactly (Capital S and C)
import { store } from "./Store/store.ts";
import UserPage from "./Components/UserPage.tsx";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* UserPage must be imported above for this to work */}
        <UserPage />
      </div>
    </Provider>
  );
}

export default App;
