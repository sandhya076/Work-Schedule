import React from "react";
import "./style.css";
// import { Link } from "react-router-dom";
import { getWork, deleteWork } from "../../actions/works";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  dispatch(getWork());
  const works = useSelector((store) => store.SRwork);
  console.log(works);
  return (
    <>
      <center>
        <h1 className="headingcolour">
          <b>ALL YOUR WORKS HERE</b>
        </h1>
      </center>
      {works.map((works) => (
        <>
          <div id="container">
            {/* Start	Product details */}
            <div className="product-details">
              {/* 	Product Name */}
              <h1>TO DO</h1>
              <p className="information">{works.Description}</p>
              		
              <div className="control">
                {/* Start Button buying */}
                <button className="btn btn-danger" onClick={()=> dispatch(deleteWork(works._id))}>

                  <span className="buy">Completed</span>
                </button>
                <Link
                  to={{
                    pathname: `/Update?${works._id}`,
                  }}
                >
                  <button className="btn">
                    <span className="shopping-cart">
                      <i className="fa fa-shopping-cart" aria-hidden="true" />
                    </span>

                    <span className="buy">Update</span>
                  </button>
                </Link>
              </div>
            </div>

            <div className="product-image">
              <img src="https://picsum.photos/200/300" alt="Omar Dsoky" />

              <div className="info">
                <h2>Details of Work</h2>
                <ul>
                  <li>
                    <strong>Day: </strong>
                    {works.Day}
                  </li>
                  <li>
                    <strong>Date: </strong>
                    {works.Date}
                  </li>
                  <li>
                    <strong>Title: </strong>
                    {works.Title}
                  </li>
                  <li>
                    <strong>Deadline: </strong>
                    {works.Deadline}
                  </li>
                </ul>
              </div>
            </div>
            {/*  End product image  */}
          </div>
        </>
      ))}
       <center>
            <Link to="/Form">
              <button class="btn btn-success">Add Schedule</button>
            </Link>
          </center>
    </>
  );
}
