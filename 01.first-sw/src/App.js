import React from "react";

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }
  console.log("Register start");
  navigator.serviceWorker
    .register("/sw.js")
    .then(registration =>
      console.log("Registered! Scope is:", registration.scope)
    );
}

function App() {
  const [showImg, setShowImg] = React.useState(false);
  return (
    <div>
      <div>
        <button onClick={registerServiceWorker}>서비스 워커 등록하기</button>
      </div>

      <button onClick={() => setShowImg(true)}>이미지 보이기</button>

      <div>
        <img src='dog.webp' alt='logo' />
        {showImg && <img src='dog.webp' alt='logo' />}
      </div>
    </div>
  );
}

export default App;
