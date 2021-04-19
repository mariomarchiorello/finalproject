import baseUrl from "../../helpers/baseUrl";

export const patchImageAction = (zoo, phyto, image, id) => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    console.log('BEFORE FORM', zoo, phyto, image, id)
    const formData = new FormData()
    formData.append('zooplankton', zoo)
    formData.append('phytoplankton', phyto)
    formData.append('annotated_image', image)
    console.log(formData)
    const config = {
      method: "PATCH",
      body: formData,
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data; boundary=--",
      }),
    };
    const url = `${baseUrl}images/${id}/`;
    fetch(url, config)
      .then(res => res.json())
      .then(data => {
        if (data) {
          console.log('DDDDDAAAAAAAAAATTTTAAAAA', data)
        }
        const action = {
          type: "PATCH_IMAGE",
          payload: data,
        };
        dispatch(action);
      });
  };
};