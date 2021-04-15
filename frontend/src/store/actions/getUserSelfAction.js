import baseUrl from "../../helpers/baseUrl";

export const getUserMeAction = (history) => {
    return (dispatch) => {
        const token = localStorage.getItem('token');
        const config = {
            method: "GET",
            headers: new Headers ({
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            })
        }
        
        const url = `${baseUrl}users/me/`;
        // const url = "https://goes-app.propulsion-learn.ch/backend/api/users/me/"
        fetch(url, config)
            .then(res => res.json())
            .then(data => {
                //console.log('data:', data);
                const action = {
                    type: 'GET_USER_ME',
                    payload: data
                }
                dispatch(action);
                localStorage.setItem("user", data.first_name);
                // history.push('/profile');
            })
    }
}
