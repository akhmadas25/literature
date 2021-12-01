import React, { useEffect, useState, useContext } from "react";
import Navbar from "../../components/Navbar";
import "../../assets/stylesheets/home.css";
import { API, PATH_FILE } from "../../config/api";
import CardProfile from "../../components/CardProfile";

function Profile() {
  const [literatur, setLiteratur] = useState([]);

  const getLiteratur = async () => {
    try {
      const response = await API.get("/profile/literatur");
      setLiteratur(response.data.literatur);
      
    } catch (error) {
      console.log(error);
    }
  };

  console.log(literatur);
  useEffect(() => {
    getLiteratur();
  }, []);

  return (
    <div className="container-fluid main bg-dark text-light">
      <div className="ms-3 me-3">
        <Navbar />
        <div className="container-fluid mt-2 header">
          <h1>Profile</h1>
          <CardProfile />
          <h1>My Literaturs</h1>
          <div className="row mt-3">
            {literatur?.map((item, index) => (
              <div className="col-md-3" item={item} key={index}>
                <embed
                  src={PATH_FILE + item.attach}
                  style={{ width: 250, height: 300 }}
                  type="application/pdf"
                  frameBorder="0"
                  scrolling="auto"
                  height="100%"
                  width="100%"
                />
                <h3
                  className="mt-3"
                  onClick={() => window.location=`literatur/${item.id}`}
                >
                  {item.title}
                </h3>
                <div className="row">
                  <div className="col-md-4">
                    <h4 className="text-secondary">{item.author}</h4>
                  </div>
                  <div className="col-md-5">
                    <h4 className="text-secondary text-end">
                      {item.publication_date}
                    </h4>
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

export default Profile;
