export const signInAction = (credentials, history) => {
    return (dispatch) => {
      //const url = "https://localhost:8000.propulsion-learn.ch/backend/api/auth/registration/";

      const url = "https://goes-app.propulsion-home.ch/backend/api/auth/token/";
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
          if(data.access || localStorage.getItem('token')){
        const user = {
          token: data.access,
          userInfo: data.user
          
        }    
        const action = {
          type: "SIGNIN",
          payload: user,
        };
        dispatch(action);
        if(data.access)localStorage.setItem("token", data.access);
        localStorage.setItem("user", data.user.first_name);
        history.push('/')
        }else {
            alert('something went wrong please enter the correct information or create an account ')
        }
      });
    }
}
