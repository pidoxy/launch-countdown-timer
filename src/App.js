import './App.css';
import { useEffect, useRef, useState } from 'react';


function App() {

  const [timerDays, setTimerDays] = useState('');
  const [timerHours, setTimerHours] = useState('');
  const [timerMinutes, setTimerMinutes] = useState('');
  const [timerSeconds, setTimerSeconds] = useState('');

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date('April 19, 2021 11:56:60 ');

    interval = setInterval(() => {
      const now = new Date();
      const distance = countDownDate - now;

      const days = Math.floor((distance / (1000 * 60 * 60 * 24)));
      const hours = Math.floor((distance / (1000 * 60 * 60) % 24));
      const minutes = Math.floor((distance / (1000 * 60) % 60));
      const seconds = Math.floor((distance / (1000) % 60));


      if (distance < 0) {
        // stop timer
        clearInterval(interval);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);

      }
    });
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="App">
      <div className="pattern-hills">
        <h3 className="container d-flex m-auto justify-content-center mb-5 pt-5">WE'RE LAUNCHING SOON</h3>

        <div className="container px-4">

          <div className="container  overflow-hidden">
            <div className="row gx-3 time-div">
              <div className="days text-center col-3">
                <span className="top"></span>
                <span className="top-back"></span>
                <span></span>

                <div className="py-md-5 py-3">{timerDays}</div>

                <span className="bottom"></span>
                <span className="bottom-back"></span>
                <span></span>
              </div>
              <div className="minutes text-center col-3">
                <span className="top"></span>
                <span className="top-back"></span>
                <span></span>

                <div className="py-md-5 py-3">{timerHours}</div>

                <span className="bottom"></span>
                <span className="bottom-back"></span>
                <span></span>
              </div>
              <div className="hours text-center col-3">
                <span className="top"></span>
                <span className="top-back"></span>
                <span></span>

                <div className="py-md-5 py-3">{timerMinutes}</div>

                <span className="bottom"></span>
                <span className="bottom-back"></span>
                <span></span>
              </div>
              <div className="seconds text-center col-3">
                <span className="top"></span>
                <span className="top-back"></span>
                <span></span>

                <div className="py-md-5 py-3">{timerSeconds}</div>

                <span className="bottom"></span>
                <span className="bottom-back"></span>
                <span></span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
