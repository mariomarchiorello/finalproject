import baseUrl from "../../helpers/baseUrl";

export const patchSampleSet = (history) => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem('sample_id')

     let formData = new FormData();

        formData.append('is_completed',String(true))
    const config = {
      method: "PATCH",
        body: formData,
      headers: new Headers({
        "Authorization": `Bearer ${token}`,
        // "Content-Type": "application/json",
      }),
    };
    const url = `${baseUrl}samples/${id}/`;
    fetch(url, config)
      .then((res) => res.json())
      .then(data => {
          console.log(" From inside the patch",data)
        // const action = {
        //   type: "PATCH_SAMPLESET",
        //   payload: data,
        // };
        // dispatch(action);
        history.push("/map");

      });
  };
};
