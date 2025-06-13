import { useState } from "react";
import { Navigate } from "react-router-dom";
import PinPadModalComp from "./PinPadModalComp";

export default function ProtectedRouteComp({ children }) {
  const [pinValidated, setPinValidated] = useState(false);
  const [showPinModal, setShowPinModal] = useState(true);

  const handlePinSubmit = (pin) => {
    if (pin === "1") {
      // pin (para mudar depois)
      setPinValidated(true);
      setShowPinModal(false);
    } else {
      alert("PIN incorrect!");
    }
  };

  if (pinValidated) {
    return children;
  }

  return (
    <div className="w-100 h-100 bg-dark" style={{ position: "absolute", top: 0, left: 0 }}>  
      <PinPadModalComp show={showPinModal} onClose={() => setShowPinModal(false)} onSubmit={handlePinSubmit} />
      {!showPinModal && <Navigate to="/" replace />}
    </div>
  );
}
