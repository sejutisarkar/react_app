import React,{Component} from 'react';
import i1 from './images/logo.png';

export default class App extends Component{
  render(){
    return (
      <div id="whole">
      <div className="pusher">
        <div className="ui inverted vertical masthead center aligned segment" id="nav">
          <div className="ui container">
            <div className="ui large secondary inverted pointing menu">
              <a className="toc item">
                <i className="sidebar icon"></i>
              </a>
              <a className="active item">Home</a>
              <a className="item">About Us</a>
              <a className="item">Works</a>
              <div className="right item">
                <a className="ui inverted button">Log in</a>
                <a className="ui inverted button">Sign Up</a>
              </div>
            </div>
          </div>
          <div className="ui text container">
            <h1 className="ui inverted header">
              Codepth
            </h1>
            <h2>TimeTable Generation</h2>

          </div>

        </div>

        <div className="ui bottom attached segment pushable" id="bodym">
        <div className="pusher">
        <div className="ui basic segment">
        <h2 className="ui header">TimeTable</h2>

          <a className="ui card" href="#">
          <div className="content">
            <div className="header">Computer Science and Engineering</div>
            <div className="meta">
            <span className="category">Department</span>
          </div>
          <div className="description">
            <p></p>
          </div>
        </div>
        <div className="extra content">
          <div className="right floated author">
            <img className="ui avatar image" src={i1}/>
          </div>
        </div>
        </a>



        <a className="ui card" href="#">
        <div className="content">
          <div className="header">Information Technology</div>
          <div className="meta">
            <span className="category">Department</span>
          </div>
          <div className="description">
            <p></p>
          </div>
        </div>
        <div className="extra content">
          <div className="right floated author">
            <img className="ui avatar image" src={i1}/>
          </div>
        </div>
        </a>




        <a className="ui card" href="#">
        <div className="content">
          <div className="header">Computer Science and System</div>
          <div className="meta">
            <span className="category">Department</span>
          </div>
          <div className="description">
            <p></p>
          </div>
        </div>
        <div className="extra content">
          <div className="right floated author">
            <img className="ui avatar image" src={i1}/>
          </div>
        </div>
        </a>

        <a className="ui card" href="#">
        <div className="content">
          <div className="header">  Electrical Engineering</div>
          <div className="meta">
            <span className="category">Department</span>
          </div>
          <div className="description">
            <p></p>
          </div>
        </div>
        <div className="extra content">
          <div className="right floated author">
            <img className="ui avatar image" src={i1}/>
          </div>
        </div>
        </a>

        <a className="ui card" href="#">
        <div className="content">
          <div className="header">Mechanical Engineering</div>
          <div className="meta">
            <span className="category">Department</span>
          </div>
          <div className="description">
            <p></p>
          </div>
        </div>
        <div className="extra content">
          <div className="right floated author">
            <img className="ui avatar image" src={i1}/>
          </div>
        </div>
        </a>

        <a className="ui card" href="#">
        <div className="content">
          <div className="header">Civil Engineering</div>
          <div className="meta">
            <span className="category">Department</span>
          </div>
          <div className="description">
            <p></p>
          </div>
        </div>
        <div className="extra content">
          <div className="right floated author">
            <img className="ui avatar image" src={i1}/>
          </div>
        </div>
        </a>

        </div>
        </div>

</div>

        <div className="ui inverted vertical footer segment">
          <div className="ui container">
            <div className="ui stackable inverted divided equal height stackable grid">
              <div className="three wide column">
                <h4 className="ui inverted header">About</h4>
                <div className="ui inverted link list">
                  <a href="#" className="item"></a>
                  <a href="#" className="item"></a>
                  <a href="#" className="item"></a>
                  <a href="#" className="item"></a>
                </div>
              </div>
              <div className="three wide column">
                <h4 className="ui inverted header">Services</h4>
                <div className="ui inverted link list">
                  <a href="#" className="item"></a>
                  <a href="#" className="item"></a>
                  <a href="#" className="item"></a>
                  <a href="#" className="item"></a>
                </div>
              </div>
              <div className="seven wide column">
                <h4 className="ui inverted header">Footer Header</h4>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    );
  }
}
