import { useEffect } from "react";
import "./Spinner.css";

const Spinner = ({ onerror }) => {
  console.log(onerror);

  useEffect(() => {}, [onerror?.error?.message]);
  return (
    <div className="SpinnerBackground">
      {onerror?.error ? (
        <p className="ErrorMessage">{onerror.error.message}</p>
      ) : (
        <div className="Spinner"></div>
      )}
    </div>
  );
};
export default Spinner;
