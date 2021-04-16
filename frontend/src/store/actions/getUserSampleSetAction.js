import baseUrl from "../../helpers/baseUrl";

export const getUserSampleAction = (history) => {
  console.log("sample action");
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
    console.log("sample action before fetch");
    fetch(url, config)
      .then((res) => res.json())
      .then((data) => {
        const last = data.results[data.results.length - 1];
        const action = {
          type: "GET_LAST_SAMPLE",
          payload: last,
        };
        dispatch(action);
      });
  };
};
