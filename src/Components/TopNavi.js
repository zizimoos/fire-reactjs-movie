import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  color: whitesmoke;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  width: 100px;
  text-align: center;
  line-height: center;
  border-bottom: 5px solid ${(props) => (props.current ? "red" : "transparent")};
  transition: border-bottom 0.2s ease-in-out;
`;

const Anchor = styled(Link)`
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopNavi = (props) => {
  const {
    location: { pathname },
  } = props;
  return (
    <Header>
      <List>
        <Item current={pathname === "/" ? true : false}>
          <Anchor to="/">Movies</Anchor>
        </Item>
        <Item current={pathname === "/tv" ? true : false}>
          <Anchor to="/tv">TV</Anchor>
        </Item>
        <Item current={pathname === "/search" ? true : false}>
          <Anchor to="/search">Search</Anchor>
        </Item>
      </List>
    </Header>
  );
};
export default withRouter(TopNavi);
