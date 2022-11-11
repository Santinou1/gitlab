import React from "react";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";


import Img from "./Imagenes";

import { CV } from "../../cv/cv";
import "./CrearPerfil.scss"

// Caracteres permitidos
const USER_REGEX = /^[A-z0-9-_]{3,10}$/;
const EDAD_REGEX = /^[1-9]{1,2}$/;

var log = true

const CrearPerfil = ({ setIsOpen }) => {

    const userRef = useRef();
    const errRef = useRef();

    //Es utilizada para obtener el valor del localStore
    const sessionId = "sessionId"
    var lis = "liss"

    //Parametros de los usuarios 
    const [name, setName] = useState("")
    const [validName, setValidName] = useState(false)
    const [nameFocus, setNameFocus] = useState(false)

    const [edad, setEdad] = useState("")
    const [validEdad, setValidEdad] = useState(false)

    const [id, setId] = useState({})

    //Mensaje de Error o Exito
    const [errMsg, setErrMsg] = useState('')

    //Manejo de Licencias
    const [licenses, setLicenses] = useState([])

    //Manejo de Licencias
    const [profiles,setProfiles] = useState([]);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    //Validador de Usuario
    useEffect(() => {
        const result = USER_REGEX.test(name)
        // console.log(result)
        // console.log(name)
        setValidName(result)
    }, [name])

    //Validador de Edad
    useEffect(() => {
        const result = EDAD_REGEX.test(edad)
        // console.log(result)
        // console.log(edad)
        setValidEdad(result)
    }, [edad])

    useEffect(() => {
        setErrMsg("")
    }, [name, edad])

    function getClientConfig(){
        CV.call(
            "getClientConfig",
            {
                sessionId:localStorage.getItem(sessionId)
            },
            (result) => {
                if(result["success"]){
                    const data = result['answer']
                    setProfiles(data?.profiles)
                    console.log(data?.profiles.length)
                }else{
                    alert("failed to fetch result"+result["errorMessage"])
                }
            }
        )
    }


    // eslint-disable-next-line react-hooks/exhaustive-deps
    function Licenses (){
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
                    for( let i = 0; i < data[i]?.key; i++){
                        console.log(data[i].key)
                        localStorage.setItem(lis+[i],data[i].key)
                    }
                    setLicenses(data)
                }else{
                    alert("failed to fetch result"+result["errorMessage"])
                }
            }
        )
    }


    useEffect(()=>{
        if (log){
            Licenses();
            getClientConfig();
            log = false
        }
    },[Licenses])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const v1 = USER_REGEX.test(name)
        const v2 = EDAD_REGEX.test(edad)
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }

        var profile = profiles.length
        if(profile){ profile=profiles.length }else{profile=0}

        if( licenses.length === profile ){
            alert("no puedes crear mas perfiles, por favor comunicate con tu operador de cable")
        }else{
            for(var i = 0;i < licenses.length; i++){
                var op = localStorage.getItem(lis+[i])
                if(profile === 0){
                    CV.call(
                        "createProfile",
                        {
                            sessionId: localStorage.getItem(sessionId),
                            name: name,
                            maxAge: edad,
                            imageId: id,
                            dailyWatchTimeM: 0,
                            assignNewLicense: false,
                            license: op
                        },
                        (result) => {
                            if (result["success"]) {
                                alert("Felicidades se a creado el usuario  " +name)
                                window.location.reload()
                            } else {
                                alert("failed to fetch result" + result["errorMessage"])
                            }
                        }
                    )
                    break
                    }else{
                    for(var g = 0;g < licenses.length; g++){
                        if( op === profiles[g]?.sn ){
                            localStorage.removeItem(lis+[i])
                        } else{
                            CV.call(
                                "createProfile",
                                {
                                    sessionId: localStorage.getItem(sessionId),
                                    name: name,
                                    maxAge: edad,
                                    imageId: id,
                                    dailyWatchTimeM: 0,
                                    assignNewLicense: false,
                                    license: op
                                },
                                (result) => {
                                    if (result["success"]) {
                                        alert("Felicidades se ha creado el usuario  " +name)
                                        window.location.reload()
                                    } else {
                                        alert("failed to fetch result" + result["errorMessage"])
                                    }
                                }
                            )
                        }
                        localStorage.removeItem(lis+[i])
                        break
                    }
                }
            }
        }
    }
        
        
        
        return (
        <>
            <section className="gperfil">
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1 className="titulocp"> Crear Perfil </h1>
                <form onSubmit={handleSubmit}>
                    <div className="content">
                        <div>
                            <label htmlFor="name" className="name">
                                Name:
                                <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                                <FontAwesomeIcon icon={faTimes} className={validName || !name ? "hide" : "invalid"} />
                            </label>
                            <input
                                type="text"
                                id="name"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                required
                                aria-invalid={validName ? "false" : "true"}
                                aria-describedby="uidnote"
                                onFocus={() => setNameFocus(true)}
                                onBlur={() => setNameFocus(false)}
                            />
                            <p id="uidnote" className={nameFocus && name && !validName ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faCheck} />
                                3 to 10 characters.<br />
                                Must begin with a letter.<br />
                                Letters, numbers, underscores, hyphens allowed.
                            </p>
                        </div>
                        <div>
                            <label htmlFor="edad" className="edad">
                                Edad:
                                <FontAwesomeIcon icon={faCheck} className={validEdad ? "valid" : "hide"} />
                                <FontAwesomeIcon icon={faTimes} className={validEdad || !edad ? "hide" : "invalid"} />
                            </label>
                            <input
                                type="text"
                                id="edad"
                                onChange={(e) => setEdad(e.target.value)}
                                value={edad}
                                required
                                aria-invalid={validEdad ? "false" : "true"}
                                aria-describedby="pwdnote"
                            />
                        </div>
                    </div>
                    <h5 className="heading"> Elegir una imagen </h5>
                    <div className="imagenes">
                        {Img.map(img => (
                            <input 
                                type="image" 
                                key={img.id} 
                                className="imagen"
                                src={img.img}
                                alt={img.id}
                                onClick={(e) => setId(e.target.alt) }
                                value={`https://cv01.panaccess.com/cv_data_pub/images/${img.id}/v/thumb.png`}
                                required
                                />
                                ))}
                    </div>
                    <div className="modalActions">
                    <input className="salirBtn" type="submit" value="salir" onClick={() => setIsOpen(false)}/>
                </div>
                </form>
            </section>
        </>
    );
};

export default CrearPerfil;