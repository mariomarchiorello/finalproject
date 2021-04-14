export const signInAction = (credentials, history) => {
    return (dispatch,getState) => {
      //const url = 'http://localhost:8000/backend/api/auth/token/';

      const url = 'https://goes-app.propulsion-learn.ch/backend/api/auth/token/';
      const config = {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    };
    fetch(url, config)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log("inside the fetch", data)
          if(data.access || localStorage.getItem('token')){
        const user = {
          token: data.access
        }
        console.log("in da fetch", data)
        const action = {
          type: "USER_SIGNIN",
          payload: data.access,
        };

        dispatch(action);
        if(data.access)localStorage.setItem("token", data.access);
        history.push('/map')
        }else {
            alert('something went wrong please enter the correct information or create an account ')
        }
      });
    }
}
