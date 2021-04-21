import baseUrl from "../../helpers/baseUrl";

export const getUserSampleAction = (history) => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("sample_id");
    const config = {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }),
    };
    const url = `${baseUrl}samples/${id}/`;
    fetch(url, config)
      .then((res) => res.json())
      .then((data) => {
        const action = {
          type: "GET_LAST_SAMPLE",
          payload: data,
        };
        dispatch(action);
      });
  };
};
