import React from "react";
import { Link } from "react-router-dom";

const Students = () => {
  return (
    <div className="studentBoxes">
      {/* Evelyn */}
      <div className="boxWhite">
        <button className="btn">
          <Link className="btnLink" to="/Evelyn">
            See student rating
          </Link>
        </button>
        <div className="boxBlue">
          <div className="imgbox">
            <img
              src="https://randomuser.me/api/portraits/women/25.jpg"
              alt="profilepicture"
            ></img>
          </div>
          <h5>Evelyn</h5>
        </div>
      </div>

      {/* Aranka */}
      <div className="boxWhite">
        <button className="btn">
          <Link className="btnLink" to="/Aranka">
            See student rating
          </Link>
        </button>
        <div className="boxBlue">
          <div className="imgbox">
            <img
              src="https://randomuser.me/api/portraits/women/19.jpg"
              alt="profilepicture"
            ></img>
          </div>
          <h5>Aranka</h5>
        </div>
      </div>

      {/* Floris */}
      <div className="boxWhite">
        <button className="btn">
          <Link className="btnLink" to="/Floris">
            See student rating
          </Link>
        </button>
        <div className="boxBlue">
          <div className="imgbox">
            <img
              src="https://randomuser.me/api/portraits/men/19.jpg"
              alt="profilepicture"
            ></img>
          </div>
          <h5>Floris</h5>
        </div>
      </div>

      {/* Hector */}
      <div className="boxWhite">
        <button className="btn">
          <Link className="btnLink" to="/Hector">
            See student rating
          </Link>
        </button>
        <div className="boxBlue">
          <div className="imgbox">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="profilepicture"
            ></img>
          </div>
          <h5>Hector</h5>
        </div>
      </div>

      {/* Martina */}
      <div className="boxWhite">
        <button className="btn">
          <Link className="btnLink" to="/Martina">
            See student rating
          </Link>
        </button>
        <div className="boxBlue">
          <div className="imgbox">
            <img
              src="https://randomuser.me/api/portraits/women/28.jpg"
              alt="profilepicture"
            ></img>
          </div>
          <h5>Martina</h5>
        </div>
      </div>

      {/* Maurits */}
      <div className="boxWhite">
        <button className="btn">
          <Link className="btnLink" to="/Maurits">
            See student rating
          </Link>
        </button>
        <div className="boxBlue">
          <div className="imgbox">
            <img
              src="https://randomuser.me/api/portraits/men/81.jpg"
              alt="profilepicture"
            ></img>
          </div>
          <h5>Maurits</h5>
        </div>
      </div>

      {/* Rahima */}
      <div className="boxWhite">
        <button className="btn">
          <Link className="btnLink" to="/Rahima">
            See student rating
          </Link>
        </button>
        <div className="boxBlue">
          <div className="imgbox">
            <img
              src="https://randomuser.me/api/portraits/women/26.jpg"
              alt="profilepicture"
            ></img>
          </div>
          <h5>Rahima</h5>
        </div>
      </div>

      {/* Sandra */}
      <div className="boxWhite">
        <button className="btn">
          <Link className="btnLink" to="/Sandra">
            See student rating
          </Link>
        </button>
        <div className="boxBlue">
          <div className="imgbox">
            <img
              src="https://randomuser.me/api/portraits/women/67.jpg"
              alt="profilepicture"
            ></img>
          </div>
          <h5>Sandra</h5>
        </div>
      </div>

      {/* Storm */}
      <div className="boxWhite">
        <button className="btn">
          <Link className="btnLink" to="/Storm">
            See student rating
          </Link>
        </button>
        <div className="boxBlue">
          <div className="imgbox">
            <img
              src="https://randomuser.me/api/portraits/women/12.jpg"
              alt="profilepicture"
            ></img>
          </div>
          <h5>Storm</h5>
        </div>
      </div>

      {/* Wietske */}
      <div className="boxWhite">
        <button className="btn">
          <Link className="btnLink" to="/Wietske">
            See student rating
          </Link>
        </button>
        <div className="boxBlue">
          <div className="imgbox">
            <img
              src="https://randomuser.me/api/portraits/women/55.jpg"
              alt="profilepicture"
            ></img>
          </div>
          <h5>Wietske</h5>
        </div>
      </div>
    </div>
  );
};

export default Students;
