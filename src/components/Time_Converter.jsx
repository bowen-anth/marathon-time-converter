import React, { useState } from "react"

export default function Time_Converter() {
    const [userInput, setUserInput] = useState({
        goalKm: "",
        goalMiles: "",
        goalHours: "",
        goalMinutes: "",
        km: "",
        miles: "",
        hours: "",
        minutes: "",
        seconds: ""
    })
console.log(userInput)
    let totalSeconds

    //numbers going from input to state
    function handleChange(event) {
        console.log(event)
        const {name, value, type, checked} = event.target
        setUserInput(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : Number(value)
            }
        })
    }
    //converting time to total seconds
    const timeInSeconds = () => {
        totalSeconds = (userInput.hours * 3600) + (userInput.minutes * 60) + userInput.seconds
        return totalSeconds
    }

    console.log(timeInSeconds())
    //time in min/mi
    const calcTimePerMile = () => {
        const minutes = Math.floor((totalSeconds / 60 ) / userInput.miles)
        const seconds = Math.round(((totalSeconds / 60 ) / userInput.miles - minutes) * 60)
        const timePerMile = `${minutes}:${seconds} / mile`
        return timePerMile
    }

        //time in min/km
        const calcTimePerKm = () => {
            const minutes = Math.floor((totalSeconds / 60 ) / userInput.km)
            const seconds = Math.round(((totalSeconds / 60 ) / userInput.km - minutes) * 60)
            const timePerKm = `${minutes}:${seconds} / Km`
            return timePerKm
        }

    const calcTimePerMileForGoal = () => {
        const goalTimeCompare = userInput.goalHours*3600 + userInput.goalMinutes*60 - totalSeconds
        const minutes = Math.floor((goalTimeCompare / 60 ) / userInput.miles)
        const seconds = Math.round(((goalTimeCompare / 60 ) / userInput.miles - minutes) * 60)
        const timePerMileForGoal = `${minutes}:${seconds} / mile`
        return timePerMileForGoal
    }
console.log(calcTimePerMileForGoal())
    return (
        <>
            <main className="main">
                <h1>Goal Times</h1>
                <div className="goal-container">
                        {/* KM */}
                        <label htmlFor="goalKm">Km</label>
                        <input type="number" 
                        id="goalKm" 
                        className="input-class"
                        name="goalKm"
                        value={userInput.goalKm}
                        onChange={handleChange}
                        />
                        {/* Miles */}
                        <label htmlFor="goalMiles">Miles</label>
                        <input type="number" 
                        id="goalMiles" 
                        className="input-class"
                        name="goalMiles"
                        value={userInput.goalMiles}
                        onChange={handleChange}
                        />
                        {/* Hours */}
                        <label htmlFor="goalHours">Hours</label>
                        <input type="number" 
                        id="goalHours" 
                        className="input-class"
                        name="goalHours"
                        value={userInput.goalHours}
                        onChange={handleChange}
                        />
                        {/* Minutes */}
                        <label htmlFor="goalMinutes">Minutes</label>
                        <input type="number" 
                        id="goalMinutes" 
                        className="input-class"
                        name="goalMinutes"
                        value={userInput.goalMinutes}
                        onChange={handleChange}
                        />
                </div>
                <h1>Actual Times</h1>
                    <div className="user-input-container">
                        {/* KM */}
                        <label htmlFor="km">Km</label>
                        <input type="number" 
                        id="km" 
                        className="input-class"
                        name="km"
                        value={userInput.km}
                        onChange={handleChange}
                        />
                        {/* Miles */}
                        <label htmlFor="miles">Miles</label>
                        <input type="number" 
                        id="miles" 
                        className="input-class"
                        name="miles"
                        value={userInput.miles}
                        onChange={handleChange}
                        />
                        {/* Hours */}
                        <label htmlFor="hours">Hours</label>
                        <input type="number" 
                        id="hours" 
                        className="input-class"
                        name="hours"
                        value={userInput.hours}
                        onChange={handleChange}
                        />
                        {/* Minutes */}
                        <label htmlFor="minutes">Minutes</label>
                        <input type="number" 
                        id="minutes" 
                        className="input-class"
                        name="minutes"
                        value={userInput.minutes}
                        onChange={handleChange}
                        />
                        {/* Seconds */}
                        <label htmlFor="seconds">Seconds</label>
                        <input type="number" 
                        id="seconds" 
                        className="input-class"
                        name="seconds"
                        value={userInput.seconds}
                        onChange={handleChange}
                        >
                        </input>
                </div>
                <div className="time-per-distance-container">
                            <span>Pace: {calcTimePerMile()} || {calcTimePerKm()}</span>
                            <span>Goal Pace: {calcTimePerMileForGoal()} || {calcTimePerKm()}</span>
                        </div>
            </main>
        </>
    )
}