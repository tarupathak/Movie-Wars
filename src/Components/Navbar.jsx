import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import admin from "../Images/admin.jpg";

const Navbar = () => {
  const [state, setState] = useState(false);
  const ifPopupOpen = () => setState(!state);  

  return (
    <>
      <Nav>
        <Name><p>Movie Wars</p>
        </Name>
        <Links>
          <li>
            <NavLink to="/home" className="nav-link">
              <span>HOME</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="nav-link">
              <span>SEARCH</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="nav-link">
              <span>WATCHLIST</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="nav-link">
              <span>ORIGINALS</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="nav-link">
              <span>MOVIES</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="nav-link">
              <span>SERIES</span>
            </NavLink>
          </li>
        </Links>
        <Auth>
          <img  onClick={ifPopupOpen} src={admin} alt="admin" />
        </Auth>
        <Popup activeState={state}>
          <li>
            <NavLink to="" className="nav-link">
              <span>HOME</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="nav-link">
              <span>SEARCH</span>
            </NavLink>
          </li>
        </Popup>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  min-height: 9vh;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 3rem;
`;

const Name = styled.div`
  font-size: 5vh;
  margin-left: 2rem;
`;

const Links = styled.div`

@media screen and (min-width: 280px) and (max-width: 991px) {
  display: none;
}
 display: flex;
 align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: row wrap;
  flex-shrink: 0;
  margin-right: auto;
  margin-left: 3rem;

  li {
    list-style: none;
    > .nav-link {
      text-decoration: none;
      display: flex;
      align-items: center;
      text-decoration: none;
      position: relative;
      span {
        color: #fff;
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: 1px;
        line-height: 1.08;
        padding: 0% 0.5rem;
        margin-top: 5px;
        position: relative;

        &::before {
          position: absolute;
          content: "";
          top: 100%;
          left: 0;
          right: 0;
          width: 0;
          height: 2px;
          background: #f9f9f9;
          transition: all 0.7s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        }
      }
    }
    &:hover {
      span::before {
        width: 100%;
      }
    }
  }
`;

const Auth = styled.div`
  width: 50px;
  height: 50px;
  object-position: center;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
  }
`;

const Popup = styled.div`
  background-color: #040714;
  border-radius: 0.345rem;
  border: 1.3px solid rgba(151, 151, 151, 1);
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 0.5rem 1rem;
  display: ${event => event.activeState ? "flex" : "none"};
 
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  position: absolute;
  top: 7vh;
  right: 3.5rem;
  li {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    border-bottom: 1.3px solid rgba(151,151,151,1);
    list-style: none;
    > .nav-link {
      text-decoration: none;
      display: flex;
      align-items: center;
      text-decoration: none;
      position: relative;
      span {
        color: #fff;
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: 1px;
        line-height: 1.08;
        padding: 0% 0.5rem;
        margin-top: 5px;
        position: relative;
      }
    }
  }
`;

export default Navbar;
