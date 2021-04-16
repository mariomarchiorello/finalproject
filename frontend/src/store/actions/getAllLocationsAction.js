import baseUrl from "../../helpers/baseUrl";

export const getAllLocationsAction = (history) => {
    return (dispatch) => {
        const token = localStorage.getItem('token');
        const config = {
            method: "GET",
            headers: new Headers ({
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            })
        }

        const url = `${baseUrl}samples/all-samples`;
        fetch(url, config)
            .then(res => res.json())
            .then(data => {
                console.log("IN DA FETCH",typeof(data.results))
                const action = {
                    type: 'GET_ALL_LOCATIONS',
                    payload: data.results
                }
                dispatch(action);
            })
    }
}
