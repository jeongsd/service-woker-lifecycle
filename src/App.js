import React from "react";

function App() {
  const [showImg, setShowImg] = React.useState(false);
  return (
    <div>
      <button onClick={() => setShowImg(true)}>이미지 보이기</button>
      <div>
        <img src='dog.webp' alt='logo' />
        {showImg && <img src='dog.webp' alt='logo' />}
      </div>
    </div>
  );
}

export default App;
