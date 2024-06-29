import React, { useState, useEffect } from 'react';

const DateDiffrent = ({ onAvailble }) => {
    const [timeDifference, setTimeDifference] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const updateOnAvailbleDisplay = () => {
        const currentDate = new Date();
        const onAvailbleDate = new Date(onAvailble);
        const differenceInSeconds = Math.floor((onAvailbleDate - currentDate) / 1000);

        if (differenceInSeconds < 0) {
            // Handle negative time difference if needed
            // For example, set a flag or display a message
            console.log("Booking has expired");
            return;
        }

        const days = Math.floor(differenceInSeconds / (3600 * 24));
        const hours = Math.floor((differenceInSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((differenceInSeconds % 3600) / 60);
        const seconds = Math.floor(differenceInSeconds % 60);

        setTimeDifference({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        });
    };

    useEffect(() => {
        // Update the display every second
        const intervalId = setInterval(updateOnAvailbleDisplay, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            {timeDifference.days > 0 || timeDifference.hours > 0 || timeDifference.minutes > 0 || timeDifference.seconds > 0 && (
                <>
                    <p>Booked Slot</p>
                    <p>
                        {`${timeDifference.days} Day${timeDifference.days !== 1 ? 's' : ''} 
                          ${timeDifference.hours} Hour${timeDifference.hours !== 1 ? 's' : ''} 
                          ${timeDifference.minutes} Minute${timeDifference.minutes !== 1 ? 's' : ''} 
                          ${timeDifference.seconds} Second${timeDifference.seconds !== 1 ? 's' : ''}`}
                    </p>
                </>
            ) }
        </>
    );
};

export default DateDiffrent;
