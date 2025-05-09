import './App.css';
import '@fontsource/josefin-sans/300.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import theme from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import CustomDrawer from './components/CustomDrawer';
import Home from './pages/Home';
import About from './pages/About';
import Participate from './pages/Participate';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <div className="">
          <Header />
          <section id="content">
            <Routes>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="participate" element={<Participate />} />
            </Routes>
            <CustomDrawer />
          </section>
        </div>
        <Footer />
        <CssBaseline />
      </ThemeProvider>
    </Router>
  );
}

export default App;