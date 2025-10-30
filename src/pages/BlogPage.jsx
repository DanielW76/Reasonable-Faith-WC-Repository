import React, { useState, useEffect } from 'react';

const BlogPage = ({ setCurrentPage }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [blogPosts, setBlogPosts] = useState([]);

  // Load blog posts from localStorage
  useEffect(() => {
    const loadPosts = () => {
      const storedPosts = localStorage.getItem('adminBlogPosts');
      if (storedPosts) {
        setBlogPosts(JSON.parse(storedPosts));
      } else {
        // Default posts if none exist
        const defaultPosts = [
          {
            id: 1,
            title: 'The Kalam Cosmological Argument: Why the Universe Needs a Cause',
            author: 'Dr. William Lane Craig',
            date: 'March 15, 2024',
            category: 'apologetics',
            excerpt: 'One of the most powerful arguments for God\'s existence is the Kalam Cosmological Argument. In this post, we explore why the universe must have had a beginning and what that means for the existence of God.',
            readTime: '8 min read',
            featured: true,
            tags: ['Cosmology', 'Arguments', 'Philosophy']
          },
          {
            id: 2,
            title: 'Recap: February Apologetics Workshop - The Problem of Evil',
            author: 'Sarah Johnson',
            date: 'March 10, 2024',
            category: 'events',
            excerpt: 'Last month\'s workshop explored one of the most challenging questions in apologetics: If God is good and all-powerful, why does evil exist? Here are the key insights from our discussion.',
            readTime: '5 min read',
            featured: false,
            tags: ['Workshop', 'Theodicy', 'Community']
          },
          {
            id: 3,
            title: 'Book Review: "The Reason for God" by Timothy Keller',
            author: 'Michael Chen',
            date: 'March 5, 2024',
            category: 'resources',
            excerpt: 'Timothy Keller\'s masterful work addresses the biggest doubts skeptics have about Christianity. We review why this book is essential reading for both believers and seekers.',
            readTime: '6 min read',
            featured: true,
            tags: ['Books', 'Review', 'Apologetics']
          },
          {
            id: 4,
            title: 'Understanding the Trinity: A Philosophical Approach',
            author: 'Rev. James Thompson',
            date: 'February 28, 2024',
            category: 'theology',
            excerpt: 'The doctrine of the Trinity can seem paradoxical at first glance. We break down how philosophy helps us understand this central Christian teaching without contradiction.',
            readTime: '10 min read',
            featured: false,
            tags: ['Trinity', 'Doctrine', 'Logic']
          },
          {
            id: 5,
            title: 'Science and Faith: Complementary Ways of Knowing',
            author: 'Dr. Emily Rodriguez',
            date: 'February 20, 2024',
            category: 'apologetics',
            excerpt: 'Are science and faith in conflict? We explore how these two approaches to truth complement rather than contradict each other, drawing insights from both history and philosophy.',
            readTime: '7 min read',
            featured: false,
            tags: ['Science', 'Faith', 'Integration']
          }
        ];
        localStorage.setItem('adminBlogPosts', JSON.stringify(defaultPosts));
        setBlogPosts(defaultPosts);
      }
    };

    loadPosts();

    // Listen for storage changes (when admin updates posts)
    const handleStorageChange = (e) => {
      if (e.key === 'adminBlogPosts') {
        loadPosts();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also check for updates every second (for same-tab updates)
    const interval = setInterval(loadPosts, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const categories = [
    {
      id: 'all',
      label: 'All Posts',
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
      id: 'apologetics',
      label: 'Apologetics',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      )
    },
    {
      id: 'philosophy',
      label: 'Philosophy',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>
      )
    },
    {
      id: 'theology',
      label: 'Theology',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      )
    },
    {
      id: 'events',
      label: 'Event Recaps',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      )
    },
    {
      id: 'resources',
      label: 'Resource Reviews',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    }
  ];

  const getCategoryLabel = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.label : categoryId;
  };

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    
    return matchesCategory && matchesSearch;
  });

  // Get category counts
  const getCategoryCount = (categoryId) => {
    if (categoryId === 'all') return blogPosts.length;
    return blogPosts.filter(post => post.category === categoryId).length;
  };

  // Sort posts - featured first, then by date
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div style={{
      width: '100%',
      backgroundColor: '#ffffff'
    }}>
      {/* Hero Section */}
      <section style={{
       background: 'linear-gradient(rgba(26, 77, 102, 0.85), rgba(40, 112, 148, 0.85)), url(/images/Church-open-bible.jpg)',
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
            Blog & Articles
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
            opacity: 0.95,
            lineHeight: '1.7',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Explore thoughtful reflections on faith, reason, philosophy, and theology. Join the conversation as we tackle life's biggest questions.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section style={{
        padding: '60px 20px',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Search Bar */}
          <div style={{
            marginBottom: '40px',
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}>
            <div style={{
              position: 'relative'
            }}>
              <svg
                style={{
                  position: 'absolute',
                  left: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none'
                }}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#666"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input
                type="text"
                placeholder="Search blog posts by title, author, or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '18px 20px 18px 52px',
                  fontSize: '1rem',
                  border: '2px solid #e0e0e0',
                  borderRadius: '50px',
                  backgroundColor: '#ffffff',
                  color: '#333',
                  boxSizing: 'border-box',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#287094'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#e0e0e0'}
              />
            </div>
          </div>

          {/* Category Filters */}
          <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '20px'
          }}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                onMouseEnter={() => setHoveredButton(category.id)}
                onMouseLeave={() => setHoveredButton(null)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: selectedCategory === category.id ? '#ffffff' : (hoveredButton === category.id ? '#287094' : '#666'),
                  backgroundColor: selectedCategory === category.id ? '#287094' : (hoveredButton === category.id ? '#e8f4f8' : '#ffffff'),
                  border: '2px solid',
                  borderColor: selectedCategory === category.id ? '#287094' : '#e0e0e0',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {category.icon}
                {category.label}
                <span style={{
                  backgroundColor: selectedCategory === category.id ? 'rgba(255,255,255,0.3)' : '#e8f4f8',
                  color: selectedCategory === category.id ? '#ffffff' : '#287094',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  fontSize: '0.85rem',
                  fontWeight: '700'
                }}>
                  {getCategoryCount(category.id)}
                </span>
              </button>
            ))}
          </div>

          {/* Active Filters Display */}
          <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '40px'
          }}>
            {searchQuery && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                backgroundColor: '#e8f4f8',
                borderRadius: '20px',
                fontSize: '0.9rem',
                color: '#287094',
                fontWeight: '600'
              }}>
                Search: "{searchQuery}"
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#287094',
                    cursor: 'pointer',
                    padding: '0',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            )}
            {(searchQuery || selectedCategory !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  backgroundColor: 'transparent',
                  color: '#666',
                  border: '2px solid #e0e0e0',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#e8f4f8';
                  e.currentTarget.style.borderColor = '#287094';
                  e.currentTarget.style.color = '#287094';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = '#e0e0e0';
                  e.currentTarget.style.color = '#666';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                Clear Filters
              </button>
            )}
          </div>

          {sortedPosts.length === 0 ? (
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
                No Posts Found
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                marginBottom: '32px',
                lineHeight: '1.7'
              }}>
                {searchQuery
                  ? `We couldn't find any posts matching "${searchQuery}". Try different keywords or browse all posts.`
                  : 'No posts found in this category.'}
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
                View All Posts
              </button>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '28px'
            }}>
              {sortedPosts.map((post) => (
                <div
                  key={post.id}
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '32px',
                    borderRadius: '12px',
                    border: '2px solid #e0e0e0',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative'
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
                  {post.featured && (
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      backgroundColor: '#ffd700',
                      color: '#1a4d66',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.7rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Featured
                    </div>
                  )}
                  <span style={{
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
                    {getCategoryLabel(post.category)}
                  </span>
                  <h3 style={{
                    fontSize: '1.3rem',
                    color: '#287094',
                    marginBottom: '12px',
                    fontWeight: '700',
                    lineHeight: '1.3'
                  }}>
                    {post.title}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#666',
                    marginBottom: '16px'
                  }}>
                    by {post.author}
                  </p>
                  <p style={{
                    fontSize: '0.95rem',
                    color: '#444',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                    flex: 1
                  }}>
                    {post.excerpt}
                  </p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '16px',
                    borderTop: '1px solid #e0e0e0',
                    fontSize: '0.85rem',
                    color: '#666'
                  }}>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
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
            Never Miss a Post
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '48px',
            opacity: 0.95,
            lineHeight: '1.7'
          }}>
            Subscribe to our newsletter to receive new blog posts, event announcements, and exclusive content directly in your inbox.
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            onMouseEnter={() => setHoveredButton('subscribe')}
            onMouseLeave={() => setHoveredButton(null)}
            style={{
              padding: '18px 42px',
              fontSize: '1.1rem',
              fontWeight: '600',
              backgroundColor: hoveredButton === 'subscribe' ? '#ffffff' : 'transparent',
              color: hoveredButton === 'subscribe' ? '#287094' : '#ffffff',
              border: '2px solid #ffffff',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: hoveredButton === 'subscribe' ? 'translateY(-3px)' : 'translateY(0)'
            }}
          >
            Subscribe to Newsletter
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;