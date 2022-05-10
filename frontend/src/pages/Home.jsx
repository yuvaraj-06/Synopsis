import React, { Component } from "react";
import { Link } from "react-router-dom";

// IMAGES
import home from "../assets/img/home.png";
import cap from "../assets/img/cap.png";
import user from "../assets/img/user.png";
import settings from "../assets/img/settings.png";
import logout from "../assets/img/logout.png";
import rightBar from "../assets/img/right-bar.png";
import welcome from "../assets/img/welcome.png";
import graph from "../assets/img/graph.png";
import progress from "../assets/img/progress.png";
import calendar from "../assets/img/calendar.png";
import date from "../assets/img/date.png";
import clock from "../assets/img/clock.png";
import messages from "../assets/img/messages.png";
import atom from "../assets/img/atom.png";
import statis from "../assets/img/statis.png";
import database from "../assets/img/database.png";

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="left">
          <div className="side-bar">
            <div>
              <div className="logo">F.</div>
              <div className="icons-list">
                <img src={home} alt="" />
                <img src={cap} alt="" />
                <img src={user} alt="" />
                <img src={settings} alt="" />
              </div>
            </div>
            <img src={logout} alt="" />
          </div>
        </div>

        <div className="center">
          <div className="d-flex">
            <div className="left">
              <img src={welcome} alt="" />
              <div className="exams-list">
                <h3>Upcoming classes</h3>
                <div className="list">
                  <div className="exam-card card">
                    <div className="subject-name">
                      <img src={atom} alt="" />
                      <p className="sub">Physics</p>
                    </div>

                    <div className="stat">
                      <img src={clock} alt="" />
                      <p>1h 30m</p>
                    </div>

                    <div className="stat">
                      <img src={date} alt="" />
                      <p>Today, 12:30 PM</p>
                    </div>

                    <Link to="/class">
                      <button className="fw">Join Class</button>
                    </Link>
                  </div>

                  <div className="exam-card card">
                    <div className="subject-name">
                      <img src={statis} alt="" />
                      <p className="sub">Statistics</p>
                    </div>

                    <div className="stat">
                      <img src={clock} alt="" />
                      <p>3h 00m</p>
                    </div>

                    <div className="stat">
                      <img src={date} alt="" />
                      <p>Tomorrow, 5:00 PM</p>
                    </div>

                    <Link to="/teacher-dashboard">
                      <button className="fw">View details</button>
                    </Link>
                  </div>

                  <div className="exam-card card">
                    <div className="subject-name">
                      <img src={database} alt="" />
                      <p className="sub">Databases</p>
                    </div>

                    <div className="stat">
                      <img src={clock} alt="" />
                      <p>2h 30m</p>
                    </div>

                    <div className="stat">
                      <img src={date} alt="" />
                      <p>24th June, 10:30 AM</p>
                    </div>

                    <button className="fw">View details</button>
                  </div>
                </div>

                <div className="list">
                  <div className="exam-card card">
                    <div className="subject-name">
                      <img src={database} alt="" />
                      <p className="sub">Databases</p>
                    </div>

                    <div className="stat">
                      <img src={clock} alt="" />
                      <p>2h 30m</p>
                    </div>

                    <div className="stat">
                      <img src={date} alt="" />
                      <p>24th June, 10:30 AM</p>
                    </div>

                    <button className="fw">View details</button>
                  </div>

                  <div className="exam-card card">
                    <div className="subject-name">
                      <img src={database} alt="" />
                      <p className="sub">Databases</p>
                    </div>

                    <div className="stat">
                      <img src={clock} alt="" />
                      <p>2h 30m</p>
                    </div>

                    <div className="stat">
                      <img src={date} alt="" />
                      <p>24th June, 10:30 AM</p>
                    </div>

                    <button className="fw">View details</button>
                  </div>

                  <div className="exam-card card">
                    <div className="subject-name">
                      <img src={database} alt="" />
                      <p className="sub">Databases</p>
                    </div>

                    <div className="stat">
                      <img src={clock} alt="" />
                      <p>2h 30m</p>
                    </div>

                    <div className="stat">
                      <img src={date} alt="" />
                      <p>24th June, 10:30 AM</p>
                    </div>

                    <button className="fw">View details</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="d-flex justify-content-evenly">
                <img src={progress} alt="" />
                <img src={calendar} alt="" />
              </div>
              <img src={graph} alt="" />
            </div>
          </div>
        </div>

        {/* <div className="right">
          <img src={calendar} alt="" />
          <img src={messages} alt="" />
        </div> */}
      </div>
    );
  }
}

export default Home;
