import React, { useState } from "react"

export default function Time_Converter() {
    const [time, setTime] = useState({
        miles: "",
        hours: "",
        minutes: "",
        seconds: ""
    })

    let calcTime
    let totalSeconds

    console.log(time)

    //numbers going from input to state
    function handleChange(event) {
        console.log(event)
        const {name, value, type, checked} = event.target
        setTime(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : Number(value)
            }
        })
    }
    //converting time to total seconds
    const timeInSeconds = () => {
        totalSeconds = (time.hours * 3600) + (time.minutes * 60) + time.seconds
        return totalSeconds
    }

    console.log(timeInSeconds())
    //time in min/mi
    const calcTimePerMile = () => {
        const minutes = Math.floor((totalSeconds / 60 ) / time.miles)
        const seconds = Math.round(((totalSeconds / 60 ) / time.miles - minutes) * 60)
        const timePerMile = `${minutes} min / ${seconds} sec`
        return timePerMile
    }

    const calcTimePerMileForRecord = () => {

    }

    return (
        <>
            <main className="main">
                <h1>hi</h1>
                    <div className="user-input-container">
                        {/* Miles */}
                        <label htmlFor="miles">Miles</label>
                        <input type="number" 
                        id="miles" 
                        className="input-class"
                        name="miles"
                        value={time.miles}
                        onChange={handleChange}
                        />
                        {/* Hours */}
                        <label htmlFor="hours">Hours</label>
                        <input type="number" 
                        id="hours" 
                        className="input-class"
                        name="hours"
                        value={time.hours}
                        onChange={handleChange}
                        />
                        {/* Minutes */}
                        <label htmlFor="minutes">Minutes</label>
                        <input type="number" 
                        id="minutes" 
                        className="input-class"
                        name="minutes"
                        value={time.minutes}
                        onChange={handleChange}
                        />
                        {/* Seconds */}
                        <label htmlFor="seconds">Seconds</label>
                        <input type="number" 
                        id="seconds" 
                        className="input-class"
                        name="seconds"
                        value={time.seconds}
                        onChange={handleChange}
                        >
                        </input>
                        <div>{calcTimePerMile()}</div>
                </div>
            </main>
        </>
    )
}