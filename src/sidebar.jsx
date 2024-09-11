import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <Sidebar>
        <Menu>
          <MenuItem component={<Link to="/" />}> Home</MenuItem>
          <MenuItem component={<Link to="/about" />}> About</MenuItem>
          <MenuItem component={<Link to="/policy" />}>Policy</MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

export default SideBar;
