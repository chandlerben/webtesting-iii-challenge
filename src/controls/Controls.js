import React from "react";

const Controls = props => {
  const { locked, closed, toggleLocked, toggleClosed } = props;

  return (
    <div className="controls panel">
      <button
        label="Locking"
        disabled={!closed}
        onClick={toggleLocked}
        className="toggle-btn locking-button"
      >
        {locked ? "Unlock Gate" : "Lock Gate"}
      </button>
      <button
        label="Opening-Button"
        disabled={locked}
        onClick={toggleClosed}
        className="toggle-btn"
      >
        {closed ? "Open Gate" : "Close Gate"}
      </button>
    </div>
  );
};

export default Controls;
