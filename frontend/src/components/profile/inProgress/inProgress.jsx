import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CompletedContainer } from "../completed/style";
import { getAllUserSamples } from "../../../store/actions/getAllMySamplesAction";

const NotCompleted = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUserSamples(history));
  });

  const allUserSamples = useSelector((state) => state.UserReducer.allMySamples);

  const continueAnnotating = (id) => {
    localStorage.setItem("sample_id", id);
    // history.push("/annotate-dusko");
  };

  return allUserSamples.map((element, index) => {
    if (!element.is_completed) {
      let totalZooCount = element.images.reduce(
        (currentVal, total) => currentVal + total.zooplankton,
        0
      );
      let totalPhytoCount = element.images.reduce(
        (currentVal, total) => currentVal + total.phytoplankton,
        0
      );
      let sampleImageArray = element.images.map((pic) => pic);

      return (
        <CompletedContainer
          onClick={() => continueAnnotating(element.id)}
          key={index}
        >
          <section className="left">
            <div>
              <p> Sample ID: {element.id}</p>
              <p>Collection Date: {element.collection_date}</p>
            </div>
            <div>
              <p>Latitude: {element.sample_latitude}</p>
              <p>Longitude: {element.sample_longitude}</p>
            </div>
            <div>
              <p>Total Zooplankton: {totalZooCount}</p>
              <p>Total Phytoplankton: {totalPhytoCount}</p>
            </div>
          </section>
          <section className="right">
            {sampleImageArray.map((image) => (
              <img
                src={
                  image.annotated_image === "" ||
                  image.annotated_image === "null"
                    ? image.original_image
                    : image.annotated_image
                }
                alt="sample"
              />
            ))}
          </section>
        </CompletedContainer>
      );
    }
  });
};
export default NotCompleted;
