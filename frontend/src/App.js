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

const langCode = localStorage.getItem('lang') || 'en';
document.documentElement.lang = langCode;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      window.scrollTo(0, 0);
    });

    observer.observe(document.body); // scroll fix

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