import React from "react";
import { Button } from 'semantic-ui-react'

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
  
  const propsPassed = distance && age && gender ? true : false;

  const result = cooperCalculator(distance, gender, age)

  return (
    <>
      {propsPassed && (
        <>
          <p id="cooper-message">
          {age} y/o {gender} running {distance} meters.
          </p>
          <p id="cooper-result">Result: {result}</p>
          {authenticated ? (
            <>
            { entrySaved ? (
              <p id="response-message">Your entry was saved</p>
              ) : (
                <Button color={'green'} id="save-entry" onClick={() => saveData(result, entryHandler)}>
                  Save entry
                </Button>
              )}
            </>
            ) : (
              <p id="login-request">Login to save your data</p>
            ) 
          }
        </>
      )}
    </> 
  )
}


export default DisplayCooperResult;