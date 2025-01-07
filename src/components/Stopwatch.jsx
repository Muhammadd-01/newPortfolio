import React from 'react';
import { useStopwatch } from '../hooks/useStopwatch';
import { formatTime } from '../utils/formatTime';

const Stopwatch = ({ initialTime = 0 }) => {
  const { time, isRunning, start, pause, reset } = useStopwatch(initialTime);

  return (
    <div>
      <div>{formatTime(time)}</div>
      <button onClick={isRunning ? pause : start}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Stopwatch;

