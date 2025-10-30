import React, { useState } from 'react';

const HomePage = ({ setCurrentPage }) => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setCurrentPage('qa');
    }
  };

  const featuredTopics = [
    {
      id: 1,
      title: 'Theology',
      description: 'Explore fundamental questions about God, faith, and Christian doctrine.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Scripture',
      description: 'Discover the historical reliability and interpretation of the Bible.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Philosophy',
      description: 'Engage with rational arguments and philosophical foundations of faith.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>
      )
    }
  ];

  return (
    <div style={{
      width: '100%',
      backgroundColor: '#ffffff'
    }}>
      {/* Hero Section with Background Image */}
      <section style={{
        backgroundImage: 'url(/images/hero-home.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#ffffff',
        padding: '120px 20px 100px',
        textAlign: 'center',
        position: 'relative'
      }}>
        {/* Overlay for better text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(40, 112, 148, 0.85)',
          zIndex: 1
        }}></div>

        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '800',
            marginBottom: '24px',
            lineHeight: '1.2',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Reasonable Faith Whatcom County
          </h1>
          <p style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
            lineHeight: '1.7',
            marginBottom: '40px',
            opacity: 0.95,
            maxWidth: '800px',
            margin: '0 auto 40px',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}>
            Exploring Christian apologetics with thoughtful answers to life's biggest questions about faith, reason, and truth.
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} style={{
            maxWidth: '600px',
            margin: '0 auto 40px',
            position: 'relative'
          }}>
            <div style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center'
            }}>
              <input
                type="text"
                placeholder="Search questions or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '18px 60px 18px 24px',
                  fontSize: '1.1rem',
                  border: 'none',
                  borderRadius: '50px',
                  outline: 'none',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                  backgroundColor: '#ffffff',
                  color: '#333'
                }}
              />
              <button
                type="submit"
                style={{
                  position: 'absolute',
                  right: '8px',
                  padding: '12px 24px',
                  backgroundColor: '#287094',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a4d66'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#287094'}
              >
                Search
              </button>
            </div>
          </form>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => setCurrentPage('qa')}
              onMouseEnter={() => setHoveredButton('qa')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                padding: '18px 40px',
                fontSize: '1.1rem',
                fontWeight: '700',
                backgroundColor: hoveredButton === 'qa' ? '#ffffff' : 'rgba(255,255,255,0.2)',
                color: hoveredButton === 'qa' ? '#287094' : '#ffffff',
                border: '2px solid #ffffff',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
            >
              Explore Questions
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              onMouseEnter={() => setHoveredButton('about')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                padding: '18px 40px',
                fontSize: '1.1rem',
                fontWeight: '700',
                backgroundColor: hoveredButton === 'about' ? '#ffffff' : 'transparent',
                color: hoveredButton === 'about' ? '#287094' : '#ffffff',
                border: '2px solid #ffffff',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Featured Topics Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#ffffff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            color: '#287094',
            textAlign: 'center',
            marginBottom: '20px',
            fontWeight: '700'
          }}>
            What We Explore
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            color: '#666',
            marginBottom: '60px',
            maxWidth: '700px',
            margin: '0 auto 60px',
            lineHeight: '1.7'
          }}>
            Discover thoughtful answers to questions about Christianity, faith, and reason
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {featuredTopics.map((topic) => (
              <div
                key={topic.id}
                onMouseEnter={() => setHoveredCard(topic.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setCurrentPage('qa')}
                style={{
                  backgroundColor: '#f8f9fa',
                  padding: '40px 32px',
                  borderRadius: '16px',
                  border: '2px solid',
                  borderColor: hoveredCard === topic.id ? '#287094' : '#e0e0e0',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  transform: hoveredCard === topic.id ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredCard === topic.id ? '0 12px 32px rgba(40, 112, 148, 0.2)' : '0 4px 12px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{
                  color: '#287094',
                  marginBottom: '20px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {topic.icon}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: '#287094',
                  marginBottom: '12px',
                  fontWeight: '700',
                  textAlign: 'center'
                }}>
                  {topic.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#666',
                  lineHeight: '1.7',
                  textAlign: 'center'
                }}>
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section with Image */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '60px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            flex: '1 1 450px',
            minWidth: '300px'
          }}>
            <img 
              src="/images/community-events.png" 
              alt="Community gathering"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
              }}
            />
          </div>
          <div style={{
            flex: '1 1 450px',
            minWidth: '300px'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              color: '#287094',
              marginBottom: '24px',
              fontWeight: '700'
            }}>
              Join Our Community
            </h2>
            <p style={{
              fontSize: '1.15rem',
              color: '#444',
              lineHeight: '1.8',
              marginBottom: '24px'
            }}>
              We're a welcoming community dedicated to exploring faith through reason and evidence. Whether you're a skeptic, seeker, or believer, you'll find thoughtful dialogue and genuine relationships here.
            </p>
            <p style={{
              fontSize: '1.15rem',
              color: '#444',
              lineHeight: '1.8',
              marginBottom: '32px'
            }}>
              Through regular events, discussions, and resources, we create space for honest questions and meaningful conversations about Christianity and apologetics.
            </p>
            <button
              onClick={() => setCurrentPage('events')}
              onMouseEnter={() => setHoveredButton('events')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                padding: '16px 40px',
                fontSize: '1.1rem',
                fontWeight: '700',
                backgroundColor: hoveredButton === 'events' ? '#1a4d66' : '#287094',
                color: '#ffffff',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 16px rgba(40, 112, 148, 0.3)'
              }}
            >
              View Upcoming Events
            </button>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#ffffff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            color: '#287094',
            textAlign: 'center',
            marginBottom: '60px',
            fontWeight: '700'
          }}>
            Get Started
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px'
          }}>
            <div
              onClick={() => setCurrentPage('qa')}
              onMouseEnter={() => setHoveredCard('qa-link')}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                padding: '32px',
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                border: '2px solid',
                borderColor: hoveredCard === 'qa-link' ? '#287094' : '#e0e0e0',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: hoveredCard === 'qa-link' ? 'translateY(-4px)' : 'translateY(0)'
              }}
            >
              <h3 style={{
                fontSize: '1.4rem',
                color: '#287094',
                marginBottom: '12px',
                fontWeight: '700'
              }}>
                Questions & Answers
              </h3>
              <p style={{
                fontSize: '1rem',
                color: '#666',
                lineHeight: '1.7'
              }}>
                Browse answers to common questions about faith, God, the Bible, and more.
              </p>
            </div>

            <div
              onClick={() => setCurrentPage('resources')}
              onMouseEnter={() => setHoveredCard('resources-link')}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                padding: '32px',
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                border: '2px solid',
                borderColor: hoveredCard === 'resources-link' ? '#287094' : '#e0e0e0',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: hoveredCard === 'resources-link' ? 'translateY(-4px)' : 'translateY(0)'
              }}
            >
              <h3 style={{
                fontSize: '1.4rem',
                color: '#287094',
                marginBottom: '12px',
                fontWeight: '700'
              }}>
                Resources
              </h3>
              <p style={{
                fontSize: '1rem',
                color: '#666',
                lineHeight: '1.7'
              }}>
                Access books, videos, articles, and other materials for deeper study.
              </p>
            </div>

            <div
              onClick={() => setCurrentPage('contact')}
              onMouseEnter={() => setHoveredCard('contact-link')}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                padding: '32px',
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                border: '2px solid',
                borderColor: hoveredCard === 'contact-link' ? '#287094' : '#e0e0e0',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: hoveredCard === 'contact-link' ? 'translateY(-4px)' : 'translateY(0)'
              }}
            >
              <h3 style={{
                fontSize: '1.4rem',
                color: '#287094',
                marginBottom: '12px',
                fontWeight: '700'
              }}>
                Get in Touch
              </h3>
              <p style={{
                fontSize: '1rem',
                color: '#666',
                lineHeight: '1.7'
              }}>
                Have questions or want to connect? We'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{
        padding: '100px 20px',
        background: 'linear-gradient(135deg, #287094 0%, #1a4d66 100%)',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            marginBottom: '24px',
            fontWeight: '700'
          }}>
            Have a Question?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '40px',
            opacity: 0.95,
            lineHeight: '1.7'
          }}>
            Don't see an answer to your question? Submit it and our team will provide a thoughtful, researched response.
          </p>
          <button
            onClick={() => setCurrentPage('qa')}
            onMouseEnter={() => setHoveredButton('submit')}
            onMouseLeave={() => setHoveredButton(null)}
            style={{
              padding: '18px 48px',
              fontSize: '1.1rem',
              fontWeight: '700',
              backgroundColor: hoveredButton === 'submit' ? '#ffffff' : 'transparent',
              color: hoveredButton === 'submit' ? '#287094' : '#ffffff',
              border: '2px solid #ffffff',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Submit Your Question
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;