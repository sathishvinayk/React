var React = require('react'),
  {Link}=require('react-router');

var Examples=(props)=>{
  return (
    <div>
      <h1 className="text-center">Examples Component!</h1>
      <p>Examples to try out with locations!</p>
      <ol>
        <li>
          <Link to='/?location=Chennai'>Chennai,IN</Link>
        </li>
        <li>
          <Link to='/?location=Mumbai'>Mumbai,IN</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
