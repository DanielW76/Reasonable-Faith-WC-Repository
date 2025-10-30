import React, { useState } from 'react';

const Header = ({ currentPage, setCurrentPage }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Events' },
    { id: 'qa', label: 'Q&A' },
    { id: 'resources', label: 'Resources' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#ffffff',
      borderBottom: '2px solid #e0e0e0',
      boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 30px',
        height: '85px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo Section */}
        <div
          onClick={() => setCurrentPage('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          {/* Tree Logo Image */}
          <img 
            src="/images/tree-icon-transparent.png" 
            alt="Reasonable Faith Logo"
            style={{
              width: '50px',
              height: '50px',
              objectFit: 'contain'
            }}
          />
          <div>
            <div style={{
              fontSize: '1.35rem',
              fontWeight: '800',
              color: '#287094',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}>
              Reasonable Faith
            </div>
            <div style={{
              fontSize: '0.85rem',
              color: '#666',
              fontWeight: '500',
              lineHeight: '1.2'
            }}>
              Whatcom County
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                padding: '11px 22px',
                fontSize: '0.98rem',
                fontWeight: '600',
                color: currentPage === item.id ? '#ffffff' : (hoveredItem === item.id ? '#287094' : '#555'),
                backgroundColor: currentPage === item.id ? '#287094' : (hoveredItem === item.id ? '#e8f4f8' : 'transparent'),
                border: currentPage === item.id ? '2px solid #287094' : '2px solid transparent',
                borderRadius: '25px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                outline: 'none'
              }}
            >
              {item.label}
            </button>
          ))}

          {/* Donate Button - Always Visible */}
          <button
            onClick={() => setCurrentPage('donate')}
            onMouseEnter={() => setHoveredItem('donate-btn')}
            onMouseLeave={() => setHoveredItem(null)}
            style={{
              padding: '11px 30px',
              fontSize: '0.98rem',
              fontWeight: '700',
              color: '#ffffff',
              backgroundColor: hoveredItem === 'donate-btn' ? '#1a4d66' : '#287094',
              border: '2px solid #287094',
              borderRadius: '25px',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              outline: 'none',
              marginLeft: '8px',
              boxShadow: hoveredItem === 'donate-btn' ? '0 4px 14px rgba(40, 112, 148, 0.35)' : '0 2px 8px rgba(40, 112, 148, 0.25)'
            }}
          >
            Donate
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;