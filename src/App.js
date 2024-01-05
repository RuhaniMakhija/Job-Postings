import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div>
      <Header onSearchChange={setSearchTerm}/>
      <Body searchTerm={searchTerm} />
    </div>
  );
}

export default App;
