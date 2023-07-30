import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";


const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const columns = [
        {
            fieldName: "id",
            HeaderName: "ID",
        },
        {
            fieldName: "name",
            HeaderName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            fieldName: "age",
            HeaderName: " Age",
            type: "number",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            fieldName: "phone",
            HeaderName: "phoneNumber",
            flex: 1,
        },
        {
            fieldName: "email",
            HeaderName: "Email",
            flex: 1,
        },
        {
            fieldName: "access",
            HeaderName: "Access",
            flex: 1,
         accessed:({row:{access}}) => {
             return (
                 <Box
                     width="60%"
                     m="0 auto"
                     p="5px"
                     display="flex"
                     justifyContent="center"
                     backgroundColor={
                         access === "admin"
                             ? colors.greenAccent[100]
                             : colors.greenAccent[200]
                     }
                     borderRadius="4px"
                 >
                     {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                     {access === "manager" && <AdminPanelSettingsOutlinedIcon />}
                     {access === "" && <AdminPanelSettingsOutlinedIcon />}
                     {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                 </Box>
             );
            }
        },
    ];

    return (
        <Box>
            <Header title="TEAM" subtitle="Managing team mambers">
                <Box>
                    <DataGrid
                        rows={mockDataTeam}
                        columns={columns}
                    />
                </Box>
            </Header>
     </Box>
 )   
    
}
export default Team