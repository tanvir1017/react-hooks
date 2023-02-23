import React, { useRef } from "react";
import ModalChild from "./ModalChild";

export default function ImperativeHandle() {
  const modalRef = useRef();

  const handleModalOpenRef = () => {
    modalRef.current.openModal();
  };
  console.log(modalRef.current);

  console.log("parent rendered");
  return (
    <>
      <hr />
      <section className="modal--parent">
        <h1>useImperativeHandle</h1>
        <div>
          <h3>This is parent component</h3>
          <ModalChild ref={modalRef} />

          <button onClick={handleModalOpenRef}>open</button>
        </div>
      </section>
    </>
  );
}
