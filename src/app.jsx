import headercom from "./components/headercomponent/headercom";
import buttoncom from "./components/buttoncomponent/buttoncom";

import ImageCom from "./components/imagecomponent/imageCom";

import picOne from "./components/imagecomponent/imagess/2023-lucid-air-1.jpeg";
import picTwo from "./components/imagecomponent/imagess/bmwi4_029.jpeg";
import picThree from "./components/imagecomponent/imagess/coolest-cars-feature.jpeg";

import "./App.css";

function App() {
  const showAlert = () => {
    return alert("CLICK PICTURES");
  };
  return (
    <>
      <headercom type="header" text="I am a Boss" />
      <div className="box">
        <figure>
          <ImageCom source={picOne} type="jump" />
          <figcaption>I can jump</figcaption>

          <ImageCom source={picTwo} type="rotate" />
          <figcaption>I can rotate</figcaption>
        </figure>
        <figure>
          <ImageCom source={picThree} type="jello" />
          <figcaption>I am a jello(sorry, could not fix it)</figcaption>
        </figure>
      </div>
      <buttoncom
        text="CLICK ME OR PICTURES"
        type="btnAlert"
        onClickHandler={showAlert}
      />
    </>
  );
}

export default App;
