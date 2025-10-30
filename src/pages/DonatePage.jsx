import React, { useState } from 'react';

const DonatePage = ({ setCurrentPage }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  const impactAreas = [
    {
      id: 1,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#287094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: 'Community Events',
      description: 'Fund workshops, guest speakers, and community gatherings that bring people together to explore faith and reason.'
    },
    {
      id: 2,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#287094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      ),
      title: 'Educational Resources',
      description: 'Create and distribute high-quality books, articles, videos, and study materials for seekers and believers alike.'
    },
    {
      id: 3,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#287094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
      title: 'Outreach Programs',
      description: 'Support our presence at community fairs, university campuses, and public forums where we engage with curious minds.'
    },
    {
      id: 4,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#287094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
      title: 'Digital Platform',
      description: 'Maintain and improve our website, Q&A platform, and online resources accessible to anyone, anywhere.'
    }
  ];

  const waysToDonate = [
    {
      title: 'Online',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#287094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
          <line x1="1" y1="10" x2="23" y2="10"></line>
        </svg>
      ),
      description: 'Secure online giving via the Reasonable Faith website'
    },
    {
      title: 'Check',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#287094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
      ),
      description: 'Mail checks payable to Reasonable Faith'
    },
    {
      title: 'Stock/Securities',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#287094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
      description: 'Contact Reasonable Faith for information on donating appreciated securities'
    },
    {
      title: 'Legacy Giving',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#287094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ),
      description: 'Include Reasonable Faith in your estate planning'
    }
  ];

  return (
    <div style={{
      width: '100%',
      backgroundColor: '#ffffff'
    }}>
      {/* Hero Section */}
      <section style={{
       background: 'linear-gradient(rgba(26, 77, 102, 0.85), rgba(40, 112, 148, 0.85)), url(/images/donate-hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffffff',
        padding: '100px 20px 80px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: '24px',
            lineHeight: '1.2'
          }}>
            Support Our Mission
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
            opacity: 0.95,
            lineHeight: '1.7',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Your generous donation helps us provide thoughtful answers, quality resources, and engaging events that demonstrate Christianity is intellectually credible and personally transformative.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            color: '#287094',
            marginBottom: '20px',
            fontWeight: '700',
            textAlign: 'center'
          }}>
            Your Impact
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.15rem',
            color: '#666',
            marginBottom: '56px',
            maxWidth: '800px',
            margin: '0 auto 56px',
            lineHeight: '1.7'
          }}>
            Every donation directly supports our work in making apologetics accessible and answering life's biggest questions
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {impactAreas.map((area) => (
              <div
                key={area.id}
                onMouseEnter={() => setHoveredCard(area.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '40px 32px',
                  borderRadius: '16px',
                  border: '2px solid',
                  borderColor: hoveredCard === area.id ? '#287094' : '#e0e0e0',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  transform: hoveredCard === area.id ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredCard === area.id ? '0 12px 40px rgba(40, 112, 148, 0.2)' : '0 4px 20px rgba(0,0,0,0.06)'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  {area.icon}
                </div>
                <h3 style={{
                  fontSize: '1.4rem',
                  color: '#287094',
                  marginBottom: '16px',
                  fontWeight: '700'
                }}>
                  {area.title}
                </h3>
                <p style={{
                  fontSize: '1.05rem',
                  color: '#666',
                  lineHeight: '1.7'
                }}>
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Information Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#ffffff'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '48px'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              color: '#287094',
              marginBottom: '20px',
              fontWeight: '700'
            }}>
              Make a Donation
            </h2>
            <p style={{
              fontSize: '1.15rem',
              color: '#666',
              lineHeight: '1.7',
              marginBottom: '32px'
            }}>
              Reasonable Faith Whatcom County is a chapter of Reasonable Faith, a nonprofit organization dedicated to providing an intelligent, articulate, and uncompromising yet gracious Christian perspective on important issues.
            </p>
          </div>

          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '48px',
            borderRadius: '16px',
            border: '2px solid #287094',
            textAlign: 'center'
          }}>
            <div style={{
              marginBottom: '32px'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#287094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 style={{
                fontSize: '1.8rem',
                color: '#287094',
                marginBottom: '16px',
                fontWeight: '700'
              }}>
                Donate to Reasonable Faith
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: '#444',
                lineHeight: '1.7',
                marginBottom: '32px'
              }}>
                Your donation to Reasonable Faith supports apologetics work worldwide, including our local chapter here in Whatcom County. All donations are tax-deductible and go toward equipping believers and reaching seekers with the truth of Christianity.
              </p>
            </div>

            <a
              href="https://www.reasonablefaith.org/donate"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none'
              }}
            >
              <button
                onMouseEnter={() => setHoveredButton('donate')}
                onMouseLeave={() => setHoveredButton(null)}
                style={{
                  padding: '20px 48px',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  backgroundColor: hoveredButton === 'donate' ? '#1a4d66' : '#287094',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  transform: hoveredButton === 'donate' ? 'translateY(-2px)' : 'translateY(0)',
                  boxShadow: hoveredButton === 'donate' ? '0 8px 24px rgba(40, 112, 148, 0.3)' : '0 4px 12px rgba(40, 112, 148, 0.2)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                Donate to Reasonable Faith
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </button>
            </a>

            <p style={{
              fontSize: '0.95rem',
              color: '#666',
              marginTop: '24px',
              fontStyle: 'italic'
            }}>
              You will be redirected to the secure Reasonable Faith donation page
            </p>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            color: '#287094',
            marginBottom: '20px',
            fontWeight: '700',
            textAlign: 'center'
          }}>
            Other Ways to Give
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.15rem',
            color: '#666',
            marginBottom: '56px',
            lineHeight: '1.7'
          }}>
            Choose the giving method that works best for you
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '28px'
          }}>
            {waysToDonate.map((way, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '32px 24px',
                  borderRadius: '12px',
                  border: '2px solid #e0e0e0',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#287094';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(40, 112, 148, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  {way.icon}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  color: '#287094',
                  marginBottom: '12px',
                  fontWeight: '700'
                }}>
                  {way.title}
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#666',
                  lineHeight: '1.6'
                }}>
                  {way.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '48px',
            textAlign: 'center',
            padding: '32px',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            border: '2px solid #287094'
          }}>
            <p style={{
              fontSize: '1.1rem',
              color: '#287094',
              fontWeight: '600',
              marginBottom: '12px'
            }}>
              Questions about giving?
            </p>
            <p style={{
              fontSize: '1rem',
              color: '#444',
              marginBottom: '20px',
              lineHeight: '1.7'
            }}>
              Contact our team at contact@reasonablefaithwc.org or call (360) 555-0123
            </p>
            <button
              onClick={() => setCurrentPage('contact')}
              onMouseEnter={() => setHoveredButton('contactGiving')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                padding: '12px 32px',
                fontSize: '1rem',
                fontWeight: '600',
                backgroundColor: hoveredButton === 'contactGiving' ? '#1a4d66' : '#287094',
                color: '#ffffff',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* About Reasonable Faith */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#ffffff'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            color: '#287094',
            marginBottom: '24px',
            fontWeight: '700'
          }}>
            About Reasonable Faith
          </h2>
          <p style={{
            fontSize: '1.15rem',
            color: '#666',
            marginBottom: '32px',
            lineHeight: '1.8',
            maxWidth: '700px',
            margin: '0 auto 32px'
          }}>
            Reasonable Faith is a nonprofit ministry founded by Dr. William Lane Craig that aims to provide an intelligent, articulate, and uncompromising yet gracious Christian perspective on the most important issues concerning the truth of the Christian faith today.
          </p>

          <p style={{
            fontSize: '1.05rem',
            color: '#444',
            lineHeight: '1.7',
            marginBottom: '32px'
          }}>
            The ministry produces resources including books, articles, podcasts, and videos that address topics in philosophy, theology, science, and apologetics. Reasonable Faith has chapters worldwide that bring this work to local communities.
          </p>

          <div style={{
            display: 'inline-block',
            padding: '24px 32px',
            backgroundColor: '#e8f4f8',
            borderRadius: '12px',
            border: '2px solid #287094'
          }}>
            <p style={{
              fontSize: '1rem',
              color: '#287094',
              fontWeight: '600',
              margin: 0
            }}>
              Reasonable Faith is a 501(c)(3) nonprofit organization
            </p>
            <p style={{
              fontSize: '0.95rem',
              color: '#444',
              margin: '8px 0 0 0'
            }}>
              All donations are tax-deductible
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        padding: '100px 20px',
        background: 'linear-gradient(135deg, #287094 0%, #1a4d66 100%)',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            marginBottom: '24px',
            fontWeight: '700'
          }}>
            Join Us in Defending the Faith
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '32px',
            opacity: 0.95,
            lineHeight: '1.7'
          }}>
            "Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have." - 1 Peter 3:15
          </p>
          <p style={{
            fontSize: '1.1rem',
            opacity: 0.9,
            lineHeight: '1.7'
          }}>
            Your support makes it possible for us to equip believers, answer skeptics, and demonstrate that Christianity is both intellectually credible and spiritually transformative.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;
