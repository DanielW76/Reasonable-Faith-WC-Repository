import React, { useState } from 'react';

const ResourcesPage = ({ setCurrentPage }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedResource, setExpandedResource] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      id: 'all',
      label: 'All Resources',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      )
    },
    {
      id: 'articles',
      label: 'Articles',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      )
    },
    {
      id: 'books',
      label: 'Books',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      )
    },
    {
      id: 'videos',
      label: 'Videos',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="23 7 16 12 23 17 23 7"></polygon>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
        </svg>
      )
    },
    {
      id: 'podcasts',
      label: 'Podcasts',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
      )
    },
    {
      id: 'tools',
      label: 'Study Tools',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      )
    }
  ];

  const resources = [
    {
      id: 1,
      category: 'articles',
      title: 'The Kalam Cosmological Argument',
      author: 'Dr. William Lane Craig',
      description: 'An in-depth exploration of one of the most powerful arguments for God\'s existence, examining the philosophical and scientific evidence that the universe began to exist.',
      type: 'PDF Download',
      link: '/resources/kalam-argument.pdf',
      duration: '15 min read',
      featured: true,
      tags: ['Philosophy', 'Cosmology', 'Arguments']
    },
    {
      id: 2,
      category: 'books',
      title: 'Reasonable Faith (3rd Edition)',
      author: 'William Lane Craig',
      description: 'A comprehensive defense of Christian truth claims, covering the absurdity of life without God, the problem of faith and reason, and the existence of God.',
      type: 'Book Recommendation',
      link: 'https://www.amazon.com',
      duration: '400 pages',
      featured: true,
      tags: ['Foundational', 'Comprehensive', 'Philosophy']
    },
    {
      id: 3,
      category: 'videos',
      title: 'Is There Evidence for God?',
      author: 'Reasonable Faith Ministry',
      description: 'A presentation covering multiple lines of evidence for God\'s existence including the cosmological, teleological, and moral arguments.',
      type: 'Video',
      link: 'https://www.youtube.com',
      duration: '45 min',
      featured: true,
      tags: ['Evidence', 'Arguments', 'Introduction']
    },
    {
      id: 4,
      category: 'articles',
      title: 'The Resurrection of Jesus: Historical Evidence',
      author: 'Gary Habermas',
      description: 'An examination of the historical facts surrounding Jesus\' resurrection and why scholars agree on certain core historical data.',
      type: 'PDF Download',
      link: '/resources/resurrection-evidence.pdf',
      duration: '20 min read',
      featured: false,
      tags: ['History', 'Resurrection', 'Evidence']
    },
    {
      id: 5,
      category: 'books',
      title: 'The Case for Christ',
      author: 'Lee Strobel',
      description: 'A journalist\'s investigation into the evidence for Jesus, interviewing leading experts in theology, history, and archaeology.',
      type: 'Book Recommendation',
      link: 'https://www.amazon.com',
      duration: '300 pages',
      featured: false,
      tags: ['Investigation', 'Evidence', 'Testimony']
    },
    {
      id: 6,
      category: 'podcasts',
      title: 'Reasonable Faith Podcast',
      author: 'William Lane Craig',
      description: 'Weekly podcast featuring Q&A, interviews, and discussions on Christian apologetics, philosophy, and theology.',
      type: 'Podcast Series',
      link: 'https://www.reasonablefaith.org/podcasts',
      duration: 'Weekly episodes',
      featured: false,
      tags: ['Regular Content', 'Q&A', 'Philosophy']
    },
    {
      id: 7,
      category: 'videos',
      title: 'The Fine-Tuning of the Universe',
      author: 'Robin Collins',
      description: 'An exploration of how the fundamental constants of physics are precisely calibrated to allow for life.',
      type: 'Video Lecture',
      link: 'https://www.youtube.com',
      duration: '55 min',
      featured: false,
      tags: ['Science', 'Design', 'Physics']
    },
    {
      id: 8,
      category: 'tools',
      title: 'Apologetics Study Guide',
      author: 'Reasonable Faith Whatcom County',
      description: 'A comprehensive guide for personal or group study, including discussion questions and recommended readings.',
      type: 'PDF Download',
      link: '/resources/study-guide.pdf',
      duration: '50 pages',
      featured: false,
      tags: ['Study', 'Guide', 'Group Discussion']
    },
    {
      id: 9,
      category: 'articles',
      title: 'Why Does God Allow Evil?',
      author: 'Alvin Plantinga',
      description: 'A philosophical response to the problem of evil, introducing the free will defense and the soul-making theodicy.',
      type: 'PDF Download',
      link: '/resources/problem-of-evil.pdf',
      duration: '18 min read',
      featured: false,
      tags: ['Philosophy', 'Theodicy', 'Logic']
    },
    {
      id: 10,
      category: 'books',
      title: 'Mere Christianity',
      author: 'C.S. Lewis',
      description: 'A timeless classic exploring the common ground upon which all Christians stand together, originally delivered as BBC radio talks.',
      type: 'Book Recommendation',
      link: 'https://www.amazon.com',
      duration: '200 pages',
      featured: false,
      tags: ['Classic', 'Foundational', 'Accessible']
    },
    {
      id: 11,
      category: 'videos',
      title: 'Can We Trust the Bible?',
      author: 'Daniel Wallace',
      description: 'A textual scholar examines the manuscript evidence for the reliability of the New Testament.',
      type: 'Video',
      link: 'https://www.youtube.com',
      duration: '40 min',
      featured: false,
      tags: ['Scripture', 'Manuscripts', 'History']
    },
    {
      id: 12,
      category: 'tools',
      title: 'Argument Outline Cards',
      author: 'Reasonable Faith Whatcom County',
      description: 'Printable reference cards outlining major apologetic arguments in clear, concise formats.',
      type: 'PDF Download',
      link: '/resources/argument-cards.pdf',
      duration: '12 cards',
      featured: false,
      tags: ['Reference', 'Quick Guide', 'Arguments']
    }
  ];

  const filteredResources = resources.filter(r => {
    // Filter by category
    const categoryMatch = selectedCategory === 'all' || r.category === selectedCategory;
    
    // Filter by search query
    const searchMatch = searchQuery.trim() === '' || 
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return categoryMatch && searchMatch;
  });

  const featuredResources = resources.filter(r => r.featured);

  return (
    <div style={{
      width: '100%',
      backgroundColor: '#ffffff'
    }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(rgba(26, 77, 102, 0.85), rgba(40, 112, 148, 0.85)), url(/images/old-bible-reading.jpg)',
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
            Resources & Materials
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
            opacity: 0.95,
            lineHeight: '1.7',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Explore our curated collection of articles, books, videos, and study materials to deepen your understanding of Christian apologetics.
          </p>
        </div>
      </section>

      {/* Search Bar Section */}
      <section style={{
        padding: '40px 20px 20px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <div style={{
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              alignItems: 'center',
              pointerEvents: 'none'
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#287094" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search resources by title, author, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '18px 60px 18px 56px',
                fontSize: '1.05rem',
                border: '2px solid #e0e0e0',
                borderRadius: '50px',
                outline: 'none',
                backgroundColor: '#f5f5f5',
                color: '#333',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#287094';
                e.target.style.boxShadow = '0 4px 16px rgba(40, 112, 148, 0.15)';
                e.target.style.backgroundColor = '#ffffff';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e0e0e0';
                e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                e.target.style.backgroundColor = '#f5f5f5';
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  color: '#666',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#287094'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>
          
          {/* Search Stats */}
          {searchQuery && (
            <div style={{
              marginTop: '16px',
              textAlign: 'center',
              fontSize: '0.95rem',
              color: '#666'
            }}>
              {filteredResources.length === 0 ? (
                <span style={{ color: '#d32f2f' }}>
                  No resources found matching "{searchQuery}"
                </span>
              ) : (
                <span>
                  Found <strong style={{ color: '#287094' }}>{filteredResources.length}</strong> {filteredResources.length === 1 ? 'resource' : 'resources'} matching "{searchQuery}"
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Category Filter */}
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
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                onMouseEnter={() => setHoveredButton(cat.id)}
                onMouseLeave={() => setHoveredButton(null)}
                style={{
                  padding: '12px 24px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: selectedCategory === cat.id ? '#ffffff' : (hoveredButton === cat.id ? '#287094' : '#666'),
                  backgroundColor: selectedCategory === cat.id ? '#287094' : (hoveredButton === cat.id ? '#e8f4f8' : '#ffffff'),
                  border: '2px solid',
                  borderColor: selectedCategory === cat.id ? '#287094' : '#e0e0e0',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      {selectedCategory === 'all' && !searchQuery && (
        <section style={{
          padding: '60px 20px 40px',
          backgroundColor: '#ffffff'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              color: '#287094',
              marginBottom: '16px',
              fontWeight: '700',
              textAlign: 'center'
            }}>
              Featured Resources
            </h2>
            <p style={{
              textAlign: 'center',
              fontSize: '1.1rem',
              color: '#666',
              marginBottom: '48px'
            }}>
              Start with these highly recommended materials
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px'
            }}>
              {featuredResources.map((resource) => (
                <div
                  key={resource.id}
                  onMouseEnter={() => setHoveredCard(resource.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    backgroundColor: '#f8f9fa',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '2px solid',
                    borderColor: hoveredCard === resource.id ? '#287094' : '#e0e0e0',
                    transition: 'all 0.3s ease',
                    transform: hoveredCard === resource.id ? 'translateY(-8px)' : 'translateY(0)',
                    boxShadow: hoveredCard === resource.id ? '0 12px 40px rgba(40, 112, 148, 0.2)' : '0 4px 20px rgba(0,0,0,0.06)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* Resource Header */}
                  <div style={{
                    padding: '32px 32px 24px',
                    backgroundColor: '#ffffff'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '16px',
                      gap: '12px'
                    }}>
                      <div style={{
                        display: 'inline-block',
                        padding: '6px 14px',
                        backgroundColor: '#e8f4f8',
                        color: '#287094',
                        borderRadius: '16px',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        {resource.type}
                      </div>
                      <div style={{
                        display: 'inline-block',
                        padding: '6px 12px',
                        backgroundColor: '#fef3e8',
                        color: '#f57c00',
                        borderRadius: '16px',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        textTransform: 'uppercase'
                      }}>
                        Featured
                      </div>
                    </div>
                    <h3 style={{
                      fontSize: '1.4rem',
                      color: '#287094',
                      marginBottom: '8px',
                      fontWeight: '700',
                      lineHeight: '1.3'
                    }}>
                      {resource.title}
                    </h3>
                    <p style={{
                      fontSize: '0.95rem',
                      color: '#666',
                      marginBottom: '16px',
                      fontStyle: 'italic'
                    }}>
                      by {resource.author}
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      color: '#444',
                      lineHeight: '1.7'
                    }}>
                      {resource.description}
                    </p>
                  </div>

                  {/* Resource Footer */}
                  <div style={{
                    padding: '24px 32px',
                    backgroundColor: '#f8f9fa',
                    marginTop: 'auto'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '20px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: '#666',
                        fontSize: '0.9rem'
                      }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        {resource.duration}
                      </div>
                    </div>
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'block',
                        textDecoration: 'none'
                      }}
                    >
                      <button
                        onMouseEnter={() => setHoveredButton(`access-${resource.id}`)}
                        onMouseLeave={() => setHoveredButton(null)}
                        style={{
                          width: '100%',
                          padding: '14px 24px',
                          fontSize: '1rem',
                          fontWeight: '600',
                          backgroundColor: hoveredButton === `access-${resource.id}` ? '#1a4d66' : '#287094',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px'
                        }}
                      >
                        Access Resource
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Resources Section */}
      <section style={{
        padding: '60px 20px 80px',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              color: '#287094',
              fontWeight: '700',
              margin: 0
            }}>
              {searchQuery ? 'Search Results' : (selectedCategory === 'all' ? 'All Resources' : `${categories.find(c => c.id === selectedCategory)?.label}`)}
            </h2>
            
            {/* Clear Filters Button */}
            {(searchQuery || selectedCategory !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                onMouseEnter={() => setHoveredButton('clearFilters')}
                onMouseLeave={() => setHoveredButton(null)}
                style={{
                  padding: '10px 24px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: hoveredButton === 'clearFilters' ? '#ffffff' : '#287094',
                  backgroundColor: hoveredButton === 'clearFilters' ? '#287094' : 'transparent',
                  border: '2px solid #287094',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                Clear Filters
              </button>
            )}
          </div>

          {/* No Results Message */}
          {filteredResources.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '80px 20px',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '2px solid #e0e0e0'
            }}>
              <div style={{
                marginBottom: '24px',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#287094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                color: '#287094',
                marginBottom: '16px',
                fontWeight: '700'
              }}>
                No Resources Found
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                marginBottom: '32px',
                lineHeight: '1.7'
              }}>
                {searchQuery 
                  ? `We couldn't find any resources matching "${searchQuery}". Try different keywords or browse all resources.`
                  : 'No resources found in this category. Try selecting a different category.'}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                style={{
                  padding: '12px 32px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  backgroundColor: '#287094',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a4d66'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#287094'}
              >
                View All Resources
              </button>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '24px'
            }}>
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '28px',
                  borderRadius: '12px',
                  border: '2px solid #e0e0e0',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column'
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
                  display: 'inline-block',
                  padding: '4px 12px',
                  backgroundColor: '#e8f4f8',
                  color: '#287094',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  marginBottom: '16px',
                  width: 'fit-content',
                  textTransform: 'uppercase'
                }}>
                  {resource.type}
                </div>
                <h3 style={{
                  fontSize: '1.2rem',
                  color: '#287094',
                  marginBottom: '8px',
                  fontWeight: '700',
                  lineHeight: '1.3'
                }}>
                  {resource.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#666',
                  marginBottom: '12px',
                  fontStyle: 'italic'
                }}>
                  by {resource.author}
                </p>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#444',
                  lineHeight: '1.6',
                  marginBottom: '16px',
                  flex: 1
                }}>
                  {resource.description}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#666',
                  fontSize: '0.85rem',
                  marginBottom: '16px'
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {resource.duration}
                </div>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    textDecoration: 'none'
                  }}
                >
                  <button
                    style={{
                      width: '100%',
                      padding: '12px 20px',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      backgroundColor: 'transparent',
                      color: '#287094',
                      border: '2px solid #287094',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#287094';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#287094';
                    }}
                  >
                    View Resource
                  </button>
                </a>
              </div>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* Recommended Reading List */}
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
            marginBottom: '24px',
            fontWeight: '700',
            textAlign: 'center'
          }}>
            Recommended Reading List
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.1rem',
            color: '#666',
            marginBottom: '48px',
            lineHeight: '1.7'
          }}>
            Essential books for building a strong foundation in Christian apologetics
          </p>

          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '40px',
            borderRadius: '16px',
            border: '2px solid #e0e0e0'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              {[
                { title: 'Reasonable Faith', author: 'William Lane Craig', level: 'Foundational' },
                { title: 'The Case for Christ', author: 'Lee Strobel', level: 'Beginner' },
                { title: 'Mere Christianity', author: 'C.S. Lewis', level: 'Foundational' },
                { title: 'I Don\'t Have Enough Faith to Be an Atheist', author: 'Norman Geisler & Frank Turek', level: 'Beginner' },
                { title: 'On Guard', author: 'William Lane Craig', level: 'Intermediate' },
                { title: 'The Reason for God', author: 'Timothy Keller', level: 'Beginner' },
                { title: 'Cold-Case Christianity', author: 'J. Warner Wallace', level: 'Intermediate' }
              ].map((book, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px',
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    border: '1px solid #e0e0e0',
                    transition: 'all 0.3s ease',
                    gap: '20px',
                    flexWrap: 'wrap'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#287094';
                    e.currentTarget.style.backgroundColor = '#f8f9fa';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e0e0e0';
                    e.currentTarget.style.backgroundColor = '#ffffff';
                  }}
                >
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <h4 style={{
                      fontSize: '1.1rem',
                      color: '#287094',
                      marginBottom: '4px',
                      fontWeight: '700'
                    }}>
                      {book.title}
                    </h4>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#666',
                      fontStyle: 'italic'
                    }}>
                      by {book.author}
                    </p>
                  </div>
                  <div style={{
                    padding: '6px 16px',
                    backgroundColor: '#e8f4f8',
                    color: '#287094',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600'
                  }}>
                    {book.level}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        padding: '100px 20px',
        backgroundImage: 'linear-gradient(135deg, #287094 0%, #1a4d66 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
            Need a Recommendation?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '48px',
            opacity: 0.95,
            lineHeight: '1.7'
          }}>
            Not sure where to start? Contact us for personalized resource recommendations based on your interests and questions.
          </p>
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
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;