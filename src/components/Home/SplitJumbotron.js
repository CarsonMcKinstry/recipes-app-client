import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const SplitJumbotron = props => {
  const [main, top, bottom] = props.recipes;
  console.log(main);
  return (
    <div className="split-jumbotron">
      {main && (
        <div className="main-image">
          <Link to={`/recipe/${main._id}`}>
            <img src={main.image} alt="" />
            <div className="overlay">
              <h2>{main.name}</h2>
              <p className="author">By: {main.author}</p>
              <p className="likes">{main.likes} people liked this.</p>
            </div>
          </Link>
        </div>
      )}
      <div className="secondary-images">
        {top && (
          <div className="top">
            <Link to={`/recipe/${top._id}`}>
              <img src={top.image} alt="" />
              <div className="overlay">
                <h2>{top.name}</h2>
                <p className="author">By: {top.author}</p>
                <p className="likes">{top.likes} people liked this.</p>
              </div>
            </Link>
          </div>
        )}
        {bottom && (
          <div className="bottom">
            <Link to={`/recipe/${bottom._id}`}>
              <img src={bottom.image} alt="" />
              <div className="overlay">
                <h2>{bottom.name}</h2>
                <p className="author">By: {bottom.author}</p>
                <p className="likes">{bottom.likes} people liked this.</p>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

SplitJumbotron.propTypes = {};

export default SplitJumbotron;
