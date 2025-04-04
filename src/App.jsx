import "./App.css";
import Pad from "./game/buttons/Pad";
import Screen from "./game/Screen";
import StartSelect from "./game/buttons/StartSelect";
import Actions from "./game/buttons/Actions";

function App() {
  return (
    <>
      <div class="container-main">
        {/* Shadow */}
        <div class="shadow">
          {/* Container top */}
          <div class="container-top"></div>
          {/* Container game */}
          <div class="container-gameboy">
            {/* Container screen */}
            <div class="container-screen-center">
              <Screen />
              {/* Container Nintendo */}
              <div class="container-name">Nintendo GAMEBOY</div>
            </div>
            {/* Container buttons */}
            <div class="container-buttons-center">
              <div class="container-buttons">
                {/* Directions pad */}
                <Pad />
                {/*Select start*/}
                <StartSelect />
                {/* A B */}
                <Actions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
