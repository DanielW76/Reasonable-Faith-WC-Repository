import React, { useState, useEffect } from 'react';

const EventsPage = ({ setCurrentPage }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // API endpoint - adjust this to match your domain
  const API_URL = '/api/events.php';

  // Load events from server
  useEffect(() => {
    const loadEvents = async () => {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const data = await response.json();
          setUpcomingEvents(data);
        } else {
          console.error('Failed to load events');
        }
      } catch (error) {
        console.error('Error loading events:', error);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
    
    // Refresh events every 30 seconds to show updates
    const interval = setInterval(loadEvents, 30000);
    
    return () => clearInterval(interval);
  }, []);

  // Calendar helper functions
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek, year, month };
  };

  const getEventForDate = (date) => {
    return upcomingEvents.find(event => {
      let eventDate;
      if (event.date.includes('-')) {
        eventDate = new Date(event.date);
      } else {
        eventDate = new Date(event.date);
      }
      
      return eventDate.getDate() === date && 
             eventDate.getMonth() === currentMonth.getMonth() &&
             eventDate.getFullYear() === currentMonth.getFullYear();
    });
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                      'July', 'August', 'September', 'October', 'November', 'December'];

  const pastEvents = [
    {
      id: 1,
      title: 'The Historical Jesus Conference',
      date: 'September 2025',
      description: 'A deep dive into the historical evidence for Jesus Christ with presentations from biblical scholars.',
      attendees: '75 attendees'
    },
    {
      id: 2,
      title: 'Science & Faith Symposium',
      date: 'August 2025',
      description: 'Exploring the harmony between scientific discovery and Christian faith with guest speakers from various scientific fields.',
      attendees: '60 attendees'
    },
    {
      id: 3,
      title: 'Community Outreach Fair',
      date: 'July 2025',
      description: 'Public engagement booth at the Whatcom County Fair providing resources and answering questions about Christianity.',
      attendees: '200+ conversations'
    }
  ];

  const eventTypes = [
    { id: 'all', label: 'All Events', count: upcomingEvents.length },
    { id: 'Discussion', label: 'Discussions', count: upcomingEvents.filter(e => e.category === 'Discussion').length },
    { id: 'Workshop', label: 'Workshops', count: upcomingEvents.filter(e => e.category === 'Workshop').length },
    { id: 'Speaker', label: 'Speaker Events', count: upcomingEvents.filter(e => e.category === 'Speaker').length },
    { id: 'Social', label: 'Social', count: upcomingEvents.filter(e => e.category === 'Social').length }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === selectedCategory);

  const getCategoryColor = (category) => {
    const colors = {
      'Discussion': '#287094',
      'Workshop': '#2c5f7a',
      'Speaker': '#1a4d66',
      'Social': '#3d8bb3'
    };
    return colors[category] || '#287094';
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{
          fontSize: '1.2rem',
          color: '#287094',
          fontWeight: '600'
        }}>
          Loading events...
        </div>
      </div>
    );
  }

  return (
    <div style={{
      width: '100%',
      backgroundColor: '#ffffff'
    }}>
      {/* Hero Section */}
      <section style={{
        backgroundImage: 'linear-gradient(rgba(26, 77, 102, 0.85), rgba(40, 112, 148, 0.85)), url("/images/Events-page.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
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
            Events & Programs
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
            opacity: 0.95,
            lineHeight: '1.7',
            maxWidth: '800px',
            margin: '0 auto 32px'
          }}>
            Join us for engaging discussions, workshops, and community gatherings designed to explore faith, reason, and life's biggest questions.
          </p>
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              onMouseEnter={() => setHoveredButton('calendar')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                padding: '16px 40px',
                fontSize: '1.1rem',
                fontWeight: '600',
                backgroundColor: hoveredButton === 'calendar' ? '#ffffff' : 'transparent',
                color: hoveredButton === 'calendar' ? '#287094' : '#ffffff',
                border: '2px solid #ffffff',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: hoveredButton === 'calendar' ? 'translateY(-3px)' : 'translateY(0)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              {showCalendar ? 'Hide Calendar' : 'View Calendar'}
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              onMouseEnter={() => setHoveredButton('notify')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                padding: '16px 40px',
                fontSize: '1.1rem',
                fontWeight: '600',
                backgroundColor: hoveredButton === 'notify' ? '#ffffff' : 'transparent',
                color: hoveredButton === 'notify' ? '#287094' : '#ffffff',
                border: '2px solid #ffffff',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: hoveredButton === 'notify' ? 'translateY(-3px)' : 'translateY(0)'
              }}
            >
              Get Event Notifications
            </button>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      {showCalendar && (
        <section style={{
          padding: '60px 20px',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e0e0e0'
        }}>
          <div style={{
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <div style={{
              backgroundColor: '#f8f9fa',
              borderRadius: '16px',
              padding: '32px',
              border: '2px solid #e0e0e0'
            }}>
              {/* Calendar Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '32px',
                flexWrap: 'wrap',
                gap: '16px'
              }}>
                <button
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#287094',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a4d66'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#287094'}
                >
                  ← Previous
                </button>
                
                <h3 style={{
                  fontSize: '1.8rem',
                  color: '#287094',
                  fontWeight: '700',
                  margin: 0
                }}>
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h3>
                
                <button
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#287094',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a4d66'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#287094'}
                >
                  Next →
                </button>
              </div>

              {/* Calendar Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: '8px'
              }}>
                {/* Day Headers */}
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} style={{
                    padding: '12px',
                    textAlign: 'center',
                    fontWeight: '700',
                    color: '#287094',
                    fontSize: '0.9rem'
                  }}>
                    {day}
                  </div>
                ))}

                {/* Calendar Days */}
                {(() => {
                  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);
                  const days = [];
                  
                  // Empty cells before first day
                  for (let i = 0; i < startingDayOfWeek; i++) {
                    days.push(
                      <div key={`empty-${i}`} style={{
                        padding: '12px',
                        backgroundColor: 'transparent'
                      }} />
                    );
                  }
                  
                  // Actual days
                  for (let day = 1; day <= daysInMonth; day++) {
                    const event = getEventForDate(day);
                    const isToday = new Date().getDate() === day && 
                                    new Date().getMonth() === currentMonth.getMonth() &&
                                    new Date().getFullYear() === currentMonth.getFullYear();
                    
                    days.push(
                      <div
                        key={day}
                        onClick={() => event && setSelectedDate(event)}
                        style={{
                          padding: '12px',
                          textAlign: 'center',
                          backgroundColor: event ? '#287094' : (isToday ? '#e8f4f8' : '#ffffff'),
                          color: event ? '#ffffff' : '#444',
                          borderRadius: '8px',
                          cursor: event ? 'pointer' : 'default',
                          fontWeight: event || isToday ? '700' : '400',
                          border: isToday && !event ? '2px solid #287094' : 'none',
                          transition: 'all 0.3s ease',
                          position: 'relative'
                        }}
                        onMouseEnter={(e) => {
                          if (event) {
                            e.currentTarget.style.backgroundColor = '#1a4d66';
                            e.currentTarget.style.transform = 'scale(1.05)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (event) {
                            e.currentTarget.style.backgroundColor = '#287094';
                            e.currentTarget.style.transform = 'scale(1)';
                          }
                        }}
                      >
                        {day}
                        {event && (
                          <div style={{
                            width: '6px',
                            height: '6px',
                            backgroundColor: '#ffffff',
                            borderRadius: '50%',
                            position: 'absolute',
                            bottom: '4px',
                            left: '50%',
                            transform: 'translateX(-50%)'
                          }} />
                        )}
                      </div>
                    );
                  }
                  
                  return days;
                })()}
              </div>

              {/* Selected Event Display */}
              {selectedDate && (
                <div style={{
                  marginTop: '32px',
                  padding: '24px',
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  border: '2px solid #287094'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '16px'
                  }}>
                    <h4 style={{
                      fontSize: '1.4rem',
                      color: '#287094',
                      fontWeight: '700',
                      margin: 0
                    }}>
                      {selectedDate.title}
                    </h4>
                    <button
                      onClick={() => setSelectedDate(null)}
                      style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '1.5rem',
                        color: '#666',
                        cursor: 'pointer',
                        padding: '0',
                        lineHeight: '1'
                      }}
                    >
                      ×
                    </button>
                  </div>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    marginBottom: '12px'
                  }}>
                    <strong>{selectedDate.date}</strong> • {selectedDate.time}
                  </p>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    marginBottom: '12px'
                  }}>
                    📍 {selectedDate.location}
                  </p>
                  <p style={{
                    fontSize: '1rem',
                    color: '#444',
                    lineHeight: '1.6'
                  }}>
                    {selectedDate.description}
                  </p>
                </div>
              )}

              {/* Calendar Legend */}
              <div style={{
                marginTop: '24px',
                display: 'flex',
                gap: '24px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                fontSize: '0.9rem',
                color: '#666'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#287094',
                    borderRadius: '4px'
                  }} />
                  <span>Event Day</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#e8f4f8',
                    borderRadius: '4px',
                    border: '2px solid #287094'
                  }} />
                  <span>Today</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Event Categories Filter */}
      <section style={{
        padding: '40px 20px 20px',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {eventTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedCategory(type.id)}
                onMouseEnter={() => setHoveredButton(type.id)}
                onMouseLeave={() => setHoveredButton(null)}
                style={{
                  padding: '12px 24px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: selectedCategory === type.id ? '#ffffff' : (hoveredButton === type.id ? '#287094' : '#666'),
                  backgroundColor: selectedCategory === type.id ? '#287094' : (hoveredButton === type.id ? '#e8f4f8' : '#ffffff'),
                  border: '2px solid',
                  borderColor: selectedCategory === type.id ? '#287094' : '#e0e0e0',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {type.label}
                <span style={{
                  backgroundColor: selectedCategory === type.id ? 'rgba(255,255,255,0.3)' : '#e8f4f8',
                  color: selectedCategory === type.id ? '#ffffff' : '#287094',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  fontSize: '0.85rem',
                  fontWeight: '700'
                }}>
                  {type.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section - Continuing in next part due to length... */}
      <section style={{
        padding: '60px 20px 80px',
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
            Upcoming Events
          </h2>

          {filteredEvents.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '2px solid #e0e0e0'
            }}>
              <p style={{
                fontSize: '1.2rem',
                color: '#666',
                marginBottom: '20px'
              }}>
                No events found in this category.
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                style={{
                  padding: '12px 32px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  backgroundColor: '#287094',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer'
                }}
              >
                View All Events
              </button>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '32px'
            }}>
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  onMouseEnter={() => setHoveredCard(event.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    boxShadow: hoveredCard === event.id 
                      ? '0 12px 40px rgba(40, 112, 148, 0.2)' 
                      : '0 4px 20px rgba(0,0,0,0.08)',
                    border: '2px solid',
                    borderColor: hoveredCard === event.id ? '#287094' : '#e0e0e0',
                    transition: 'all 0.3s ease',
                    transform: hoveredCard === event.id ? 'translateY(-8px)' : 'translateY(0)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    overflow: 'hidden'
                  }}
                >
                  {/* Event Image */}
                  <div style={{
                    width: '100%',
                    height: '200px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img 
                      src={event.image} 
                      alt={event.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                        transform: hoveredCard === event.id ? 'scale(1.05)' : 'scale(1)'
                      }}
                    />
                    {/* Category Badge on Image */}
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      padding: '6px 14px',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      color: getCategoryColor(event.category),
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}>
                      {event.category}
                    </div>
                  </div>

                  {/* Event Content */}
                  <div style={{
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1
                  }}>
                  {/* Event Title */}
                  <h3 style={{
                    fontSize: '1.5rem',
                    color: '#287094',
                    marginBottom: '16px',
                    fontWeight: '700',
                    lineHeight: '1.3',
                    flex: '0 0 auto'
                  }}>
                    {event.title}
                  </h3>

                  {/* Event Details */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    marginBottom: '20px',
                    flex: '0 0 auto'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#287094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <div>
                        <div style={{
                          fontSize: '0.95rem',
                          fontWeight: '600',
                          color: '#444'
                        }}>
                          {event.date}
                        </div>
                        <div style={{
                          fontSize: '0.9rem',
                          color: '#666'
                        }}>
                          {event.time}
                        </div>
                      </div>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#287094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span style={{
                        fontSize: '0.95rem',
                        color: '#666',
                        lineHeight: '1.5'
                      }}>
                        {event.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: '1.7',
                    marginBottom: '20px',
                    flex: '1 1 auto'
                  }}>
                    {event.description}
                  </p>

                  {/* Spots Available */}
                  {event.spots && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 16px',
                      backgroundColor: '#f0f8fb',
                      borderRadius: '8px',
                      marginBottom: '20px',
                      flex: '0 0 auto'
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#287094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      <span style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: '#287094'
                      }}>
                        {event.spots}
                      </span>
                    </div>
                  )}

                  {/* Register Button */}
                  <button
                    onClick={() => setCurrentPage('contact')}
                    onMouseEnter={() => setHoveredButton(`register-${event.id}`)}
                    onMouseLeave={() => setHoveredButton(null)}
                    style={{
                      width: '100%',
                      padding: '14px 24px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      backgroundColor: hoveredButton === `register-${event.id}` ? '#1a4d66' : '#287094',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      flex: '0 0 auto'
                    }}
                  >
                    Register for Event
                  </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Past Events Section */}
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
            marginBottom: '24px',
            fontWeight: '700',
            textAlign: 'center'
          }}>
            Past Events
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.1rem',
            color: '#666',
            marginBottom: '48px',
            maxWidth: '700px',
            margin: '0 auto 48px'
          }}>
            Highlights from our recent gatherings and programs
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px'
          }}>
            {pastEvents.map((event) => (
              <div
                key={event.id}
                style={{
                  backgroundColor: '#f8f9fa',
                  padding: '28px',
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
                <div style={{
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: '#287094',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {event.date}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  color: '#287094',
                  marginBottom: '12px',
                  fontWeight: '700',
                  lineHeight: '1.3'
                }}>
                  {event.title}
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#666',
                  lineHeight: '1.6',
                  marginBottom: '16px'
                }}>
                  {event.description}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.85rem',
                  color: '#287094',
                  fontWeight: '600'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#287094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                  </svg>
                  {event.attendees}
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
            Want to Host an Event?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '48px',
            opacity: 0.95,
            lineHeight: '1.7'
          }}>
            We're always looking for opportunities to connect with the community. Interested in having us speak at your church, school, or organization?
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            onMouseEnter={() => setHoveredButton('invite')}
            onMouseLeave={() => setHoveredButton(null)}
            style={{
              padding: '18px 42px',
              fontSize: '1.1rem',
              fontWeight: '600',
              backgroundColor: hoveredButton === 'invite' ? '#ffffff' : 'transparent',
              color: hoveredButton === 'invite' ? '#287094' : '#ffffff',
              border: '2px solid #ffffff',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: hoveredButton === 'invite' ? 'translateY(-3px)' : 'translateY(0)'
            }}
          >
            Invite Us to Your Event
          </button>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;