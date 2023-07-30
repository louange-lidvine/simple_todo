
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography, styled } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import React from "react";
const StyledToolBar = styled(Toolbar)({
    display: "flex",
    flexDirection: "row",
   
    justifyContent :"space-between"

})
const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    
}))
const Icons = styled("div")(({ theme }) =>({
    backgroundColor:"white",
}))
const Navbar = () => {
    return (
        <AppBar position="sticky">
            <StyledToolBar>
                <Typography variant="h6" sx={{
                    display: {
                        xs: "none",
                    sm:'block'}
                }}>
                    Navbar
                </Typography>
                <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Search>search</Search>
                <Icons>icons</Icons>
            </StyledToolBar>
            </AppBar>

    );
};
export default Navbar;