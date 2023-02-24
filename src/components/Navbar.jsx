import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, ReadOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div style={{ position: "fixed", top: 0, left: 20, right: 0, zIndex: 999, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0px", backgroundColor: "#001529" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} style={{ color: "#F9F5EB", margin: "0px" }}>
          <Link to="/">Copy site </Link>
        </Typography.Title>
        <Button style={{ display: "none" }} onClick={() => setActiveMenu(!activeMenu)}>
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark" mode="horizontal" style={{ backgroundColor: "#001529", border: "none" }}>
          <Menu.Item icon={<HomeOutlined />} style={{ float: "right" }}>
            <Link style={{ color: "#E8F9FD" }} to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item icon={<ReadOutlined />} style={{ float: "right" }}>
            <Link style={{ color: "#E8F9FD" }} to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<ReadOutlined />} style={{ float: "right" }}>
            <Link style={{ color: "#E8F9FD" }} to="/news">Contact Us</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
