import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import QAPage from "./pages/QAPage.jsx";
import ResourcesPage from "./pages/ResourcesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import DonatePage from "./pages/DonatePage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";      

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home": return <HomePage setCurrentPage={setCurrentPage} />;
      case "about": return <AboutPage setCurrentPage={setCurrentPage} />;
      case "events": return <EventsPage setCurrentPage={setCurrentPage} />;
      case "qa": return <QAPage setCurrentPage={setCurrentPage} />;
      case "resources": return <ResourcesPage setCurrentPage={setCurrentPage} />;
      case "contact": return <ContactPage setCurrentPage={setCurrentPage} />;
      case "donate": return <DonatePage setCurrentPage={setCurrentPage} />;
      case "blog": return <BlogPage setCurrentPage={setCurrentPage} />;
      case "admin": return <AdminPanel setCurrentPage={setCurrentPage} />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      backgroundColor: '#ffffff'
    }}>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main style={{
        width: '100%',
        minHeight: 'calc(100vh - 85px)',
        overflow: 'auto'
      }}>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;