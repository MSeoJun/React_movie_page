import React, { useState, useEffect } from "react";
import "../body.css";
import { getDetail, getDetail_Reviews } from "../Api";
// import { Link } from "react-router-dom";

function Detail({ match }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getData = async () => {
    const datas = await getDetail(match.params.id);
    setData(datas);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading === false ? (
        <>
          <div style={{ backgroundColor: "#000000", height: "100vh" }}>
            <img
              src={data.medium_cover_image}
              style={{ margin: "30px 100px 20px 120px" }}
            />
            <img src={data.background_image} style={{ display: "inline-block", marginTop: "0" }} />

            <p style={{ color: "#ffffff", margin: 0, fontSize: 30, fontWeight: 1000, margin: "30px 0 0 120px" }}>
              {data.title}
            </p>
          </div>

        </>
      ) : (
          "loading..."
        )}
    </>
  );
}

export default Detail;
