import React, { useState } from "react";
import { sendBookingEmail } from "../../Services/api";
import "./chaneelslot.css";
import "./modal.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChannelSlot = (props) => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [timeslots, settimeslots] = useState("");

  const [program, setprogram] = useState("");

  const handleTimeSlots = (time) => {
    settimeslots(time);
  };

  const handleSubmit = async (user, email, date, day, channel, slot, pro) => {
    await sendBookingEmail({
      user: user,
      email: email,
      date: date,
      day: day,
      channel: channel,
      slot: slot,
      program: pro,
    });
    setprogram("");
    toast.success("Your request for booking the slot has been successfully registered");
    //alert("Your request for booking the slot has been successfully registered")
  };

  return (
    <>
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false} />
      <br />
      <div
        class="modal fade mt-3 "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog mt-3 m-auto">
          <div class="modal-content mt-3  w-80" style={{ color: "#71f0f0" }}>
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Request Booking
              </h5>
              <button  className="cbtn"
                type="button"
                style={{
                  position: "relative",
                  display: "inline-block",
                  left: "-10px",
                }}
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                {" "}
                <span></span>
                <span></span>
                <span></span>
                <span></span>x
              </button>
            </div>
            <div class="modal-body pt-4">
              {/* <h5>User:</h5> <span>{props.username}</span> <br /> */}
              <div class="user-box">
                <input type="text" value={props.username} required />
                <label>User</label>
              </div>
              {/* <h5>Email:</h5> <span>{props.email}</span> <br /> */}
              <div class="user-box">
                <input type="text" value={props.email} required />
                <label>Email</label>
              </div>
              {/* <h5>Date:</h5> <span>{props.requestdate}</span> <br /> */}
              <div class="user-box">
                <input type="text" value={props.requestdate} required />
                <label>Date</label>
              </div>
              {/* <h5>Day:</h5>{" "}
              <span>{days[new Date(props.requestday).getUTCDay()]}</span> <br /> */}
              <div class="user-box">
                <input
                  type="text"
                  value={days[new Date(props.requestday).getUTCDay()]}
                  required
                />
                <label>Day</label>
              </div>
              {/* <h5>Channel:</h5> <span>{props.channel}</span> <br /> */}
              <div class="user-box">
                <input type="text" value={props.channel} required />
                <label>Channel</label>
              </div>
              {/* <h5>Slot:</h5> <span>{timeslots}</span> */}
              <div class="user-box">
                <input type="text" name="username" value={timeslots} />
                <label>Slot</label>
              </div>
              <div class="user-box">
                <input
                  type="text"
                  name="username"
                  value={program}
                  onChange={(e) => setprogram(e.target.value)}
                  required
                />
                <label>Program</label>
              </div>
              {/* <h5>Program:</h5>{" "}
              <span>
                {" "}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Program name"
                  value={program}
                  onChange={(e) => setprogram(e.target.value)}
                />{" "}
              </span> */}
            </div>
            <div>
              <button  className="cbtn"
                type="button"
                style={{
                  position: "relative",
                  display: "inline-block",
                  left: "200px",
                  top: "-19px",
                }}
                data-bs-dismiss="modal"
              >
                {" "}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                close
              </button>
              <button  className="cbtn"
                style={{
                  position: "relative",
                  display: "inline-block",
                  left: "227px",
                  top: "-19px",
                }}
                onClick={() =>
                  handleSubmit(
                    props.username,
                    props.email,
                    props.requestdate,
                    days[new Date(props.requestday).getUTCDay()],
                    props.channel,
                    timeslots,
                    program
                  )
                }
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Request
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-1 mb-3">
        {!props.slots ? (
          <div class="list-group mb-3 mt-3 ">
            <ul className="list-group ">
              <li
                class="list-group-item  p-3 mt-3 shadow p-3 mb-5 bg-body rounded"
                style={{
                  width: "90%",
                  position: "relative",
                  display: "inline-block",
                  left: "70px"
                }}
              >
                <span className="text">08 -11</span>

                <span id="no" className="text">
                  No Program
                </span>
                <span id="avail" className="text">
                  Available
                </span>
                <span id="item">
                  <button  className="cbtn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => handleTimeSlots("08-11")}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Request
                  </button>
                </span>
              </li>
              <li style={{
                width: "90%",
                position: "relative",
                display: "inline-block",
                left: "70px"
              }} class="list-group-item p-3 mt-3 shadow p-3 mb-5 bg-body rounded">
                <span className="text">11-14</span>
                <span id="no">No Program</span>
                <span id="avail">Available </span>

                <span id="item">
                  <button  className="cbtn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => handleTimeSlots("11-14")}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Request
                  </button>
                </span>
              </li>
              <li style={{
                width: "90%",
                position: "relative",
                display: "inline-block",
                left: "70px"
              }} class="list-group-item p-3 mt-3 shadow p-3 mb-5 bg-body rounded">
                <span className="text">14-17</span>{" "}
                <span id="no">No Program</span>
                <span id="avail">Available </span>
                <span id="item">
                  <button  className="cbtn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => handleTimeSlots("14-17")}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Request
                  </button>
                </span>
              </li>
              <li style={{
                width: "90%",
                position: "relative",
                display: "inline-block",
                left: "70px"
              }} class="list-group-item p-3 mt-3 shadow p-3 mb-5 bg-body rounded">
                <span className="text">17-20</span>{" "}
                <span id="no">No Program</span>
                <span id="avail">Available </span>
                <span id="item">
                  <button  className="cbtn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => handleTimeSlots("17-20")}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Request
                  </button>
                </span>
              </li>
              <li style={{
                width: "90%",
                position: "relative",
                display: "inline-block",
                left: "70px"
              }} class="list-group-item p-3 mt-3 shadow p-3 mb-5 bg-body rounded">
                <span className="text">20-23</span>{" "}
                <span id="no">No Program</span>
                <span id="avail">Available</span>
                <span id="item">
                  <button  className="cbtn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => handleTimeSlots("20-23")}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Request
                  </button>
                </span>
              </li>
              <li style={{
                width: "90%",
                position: "relative",
                display: "inline-block",
                left: "70px"
              }} class="list-group-item p-3 mt-3 shadow p-3 mb-5 bg-body rounded">
                <span className="text">23-02 </span>{" "}
                <span id="no">No Program</span>
                <span id="avail">Available </span>
                <span id="item">
                  <button  className="cbtn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => handleTimeSlots("23-02")}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Request
                  </button>
                </span>
              </li>
              <li style={{
                width: "90%",
                position: "relative",
                display: "inline-block",
                left: "70px"
              }} class="list-group-item p-3 mt-3 shadow p-3 mb-5 bg-body rounded">
                <span className="text">02-05 </span>{" "}
                <span id="no">No Program</span>
                <span id="avail">Available </span>
                <span id="item">
                  <button  className="cbtn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => handleTimeSlots("02-05")}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Request
                  </button>
                </span>
              </li>
              <li style={{
                width: "90%",
                position: "relative",
                display: "inline-block",
                left: "70px"
              }} class="list-group-item p-3 mt-3 shadow p-3 mb-5 bg-body rounded">
                <span className="text">05-08</span>{" "}
                <span id="no">No Program</span>
                <span id="avail">Available </span>
                <span id="item">
                  <button  className="cbtn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => handleTimeSlots("05-08")}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Request{" "}
                  </button>
                </span>
              </li>
            </ul>
          </div>
        ) : (
          <ul className="list-group ">
            {props.slots.slot1 ? (
              <li style={{
                width: "90%",
                position: "relative",
                display: "inline-block",
                left: "70px"
              }}
                className="list-group-item p-3 mt-3 shadow p-3 mb-5 bg-body rounded "
                aria-current="true"
              >
                <span className="text">8-11</span>{" "}
                <span id="no">{props.slots.slot1p}</span>
                <span id="avail">Booked{""}</span>
                <span id="item">
                  <button  className="cbtn" disabled>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Request
                  </button>
                </span>
              </li>
            ) : (
              <li style={{
                width: "90%",
                position: "relative",
                display: "inline-block",
                left: "70px"
              }}
                className="list-group-item p-3 mt-3 shadow p-3 mb-5 bg-body rounded"
                aria-current="true"
              >
                <span className="text">8-11</span>{" "}
                <span id="no">{props.slots.slot1p}</span>
                <span id="avail">Available</span>
                <span id="item">
                  <button  className="cbtn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => handleTimeSlots("08-11")}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Request
                  </button>
                </span>
              </li>
            )}
            {props.slots.slot2 ? (
              <li style={{
                width: "90%",
                position: "relative",
                display: "inline-block",
                left: "70px"
              }}
                className="list-group-item p-3 mt-3 shadow p-3 mb-5 bg-body rounded "
                aria-current="true"
              >
                <span className="text">11-14</span>
                <span id="no">{props.slots.slot2p}</span>
                <span id="avail">Booked</span>
                <span id="item">
                  <button  className="cbtn" disabled>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Request
                  </button>
                </span>
              </li>
            ) : (
              <li style={{
                width: "90%",
                position: "relative",
                display: "inline-block",
                left: "70px"
              }}
                className="list-group-item p-3 mt-3 shadow p-3 mb-5 bg-body rounded"
                aria-current="true"
              >
                <span className="text">11-14</span>{" "}
                <span id="no">No program</span>
                <span id="no">{props.slots.slot2p}</span>
                <span id="avail">Available</span>
                <span id="item">
                  <button className="cbtn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => handleTimeSlots("11-14")}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Request
                  </button>
                </span>
              </li>
            )}
            {props.slots.slot3 ? (
              <li style={{
                width: "90%",
                position: "relative",
                display: "inline-block",
                left: "70px"
              }}
                className="list-group-item p-3 mt-3 shadow p-3 mb-5 bg-body rounded"
                aria-current="true"
              >
                <span className="text">14-17 </span>
                <span id="no">{props.slots.slot3p}</span>
                <span id="avail">Booked</span>
                <span id="item">
                  <button  className="cbtn" disabled>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Request
                  </button>
                </span>
              </li>
            ) : (
              <li style={{
                width: "90%",
                position: "relative",
                display: "inline-block",
                left: "70px"
              }}
                className="list-group-item p-3 mt-3 shadow p-3 mb-5 bg-body rounded"
                aria-current="true"
              >
                <span className="text"> 14-17 </span>
                <span id="no">{props.slots.slot3p}</span>
                <span id="avail">Available</span>
                <span id="item">
                  <button  className="cbtn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => handleTimeSlots("14-17")}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Request
                  </button>
                </span>
              </li>
            )}
            {props.slots.slot4 ? (
              <li style={{
                width: "90%",
                position: "relative",
                display: "inline-block",
                left: "70px"
              }}
                className="list-group-item p-3 mt-3 shadow p-3 mb-5 bg-body rounded"
                aria-current="true"
              >
                <span className="text">17-20</span>{" "}
                <span id="no">{props.slots.slot4p}</span>
                <span id="avail">Booked</span>
                <span id="item">
                  <button  className="cbtn" disabled>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Request
                  </button>
                </span>
              </li>
            ) : (
              <li style={{
                width: "90%",
                position: "relative",
                display: "inline-block",
                left: "70px"
              }}
                className="list-group-item p-3 mt-3 shadow p-3 mb-5 bg-body rounded"
                aria-current="true"
              >
                <span className="text">17-20</span>
                <span id="no">{props.slots.slot4p}</span>
                <span id="avail">Available</span>
                <span id="item">
                  <button className="cbtn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => handleTimeSlots("17-20")}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Request
                  </button>
                </span>
              </li>
            )}
            {props.slots.slot5 ? (
              <li style={{
                width: "90%",
                position: "relative",
                display: "inline-block",
                left: "70px"
              }}
                className="list-group-item p-3 mt-3 shadow p-3 mb-5 bg-body rounded"
                aria-current="true"
              >
                <span className="text">20-23</span>{" "}
                <span id="no">{props.slots.slot5p}</span>
                <span id="avail">Booked</span>
                <span id="item">
                  <button  className="cbtn" disabled>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Request
                  </button>
                </span>
              </li>
            ) : (
              <li style={{
                width: "90%",
                position: "relative",
                display: "inline-block",
                left: "70px"
              }}
                className="list-group-item p-3 mt-3 shadow p-3 mb-5 bg-body rounded"
                aria-current="true"
              >
                <span className="text">20-23 </span>
                <span id="no">No program</span>
                <span id="avail">Available</span>
                <span id="item">
                  <button  className="cbtn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => handleTimeSlots("20-23")}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Request
                  </button>
                </span>
              </li>
            )}
            {props.slots.slot6 ? (
              <li style={{
                width: "90%",
                position: "relative",
                display: "inline-block",
                left: "70px"
              }}
                className="list-group-item p-3 mt-3 shadow p-3 mb-5 bg-body rounded"
                aria-current="true"
              >
                <span className="text"> 23-02</span>
                <span id="no">{props.slots.slot6p}</span>
                <span id="avail">Booked</span>
                <span id="item">
                  <button  className="cbtn" disabled>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Request
                  </button>
                </span>
              </li>
            ) : (
              <li style={{
                width: "90%",
                position: "relative",
                display: "inline-block",
                left: "70px"
              }}
                className="list-group-item p-3 mt-3 shadow p-3 mb-5 bg-body rounded"
                aria-current="true"
              >
                <span className="text"> 23-02 </span>
                <span id="no">No program</span>
                <span id="avail">Available</span>
                <span id="item">
                  <button  className="cbtn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => handleTimeSlots("23-02")}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Request
                  </button>
                </span>
              </li>
            )}
            {props.slots.slot7 ? (
              <li style={{
                width: "90%",
                position: "relative",
                display: "inline-block",
                left: "70px"
              }}
                className="list-group-item p-3 mt-3 shadow p-3 mb-5 bg-body rounded"
                aria-current="true"
              >
                <span className="text">02-05</span>
                <span id="no">{props.slots.slot7p}</span>
                <span id="avail">Booked</span>
                <span id="item">
                  <button  className="cbtn" disabled>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Request
                  </button>
                </span>
              </li>
            ) : (
              <li style={{
                width: "90%",
                position: "relative",
                display: "inline-block",
                left: "70px"
              }}
                className="list-group-item p-3 mt-3 shadow p-3 mb-5 bg-body rounded"
                aria-current="true"
              >
                <span className="text"> 02-05 </span>
                <span id="no">No program</span>
                <span id="avail">Available</span>
                <span id="item">
                  <button  className="cbtn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => handleTimeSlots("02-05")}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Request
                  </button>
                </span>
              </li>
            )}
            {props.slots.slot8 ? (
              <li style={{
                width: "90%",
                position: "relative",
                display: "inline-block",
                left: "70px"
              }}
                className="list-group-item p-3 mt-3 shadow p-3 mb-5 bg-body rounded"
                aria-current="true"
              >
                <span className="text">05-08 </span>
                <span id="no">{props.slots.slot8p}</span>
                <span id="avail">Booked</span>
                <span id="item">
                  <button  className="cbtn" disabled>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Request
                  </button>
                </span>
              </li>
            ) : (
              <li style={{
                width: "90%",
                position: "relative",
                display: "inline-block",
                left: "70px"
              }}
                className="list-group-item p-3 mt-3 shadow p-3 mb-5 bg-body rounded"
                aria-current="true"
              >
                <span className="text">05-08 </span>
                <span id="no">No program</span>
                <span id="avail">Available</span>
                <span id="item">
                  <button className="btn-channelslot " 
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => handleTimeSlots("05-08")}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Request
                  </button>
                </span>
              </li>
            )}
          </ul>
        )}
      </div>
    </>
  );
};

export default ChannelSlot;
