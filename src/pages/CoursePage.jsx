import React from 'react';
import { BookOpen, Clock, ChevronRight, Zap, Eye, Sprout, Settings } from 'lucide-react';
// Import your CSS file
import './CoursePage.css';

// Import your components when ready:
 import Navbar from '../components/Navbar';
 import Footer from '../components/Footer';

// Add custom styles for coming soon text
const comingSoonStyles = `
.coming-soon-text {
  text-align: center;
  padding: 1rem 0;
}

.coming-soon-text span {
  font-size: 1.125rem;
  font-weight: 600;
  color: #f59e0b;
  display: block;
  margin-bottom: 0.5rem;
}

.coming-soon-text p {
  font-size: 0.875rem;
  color: #94a3b8;
  font-weight: 400;
  margin: 0;
}
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = comingSoonStyles;
  document.head.appendChild(styleElement);
}

const CoursePage = () => {
  const courses = [
    {
      id: 1,
      title: "Drone Forensics",
      description: "Master the art of drone investigation and digital forensics. Learn to analyze flight data, recover evidence, and understand drone technology from a forensic perspective.",
      icon: <Eye className="course-icon-svg" />,
      status: "Available",
      duration: "8 Weeks",
      level: "Intermediate",
      headerClass: "forensics",
      available: true,
      enrollLink: "https://hokage-deepanshu.github.io/dronetech/" // Add your course link here
    },
    {
      id: 2,
      title: "Agriculture Drone",
      description: "Revolutionize farming with precision agriculture. Learn crop monitoring, pesticide spraying, soil analysis, and smart farming techniques using advanced drone technology.",
      icon: <Sprout className="course-icon-svg" />,
      status: "Available",
      duration: "10 Weeks",
      level: "Beginner",
      headerClass: "agriculture",
      available: true,
      enrollLink: "https://kisandrishti.in" // Add your course link here
    },
    {
      id: 3,
      title: "Drone Development",
      description: "Build drones from scratch! Learn hardware integration, flight controllers, programming, and custom drone development for specialized applications.",
      icon: <Settings className="course-icon-svg" />,
      status: "Coming Soon",
      duration: "12 Weeks",
      level: "Advanced",
      headerClass: "development",
      available: false,
      enrollLink: "/courses/drone-development" // Add your course link here
    },
    {
      id: 4,
      title: "Drone Surveillance & Mapping",
      description: "Master aerial surveillance and precision mapping. Learn photogrammetry, GIS integration, 3D modeling, and professional mapping techniques.",
      icon: <Zap className="course-icon-svg" />,
      status: "Coming Soon",
      duration: "9 Weeks",
      level: "Intermediate",
      headerClass: "surveillance",
      available: false,
      enrollLink: "/courses/surveillance-mapping" // Add your course link here
    }
  ];

  return (
    <div className="course-page">
      {/* Uncomment when you have these components ready */}
      { <Navbar /> }
      


      {/* Main Content */}
      <main className="main-content"  style={{
          backgroundImage: 'url("/infyra drone.png")', // LINE 51: Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          backgroundColor: '#00000084',
        }}>
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Our Courses</h2>
          <p className="section-description">
            Choose from our expertly crafted courses designed to make you a drone technology professional
          </p>
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {courses.map((course) => (
            <article
              key={course.id}
              className="course-card"
            >
              {/* Course Header */}
              <header className={`course-header ${course.headerClass}`}>
                <div className="course-header-top">
                  <div className="course-icon">
                    {course.icon}
                  </div>
                  <span className={`course-status ${course.available ? 'available' : 'coming-soon'}`}>
                    {course.status}
                  </span>
                </div>
                
                <h3 className="course-title">{course.title}</h3>
                
                <div className="course-meta">
                  <div className="course-meta-item">
                    <Clock className="meta-icon" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="course-meta-item">
                    <BookOpen className="meta-icon" />
                    <span>{course.level}</span>
                  </div>
                </div>
              </header>

              {/* Course Body */}
              <div className="course-body">
                <p className="course-description">
                  {course.description}
                </p>
                
                <footer className="course-footer">
                  {course.available ? (
                    <a 
                      href={course.enrollLink}
                      className="course-button available"
                    >
                      <span>Enroll Now</span>
                      <ChevronRight className="button-icon" />
                    </a>
                  ) : (
                    <div className="coming-soon-text">
                      <span>🚀 Coming Soon</span>
                      <p>Get ready for an amazing learning experience!</p>
                    </div>
                  )}
                </footer>
              </div>
            </article>
          ))}
        </div>
      </main>


      {/* Uncomment when you have Footer component ready */}
      { <Footer /> }
    </div>
  );
};

export default CoursePage;