import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import view from "../../assets/image/view.png";
import Navbar from "../../components/Navbar";
import { API } from "../../config/api";

function Collection() {
  const history = useHistory();
  const [collection, setCollection] = useState([]);
  const getCollection = async () => {
    try {
      const response = await API.get("/collection");
      setCollection(response.data.collection);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(collection);

  useEffect(() => {
    getCollection();
  }, []);

  return (
    <div className="container-fluid main bg-dark text-light">
      <div className="ms-3 me-3">
        <Navbar />
        <div className="header ms-3 my-3 ">
          <h1>My Collection</h1>
          <div className="row mt-5">
            {collection?.map((item, index) => (
              <div className="col-md-3" item={item} key={index}>
                <img src={view} style={{ width: 230 }} />
                <h3 className="mt-3">{item.literatur.title}</h3>
                <div className="row">
                  <div className="col-md-4">
                    <h4 className="text-secondary">{item.literatur.author}</h4>
                  </div>
                  <div className="col-md-5">
                    <h4 className="text-secondary text-end">{item.literatur.publication_date}</h4>
                  </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
