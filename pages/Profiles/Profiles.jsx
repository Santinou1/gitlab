/* eslint-disable no-sequences */
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

import DeleteIcon from '@mui/icons-material/Delete';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import lgblanco  from '../../Media/Img/logoNB.png'

import CrearPerfil from '../../componentes/Crearperfil/CrearPerfil.jsx'
import { CV } from '../../cv/cv.js';
import "./Profiles.scss"

const Profiles = () => {

    //Es utilizada para obtener el valor del localStore
    const sessionId = "sessionId"

    //Son las variables en donde se almacenan los valores retonados
    const [profiles, setProfiles] = useState([]);

    const [licenses, setLicenses] = useState([])

    //Es utilizada para abrir o cerrar el modal
    const [isOpen, setIsOpen] = useState(false)

    var Start = true;
    var Status = true;

    function Profile() {
        CV.call(
            "getClientConfig",
            {
                sessionId: localStorage.getItem(sessionId)
            },
            (result) => {
                if (result["success"]) {
                    const data = result['answer']
                    console.log(data)
                    setProfiles(data?.profiles)
                } else {
                    alert("failed to fetch result" + result["errorMessage"])
                }
            }
        )
    }

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

    function GetAvailableStreams(){
        CV.call(
            "getAvailableStreams",
            {
                sessionId:localStorage.getItem(sessionId),
            },
            (result) => {
                if(result["success"]){
                    const data = result['answer']
                    console.log(data)
                }else{
                    alert("failed to fetch result"+result["errorMessage"])
                }
            }
        )
    }

    function SetStreamingLicense (lince,pin){
        CV.call(
            "setStreamingLicense",
            {
                sessionId:localStorage.getItem(sessionId),
                licenseKey:lince,
                pin:pin,
                failIfInUse:true
            },
            (result) => {
                if(result["success"]){
                    const data = result['answer']
                    console.log(lince)
                    console.log(data)
                    GetAvailableStreams()
                }else{
                    console.log(lince)
                    console.log("data")
                    alert("failed to fetch result "+result["errorMessage"])
                }
            }
        )
    }


    // function ActivateProfile(idProfile,pin){
    //     CV.call(
    //         "setActiveProfile",
    //         {
    //             sessionId: localStorage.getItem(sessionId),
    //             profileId: idProfile,
    //             activate: true,
    //             deviceName: "-",
    //             pin: pin,
    //             failIfInUse: false,
    //         },
    //         (result) => {
    //             if (result["success"]) {
    //                 const data = result['answer']
    //                 console.log(data)
    //                 GetAvailableStreams()
    //             } else {
    //                 console.log(idProfile)
    //                 alert("failed to fetch result " + result["errorMessage"])
    //             }
    //         }
    //     )
    // }


    useEffect(()=>{
        if(Start){
            Profile();
            GetStreamingLicenses ();
            // eslint-disable-next-line react-hooks/exhaustive-deps
            Start = false;
        }
    },[])

    function Eliminar(id) {
        CV.call(
            "deleteProfile",
            {
                sessionId: localStorage.getItem(sessionId),
                profileId: id
            },
            (result) => {
                if (result["success"]) {
                    alert("Has eliminado correctamente el perfil ")
                    window.location.reload()
                } else {
                    alert("failed to fetch result" + result["errorMessage"])
                }
            }
        )
    }


    return (
        <div className='gProfile'>
            <img className='logo' src={lgblanco} alt="logo" />
            <div className='profiles'>
                {profiles.map(profile => (
                        <div className='profile' key={profile.id}>
                            <p className='name'>{profile.name} <DeleteIcon className='eliminar' onClick={() => Eliminar(profile.id)}/> </p>
                            {profile.imageId ?
                            <Link to={"/account"}>
                                <img 
                                    className='picture'
                                    src={`https://cv01.panaccess.com/cv_data_pub/images/${profile.imageId}/v/thumb.png`}
                                    alt={profile.id}
                                    onClick={(e) => SetStreamingLicense(profile.sn,profile.pin)}
                                />
                                </Link> : <img
                                    className='picture'
                                    src={``}
                                    alt={profile.id}
                                />}
                        </div>
                ))}
                <div className='moreorless'>
                    <PersonAddIcon className='more' onClick={() => setIsOpen(true)} />
                    {isOpen && <CrearPerfil setIsOpen={setIsOpen} />}
                </div>
            </div>
        </div>
    )
}

export default Profiles