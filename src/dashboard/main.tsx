import ReactDOM from "react-dom/client";
import React from "react";
import { CssBaseline } from "@mui/material";

import App from "../tscomponents/app";

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {},
});
import { ThemeProvider, createTheme } from "@mui/material/styles";


export default function ToggleColorMode() {
    const [mode, setMode] = React.useState<"light" | "dark">("dark");
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                );
            },
        }),
        []
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );
    
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ToggleColorMode />
    </React.StrictMode>
);
    //  <Routes>
    //                         <Route path="/" element={<Layout />}>
    //                             {/* <Route path="/team" element={<Team />} /> */}
    //                             {/* <Route path="/contacts" element={<Contacts />} /> */}
    //                             <Route index element={<Dashboard />} />
    //                             <Route
    //                                 path="/invoices"
    //                                 element={<invoices />}
    //                             />
    //                             <Route path="/form" element={<form />} />
    //                             <Route path="/bar" element={<bar />} />
    //                             <Route path="/pie" element={<pie />} />
    //                             <Route path="/line" element={<line />} />
    //                             {/* <Route path="/geography" element={<Geography />} /> */}
    //                             {/* <Route path="/calendar" element={<Calendar />} /> */}