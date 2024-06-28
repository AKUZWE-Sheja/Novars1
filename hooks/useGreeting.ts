import { useState, useEffect } from 'react';

const useGreeting = () => {
    const [currentTime, setCurrentTime] = useState('');
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const updateCurrentTime = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const formattedHours = hours % 12 || 12;
            const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
            const currentTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
            setCurrentTime(currentTime);

            // Update greeting based on the time
            if (hours < 12) {
                setGreeting('Good Morning Smith,');
            } else if (hours >= 12 && hours < 16) {
                setGreeting('Good Afternoon Smith,');
            } else {
                setGreeting('Good Evening Smith,');
            }
        };

        updateCurrentTime();
        const intervalId = setInterval(updateCurrentTime, 60000); // Update every minute

        return () => clearInterval(intervalId);
    }, []);

    return { currentTime, greeting };
};

export default useGreeting;
