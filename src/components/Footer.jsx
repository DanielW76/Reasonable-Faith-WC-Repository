import React, { useState } from 'react';

const Footer = ({ setCurrentPage }) => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'events', label: 'Events' },
    { id: 'qa', label: 'Q&A' }
  ];

  const resources = [
    { id: 'resources', label: 'Resources' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
    { id: 'donate', label: 'Donate' }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: 'https://facebook.com'
    },
    {
      name: 'Twitter',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      url: 'https://twitter.com'
    },
    {
      name: 'YouTube',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      url: 'https://youtube.com'
    },
    {
      name: 'Instagram',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
        </svg>
      ),
      url: 'https://instagram.com'
    }
  ];

  return (
    <footer style={{
      backgroundColor: '#1a1a1a',
      color: '#ffffff',
      width: '100%',
      borderTop: '4px solid #287094'
    }}>
      {/* Main Footer Content */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '60px 40px 40px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '50px',
          marginBottom: '50px'
        }}>
          {/* About Section */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px'
            }}>
              <img 
                src="/images/tree-icon-transparent.png" 
                alt="Reasonable Faith Logo"
                style={{
                  width: '48px',
                  height: '48px',
                  objectFit: 'contain'
                }}
              />
              <div>
                <div style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  lineHeight: '1.2'
                }}>
                  Reasonable Faith
                </div>
                <div style={{
                  fontSize: '0.85rem',
                  color: '#bbb',
                  lineHeight: '1.2'
                }}>
                  Whatcom County
                </div>
              </div>
            </div>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: '1.7',
              color: '#bbb',
              margin: '0 0 20px 0'
            }}>
              Exploring the intersection of faith, reason, and evidence. Providing thoughtful answers to life's biggest questions through Christian apologetics.
            </p>
            <div style={{
              display: 'flex',
              gap: '12px',
              marginTop: '20px'
            }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredSocial(social.name)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  style={{
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: hoveredSocial === social.name ? '#287094' : '#333',
                    color: '#ffffff',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    cursor: 'pointer'
                  }}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '700',
              marginBottom: '20px',
              color: '#ffffff'
            }}>
              Quick Links
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {quickLinks.map((link) => (
                <li key={link.id} style={{ marginBottom: '12px' }}>
                  <button
                    onClick={() => setCurrentPage(link.id)}
                    onMouseEnter={() => setHoveredLink(link.id)}
                    onMouseLeave={() => setHoveredLink(null)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: hoveredLink === link.id ? '#287094' : '#bbb',
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      transition: 'color 0.3s ease',
                      padding: 0,
                      textAlign: 'left'
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '700',
              marginBottom: '20px',
              color: '#ffffff'
            }}>
              Resources
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {resources.map((link) => (
                <li key={link.id} style={{ marginBottom: '12px' }}>
                  <button
                    onClick={() => setCurrentPage(link.id)}
                    onMouseEnter={() => setHoveredLink(link.id)}
                    onMouseLeave={() => setHoveredLink(null)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: hoveredLink === link.id ? '#287094' : '#bbb',
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      transition: 'color 0.3s ease',
                      padding: 0,
                      textAlign: 'left'
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '700',
              marginBottom: '20px',
              color: '#ffffff'
            }}>
              Contact Us
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#287094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: 0 }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a
                  href="mailto:contact@reasonablefaithwc.org"
                  style={{
                    color: '#bbb',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#287094'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#bbb'}
                >
                  contact@reasonablefaithwc.org
                </a>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#287094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a
                  href="tel:+13605550123"
                  style={{
                    color: '#bbb',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#287094'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#bbb'}
                >
                  (360) 555-0123
                </a>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#287094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: 0 }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span style={{
                  color: '#bbb',
                  fontSize: '0.95rem',
                  lineHeight: '1.5'
                }}>
                  Bellingham, WA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #333',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p style={{
            fontSize: '0.9rem',
            color: '#888',
            margin: 0
          }}>
            © <span 
              onClick={() => setCurrentPage('admin')}
              style={{
                cursor: 'pointer',
                color: '#888',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#287094'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#888'}
            >
              2024
            </span> Reasonable Faith Whatcom County. All rights reserved.
          </p>
          <div style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <a
              href="https://www.reasonablefaith.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.9rem',
                color: '#888',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#287094'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#888'}
            >
              Reasonable Faith Ministry
            </a>
            <span style={{ color: '#444' }}>|</span>
            <span style={{
              fontSize: '0.9rem',
              color: '#888'
            }}>
              A 501(c)(3) Nonprofit
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;