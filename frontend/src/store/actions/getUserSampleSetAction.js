
export const getUserSampleAction = (history) => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("sample_id");
      console.log("get userSample find id ",id)
    const config = {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }),
    };
    const url = `http://localhost:8000/backend/api/samples/${id}/`;
    fetch(url, config)
      .then((res) => res.json())
      .then((data) => {
        let lastSampleSet ={};
        if (data.results) {
          lastSampleSet = data.results;
        }
        const action = {

          type: "GET_LAST_SAMPLE",
          payload: lastSampleSet,
        };
        console.log("IN DA GET LAST SAMPLE FETCH:", lastSampleSet)
        dispatch(action);
      });
  };
};
