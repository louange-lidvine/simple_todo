import "./App.css";
// import Muitypography from "./components/MuiTypography";
// import { MuiButton } from "./MuiButton";
import { Button, Container, styled } from "@mui/material";
import { Settings, Add, DialerSip } from "@mui/icons-material";
import Sidebar from "./components/sidebar";
import Rightbar from "./components/Rightbar";
import Feed from  "./components/feed";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Navbar from "./components/navbar";


function App() {
    // const MyButton = styled(Button)(({ theme })=>({
    //     backgroundColor: theme.palette.otherColor.main,
    //                 color: "otherColor",
    //                 margin: 5,
    //                 "&:hover": {
    //                     backgroundColor: "  Lightblue",
    //                 },
    //                 "&:disabled": {
    //                     backgroundColor: "  gray",
    //                     color: "white",
    //                 },
            

    // }))
    return (
        // <div>
        //     {/* <h1>hello world</h1>
        //     <Muitypography />
        //     <MuiButton /> */}
        //     <Button variant="text" color="primary" size="small">
        //         TEXT
        //     </Button>
        //     <Button
        //         startIcon={<Settings />}
        //         variant="contained"
        //         color="secondary"
        //         size="small"
        //     >
        //         Settings
        //     </Button>
        //     <Button
        //         startIcon={<Add />}
        //         variant="contained"
        //         color="success"
        //         size="small"
        //     >
        //         Add new Post
        //     </Button>
        //     <Button variant="outlined" disabled>
        //         Outlined
        //     </Button>
        //     {/* <Button
        //         variant="contained"
        //         disabled
        //         sx={{
        //             backgroundColor: "skyblue",
        //             color: "#888",
        //             margin: 5,
        //             "&:hover": {
        //                 backgroundColor: "  Lightblue",
        //             },
        //             "&:disabled": {
        //                 backgroundColor: "  gray",
        //                 color: "white",
        //             },
        //         }}
        //     >
        //         My Unique Button
        //     </Button> */}
        //     <MyButton>HELLO</MyButton>
        // </div>
        
        <Box>
            <Navbar/>
            <Stack
                direction={"row"}
                spacing={2}
                justifyContent={"space-between"}
            >
                <Sidebar />
                <Feed />
                <Rightbar />
            </Stack>
        </Box>
    );
}
export default App;
