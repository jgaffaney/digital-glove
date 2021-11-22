import { Interval, DateTime, Duration } from 'luxon';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


function RunningTimer() {

    //grab timestamp of open run
    
    // console.log('startTime: ', startTime);
        const currentRun = useSelector(store=>store.currentRun)
        const startTime = DateTime.fromISO(currentRun.start_timestamp);
        console.log('startTime: ', startTime);
        const endTime = DateTime.now();
        // const elapsedTime = DateTime.now().toISO() - startTime
        // console.log('elapsedTime: ', elapsedTime);
        // const interval = Interval.fromDateTimes(startTime, endTime).toISO().toLocaleString(DateTime.DATETIME_SHORT)

        // console.log('Interval: ', interval);
        console.log('elapsed: ', Interval.fromDateTimes({start:startTime, end:endTime}));

    // useEffect(() => {
        

    // }, [])


    return(
        <p>Timer</p>
    )
}

export default RunningTimer;