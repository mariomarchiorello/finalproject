import baseUrl from "../../helpers/baseUrl";

export const getAllUserSamples = (history) => {
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
        if (data.results) {
          allMySamples = data.results;
        }
        const actionAll={
            type: "ALL_MY_SAMPLES",
            payload: allMySamples,
        };
        dispatch(actionAll);

      });
  };
};
