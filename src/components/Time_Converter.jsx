import React, { useState } from "react"

export default function Time_Converter() {
    const [time, setTime] = useState({
        km: "",
        miles: "",
        hours: "",
        minutes: "",
        seconds: ""
    })

  
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
        const timePerMile = `${minutes}:${seconds} / mile`
        return timePerMile
    }

        //time in min/km
        const calcTimePerKm = () => {
            const minutes = Math.floor((totalSeconds / 60 ) / time.km)
            const seconds = Math.round(((totalSeconds / 60 ) / time.km - minutes) * 60)
            const timePerKm = `${minutes}:${seconds} / Km`
            return timePerKm
        }

    const calcTimePerMileForRecord = () => {
        const recordTimeCompare = 7200 - totalSeconds
        const minutes = Math.floor((recordTimeCompare / 60 ) / time.miles)
        const seconds = Math.round(((recordTimeCompare / 60 ) / time.miles - minutes) * 60)
        const timePerMileForRecord = `${minutes}:${seconds} / mile`
        return timePerMileForRecord
    }
console.log(calcTimePerMileForRecord())
    return (
        <>
            <main className="main">
                <h1>Goal Times</h1>
                <div className="goal-container">
                        {/* KM */}
                        <label htmlFor="goal-km">Km</label>
                        <input type="number" 
                        id="goal-km" 
                        className="input-class"
                        name="goal-km"
                        value={time.goalKm}
                        onChange={handleChange}
                        />
                        {/* Miles */}
                        <label htmlFor="goal-miles">Miles</label>
                        <input type="number" 
                        id="goal-miles" 
                        className="input-class"
                        name="goal-miles"
                        value={time.goalMiles}
                        onChange={handleChange}
                        />
                        {/* Hours */}
                        <label htmlFor="goal-hours">Hours</label>
                        <input type="number" 
                        id="hours" 
                        className="input-class"
                        name="hours"
                        value={time.goal-hours}
                        onChange={handleChange}
                        />
                        {/* Minutes */}
                        <label htmlFor="goal-minutes">Minutes</label>
                        <input type="number" 
                        id="goal-minutes" 
                        className="input-class"
                        name="goal-minutes"
                        value={time.goal-minutes}
                        onChange={handleChange}
                        />
                </div>
                <h1>Actual Times</h1>
                    <div className="user-input-container">
                        {/* KM */}
                        <label htmlFor="miles">Km</label>
                        <input type="number" 
                        id="km" 
                        className="input-class"
                        name="km"
                        value={time.km}
                        onChange={handleChange}
                        />
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
                </div>
                <div className="time-per-distance-container">
                            <span>Pace: {calcTimePerMile()} || {calcTimePerKm()}</span>
                            <span>Goal Pace: {calcTimePerMileForRecord()} || {calcTimePerKm()}</span>
                        </div>
            </main>
        </>
    )
}