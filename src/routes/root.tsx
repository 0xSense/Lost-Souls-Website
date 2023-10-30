import { Outlet } from "react-router";
import Photo from '../assets/lost-souls.svg';
import Banner from '../components/Banner/index';
import './root.scss';

export default function Root() {
  return (
    <>
    <Banner />
    <div className="RootWrapper">
      <div className="AboutWrapper">
          <h2>About</h2>
          <div className="AboutDescription">
            <div className="CardWrapper">
              <img className="SoulSVG" src={Photo} />
              <div className="CardText">
                <h1>Lost Souls</h1>
                <p>Game Development Group</p>
              </div>
            </div>
            <div className="ProjectDescription">
              GameJam group who assembled during November 2023 to create their first game thogether to attempt to making the best possible game with a month span
            </div>
          </div>
         
          <h2>Projects</h2>
      </div>
    
      <div>
        <div className="ProjectCard">
            <a href="https://github.com/0xSense/Devil-Chess">Project Name: Devil Chess</a>
        </div>

      </div>
      <div id="detail">
        <Outlet />
      </div>
    </div>
    </>
  );
}