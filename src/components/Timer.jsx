import React, { useEffect } from 'react'

const Timer = ({ dispatch, secondsRemaining }) => {
    const mins = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;
  
    useEffect(
      function () {
        const timer = setInterval(function () {
          dispatch({ type: "tick" });
        }, 1000);
  
        window.onbeforeunload = function () {
          return "Are you sure you want to leave the Quiz?";
        };
  
        return () => {
          clearInterval(timer);
          window.onbeforeunload = null;
        };
      },
      [dispatch]
    );
  
    return (
      <div className='text-xl font-semibold bg-green-300 p-[10px] rounded-lg'>
        {mins < 10 && "0"}
        {mins}:{seconds < 10 && "0"}
        {seconds}
      </div>
    );
}

export default Timer