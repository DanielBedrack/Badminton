import React, { useState } from 'react'

const PointStatus = ( props ) => {
    const [activatedType ,setActivatedType] = useState('')

      const pointType = [
        {
          option1: "point" ,
          option2: "mistake",
          option3: "o-point",
          option4: "o-mistake",
        },
      ];

      const submitHandle = () => {};

      const handleButtonClick = (chosenType) => {
        pointType.forEach(type => {
            if (type === chosenType) {
                setActivatedType(chosenType)
            }
        });
        // const button = document.querySelector(`.button:nth-child(${buttonNum})`);
        // if (button !== activeButton) {
        //   if (activeButton) {
        //     activeButton.checked = false;
        //   }
        //   button.checked = true;
        //   setActiveButton(button);
        // } else {
        //   button.checked = false;
        //   setActiveButton(null);
        // }
      };

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setShowPopup(false)}>
          X
        </button>
        <form onSubmit={submitHandle}>
          <div className="points">
            <label className="point">
              <input
                type="radio"
                hidden="hidden"
                name="point"
                value="point"
                onClick={() => handleButtonClick("point")}
              />
              Point
            </label>
            <label className="point">
              <input
                type="radio"
                hidden="hidden"
                name="point"
                value="mistake"
                onClick={() => handleButtonClick("mistake")}
              />
              Mistake
            </label>
            <label className="point">
              <input
                type="radio"
                hidden="hidden"
                name="point"
                value="o-point"
                onClick={() => handleButtonClick("o-point")}
              />
              O-Point
            </label>
            <label className="point">
              <input
                type="radio"
                hidden="hidden"
                name="point"
                value="o-mistake"
                style={{ color: "#E5A84C" }}
                onClick={() => handleButtonClick('o-mistake')}
              />
              O-Mistake
            </label>
          </div>
        </form>
        {props.children}
      </div>
    </div>
  );
}

export default PointStatus
