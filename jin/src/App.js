import './App.css';
import MainArea from './MainArea';
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChecklistIcon from '@mui/icons-material/Checklist';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import HomeIcon from '@mui/icons-material/Home';
import FeedbackIcon from '@mui/icons-material/Feedback';
import PollIcon from '@mui/icons-material/Poll';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ConstructionIcon from '@mui/icons-material/Construction';
import LogoutIcon from '@mui/icons-material/Logout';

function App() {
  const { collapseSidebar } = useProSidebar();
  return (
    <div className="App"
    style={({ height: "100vh" }, { display: "flex" })}>
     <Sidebar style={{ height: "100vh" }} className="sidebar">
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Admin</h2>
          </MenuItem>
          <MenuItem icon={<DashboardIcon />}>Dashboard</MenuItem>
          <MenuItem icon={<ChecklistIcon />}>Timesheet</MenuItem>
          <MenuItem icon={<HolidayVillageIcon/>}>Leave</MenuItem>
          <MenuItem icon={<HomeIcon />}>Work From Home</MenuItem>
          <MenuItem icon={<FeedbackIcon />}>Feedback</MenuItem>
          <MenuItem icon={<PollIcon />}>Survey</MenuItem>
          <MenuItem icon={<DisplaySettingsIcon />}>Service Desk</MenuItem>
          <MenuItem icon={<DynamicFormIcon />}>Forms</MenuItem>
          <MenuItem icon={<ConnectingAirportsIcon />}>Travel</MenuItem>
          <MenuItem icon={<AttachMoneyIcon />}>Expenses</MenuItem>
          <MenuItem icon={<ConstructionIcon />}>Resourcing</MenuItem>
        </Menu>
        <main>
          <Menu>
        <MenuItem icon={<LogoutIcon />} style={{ color: "black", marginLeft: "2rem" }} >
          <p>YASH</p>
        </MenuItem>
          </Menu>
      </main>
      </Sidebar>
      <MainArea/>
    </div>
  );
}

export default App;
