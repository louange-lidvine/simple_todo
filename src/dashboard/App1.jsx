// import { ThemeProvider } from "@emotion/react";
// import { ColorModeContext, useMode } from "./theme";
// import { CssBaseline,createTheme } from "@mui/material";
// import {Routes,Route} from "react-router-dom"
// import Topbar from "./scenes/global/topbar";
// import Sidebar from "./scenes/global/Sidebar";
// import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team/index";
// // import Invoices from "./scenes/Invoices";
// // import Contacts from "./scenes/Contacts";
// // import Bar from "./scenes/Bar";
// // import Forms from "./scenes/Forms";
// // import Line from "./scenes/Line";
// // import Pie from "./scenes/Pie";
// // import FAQ from "./scenes/FAQ";
// // import Calendar from "./scenes/ Calendar ";
// // import Geography from "./scenes/Geography";



// const App1 = () => {
//     const [theme, colorMode] = useMode();
    
   
//     // useEffect(() => {
//     //     console.log("color mode:", colorMode);
//     // }, [colorMode])
    
//     //     const [mode, setMode] = useState("light");
//     //    const toggleTheme = () => {
//     //        const newMode = mode === "light" ? "dark" : "light";
//     //        setMode(newMode);
//     //    };


//     return (
//         <ColorModeContext.Provider value={{ colorMode }}>
//             <ThemeProvider theme={theme}>
//                 <CssBaseline />
//                 <div className="app">
//                     <main className="content">
//                         <Topbar />
//                         <Routes>
//                             <Route path="/" element={<Dashboard />} />
//                             <Route path="/team" element={<Team />} />
//                             {/* <Route path="/contacts" element={<Contacts />} /> */}
//                             {/* <Route path="/invoices" element={<invoices />} />
//                             <Route path="/form" element={<form />} />
//                             <Route path="/bar" element={<bar />} />
//                             <Route path="/pie" element={<pie />} />
//                             <Route path="/line" element={<line />} /> */}
//                             {/* <Route path="/geography" element={<Geography />} /> */}
//                             {/* <Route path="/calendar" element={<Calendar />} /> */}
//                         </Routes>
//                     </main>
//                     <Sidebar />
//                 </div>
//             </ThemeProvider>
//         </ColorModeContext.Provider>
//     );
// }

// export default App1;

import React, { useState } from "react";

const App = () => {
    const [content, setContent] = useState(true);
    const [view, setview] = useState(false);

    const showContents = () => {
        setContent(!content);
    };
    const showView = () => {
        setContent(!content);
        setview(!view);
    };
    
    return (
        <div>
            <div id="contentContainer">
                {content && <p>The content is shown</p>}
                {view && <p>View is shown</p>}
            </div>

            <button onClick={showContents}>Show Contents</button>
            <button onClick={showView}>Show  view</button>
        </div>
    );
};
export default App;

// export default Calendar;
