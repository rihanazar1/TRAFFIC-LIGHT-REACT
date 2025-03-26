import React, { useState , useEffect} from 'react'

const TrafficLight = () => {
    const [red, setRed] = useState(true)
    const [yellow, setYellow] = useState(false)
    const [green, setGreen] = useState(false)

    useEffect(() => {
        const lightcolors = setInterval(()=>{
            if(red && !yellow && !green){
                setGreen(true)
                setRed(false)
            }

            else if(green && !red && !yellow){
                setYellow(true)
                setGreen(false)
            }

            else if (yellow && !green && !red){
                setRed(true)
                setYellow(false)
            }
        }, 2000)

        return ()=>{
            clearInterval(lightcolors)
        }


    }, [red, yellow, green])
    
  return (
    <div className='outter-box'>
        <div className='container'>
            <p className='circle' style={{backgroundColor: `${red ? "red" : "#a1a0a0"}`}}></p>
            <p className='circle' style={{backgroundColor: `${yellow ? "yellow" : "#a1a0a0"}`}}></p>
            <p className='circle' style={{backgroundColor: `${green ? "green" : "#a1a0a0"}`}}></p>
        </div>
    </div>
  )
}

export default TrafficLight