import React, { useState } from 'react';

const QAPage = ({ setCurrentPage }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
    category: 'theology'
  });

  const categories = [
    { 
      id: 'all', 
      label: 'All Topics', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="6" x2="21" y2="6"></line>
          <line x1="8" y1="12" x2="21" y2="12"></line>
          <line x1="8" y1="18" x2="21" y2="18"></line>
          <line x1="3" y1="6" x2="3.01" y2="6"></line>
          <line x1="3" y1="12" x2="3.01" y2="12"></line>
          <line x1="3" y1="18" x2="3.01" y2="18"></line>
        </svg>
      )
    },
    { 
      id: 'theology', 
      label: 'Theology', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      )
    },
    { 
      id: 'scripture', 
      label: 'Scripture', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
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
      id: 'science', 
      label: 'Science & Faith', 
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
      id: 'ethics', 
      label: 'Ethics & Morality', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      )
    },
    { 
      id: 'culture', 
      label: 'Culture & Society', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
    }
  ];

  const questions = [
    {
      id: 1,
      category: 'theology',
      question: 'How can we know God exists?',
      answer: 'The existence of God can be explored through multiple lines of evidence and reasoning. Philosophical arguments like the Cosmological Argument point to a necessary first cause, the Teleological Argument highlights the design and fine-tuning in the universe, and the Moral Argument suggests an objective moral lawgiver. Additionally, the historical evidence for Jesus Christ\'s resurrection provides powerful testimony to God\'s existence and activity in human history. Many people also point to personal religious experience and the transformation they\'ve witnessed in their own lives and others. While no single argument may be conclusive on its own, together they form a cumulative case that belief in God is rationally justified.',
      tags: ['Evidence', 'Arguments', 'Foundational'],
      popular: true
    },
    {
      id: 2,
      category: 'scripture',
      question: 'Is the Bible historically reliable?',
      answer: 'The historical reliability of the Bible is supported by several factors. Archaeological discoveries consistently confirm biblical accounts of places, people, and events. The New Testament has more manuscript evidence than any other ancient document, with over 5,800 Greek manuscripts. The time gap between original writing and earliest copies is remarkably small compared to other ancient texts. Internal consistency across 66 books written by 40+ authors over 1,500 years is remarkable. External sources from historians like Josephus, Tacitus, and Pliny corroborate biblical events. The criterion of embarrassment (inclusion of unflattering details about key figures) suggests authenticity. While faith is still required to accept its theological claims, the Bible demonstrates strong historical credibility as an ancient document.',
      tags: ['History', 'Evidence', 'Manuscripts'],
      popular: true
    },
    {
      id: 3,
      category: 'philosophy',
      question: 'If God is good, why is there evil and suffering?',
      answer: 'This is perhaps the most challenging question in theology, known as "the problem of evil." Several responses are worth considering: (1) Free will - God gave humans genuine freedom to choose, and much evil results from human choices. A world with free creatures capable of love requires the possibility of choosing evil. (2) Soul-making - Suffering can produce character, compassion, and spiritual growth that wouldn\'t develop otherwise. (3) Limited perspective - We see only a small slice of reality and may not understand how God can bring good from evil in the bigger picture. (4) God\'s presence in suffering - Christianity uniquely claims God entered into human suffering through Christ, showing He isn\'t distant from our pain. While these don\'t eliminate the emotional difficulty of suffering, they provide rational frameworks for understanding how God and evil can coexist.',
      tags: ['Theology', 'Philosophy', 'Popular Question'],
      popular: true
    },
    {
      id: 4,
      category: 'science',
      question: 'Does evolution disprove Christianity?',
      answer: 'Evolution and Christianity are not necessarily in conflict. Many Christians accept evolutionary science while maintaining their faith. Here\'s why: (1) The Bible\'s primary purpose is theological, not scientific - it tells us "who" and "why," not necessarily "how." (2) Genesis can be interpreted in various ways that accommodate scientific findings. (3) Evolution, even if true, doesn\'t explain the origin of life itself or why there\'s something rather than nothing. (4) Theistic evolution holds that God guided the evolutionary process. (5) The fine-tuning of physical constants necessary for life still points to design. (6) Many prominent scientists are Christians who see no contradiction. The key question isn\'t evolution vs. faith, but whether the universe shows evidence of purpose and design - which many argue it does, regardless of the mechanism of development.',
      tags: ['Science', 'Origins', 'Common Question'],
      popular: false
    },
    {
      id: 5,
      category: 'scripture',
      question: 'How do we know the right books are in the Bible?',
      answer: 'The process of determining the biblical canon (which books are included) was careful and principled. For the New Testament: (1) Apostolic origin - written by or closely connected to apostles. (2) Early usage - widely used in early churches. (3) Consistency - agreed with established Christian teaching. (4) Divine qualities - demonstrated spiritual authority and power. This wasn\'t arbitrary - most books were accepted early and universally. Disputed books were carefully examined. By 367 AD, Athanasius listed our current 27 NT books. The criteria weren\'t about what church leaders preferred, but recognizing which books already had divine authority and apostolic connection. For the Old Testament, Jesus affirmed the Hebrew scriptures of His time. Rather than the church deciding what was Scripture, they recognized what God had already inspired.',
      tags: ['Scripture', 'Canon', 'Church History'],
      popular: false
    },
    {
      id: 6,
      category: 'ethics',
      question: 'Is morality possible without God?',
      answer: 'This question addresses moral ontology (the foundation of morality) versus moral epistemology (knowing right from wrong). While atheists can certainly behave morally and recognize moral truths, the question is about the ultimate grounding of objective moral values. If God doesn\'t exist, it\'s difficult to explain why anything is objectively right or wrong rather than just socially constructed or evolutionary advantageous. Moral realism (belief in objective moral facts) seems to require a transcendent source. Without God: (1) Moral values reduce to personal preference or social convention. (2) No objective basis exists to condemn atrocities. (3) "Oughtness" is hard to derive from "isness." With God, moral values are grounded in His unchanging nature. This doesn\'t mean atheists can\'t be good people - they can and often are - but it questions whether objective morality makes sense in an atheistic worldview.',
      tags: ['Ethics', 'Philosophy', 'Morality'],
      popular: false
    },
    {
      id: 7,
      category: 'theology',
      question: 'What about people who never hear about Jesus?',
      answer: 'This important question touches on God\'s justice and fairness. Several considerations: (1) God judges based on the light people have received (Romans 2:14-16 suggests those without the law are judged by their conscience). (2) Scripture indicates God desires all people to be saved and reveals Himself through creation (Romans 1:20). (3) God is perfectly just and will judge fairly based on complete knowledge of each person\'s circumstances. (4) The question assumes we know who is or isn\'t saved - but that\'s God\'s knowledge, not ours. (5) Rather than speculating about others\' salvation, Jesus calls His followers to share the gospel so people do hear. (6) We can trust that "the Judge of all the earth will do right" (Genesis 18:25). While mystery remains, God\'s character guarantees His justice and mercy.',
      tags: ['Salvation', 'Theology', 'Justice'],
      popular: false
    },
    {
      id: 8,
      category: 'culture',
      question: 'How should Christians engage with culture?',
      answer: 'Christians throughout history have taken different approaches to culture, often described as "Christ against culture," "Christ of culture," "Christ above culture," "Christ and culture in paradox," and "Christ transforming culture." A balanced approach considers: (1) Being "in the world but not of it" - engaging without compromising core values. (2) Seeking truth wherever it\'s found - all truth is God\'s truth. (3) Demonstrating grace and truth together, as Jesus did. (4) Being salt and light - preserving good and illuminating truth. (5) Respecting others while maintaining conviction. (6) Focusing on winsome persuasion rather than cultural warfare. (7) Prioritizing relationships and listening. (8) Living with excellence and integrity in every sphere. The goal isn\'t cultural domination but faithful presence, serving the common good while maintaining Christian distinctiveness and pointing others to Christ.',
      tags: ['Culture', 'Christian Living', 'Engagement'],
      popular: false
    }
  ];

  const filteredQuestions = questions.filter(q => {
    const categoryMatch = selectedCategory === 'all' || q.category === selectedCategory;
    const searchMatch = searchQuery.trim() === '' || 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return categoryMatch && searchMatch;
  });

  const popularQuestions = questions.filter(q => q.popular);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your question! We\'ll review it and provide an answer soon.');
    setFormData({
      name: '',
      email: '',
      question: '',
      category: 'theology'
    });
  };

  const getCategoryIcon = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.icon : (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6"></line>
        <line x1="8" y1="12" x2="21" y2="12"></line>
        <line x1="8" y1="18" x2="21" y2="18"></line>
        <line x1="3" y1="6" x2="3.01" y2="6"></line>
        <line x1="3" y1="12" x2="3.01" y2="12"></line>
        <line x1="3" y1="18" x2="3.01" y2="18"></line>
      </svg>
    );
  };

  const getCategoryLabel = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.label : categoryId;
  };

  return (
    <div style={{
      width: '100%',
      backgroundColor: '#ffffff'
    }}>
      {/* Hero Section */}
      <section style={{
        backgroundImage: 'linear-gradient(rgba(26, 77, 102, 0.85), rgba(40, 112, 148, 0.85)), url(/images/bible-study-pencil.jpg)',
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
            Questions & Answers
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
            opacity: 0.95,
            lineHeight: '1.7',
            maxWidth: '800px',
            margin: '0 auto 32px'
          }}>
            Explore thoughtful, researched answers to common questions about faith, reason, and Christianity. Can't find what you're looking for? Submit your question below.
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
              placeholder="Search questions, answers, or topics..."
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
          
          {searchQuery && (
            <div style={{
              marginTop: '16px',
              textAlign: 'center',
              fontSize: '0.95rem',
              color: '#666'
            }}>
              {filteredQuestions.length === 0 ? (
                <span style={{ color: '#d32f2f' }}>
                  No questions found matching "{searchQuery}"
                </span>
              ) : (
                <span>
                  Found <strong style={{ color: '#287094' }}>{filteredQuestions.length}</strong> {filteredQuestions.length === 1 ? 'question' : 'questions'} matching "{searchQuery}"
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

      {/* Popular Questions Section */}
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
              Most Popular Questions
            </h2>
            <p style={{
              textAlign: 'center',
              fontSize: '1.1rem',
              color: '#666',
              marginBottom: '48px'
            }}>
              Start with these frequently asked questions
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '28px',
              alignItems: 'start'
            }}>
              {popularQuestions.map((q) => {
                const isExpanded = expandedQuestion === q.id;
                
                return (
                  <div
                    key={q.id}
                    onMouseEnter={() => setHoveredCard(q.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedQuestion(expandedQuestion === q.id ? null : q.id);
                    }}
                    style={{
                      width: '100%',
                      backgroundColor: '#f8f9fa',
                      padding: '32px',
                      borderRadius: '16px',
                      border: '2px solid',
                      borderColor: hoveredCard === q.id ? '#287094' : '#e0e0e0',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      transform: hoveredCard === q.id ? 'translateY(-4px)' : 'translateY(0)',
                      boxShadow: hoveredCard === q.id ? '0 8px 24px rgba(40, 112, 148, 0.15)' : 'none',
                      boxSizing: 'border-box'
                    }}
                  >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '16px'
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        display: 'inline-block',
                        padding: '4px 12px',
                        backgroundColor: '#e8f4f8',
                        color: '#287094',
                        borderRadius: '16px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        marginBottom: '12px',
                        textTransform: 'uppercase'
                      }}>
                        {getCategoryLabel(q.category)}
                      </div>
                      <h3 style={{
                        fontSize: '1.3rem',
                        color: '#287094',
                        marginBottom: '12px',
                        fontWeight: '700',
                        lineHeight: '1.4'
                      }}>
                        {q.question}
                      </h3>
                      
                      {!isExpanded && (
                        <p style={{
                          fontSize: '0.95rem',
                          color: '#666',
                          lineHeight: '1.6',
                          fontStyle: 'italic'
                        }}>
                          Click to read the full answer...
                        </p>
                      )}
                      
                      {isExpanded && (
                        <p style={{
                          fontSize: '1rem',
                          color: '#444',
                          lineHeight: '1.7',
                          marginTop: '16px'
                        }}>
                          {q.answer}
                        </p>
                      )}
                    </div>
                    <div style={{
                      fontSize: '1.5rem',
                      color: '#287094',
                      transition: 'transform 0.3s ease',
                      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      flexShrink: 0
                    }}>
                      ▼
                    </div>
                  </div>
                  
                  {isExpanded && (
                    <div style={{
                      display: 'flex',
                      gap: '8px',
                      flexWrap: 'wrap',
                      marginTop: '16px'
                    }}>
                      {q.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: '4px 10px',
                            backgroundColor: '#ffffff',
                            color: '#666',
                            borderRadius: '12px',
                            fontSize: '0.8rem',
                            border: '1px solid #e0e0e0'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Questions Section */}
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
              {searchQuery ? 'Search Results' : (selectedCategory === 'all' ? 'All Questions' : `${getCategoryLabel(selectedCategory)} Questions`)}
            </h2>
            
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

          {filteredQuestions.length === 0 ? (
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
                No Questions Found
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                marginBottom: '32px',
                lineHeight: '1.7'
              }}>
                {searchQuery 
                  ? `We couldn't find any questions matching "${searchQuery}". Try different keywords or browse all questions.`
                  : 'No questions found in this category. Try selecting a different category.'}
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
                View All Questions
              </button>
            </div>
          ) : (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
            {filteredQuestions.map((q) => (
              <div
                key={q.id}
                onClick={() => setExpandedQuestion(expandedQuestion === q.id ? null : q.id)}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '28px 32px',
                  borderRadius: '12px',
                  border: '2px solid',
                  borderColor: expandedQuestion === q.id ? '#287094' : '#e0e0e0',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (expandedQuestion !== q.id) {
                    e.currentTarget.style.borderColor = '#287094';
                    e.currentTarget.style.backgroundColor = '#f8f9fa';
                  }
                }}
                onMouseLeave={(e) => {
                  if (expandedQuestion !== q.id) {
                    e.currentTarget.style.borderColor = '#e0e0e0';
                    e.currentTarget.style.backgroundColor = '#ffffff';
                  }
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '20px'
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '8px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#287094'
                      }}>
                        {getCategoryIcon(q.category)}
                      </div>
                      <span style={{
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        color: '#287094',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        {getCategoryLabel(q.category)}
                      </span>
                    </div>
                    <h3 style={{
                      fontSize: '1.3rem',
                      color: '#287094',
                      fontWeight: '700',
                      lineHeight: '1.4',
                      marginBottom: expandedQuestion === q.id ? '16px' : '0'
                    }}>
                      {q.question}
                    </h3>
                    {expandedQuestion === q.id && (
                      <div>
                        <p style={{
                          fontSize: '1.05rem',
                          color: '#444',
                          lineHeight: '1.8',
                          marginTop: '16px',
                          paddingTop: '16px',
                          borderTop: '1px solid #e0e0e0'
                        }}>
                          {q.answer}
                        </p>
                        <div style={{
                          display: 'flex',
                          gap: '8px',
                          flexWrap: 'wrap',
                          marginTop: '20px'
                        }}>
                          {q.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              style={{
                                padding: '6px 12px',
                                backgroundColor: '#e8f4f8',
                                color: '#287094',
                                borderRadius: '16px',
                                fontSize: '0.85rem',
                                fontWeight: '600'
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div style={{
                    fontSize: '1.5rem',
                    color: '#287094',
                    transition: 'transform 0.3s ease',
                    transform: expandedQuestion === q.id ? 'rotate(180deg)' : 'rotate(0deg)',
                    flexShrink: 0
                  }}>
                    ▼
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* Submit Question Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#ffffff'
      }}>
        <div style={{
          maxWidth: '800px',
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
              Submit Your Question
            </h2>
            <p style={{
              fontSize: '1.15rem',
              color: '#666',
              lineHeight: '1.7'
            }}>
              Don't see your question answered? We'd love to hear from you. Our team will research your question and provide a thoughtful response.
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
                    backgroundColor: '#ffffff',
                    color: '#333'
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
                    backgroundColor: '#ffffff',
                    color: '#333'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#287094'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>

              {/* Category Field */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#444',
                  marginBottom: '8px'
                }}>
                  Question Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
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
                    color: '#333',
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center',
                    backgroundSize: '20px',
                    paddingRight: '40px'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#287094'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                >
                  {categories.filter(c => c.id !== 'all').map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Question Field */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#444',
                  marginBottom: '8px'
                }}>
                  Your Question *
                </label>
                <textarea
                  name="question"
                  value={formData.question}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Please provide as much detail as possible..."
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
                    backgroundColor: '#ffffff',
                    color: '#333'
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
                  padding: '16px 48px',
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
                Submit Question
              </button>

              <p style={{
                fontSize: '0.9rem',
                color: '#666',
                textAlign: 'center',
                marginTop: '8px',
                fontStyle: 'italic'
              }}>
                We aim to respond to all questions within 5-7 business days
              </p>
            </div>
          </form>
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
            Want to Learn More?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '48px',
            opacity: 0.95,
            lineHeight: '1.7'
          }}>
            Explore our resources, attend an event, or reach out to discuss these questions in person.
          </p>
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default QAPage;