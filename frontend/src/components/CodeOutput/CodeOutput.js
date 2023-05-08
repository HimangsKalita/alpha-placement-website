import React from "react";
import { getOutput } from "../../utils/codeOutput.utils";

const CodeOutput = ({ output, toggled, status }) => {
  return (
    <div
      className={`d-flex flex-column overflow-hidden bg-light p-4 h-64 w-50 w-md-100 ${
        toggled ? "h-md-100" : "h-md-66"
      }`}
    >
      <label className="d-flex fs-5 border-bottom border-secondary pb-4 text-gray-600">
        Output:{" "}
        {status && (
          <span
            className={`ms-2 d-block w-28 fw-bold fs-base text-center rounded-pill text-white ps-1 ${
              status === "Running" ? "bg-primary" : "bg-success"
            }`}
          >
            {status}
          </span>
        )}
      </label>
      <div className="w-100 h-100 d-flex flex-column p-2 overflow-auto">
        {output ? <>{getOutput(output)}</> : null}
      </div>
    </div>
  );
};

export default CodeOutput;
