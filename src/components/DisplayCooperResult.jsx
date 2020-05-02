import React from "react";

import cooperCalculator from "../modules/cooperCalculator";
import { saveData } from "../modules/performanceData";





const DisplayCooperResult = ({ 
                              distance,
                              gender,
                              age,
                              authenticated,
                              entrySaved,
                              entryHandler
                            }) => {
  
  const result = cooperCalculator(distance, gender, age);

  const propsPassed = distance && age ? true : false;

  if (propsPassed === false) {
    return (
      <>
        {propsPassed && (
          <>
            <p id="cooper-message">
              {age} y/o {gender} running {distance} meters.
            </p>
            <p id="cooper-result">Result: {result}</p>
            {authenticated && !entrySaved ? (
              <button
              id="save-result"
              onClick={() => saveData(result, entryHandler)}
              >
                Save entry
              </button>
            ) : (
              <p id="response-message">Your entry was saved</p>
              )}
          </>
        )}
      </>
    );
  }
  else {
    return (
      <div>
        <p id="cooper-message">{age} y/o {gender} running {distance} meters.</p>
        <p id="cooper-result">Invalid range of distance for this age and gender.</p>
      </div>
    )
  }
};

export default DisplayCooperResult;