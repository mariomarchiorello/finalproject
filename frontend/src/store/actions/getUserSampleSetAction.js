import baseUrl from "../../helpers/baseUrl";

export const getUserSampleAction = (history) => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const config = {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }),
    };
    const url = `${baseUrl}samples/my-samples/`;
    fetch(url, config)
      .then((res) => res.json())
      .then((data) => {
        let allMySamples = {};
        let last = {};
        if (data.results) {
          last = data.results[data.results.length - 1];
          allMySamples = data.results;
          // console.log("----------- results from fetch", allMySamples);
        }
        const actionAll={
            type: "ALL_MY_SAMPLES",
            payload: allMySamples,
        };
                  // console.log("----------- results from achtionAll", actionAll);

        const action = {
          type: "GET_LAST_SAMPLE",
          payload: last,
        };
        dispatch(action);
        dispatch(actionAll);

      });
  };
};
