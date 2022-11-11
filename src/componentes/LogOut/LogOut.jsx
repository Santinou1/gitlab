import { CV } from '../../cv/cv'

export default function LogOut() {

    const sessionId = "sessionId"

    CV.call("logout",
    {
        sessionId:localStorage.removeItem(sessionId)
    },
        (result) => {
            if(result["success"]){
                console.log("salido")
                //handleLogout()

            }else{
                alert("failed to fetch result"+result["errorMessage"])
            }
        }
    )
}
