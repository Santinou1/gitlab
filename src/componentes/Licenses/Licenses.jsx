import React, { useEffect, useState } from 'react'
import { CV } from '../../cv/cv'

export default function Licenses() {

    const sessionId = "sessionId"
    const [licenses, setLicenses] = useState([])

    let Start = true;

    function GetStreamingLicenses (){
        CV.call(
            "getStreamingLicenses",
            {
                sessionId:localStorage.getItem(sessionId),
                withPins:true
            },
            (result) => {
                if(result["success"]){
                    const data = result['answer']
                    console.log(data)
                    setLicenses(data)

                }else{
                    alert("failed to fetch result"+result["errorMessage"])
                }
            }
        )
    }

    useEffect(()=>{
        if(Start){
            GetStreamingLicenses();
            // eslint-disable-next-line react-hooks/exhaustive-deps
            Start = false;
        }
    },[])

  return (
    <div>
        {licenses.map(license =>(
            <div key={license.pin} className="profiles">
                <span> Licencia: {license.key} </span>
            </div>
        ))}
    </div>
  )
}
