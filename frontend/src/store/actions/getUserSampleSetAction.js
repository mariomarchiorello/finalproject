import baseUrl from '../../helpers/baseUrl'

export const getUserSampleAction = (history) =>{
    return (dispatch) =>{
        const token = localStorage.getItem("token");
        const config = {
            method: "GET",
            headers: new Headers ({
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            })
        }
        const url = `${baseUrl}samples/my-samples/`;
        fetch(url,config)
            .then(res =>res.json())
            .then(data =>{
                console.log("sample sets from logged in User:", data)
            })
    }
}