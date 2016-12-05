var React = require('react');

var Nav = require('Nav');

var Main = (props) => {
  return (
      <div>
        <div>
          <div>
            <Nav />
            <p className="main-title">Main Component Rendered</p>
            {props.children}
          </div>
        </div>
      </div>
    );
}

module.exports = Main;
