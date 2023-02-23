import React, { forwardRef, useImperativeHandle, useState } from "react";

function ModalChild(props, ref) {
  console.log("ref from child", ref);
  const [modalState, setModalState] = useState(false);
  const obje = {
    name: "Tanvir Hossain",
    age: 20,
  };
  useImperativeHandle(ref, () => ({
    modalState,
    obje,
    openModal: () => setModalState(true),
  }));

  if (!modalState) return null;
  console.log("child component rendered");
  return (
    <>
      <div className="modal">
        <p>
          This is child modal & its called from parent component, by
          useImperativeHandle hooks in react
        </p>
        <button className="modal--button" onClick={() => setModalState(false)}>
          ❌
        </button>
      </div>
    </>
  );
}

export default forwardRef(ModalChild);
