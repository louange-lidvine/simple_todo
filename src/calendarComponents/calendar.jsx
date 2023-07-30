// import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
// // import Badge from "@mui/material/Badge";
// // import { PickersDay } from "@mui/x-date-pickers/PickersDay";
// // import CheckIcon from "@mui/icons-material/Check";

// const Calendar = () => {
//     const [value, setValue] = useState(new Date());
//     // const [highlightedDays, setHighlightedDays] = useState([1, 2, 13]);
//     return (
//         <LocalizationProvider dateAdapter={AdapterDateFns}>
//             <StaticDatePicker
//                 // mask='____/__/__'
//                 variant="static"
//                 orientation="portrait"
//                 value={value}
//                 disableFuture
//                 onChange={(newValue) => setValue(newValue)}
//                 renderInput={(params) => {
//                     <TextField {...params} />;
//                 }}
//             //     renderDay={(day, _value, DayComponentProps) => {
//             //         const isSelected =
//             //             !DayComponentProps.outsideCurrentMonth &&
//             //             highlightedDays.indexOf(day.getDate()) >= 0;

//             //         return (
//             //             <Badge
//             //                 key={day.toString()}
//             //                 overlap="circular"
//             //                 badgeContent={
//             //                     isSelected ? (
//             //                         <CheckIcon color="red" />
//             //                     ) : undefined
//             //                 }
//             //             >
//             //                 <PickersDay {...DayComponentProps} />
//             //             </Badge>
//             //         );
//             //     }}
//             />
//         </LocalizationProvider>
//     );
// };


import React, { useState } from "react";

const App = () => {
    const [content, setContent] = useState(false);
    const [view, setview] = useState(false);

    const showContents = () => {
        setContent(true);
        setview(false)
    };

    return (
        <div>
            <div id="contentContainer">
                {content && <p>The content is shown</p>}
                {view && <p>View is shown</p>}
            </div>

            <button onClick={showContents}>Show Contents</button>
        </div>
    );
};
export default App;

// export default Calendar;
