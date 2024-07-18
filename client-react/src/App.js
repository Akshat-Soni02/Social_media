import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useMemo, lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { HelmetProvider } from "react-helmet-async";

const Groups = lazy(() => import("scenes/chat/Groups.jsx"));
const Chat = lazy(() => import("scenes/chat/Chat.jsx"));

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <CssBaseline />
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route
                  path="/home"
                  element={isAuth ? <HomePage /> : <Navigate to="/" />}
                />
                <Route
                  path="/profile/:userId"
                  element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
                />
                <Route path="/chat/:chatId" element={<Chat />} />
                <Route path="/groups" element={<Groups />} />
              </Routes>
            </Suspense>
          </HelmetProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
