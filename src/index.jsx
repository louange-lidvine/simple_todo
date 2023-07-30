import React from "react";
import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from "@mui/x-data-grid"
import {mockDataTeam} from "./dashboard/data/"
import Calendar from "./calendarComponents/calendar";
const All = () => {
    return (
        <div>
        <Calendar/> 
        </div>
    )
}
export default All;