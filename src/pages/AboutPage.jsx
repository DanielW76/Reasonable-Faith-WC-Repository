import React, { useState } from 'react';

const AboutPage = ({ setCurrentPage }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  const values = [
    {
      id: 1,
      title: 'Truth-Seeking',
      description: 'We are committed to pursuing truth wherever it leads, using reason, evidence, and careful analysis.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#287094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Intellectual Honesty',
      description: 'We engage with objections fairly, acknowledge complexities, and present arguments with integrity.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#287094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Respectful Dialogue',
      description: 'We treat all people with dignity and respect, creating space for genuine conversation and disagreement.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#287094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Accessible Learning',
      description: 'We make complex ideas understandable, meeting people where they are in their journey of inquiry.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#287094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      )
    }
  ];

  const stats = [
    { number: '10+', label: 'Years Serving', description: 'our community' },
    { number: '500+', label: 'Questions Answered', description: 'with care' },
    { number: '50+', label: 'Events Hosted', description: 'and counting' },
    { number: '100+', label: 'Community Members', description: 'engaged' }
  ];

  return (
    <div style={{
      width: '100%',
      backgroundColor: '#ffffff'
    }}>
      {/* Hero Section with Background Image */}
      <section style={{
        backgroundImage: 'url(/images/theology-hero.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#ffffff',
        padding: '100px 20px 80px',
        textAlign: 'center',
        position: 'relative'
      }}>
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(40, 112, 148, 0.88)',
          zIndex: 1
        }}></div>

        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: '24px',
            lineHeight: '1.2',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            About Us
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
            opacity: 0.95,
            lineHeight: '1.7',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            We are a community dedicated to exploring the rational foundations of Christian faith and providing thoughtful answers to life's deepest questions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#ffffff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'center'
          }}>
            {/* Left Column - Text */}
            <div>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                color: '#287094',
                marginBottom: '28px',
                fontWeight: '700',
                lineHeight: '1.2'
              }}>
                Our Mission
              </h2>
              <p style={{
                fontSize: '1.15rem',
                color: '#444',
                lineHeight: '1.8',
                marginBottom: '24px'
              }}>
                Reasonable Faith Whatcom County exists to equip individuals with intellectual resources to defend and articulate the Christian faith with clarity, confidence, and compassion.
              </p>
              <p style={{
                fontSize: '1.15rem',
                color: '#444',
                lineHeight: '1.8',
                marginBottom: '24px'
              }}>
                We believe that Christianity is not only spiritually true but also intellectually credible. Through education, dialogue, and community engagement, we demonstrate that faith and reason work together harmoniously.
              </p>
              <p style={{
                fontSize: '1.15rem',
                color: '#444',
                lineHeight: '1.8'
              }}>
                Whether you're a skeptic with honest questions, a seeker exploring faith, or a believer wanting to deepen your understanding, we're here to walk alongside you.
              </p>
            </div>

            {/* Right Column - Icon Feature */}
            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '60px 40px',
              borderRadius: '20px',
              border: '3px solid #287094',
              textAlign: 'center'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '28px'
              }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: '#287094',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
              </div>
              <h3 style={{
                fontSize: '1.8rem',
                color: '#287094',
                marginBottom: '16px',
                fontWeight: '700'
              }}>
                Building Bridges
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                lineHeight: '1.7'
              }}>
                Between faith and reason, belief and evidence, the church and the academy, doubt and confidence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Image Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#ffffff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              color: '#287094',
              marginBottom: '20px',
              fontWeight: '700'
            }}>
              Our Community
            </h2>
            <p style={{
              fontSize: '1.15rem',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              A welcoming space for seekers, skeptics, and believers to explore faith together
            </p>
          </div>
          
          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            border: '4px solid #287094'
          }}>
            <img 
              src="/images/church-community-conversation.jpg" 
              alt="Community gathering - people engaging in meaningful conversation"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'cover',
                maxHeight: '600px'
              }}
            />
          </div>
          
          <div style={{
            textAlign: 'center',
            marginTop: '32px',
            padding: '0 20px'
          }}>
            <p style={{
              fontSize: '1.05rem',
              color: '#666',
              fontStyle: 'italic',
              lineHeight: '1.7'
            }}>
              Join us for thoughtful dialogue, genuine friendships, and a community that values both questions and answers.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              color: '#287094',
              marginBottom: '20px',
              fontWeight: '700'
            }}>
              Our Core Values
            </h2>
            <p style={{
              fontSize: '1.15rem',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              The principles that guide everything we do
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {values.map((value) => (
              <div
                key={value.id}
                onMouseEnter={() => setHoveredCard(value.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '40px 32px',
                  borderRadius: '16px',
                  boxShadow: hoveredCard === value.id 
                    ? '0 12px 40px rgba(40, 112, 148, 0.2)' 
                    : '0 4px 20px rgba(0,0,0,0.06)',
                  border: '2px solid',
                  borderColor: hoveredCard === value.id ? '#287094' : '#e0e0e0',
                  transition: 'all 0.3s ease',
                  transform: hoveredCard === value.id ? 'translateY(-8px)' : 'translateY(0)',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  {value.icon}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: '#287094',
                  marginBottom: '16px',
                  fontWeight: '700'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  fontSize: '1.05rem',
                  color: '#666',
                  lineHeight: '1.7'
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#ffffff'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            color: '#287094',
            marginBottom: '40px',
            fontWeight: '700',
            textAlign: 'center'
          }}>
            What We Believe
          </h2>

          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '50px 40px',
            borderRadius: '16px',
            border: '2px solid #e0e0e0'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px'
            }}>
              <div>
                <h3 style={{
                  fontSize: '1.4rem',
                  color: '#287094',
                  marginBottom: '12px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#287094',
                    borderRadius: '50%',
                    display: 'inline-block'
                  }}></span>
                  Christianity is True
                </h3>
                <p style={{
                  fontSize: '1.05rem',
                  color: '#444',
                  lineHeight: '1.8',
                  paddingLeft: '20px'
                }}>
                  We believe Christianity corresponds to reality and can be defended through philosophical arguments, historical evidence, and scientific inquiry.
                </p>
              </div>

              <div>
                <h3 style={{
                  fontSize: '1.4rem',
                  color: '#287094',
                  marginBottom: '12px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#287094',
                    borderRadius: '50%',
                    display: 'inline-block'
                  }}></span>
                  Faith and Reason are Compatible
                </h3>
                <p style={{
                  fontSize: '1.05rem',
                  color: '#444',
                  lineHeight: '1.8',
                  paddingLeft: '20px'
                }}>
                  We reject the false dichotomy between faith and reason. Biblical faith is trust based on evidence, not blind belief despite evidence.
                </p>
              </div>

              <div>
                <h3 style={{
                  fontSize: '1.4rem',
                  color: '#287094',
                  marginBottom: '12px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#287094',
                    borderRadius: '50%',
                    display: 'inline-block'
                  }}></span>
                  Questions are Welcome
                </h3>
                <p style={{
                  fontSize: '1.05rem',
                  color: '#444',
                  lineHeight: '1.8',
                  paddingLeft: '20px'
                }}>
                  We embrace honest questions and intellectual challenges. Doubt is not the opposite of faith—it's an element of it. Asking hard questions strengthens rather than weakens genuine faith.
                </p>
              </div>

              <div>
                <h3 style={{
                  fontSize: '1.4rem',
                  color: '#287094',
                  marginBottom: '12px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#287094',
                    borderRadius: '50%',
                    display: 'inline-block'
                  }}></span>
                  Love Drives Everything
                </h3>
                <p style={{
                  fontSize: '1.05rem',
                  color: '#444',
                  lineHeight: '1.8',
                  paddingLeft: '20px'
                }}>
                  Our apologetics is motivated by love for God and love for people. We defend the faith not to win arguments but to help people discover the truth that transforms lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
            marginBottom: '60px',
            fontWeight: '700',
            textAlign: 'center'
          }}>
            Our Impact
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '32px'
          }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '40px 30px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  border: '2px solid #e0e0e0'
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '800',
                  color: '#287094',
                  marginBottom: '12px',
                  lineHeight: '1'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: '#444',
                  marginBottom: '8px'
                }}>
                  {stat.label}
                </div>
                <div style={{
                  fontSize: '0.95rem',
                  color: '#666',
                  fontStyle: 'italic'
                }}>
                  {stat.description}
                </div>
              </div>
            ))}
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
            Join Our Community
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '48px',
            opacity: 0.95,
            lineHeight: '1.7'
          }}>
            Whether you're seeking answers, want to grow in your faith, or simply enjoy thoughtful conversation, we'd love to connect with you.
          </p>
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => setCurrentPage('events')}
              onMouseEnter={() => setHoveredButton('events')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                padding: '18px 42px',
                fontSize: '1.1rem',
                fontWeight: '600',
                backgroundColor: hoveredButton === 'events' ? '#ffffff' : 'transparent',
                color: hoveredButton === 'events' ? '#287094' : '#ffffff',
                border: '2px solid #ffffff',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: hoveredButton === 'events' ? 'translateY(-3px)' : 'translateY(0)'
              }}
            >
              Attend an Event
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              onMouseEnter={() => setHoveredButton('contact')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                padding: '18px 42px',
                fontSize: '1.1rem',
                fontWeight: '600',
                backgroundColor: hoveredButton === 'contact' ? '#ffffff' : 'transparent',
                color: hoveredButton === 'contact' ? '#287094' : '#ffffff',
                border: '2px solid #ffffff',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: hoveredButton === 'contact' ? 'translateY(-3px)' : 'translateY(0)'
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
