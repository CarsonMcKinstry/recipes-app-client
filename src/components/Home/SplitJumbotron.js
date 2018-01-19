import React, { Component } from "react";
import { PropTypes } from "prop-types";

const SplitJumbotron = props => {
  const [main, top, bottom] = props.recipes;
  return (
    <div className="split-jumbotron">
      {main && (
        <div className="main-image">
          <img src={main.image} alt="" />
          <div className="overlay">
            <h2>{main.name}</h2>
            <p className="author">By: {main.author}</p>
            <p className="likes">{main.likes} people liked this.</p>
          </div>
        </div>
      )}
      <div className="secondary-images">
        {top && (
          <div className="top">
            <img src={top.image} alt="" />
            <div className="overlay">
              <h2>{top.name}</h2>
              <p className="author">By: {top.author}</p>
              <p className="likes">{top.likes} people liked this.</p>
            </div>
          </div>
        )}
        {bottom && (
          <div className="bottom">
            <img src={bottom.image} alt="" />
            <div className="overlay">
              <h2>{bottom.name}</h2>
              <p className="author">By: {bottom.author}</p>
              <p className="likes">{bottom.likes} people liked this.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

SplitJumbotron.propTypes = {};

export default SplitJumbotron;
