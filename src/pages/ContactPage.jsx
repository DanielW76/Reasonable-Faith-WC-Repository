import React, { useState } from 'react';

const ContactPage = ({ setCurrentPage }) => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactReason: 'general'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you within 24-48 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      contactReason: 'general'
    });
  };

  const contactReasons = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'event', label: 'Event Information' },
    { value: 'speaker', label: 'Speaking Request' },
    { value: 'question', label: 'Submit a Question' },
    { value: 'volunteer', label: 'Volunteer Opportunities' },
    { value: 'donation', label: 'Donation Information' },
    { value: 'resources', label: 'Resource Recommendation' },
    { value: 'other', label: 'Other' }
  ];

  const contactMethods = [
    {
      id: 1,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#287094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      title: 'Email Us',
      detail: 'contact@reasonablefaithwc.org',
      link: 'mailto:contact@reasonablefaithwc.org',
      description: 'Send us an email anytime'
    },
    {
      id: 2,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#287094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: 'Call Us',
      detail: '(360) 555-0123',
      link: 'tel:+13605550123',
      description: 'Mon-Fri 9am-5pm PST'
    },
    {
      id: 3,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#287094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: 'Visit Us',
      detail: 'Bellingham, WA',
      link: 'https://maps.google.com',
      description: 'Meeting locations vary by event'
    },
    {
      id: 4,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#287094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
      title: 'Social Media',
      detail: '@ReasonableFaithWC',
      link: 'https://facebook.com',
      description: 'Connect with us online'
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: 'https://facebook.com'
    },
    {
      name: 'Twitter',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      url: 'https://twitter.com'
    },
    {
      name: 'YouTube',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      url: 'https://youtube.com'
    },
    {
      name: 'Instagram',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
        </svg>
      ),
      url: 'https://instagram.com'
    }
  ];

  return (
    <div style={{
      width: '100%',
      backgroundColor: '#ffffff'
    }}>
      {/* Hero Section */}
      <section style={{
       background: 'linear-gradient(rgba(26, 77, 102, 0.85), rgba(40, 112, 148, 0.85)), url(/images/Computer-typing.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
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
            Get In Touch
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
            opacity: 0.95,
            lineHeight: '1.7',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Have questions? Want to get involved? We'd love to hear from you. Reach out and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Methods Section */}
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
            marginBottom: '48px',
            fontWeight: '700',
            textAlign: 'center'
          }}>
            Ways to Contact Us
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '32px'
          }}>
            {contactMethods.map((method) => (
              <a
                key={method.id}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                style={{
                  textDecoration: 'none'
                }}
              >
                <div
                  onMouseEnter={() => setHoveredCard(method.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '40px 32px',
                    borderRadius: '16px',
                    border: '2px solid',
                    borderColor: hoveredCard === method.id ? '#287094' : '#e0e0e0',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    transform: hoveredCard === method.id ? 'translateY(-8px)' : 'translateY(0)',
                    boxShadow: hoveredCard === method.id ? '0 12px 40px rgba(40, 112, 148, 0.2)' : '0 4px 20px rgba(0,0,0,0.06)',
                    cursor: 'pointer',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <div style={{
                    marginBottom: '20px'
                  }}>
                    {method.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.4rem',
                    color: '#287094',
                    marginBottom: '12px',
                    fontWeight: '700'
                  }}>
                    {method.title}
                  </h3>
                  <p style={{
                    fontSize: '1.05rem',
                    color: '#444',
                    marginBottom: '8px',
                    fontWeight: '600'
                  }}>
                    {method.detail}
                  </p>
                  <p style={{
                    fontSize: '0.95rem',
                    color: '#666',
                    lineHeight: '1.6'
                  }}>
                    {method.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
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
              Send Us a Message
            </h2>
            <p style={{
              fontSize: '1.15rem',
              color: '#666',
              lineHeight: '1.7'
            }}>
              Fill out the form below and we'll get back to you within 24-48 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{
            backgroundColor: '#f8f9fa',
            padding: '48px',
            borderRadius: '16px',
            border: '2px solid #e0e0e0'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              {/* Name and Email Row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '24px'
              }}>
                {/* Name Field */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#444',
                    marginBottom: '8px'
                  }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      fontSize: '1rem',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      outline: 'none',
                      transition: 'border-color 0.3s ease',
                      boxSizing: 'border-box',
                      backgroundColor: '#ffffff'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#287094'}
                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#444',
                    marginBottom: '8px'
                  }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      fontSize: '1rem',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      outline: 'none',
                      transition: 'border-color 0.3s ease',
                      boxSizing: 'border-box',
                      backgroundColor: '#ffffff'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#287094'}
                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                  />
                </div>
              </div>

              {/* Phone and Contact Reason Row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '24px'
              }}>
                {/* Phone Field */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#444',
                    marginBottom: '8px'
                  }}>
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      fontSize: '1rem',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      outline: 'none',
                      transition: 'border-color 0.3s ease',
                      boxSizing: 'border-box',
                      backgroundColor: '#ffffff'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#287094'}
                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                  />
                </div>

                {/* Contact Reason Field */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#444',
                    marginBottom: '8px'
                  }}>
                    Reason for Contact *
                  </label>
                  <select
                    name="contactReason"
                    value={formData.contactReason}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      fontSize: '1rem',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      outline: 'none',
                      transition: 'border-color 0.3s ease',
                      backgroundColor: '#ffffff',
                      cursor: 'pointer',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#287094'}
                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                  >
                    {contactReasons.map((reason) => (
                      <option key={reason.value} value={reason.value}>
                        {reason.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#444',
                  marginBottom: '8px'
                }}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: '1rem',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                    boxSizing: 'border-box',
                    backgroundColor: '#ffffff'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#287094'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>

              {/* Message Field */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#444',
                  marginBottom: '8px'
                }}>
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Tell us how we can help you..."
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: '1rem',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                    backgroundColor: '#ffffff'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#287094'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onMouseEnter={() => setHoveredButton('submit')}
                onMouseLeave={() => setHoveredButton(null)}
                style={{
                  padding: '18px 48px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  backgroundColor: hoveredButton === 'submit' ? '#1a4d66' : '#287094',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  marginTop: '8px',
                  transform: hoveredButton === 'submit' ? 'translateY(-2px)' : 'translateY(0)',
                  boxShadow: hoveredButton === 'submit' ? '0 8px 24px rgba(40, 112, 148, 0.3)' : '0 4px 12px rgba(40, 112, 148, 0.2)'
                }}
              >
                Send Message
              </button>

              <p style={{
                fontSize: '0.9rem',
                color: '#666',
                textAlign: 'center',
                marginTop: '8px',
                fontStyle: 'italic'
              }}>
                We typically respond within 24-48 hours
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Social Media Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            color: '#287094',
            marginBottom: '20px',
            fontWeight: '700'
          }}>
            Connect With Us
          </h2>
          <p style={{
            fontSize: '1.15rem',
            color: '#666',
            marginBottom: '48px',
            lineHeight: '1.7'
          }}>
            Follow us on social media for updates, resources, and community discussions
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap'
          }}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredButton(social.name)}
                onMouseLeave={() => setHoveredButton(null)}
                style={{
                  width: '64px',
                  height: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: hoveredButton === social.name ? '#287094' : '#ffffff',
                  color: hoveredButton === social.name ? '#ffffff' : '#287094',
                  borderRadius: '50%',
                  border: '2px solid #287094',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  transform: hoveredButton === social.name ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: hoveredButton === social.name ? '0 8px 24px rgba(40, 112, 148, 0.3)' : '0 2px 8px rgba(0,0,0,0.1)'
                }}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#ffffff'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            color: '#287094',
            marginBottom: '20px',
            fontWeight: '700',
            textAlign: 'center'
          }}>
            Quick Questions
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.1rem',
            color: '#666',
            marginBottom: '48px',
            lineHeight: '1.7'
          }}>
            Before you reach out, here are answers to some common questions
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            {[
              {
                question: 'How quickly will I receive a response?',
                answer: 'We aim to respond to all inquiries within 24-48 hours during business days. For urgent matters, please call us directly.'
              },
              {
                question: 'Do you offer one-on-one apologetics counseling?',
                answer: 'Yes! We\'re happy to meet with individuals who have questions or want to explore apologetics topics in depth. Contact us to schedule a conversation.'
              },
              {
                question: 'Can you speak at our church or organization?',
                answer: 'Absolutely! We love opportunities to share about apologetics. Please use the contact form above and select "Speaking Request" to tell us about your event.'
              },
              {
                question: 'How can I volunteer or get involved?',
                answer: 'We welcome volunteers! Select "Volunteer Opportunities" in the contact form, and we\'ll share current ways you can serve with us.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#f8f9fa',
                  padding: '28px 32px',
                  borderRadius: '12px',
                  border: '2px solid #e0e0e0',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#287094';
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0';
                  e.currentTarget.style.backgroundColor = '#f8f9fa';
                }}
              >
                <h3 style={{
                  fontSize: '1.2rem',
                  color: '#287094',
                  marginBottom: '12px',
                  fontWeight: '700',
                  lineHeight: '1.4'
                }}>
                  {faq.question}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#444',
                  lineHeight: '1.7',
                  margin: 0
                }}>
                  {faq.answer}
                </p>
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
            Ready to Learn More?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '48px',
            opacity: 0.95,
            lineHeight: '1.7'
          }}>
            Explore our events, resources, and Q&A to dive deeper into apologetics
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
              View Events
            </button>
            <button
              onClick={() => setCurrentPage('resources')}
              onMouseEnter={() => setHoveredButton('resources')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                padding: '18px 42px',
                fontSize: '1.1rem',
                fontWeight: '600',
                backgroundColor: hoveredButton === 'resources' ? '#ffffff' : 'transparent',
                color: hoveredButton === 'resources' ? '#287094' : '#ffffff',
                border: '2px solid #ffffff',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: hoveredButton === 'resources' ? 'translateY(-3px)' : 'translateY(0)'
              }}
            >
              Browse Resources
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
