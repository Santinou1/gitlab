import React, { useEffect, useState } from 'react'

import DeleteIcon from '@mui/icons-material/Delete';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import CrearPerfil from '../../componentes/Crearperfil/CrearPerfil.jsx'
import Nav from '../../componentes/Nav/Nav.jsx'

import { CV } from "../../cv/cv.js"
import "./Account.scss"


const Account = () => {

    //Es utilizada para obtener el valor del localStore
    const sessionId = "sessionId"
    
    //Son las variables en donde se almacenan los valores retonados
    const [subscriber,setSubscriber] = useState([]);
    const [profiles,setProfiles] = useState([]);
    
    //Es utilizada para abrir o cerrar el modal
    const [isOpen, setIsOpen] = useState(false)

    let Start = true;

    function getClientConfig(){
        CV.call(
            "getClientConfig",
            {
                sessionId:localStorage.getItem(sessionId)
            },
            (result) => {
                if(result["success"]){
                    const data = result['answer']
                    console.log(data)
                    setSubscriber(data?.subscriber)
                    setProfiles(data?.profiles)
                }else{
                    alert("failed to fetch result"+result["errorMessage"])
                }
            }
        )
    }

    function Eliminar(id){
        CV.call(
            "deleteProfile",
            {
                sessionId:localStorage.getItem(sessionId),
                profileId:id
            },
            (result) => {
                if (result["success"]) {
                    alert("Has eliminado correctamente el perfil ")
                } else {
                    alert("failed to fetch result" + result["errorMessage"])
                }
            }
        )
    }

    useEffect(()=>{
        if(Start){
            getClientConfig();
            // eslint-disable-next-line react-hooks/exhaustive-deps
            Start = false;
        }
    },[])
    
    return (
        <>
        <Nav/>
        <div className='fondo'>
            <div  className='General' >
                <div>
                    <div className='tittle'>
                        <span> CUENTA </span>
                    </div>
                    <div className='account'>  
                        <div className='personal'>
                            <span>Nombre: {subscriber.firstName} {subscriber.lastName}</span>
                            <span>Email {/*{subscriber.firstName}*/}</span>
                            <span>Clave {/*{subscriber.firstName}*/}</span>
                            <span>Telefono {/*{subscriber.firstName}*/}</span>
                            <span>Monedero: {subscriber.purse}</span>
                        </div>
                        <div className='option'>
                            <span>Modificar  Nombre</span>
                            <span>Modificar Email</span>
                            <span>Cambiar Clave</span>
                            <span>Modificar Numero de Telefono</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='tittle'>
                        <span> PERFILES </span>
                    </div>
                    <div className='profiles'>
                        {profiles.map(profile=>(
                            <div key={profile.id} className='profile'>
                                {profile.imageId? 
                                <img
                                className='picture' 
                                src={`https://cv01.panaccess.com/cv_data_pub/images/${profile.imageId}/v/thumb.png`}
                                alt={profile.id}
                            /> : <img
                            className='picture' 
                            src={``}
                            alt={profile.id}
                        />}
                                <p className='nombre'>{profile.name}
                                <DeleteIcon className='eliminar' onClick={() => Eliminar(profile.id) } /></p>
                            </div>
                        ))}
                        <div className='moreorless'>
                            <PersonAddIcon onClick={() => setIsOpen(true)} />
                            {isOpen && <CrearPerfil setIsOpen={setIsOpen} />}
                        </div>
                    </div>
                </div>
                <div>
                    <div className='tittle'>
                        <span> CONTROL PATERNAL </span>
                    </div>
                    <div className='parentalcontrol'>
                        <span>Para controlar qué contenido pueden ver los menores de edad crea un Perfil Infantil y elige calificaciones apropiadas para películas y series de TV. </span>
                        <input type="checkbox"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Account