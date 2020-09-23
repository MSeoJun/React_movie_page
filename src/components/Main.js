import React, { useState, useEffect } from "react";
import "../body.css";
import { getMovies } from "../Api";
import { Link } from "react-router-dom";

function Main() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const datas = await getMovies();
    setData(datas);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>

      <div style={{ backgroundColor: "#000000", fontFamily: "Adobe Arabic" }}>
        {loading === false ? (<div>
          <h1 style={{ color: "#ffffff", alignItems: "center", margin: "0 0 30px 0", padding: "0", textAlign: "center", fontSize: "50px" }}>MOVIE</h1>
        </div>) : (console.log("wait"))}
        <div style={{ marginRight: "auto", marginLeft: "auto", textAlign: "center" }}>
          {loading === false ? (
            data.map((item) => (

              <div key={item.id} style={{ display: "inline-block" }}>

                <Link to={"/Detail/" + item.id}>
                  <img src={item.medium_cover_image} style={{ margin: 15 }} />
                </Link>

                <p style={{ textAlign: "center", color: "#ffffff", fontSize: "35px" }}>
                  {item.title.length > 15 ? item.title.slice(0, 15) + "..." : item.title}
                </p>
              </div>
            ))
          ) : (
              <div style={{ height: "100vh" }}>
                <p
                  style={{
                    color: "#ffffff",
                    fontSize: 40,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 0,
                  }}
                >
                  영화 불러오는 중!!!
            </p>
              </div>
            )}
        </div>
      </div>
    </>
  );
}

export default Main;
