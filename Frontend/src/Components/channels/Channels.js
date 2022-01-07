import React, { useState, useEffect } from "react";
import { getChannels } from "../../Services/api";
import { Link } from "react-router-dom";
import "./channel.css";

const Channels = () => {
  const [channels, setchannels] = useState([]);

  const Channels = async () => {
    let data = await getChannels();
    setchannels(data);
  };

  useEffect(() => {
    Channels();
  }, []);

  return (
    <>
      <div>
        <br />
        <h1
          className="text-center my-3"
          style={{
            color: "white",
            backgroundColor: "#243b5527",
            fontSize: "50px",
          }}
        >
          CHANNELS{" "}
        </h1>{" "}
        <br />
        <br /> 
        <div className="row mx-3 p-1">
          {" "}
          {channels &&
            channels.map((channel) => {
              return (
                <div key={channel._id} className="col-md-4 my-3">
                  <div
                    className="card"
                    style={{
                      width: "18rem",
                      backgroundColor: "rgba(0,0,0,.5)",
                    }}
                  >
                    {/* <img src="..." class="card-img-top" alt="..."> */}{" "}
                    <div className="card-body">
                      <h3
                        className="card-title"
                        style={{ color: "#71f0f0", left: "10px" }}
                      >
                        {channel.channelname}{" "}
                      </h3>

                      <Link
                        className="button"
                        to={`/channels/${channel.channelname}`}
                      >
                        <span> </span> <span> </span> <span> </span>{" "}
                        <span> </span>
                        View Channel{" "}
                      </Link>

                      <br />
                    </div>{" "}
                  </div>{" "}
                </div>
              );
            })}{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Channels;
