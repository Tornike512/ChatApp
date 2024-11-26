import { useEffect, useState } from "react";
import "./VoiceMessage.scss";

interface timerType {
  minutes: number;
  seconds: number;
}

export function VoiceMessage() {
  const [timer, setTimer] = useState<timerType>({ minutes: 0, seconds: 0 });
  const [seconds, setSeconds] = useState<string>("0");
  const [minutes, setMinutes] = useState<string>("0");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        let newSeconds = prev.seconds + 1;
        let newMinutes = prev.minutes;

        if (newSeconds === 60) {
          newSeconds = 0;
          newMinutes += 1;
        }

        if (newSeconds === 10) {
          setSeconds("");
        }

        if (newMinutes === 10) {
          setMinutes("");
        }

        return { seconds: newSeconds, minutes: newMinutes };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  console.log(timer);

  return (
    <div className="record-background">
      <p className="timer">
        {minutes}
        {timer.minutes}:{seconds}
        {timer.seconds}
      </p>
    </div>
  );
}

export default VoiceMessage;
