import { useState } from "react";
import { Menu, MenuItem,  ProSidebar } from "react-pro-sidebar"
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from "react-router-dom";
import { tokens } from '../../theme'
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const ourList1 = [
    {
        title: "Dashboard",
        icon: <HomeOutlinedIcon />,
        to: "/"
    },
    {
        title: "Manage team",
        to: "/team",
        icon: <PeopleOutlinedIcon />
    },
];
const ourList2 = [
    {
        title: "Manage team",
        to: "/team",
        icon: <PeopleOutlinedIcon />,
    },
    {
        title: "Contacts Information",
        icon: <ContactsOutlinedIcon />,
        to: "/contacts",
    },

    {
        title: "Invoices Balances",
        to: "/invoices",
        icon: <ReceiptOutlinedIcon />,
    },
];
const ourList3 = [
    {
        title: "Profile Form",
        icon: <PersonOutlinedIcon />,
        to: "/form",
    },
    {
        title: "calendar",
        to: "/calendar",
        icon: <CalendarTodayOutlinedIcon />,
    },
    {
        title: "FAQ Page",
        to: "/faq",
        icon: <HelpOutlineOutlinedIcon />,
    },
];
const ourList4 = [
    {
        title: "Bar Chart",
        icon: <BarChartOutlinedIcon />,
        to: "/bar",
    },
    {
        title: "Pie Chart",
        icon: <PieChartOutlineOutlinedIcon />,
        to: "/pie",
    },
    {
        title: "Line Chart",
        to: "/line",
        icon: <TimelineOutlinedIcon />,
    },
    {
        title: "Geography Chart",
        to: "/geography",
        icon: <MapOutlinedIcon />,
    },
];






const Item = ({title,to,icon,selected,setSelected}) =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    
    return (
        <MenuItem
            active={selected === title}
            style={{
                // color: colors.gray[100],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to}/>
        
        </MenuItem>
    )
}
const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false)

    const [selected, setSelected] = useState("Dashboard")
    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                    width: isCollapsed ? "10%" : "30%",
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                    listStyle: "none",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                    display: "flex",
                    gap: "10px",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.gray[100],
                            listStyle: "none",
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                                sx={{
                                    listStyle: "none",
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    color={colors.gray[100]}
                                    sx={{
                                        listStyle: "none",
                                    }}
                                >
                                    ADMINS
                                </Typography>
                                <IconButton
                                    onClick={() => setIsCollapsed(!isCollapsed)}
                                >
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={`./src/assets/user.png`}
                                    style={{
                                        cursor: "pointer",
                                        borderRadius: "50%",
                                    }}
                                />
                            </Box>
                            <Box>
                                <Typography
                                    variant="h2"
                                    color={colors.gray[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    Ed Roh
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color={colors.greenAccent[100]}
                                    //  fontWeight="bold"
                                    // sx={{ m: "10px 0 0 0" }}
                                >
                                    VP Fancy Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}
                    <Box
                        paddingLeft={isCollapsed ? undefined : "2%"}
                        sx={{ listStyle: "none" }}
                    >
                        {ourList1.map((item) => {
                            return (
                                <Item
                                    title={isCollapsed ? "" : item.title}
                                    to={item.to}
                                    icon={item.icon}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                            );
                        })}

                        <Typography
                            variant="h6"
                            color={colors.gray[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Data
                        </Typography>
                        {ourList2.map((item) => {
                            return (
                                <Item
                                    title={isCollapsed ? "" : item.title}
                                    to={item.to}
                                    icon={item.icon}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                            );
                        })}

                        <Typography
                            variant="h6"
                            color={colors.gray[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Pages
                        </Typography>
                        {ourList3.map((item) => {
                            return (
                                <Item
                                    title={isCollapsed ? "" : item.title}
                                    to={item.to}
                                    icon={item.icon}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                            );
                        })}
                        <Typography
                            variant="h6"
                            color={colors.gray[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Charts
                        </Typography>
                        {ourList4.map((item) => {
                            return (
                                <Item
                                    title={isCollapsed ? "" : item.title}
                                    to={item.to}
                                    icon={item.icon}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                            );
                        })}
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};


export default Sidebar;