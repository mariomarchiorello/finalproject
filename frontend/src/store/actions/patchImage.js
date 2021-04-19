import baseUrl from "../../helpers/baseUrl";

export const patchImageAction = (zoo, phyto, image, id) => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const formData = new FormData()
    formData.append('zooplankton', zoo)
    formData.append('phytoplankton', phyto)
    formData.append('annotated_image', image)
    const config = {
      method: "PATCH",
      body: formData,
      headers: new Headers({
        'Authorization': `Bearer ${token}`,
      }),
    };
    // const url = `${baseUrl}images/${id}/`;
    const url = `${baseUrl}images/${id}/`;
    fetch(url, config)
      .then(res => res.json())
      .then(data => {
        if (data) {
          console.log('DDDDDAAAAAAAAAATTTTAAAAA', data)
          const annotated_image = data.annotated_image
          console.log("IMAGEEE", annotated_image)
        }
        const action = {
          type: "PATCH_IMAGE",
          payload: data,
        };
        dispatch(action);
      });
  };
};