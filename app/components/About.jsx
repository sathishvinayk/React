var React=require('react');

var About=(props)=>{
  return(
    <div>
      <h1 className="text-center">About Component</h1>
      <p>Application built on React. Try to check the about page.</p>
      <p>
        Here are some of tools i used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>Js framework
        </li>
        <li>
          <a href="https://openWeatherMap.org">Open weatherMap</a>
        </li>
      </ul>
    </div>
  )
};

module.exports=About;
