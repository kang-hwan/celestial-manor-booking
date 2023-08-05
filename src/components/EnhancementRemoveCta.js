import React from "react";

export default function EnhancementRemoveCta(props) {
  return (
    <div className="enhancementRemoveCta">
      <div className="enhancementRemoveCta__added">Added</div>
      <div className="enhancementRemoveCta__ctaBtn">
        <button className="btn-negative" onClick={props.removeReducer}>
          remove
        </button>
      </div>
    </div>
  );
}
