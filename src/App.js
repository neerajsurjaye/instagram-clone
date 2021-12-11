import Header from "./Components/Header";
import StatusBar from "./Components/StatusBar";
import { BottomNavMob } from "./Components/BottomNav";
import TimeLine from "./Components/TimeLine";


function App() {
  return (
    <div className="App">

      <Header></Header>

      <div className="container">

        <StatusBar></StatusBar>
        <TimeLine></TimeLine>

      </div >

      <BottomNavMob></BottomNavMob>



    </div >
  );
}

export default App;
