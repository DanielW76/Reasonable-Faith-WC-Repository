import React, { useState, useEffect } from 'react';

// Blog Management Component
const BlogManagement = () => {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [showPostForm, setShowPostForm] = useState(false);
  const [postForm, setPostForm] = useState({
    id: '',
    title: '',
    author: '',
    date: new Date().toISOString().split('T')[0],
    category: 'apologetics',
    excerpt: '',
    readTime: '',
    featured: false,
    tags: []
  });
  const [tagInput, setTagInput] = useState('');

  // Load posts from localStorage
  useEffect(() => {
    const storedPosts = localStorage.getItem('adminBlogPosts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    } else {
      // Initialize with default posts
      const defaultPosts = [
        {
          id: 1,
          title: 'The Kalam Cosmological Argument: Why the Universe Needs a Cause',
          author: 'Dr. William Lane Craig',
          date: '2024-03-15',
          category: 'apologetics',
          excerpt: 'One of the most powerful arguments for God\'s existence is the Kalam Cosmological Argument. In this post, we explore why the universe must have had a beginning and what that means for the existence of God.',
          readTime: '8 min read',
          featured: true,
          tags: ['Cosmology', 'Arguments', 'Philosophy']
        },
        {
          id: 2,
          title: 'Understanding the Trinity: A Philosophical Approach',
          author: 'Rev. James Thompson',
          date: '2024-02-28',
          category: 'theology',
          excerpt: 'The doctrine of the Trinity can seem paradoxical at first glance. We break down how philosophy helps us understand this central Christian teaching without contradiction.',
          readTime: '10 min read',
          featured: false,
          tags: ['Trinity', 'Doctrine', 'Logic']
        }
      ];
      localStorage.setItem('adminBlogPosts', JSON.stringify(defaultPosts));
      setPosts(defaultPosts);
    }
  }, []);

  const handleAddPost = () => {
    setEditingPost(null);
    setPostForm({
      id: Date.now(),
      title: '',
      author: '',
      date: new Date().toISOString().split('T')[0],
      category: 'apologetics',
      excerpt: '',
      readTime: '',
      featured: false,
      tags: []
    });
    setTagInput('');
    setShowPostForm(true);
  };

  const handleEditPost = (post) => {
    setEditingPost(post.id);
    setPostForm(post);
    setTagInput('');
    setShowPostForm(true);
  };

  const handleDeletePost = (postId) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      const updatedPosts = posts.filter(p => p.id !== postId);
      setPosts(updatedPosts);
      localStorage.setItem('adminBlogPosts', JSON.stringify(updatedPosts));
    }
  };

  const handleSavePost = (e) => {
    e.preventDefault();
    
    if (editingPost) {
      // Update existing post
      const updatedPosts = posts.map(p => 
        p.id === editingPost ? postForm : p
      );
      setPosts(updatedPosts);
      localStorage.setItem('adminBlogPosts', JSON.stringify(updatedPosts));
    } else {
      // Add new post
      const newPosts = [...posts, postForm];
      setPosts(newPosts);
      localStorage.setItem('adminBlogPosts', JSON.stringify(newPosts));
    }
    
    setShowPostForm(false);
    setEditingPost(null);
  };

  const handleFormChange = (field, value) => {
    setPostForm({ ...postForm, [field]: value });
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !postForm.tags.includes(tagInput.trim())) {
      setPostForm({
        ...postForm,
        tags: [...postForm.tags, tagInput.trim()]
      });
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setPostForm({
      ...postForm,
      tags: postForm.tags.filter(tag => tag !== tagToRemove)
    });
  };

  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <h2 style={{
          fontSize: '1.8rem',
          color: '#287094',
          fontWeight: '700',
          margin: 0
        }}>
          Manage Blog Posts
        </h2>
        <button
          onClick={handleAddPost}
          style={{
            padding: '12px 24px',
            backgroundColor: '#287094',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '1rem'
          }}
        >
          + Add New Post
        </button>
      </div>

      {/* Post Form Modal */}
      {showPostForm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            padding: '32px',
            borderRadius: '16px',
            maxWidth: '700px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              color: '#287094',
              marginBottom: '24px',
              fontWeight: '700'
            }}>
              {editingPost ? 'Edit Blog Post' : 'Add New Blog Post'}
            </h3>

            <form onSubmit={handleSavePost}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600',
                  color: '#444'
                }}>
                  Post Title *
                </label>
                <input
                  type="text"
                  value={postForm.title}
                  onChange={(e) => handleFormChange('title', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    backgroundColor: '#ffffff',
                    color: '#333'
                  }}
                  required
                />
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                marginBottom: '16px'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#444'
                  }}>
                    Author *
                  </label>
                  <input
                    type="text"
                    value={postForm.author}
                    onChange={(e) => handleFormChange('author', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      boxSizing: 'border-box',
                      backgroundColor: '#ffffff',
                      color: '#333'
                    }}
                    required
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#444'
                  }}>
                    Date *
                  </label>
                  <input
                    type="date"
                    value={postForm.date}
                    onChange={(e) => handleFormChange('date', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      boxSizing: 'border-box',
                      backgroundColor: '#ffffff',
                      color: '#333'
                    }}
                    required
                  />
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                marginBottom: '16px'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#444'
                  }}>
                    Category *
                  </label>
                  <select
                    value={postForm.category}
                    onChange={(e) => handleFormChange('category', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      boxSizing: 'border-box',
                      backgroundColor: '#ffffff',
                      color: '#333'
                    }}
                    required
                  >
                    <option value="apologetics">Apologetics</option>
                    <option value="philosophy">Philosophy</option>
                    <option value="theology">Theology</option>
                    <option value="events">Event Recaps</option>
                    <option value="resources">Resource Reviews</option>
                  </select>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#444'
                  }}>
                    Read Time *
                  </label>
                  <input
                    type="text"
                    value={postForm.readTime}
                    onChange={(e) => handleFormChange('readTime', e.target.value)}
                    placeholder="e.g. 5 min read"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      boxSizing: 'border-box',
                      backgroundColor: '#ffffff',
                      color: '#333'
                    }}
                    required
                  />
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600',
                  color: '#444'
                }}>
                  Excerpt / Summary *
                </label>
                <textarea
                  value={postForm.excerpt}
                  onChange={(e) => handleFormChange('excerpt', e.target.value)}
                  rows="4"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    backgroundColor: '#ffffff',
                    color: '#333'
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600',
                  color: '#444'
                }}>
                  Tags
                </label>
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  marginBottom: '8px'
                }}>
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddTag();
                      }
                    }}
                    placeholder="Add a tag and press Enter"
                    style={{
                      flex: 1,
                      padding: '12px',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      boxSizing: 'border-box',
                      backgroundColor: '#ffffff',
                      color: '#333'
                    }}
                  />
                  <button
                    type="button"
                    onClick={handleAddTag}
                    style={{
                      padding: '12px 20px',
                      backgroundColor: '#287094',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: '600'
                    }}
                  >
                    Add
                  </button>
                </div>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  {postForm.tags.map((tag, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 12px',
                        backgroundColor: '#e8f4f8',
                        color: '#287094',
                        borderRadius: '12px',
                        fontSize: '0.9rem',
                        fontWeight: '600'
                      }}
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(tag)}
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
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  color: '#444'
                }}>
                  <input
                    type="checkbox"
                    checked={postForm.featured}
                    onChange={(e) => handleFormChange('featured', e.target.checked)}
                    style={{
                      width: '20px',
                      height: '20px',
                      cursor: 'pointer'
                    }}
                  />
                  Mark as Featured Post
                </label>
              </div>

              <div style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'flex-end'
              }}>
                <button
                  type="button"
                  onClick={() => {
                    setShowPostForm(false);
                    setEditingPost(null);
                  }}
                  style={{
                    padding: '12px 24px',
                    backgroundColor: '#e0e0e0',
                    color: '#444',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    padding: '12px 24px',
                    backgroundColor: '#287094',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  Save Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Posts List */}
      <div style={{
        display: 'grid',
        gap: '16px'
      }}>
        {posts.length === 0 ? (
          <div style={{
            padding: '48px',
            textAlign: 'center',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            border: '2px dashed #e0e0e0'
          }}>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              marginBottom: '16px'
            }}>
              No blog posts yet. Click "Add New Post" to create one.
            </p>
          </div>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              style={{
                backgroundColor: '#ffffff',
                padding: '24px',
                borderRadius: '12px',
                border: '2px solid #e0e0e0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '20px'
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '8px'
                }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    color: '#287094',
                    margin: 0,
                    fontWeight: '700'
                  }}>
                    {post.title}
                  </h3>
                  {post.featured && (
                    <span style={{
                      backgroundColor: '#ffd700',
                      color: '#1a4d66',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      fontSize: '0.7rem',
                      fontWeight: '700',
                      textTransform: 'uppercase'
                    }}>
                      Featured
                    </span>
                  )}
                </div>
                <div style={{
                  display: 'flex',
                  gap: '16px',
                  flexWrap: 'wrap',
                  marginBottom: '12px',
                  fontSize: '0.95rem',
                  color: '#666'
                }}>
                  <span><strong>Author:</strong> {post.author}</span>
                  <span><strong>Date:</strong> {post.date}</span>
                  <span><strong>Category:</strong> {post.category}</span>
                  <span><strong>Read Time:</strong> {post.readTime}</span>
                </div>
                <p style={{
                  color: '#444',
                  lineHeight: '1.6',
                  marginBottom: '12px'
                }}>
                  {post.excerpt}
                </p>
                {post.tags && post.tags.length > 0 && (
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}>
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        style={{
                          padding: '4px 10px',
                          backgroundColor: '#e8f4f8',
                          color: '#287094',
                          borderRadius: '12px',
                          fontSize: '0.8rem',
                          fontWeight: '600'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div style={{
                display: 'flex',
                gap: '8px'
              }}>
                <button
                  onClick={() => handleEditPost(post)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#287094',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '0.9rem'
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeletePost(post.id)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#dc3545',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '0.9rem'
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const AdminPanel = ({ setCurrentPage }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('calendar');
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [showEventForm, setShowEventForm] = useState(false);

  // Default admin credentials (change these!)
  const ADMIN_USERNAME = 'admin';
  const ADMIN_PASSWORD = 'ReasonableFaith2025';

  // Form state for event
  const [eventForm, setEventForm] = useState({
    id: '',
    title: '',
    date: '',
    time: '',
    location: '',
    category: 'Discussion',
    description: '',
    spots: '',
    image: '/images/church-community-conversation.jpg'
  });

  // Load events from localStorage on mount
  useEffect(() => {
    const storedEvents = localStorage.getItem('adminEvents');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    } else {
      // Initialize with default events
      const defaultEvents = [
        {
          id: 1,
          title: 'Faith & Reason Discussion',
          date: '2025-11-15',
          time: '7:00 PM - 9:00 PM',
          location: 'Community Center, Bellingham',
          category: 'Discussion',
          description: 'Join us for an engaging evening exploring how faith and reason complement each other in the pursuit of truth.',
          spots: '25 spots available',
          image: '/images/church-community-conversation.jpg'
        },
        {
          id: 2,
          title: 'Apologetics Workshop Series',
          date: '2025-12-02',
          time: 'Saturday 9:00 AM - 5:00 PM',
          location: 'Grace Church Conference Room',
          category: 'Workshop',
          description: 'A comprehensive two-day workshop covering foundational apologetics topics.',
          spots: '15 spots available',
          image: '/images/bible-study-pencil.jpg'
        }
      ];
      localStorage.setItem('adminEvents', JSON.stringify(defaultEvents));
      setEvents(defaultEvents);
    }

    // Check if already logged in
    const loggedIn = sessionStorage.getItem('adminLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      sessionStorage.setItem('adminLoggedIn', 'true');
      setLoginError('');
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('adminLoggedIn');
    setUsername('');
    setPassword('');
  };

  const handleAddEvent = () => {
    setEditingEvent(null);
    setEventForm({
      id: Date.now(),
      title: '',
      date: '',
      time: '',
      location: '',
      category: 'Discussion',
      description: '',
      spots: '',
      image: '/images/church-community-conversation.jpg'
    });
    setShowEventForm(true);
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event.id);
    setEventForm(event);
    setShowEventForm(true);
  };

  const handleDeleteEvent = (eventId) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      const updatedEvents = events.filter(e => e.id !== eventId);
      setEvents(updatedEvents);
      localStorage.setItem('adminEvents', JSON.stringify(updatedEvents));
    }
  };

  const handleSaveEvent = (e) => {
    e.preventDefault();
    
    if (editingEvent) {
      // Update existing event
      const updatedEvents = events.map(e => 
        e.id === editingEvent ? eventForm : e
      );
      setEvents(updatedEvents);
      localStorage.setItem('adminEvents', JSON.stringify(updatedEvents));
    } else {
      // Add new event
      const newEvents = [...events, eventForm];
      setEvents(newEvents);
      localStorage.setItem('adminEvents', JSON.stringify(newEvents));
    }
    
    setShowEventForm(false);
    setEditingEvent(null);
  };

  const handleFormChange = (field, value) => {
    setEventForm({ ...eventForm, [field]: value });
  };

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #287094 0%, #1a4d66 100%)',
        padding: '20px'
      }}>
        <div style={{
          backgroundColor: '#ffffff',
          padding: '48px',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          maxWidth: '400px',
          width: '100%'
        }}>
          <h1 style={{
            fontSize: '2rem',
            color: '#287094',
            marginBottom: '8px',
            textAlign: 'center',
            fontWeight: '700'
          }}>
            Admin Panel
          </h1>
          <p style={{
            color: '#666',
            marginBottom: '32px',
            textAlign: 'center'
          }}>
            Reasonable Faith Whatcom County
          </p>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#444',
                fontWeight: '600'
              }}>
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                  backgroundColor: '#ffffff',
                  color: '#333'
                }}
                required
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#444',
                fontWeight: '600'
              }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                  backgroundColor: '#ffffff',
                  color: '#333'
                }}
                required
              />
            </div>

            {loginError && (
              <div style={{
                padding: '12px',
                backgroundColor: '#fee',
                color: '#c33',
                borderRadius: '8px',
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                {loginError}
              </div>
            )}

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: '#287094',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a4d66'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#287094'}
            >
              Login
            </button>
          </form>

          <button
            onClick={() => setCurrentPage('home')}
            style={{
              width: '100%',
              marginTop: '16px',
              padding: '12px',
              backgroundColor: 'transparent',
              color: '#287094',
              border: '2px solid #287094',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Back to Website
          </button>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      {/* Admin Header */}
      <header style={{
        backgroundColor: '#287094',
        color: '#ffffff',
        padding: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <h1 style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              margin: '0 0 4px 0'
            }}>
              Admin Dashboard
            </h1>
            <p style={{ margin: 0, opacity: 0.9 }}>
              Manage your website content
            </p>
          </div>
          <div style={{
            display: 'flex',
            gap: '12px'
          }}>
            <button
              onClick={() => setCurrentPage('home')}
              style={{
                padding: '10px 20px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: '#ffffff',
                border: '2px solid #ffffff',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              View Website
            </button>
            <button
              onClick={handleLogout}
              style={{
                padding: '10px 20px',
                backgroundColor: '#ffffff',
                color: '#287094',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <div style={{
        backgroundColor: '#ffffff',
        borderBottom: '2px solid #e0e0e0',
        padding: '0 20px'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          gap: '8px'
        }}>
          <button
            onClick={() => setActiveTab('calendar')}
            style={{
              padding: '16px 24px',
              backgroundColor: activeTab === 'calendar' ? '#287094' : 'transparent',
              color: activeTab === 'calendar' ? '#ffffff' : '#666',
              border: 'none',
              borderBottom: activeTab === 'calendar' ? '3px solid #287094' : '3px solid transparent',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '1rem'
            }}
          >
            Calendar & Events
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            style={{
              padding: '16px 24px',
              backgroundColor: activeTab === 'blog' ? '#287094' : 'transparent',
              color: activeTab === 'blog' ? '#ffffff' : '#666',
              border: 'none',
              borderBottom: activeTab === 'blog' ? '3px solid #287094' : '3px solid transparent',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '1rem'
            }}
          >
            Blog Posts
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '32px 20px'
      }}>
        {activeTab === 'calendar' && (
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '24px'
            }}>
              <h2 style={{
                fontSize: '1.8rem',
                color: '#287094',
                fontWeight: '700',
                margin: 0
              }}>
                Manage Events
              </h2>
              <button
                onClick={handleAddEvent}
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#287094',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '1rem'
                }}
              >
                + Add New Event
              </button>
            </div>

            {/* Event Form Modal */}
            {showEventForm && (
              <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
                padding: '20px'
              }}>
                <div style={{
                  backgroundColor: '#ffffff',
                  padding: '32px',
                  borderRadius: '16px',
                  maxWidth: '600px',
                  width: '100%',
                  maxHeight: '90vh',
                  overflowY: 'auto'
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    color: '#287094',
                    marginBottom: '24px',
                    fontWeight: '700'
                  }}>
                    {editingEvent ? 'Edit Event' : 'Add New Event'}
                  </h3>

                  <form onSubmit={handleSaveEvent}>
                    <div style={{ marginBottom: '16px' }}>
                      <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '600',
                        color: '#444'
                      }}>
                        Event Title *
                      </label>
                      <input
                        type="text"
                        value={eventForm.title}
                        onChange={(e) => handleFormChange('title', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '2px solid #e0e0e0',
                          borderRadius: '8px',
                          fontSize: '1rem',
                          boxSizing: 'border-box',
                          backgroundColor: '#ffffff',
                          color: '#333'
                        }}
                        required
                      />
                    </div>

                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '16px',
                      marginBottom: '16px'
                    }}>
                      <div>
                        <label style={{
                          display: 'block',
                          marginBottom: '8px',
                          fontWeight: '600',
                          color: '#444'
                        }}>
                          Date *
                        </label>
                        <input
                          type="date"
                          value={eventForm.date}
                          onChange={(e) => handleFormChange('date', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '12px',
                            border: '2px solid #e0e0e0',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            boxSizing: 'border-box',
                            backgroundColor: '#ffffff',
                            color: '#333'
                          }}
                          required
                        />
                      </div>

                      <div>
                        <label style={{
                          display: 'block',
                          marginBottom: '8px',
                          fontWeight: '600',
                          color: '#444'
                        }}>
                          Time *
                        </label>
                        <input
                          type="text"
                          value={eventForm.time}
                          onChange={(e) => handleFormChange('time', e.target.value)}
                          placeholder="e.g. 7:00 PM - 9:00 PM"
                          style={{
                            width: '100%',
                            padding: '12px',
                            border: '2px solid #e0e0e0',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            boxSizing: 'border-box',
                            backgroundColor: '#ffffff',
                            color: '#333'
                          }}
                          required
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '600',
                        color: '#444'
                      }}>
                        Location *
                      </label>
                      <input
                        type="text"
                        value={eventForm.location}
                        onChange={(e) => handleFormChange('location', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '2px solid #e0e0e0',
                          borderRadius: '8px',
                          fontSize: '1rem',
                          boxSizing: 'border-box',
                          backgroundColor: '#ffffff',
                          color: '#333'
                        }}
                        required
                      />
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '600',
                        color: '#444'
                      }}>
                        Category *
                      </label>
                      <select
                        value={eventForm.category}
                        onChange={(e) => handleFormChange('category', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '2px solid #e0e0e0',
                          borderRadius: '8px',
                          fontSize: '1rem',
                          boxSizing: 'border-box',
                          backgroundColor: '#ffffff',
                          color: '#333'
                        }}
                        required
                      >
                        <option value="Discussion">Discussion</option>
                        <option value="Workshop">Workshop</option>
                        <option value="Speaker">Speaker</option>
                        <option value="Social">Social</option>
                      </select>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '600',
                        color: '#444'
                      }}>
                        Description *
                      </label>
                      <textarea
                        value={eventForm.description}
                        onChange={(e) => handleFormChange('description', e.target.value)}
                        rows="4"
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '2px solid #e0e0e0',
                          borderRadius: '8px',
                          fontSize: '1rem',
                          boxSizing: 'border-box',
                          fontFamily: 'inherit',
                          resize: 'vertical',
                          backgroundColor: '#ffffff',
                          color: '#333'
                        }}
                        required
                      />
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '600',
                        color: '#444'
                      }}>
                        Spots Available
                      </label>
                      <input
                        type="text"
                        value={eventForm.spots}
                        onChange={(e) => handleFormChange('spots', e.target.value)}
                        placeholder="e.g. 25 spots available"
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '2px solid #e0e0e0',
                          borderRadius: '8px',
                          fontSize: '1rem',
                          boxSizing: 'border-box',
                          backgroundColor: '#ffffff',
                          color: '#333'
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                      <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '600',
                        color: '#444'
                      }}>
                        Image Path
                      </label>
                      <input
                        type="text"
                        value={eventForm.image}
                        onChange={(e) => handleFormChange('image', e.target.value)}
                        placeholder="/images/your-image.jpg"
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '2px solid #e0e0e0',
                          borderRadius: '8px',
                          fontSize: '1rem',
                          boxSizing: 'border-box',
                          backgroundColor: '#ffffff',
                          color: '#333'
                        }}
                      />
                    </div>

                    <div style={{
                      display: 'flex',
                      gap: '12px',
                      justifyContent: 'flex-end'
                    }}>
                      <button
                        type="button"
                        onClick={() => {
                          setShowEventForm(false);
                          setEditingEvent(null);
                        }}
                        style={{
                          padding: '12px 24px',
                          backgroundColor: '#e0e0e0',
                          color: '#444',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontWeight: '600'
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        style={{
                          padding: '12px 24px',
                          backgroundColor: '#287094',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontWeight: '600'
                        }}
                      >
                        Save Event
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Events List */}
            <div style={{
              display: 'grid',
              gap: '16px'
            }}>
              {events.length === 0 ? (
                <div style={{
                  padding: '48px',
                  textAlign: 'center',
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  border: '2px dashed #e0e0e0'
                }}>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#666',
                    marginBottom: '16px'
                  }}>
                    No events yet. Click "Add New Event" to create one.
                  </p>
                </div>
              ) : (
                events.map((event) => (
                  <div
                    key={event.id}
                    style={{
                      backgroundColor: '#ffffff',
                      padding: '24px',
                      borderRadius: '12px',
                      border: '2px solid #e0e0e0',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '20px'
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: '1.3rem',
                        color: '#287094',
                        marginBottom: '8px',
                        fontWeight: '700'
                      }}>
                        {event.title}
                      </h3>
                      <div style={{
                        display: 'flex',
                        gap: '16px',
                        flexWrap: 'wrap',
                        marginBottom: '12px',
                        fontSize: '0.95rem',
                        color: '#666'
                      }}>
                        <span><strong>Date:</strong> {event.date}</span>
                        <span><strong>Time:</strong> {event.time}</span>
                        <span><strong>Category:</strong> {event.category}</span>
                      </div>
                      <p style={{
                        color: '#666',
                        marginBottom: '8px',
                        lineHeight: '1.6'
                      }}>
                        📍 {event.location}
                      </p>
                      <p style={{
                        color: '#444',
                        lineHeight: '1.6'
                      }}>
                        {event.description}
                      </p>
                    </div>
                    <div style={{
                      display: 'flex',
                      gap: '8px'
                    }}>
                      <button
                        onClick={() => handleEditEvent(event)}
                        style={{
                          padding: '8px 16px',
                          backgroundColor: '#287094',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontWeight: '600',
                          fontSize: '0.9rem'
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteEvent(event.id)}
                        style={{
                          padding: '8px 16px',
                          backgroundColor: '#dc3545',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontWeight: '600',
                          fontSize: '0.9rem'
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {activeTab === 'blog' && (
          <BlogManagement />
        )}
      </div>
    </div>
  );
};

export default AdminPanel;