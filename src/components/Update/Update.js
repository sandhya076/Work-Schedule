import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateWork } from "../../actions/works"

export default function Update({uWork}) {
  const [work, setWork] = useState(uWork);
  const dispatch = useDispatch();
  const submithandler = (e) => {
    e.preventDefault();
    dispatch(updateWork(work._id, work));
    alert("Updated Successfully");
  };
  return (
    <>
      <center>
        <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card" style={{ borderRadius: "1rem" }}>
                  <div className="row g-0">
                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src="https://media.giphy.com/media/3XEjQk4i7PW1es9FtN/giphy.gif" 
                        alt="Paris" class="center"
                      />
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <div className="card-body p-4 p-lg-5 text-black">
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          />
                          <span className="h1 fw-bold mb-0">
                            Update Your Work Schedule
                          </span>
                        </div>
                        {/* <h5
                  className="fw-normal mb-3 pb-3"
                  style={{ letterSpacing: 1 }}
                >
                  Sign into your account
                </h5> */}
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            required
                            onChange={(e) =>
                              setWork({ ...work, Day: e.target.value })
                            }
                            value={work.Day}
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Day
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="date"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            onChange={(e) =>
                              setWork({ ...work, Date: e.target.value })
                            }
                            value={work.Date}
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          >
                            Date
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            onChange={(e) =>
                              setWork({ ...work, Title: e.target.value })
                            }
                            value={work.Title}
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Title
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            onChange={(e) =>
                              setWork({
                                ...work,
                                Description: e.target.value,
                              })
                            }
                            value={work.Description}
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Description
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            onChange={(e) =>
                              setWork({ ...work, Deadline: e.target.value })
                            }
                            value={work.Deadline}
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Deadline
                          </label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            onClick={(e) => submithandler(e)}
                          >
                            UPDATE WORK
                          </button>
                        </div>
                        {/* <a className="small text-muted" href="#!">
                            Forgot password?
                          </a> */}
                        {/* <p
                            className="mb-5 pb-lg-2"
                            style={{ color: "#393f81" }}
                          >
                            Don't have an account?{" "} */}
                        {/* <a href="#!" style={{ color: "#393f81" }}>
                              Register here
                            </a>
                          </p>
                          <a href="#!" className="small text-muted">
                            Terms of use.
                          </a>
                          <a href="#!" className="small text-muted">
                            Privacy policy
                          </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </center>
    </>
  );
}
