import React, { useState, useEffect } from 'react';
import './App.css';  // Add this line if missing

import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Award, Briefcase, GraduationCap, Code, User, Menu, X, Download, Calendar, Building, Home, FolderOpen, Trophy, Wrench, ChevronRight, ArrowLeft } from 'lucide-react';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToPage = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pages = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'skills', label: 'Skills', icon: Wrench },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
  ];

  const skills = {
    'Programming Languages': ['Python', 'Java (OOP)', 'C', 'SQL', 'JavaScript'],
    'Web Development': ['HTML', 'CSS', 'React', 'Node.js', 'Flask', 'REST APIs'],
    'Tools & Platforms': ['Power Apps', 'Power Automate', 'Gen-AI Tools', 'Postman', 'Git', 'VS Code'],
    'Data & Analytics': ['Power BI', 'MS Excel', 'Data Analysis', 'Computer Vision (OpenCV)'],
    'Core CS Concepts': ['Data Structures & Algorithms', 'Operating Systems']
  };

  const experience = [
    {
      title: 'Software Development Intern',
      company: 'Bosch Chassis System India Pvt Ltd',
      location: 'Chakan, Pune',
      duration: '01/2025 – 06/2025',
      description: [
        'Worked in the MFD (Manufacturing and Digitalization) Department of RBIC, Chakan',
        'Developed Generative AI tools including AskBosch Brain with Retrieval Augmented Generation and Synthesia',
        'Handled Project Bank including projects from plants across India and created analysis dashboards in Power BI and Excel',
        'Created automated tenure notification Application for HRL and worked on Ant Entry Barrier (AEB) Data Process Completion Confirmation Full-Stack Application',
        'Developed interactive Power BI dashboards for multiple departments enabling data-driven decision-making'
      ]
    },
    {
      title: 'Project Trainee',
      company: 'Bosch Limited',
      location: 'Nashik',
      duration: '12/2023 – 01/2024',
      description: [
        'Worked in TEF 4 Department of Bosch, Nashik Plant',
        'Developed "Smart Manpower Management" Project using Python, HTML, CSS, JavaScript, SQL',
        'Created frontend for employee data management application on respective workstations'
      ]
    }
  ];

  const projects = [
    {
      title: 'Ant Entry Barrier (AEB) Data Process Completion Confirmation',
      duration: '04/2025 – 06/2025',
      description: 'Full-Stack Application using HTML, JavaScript, CSS with Flask backend that monitors ECU Reporting Data with MES Database integration. Features automatic PDF generation with unique IDs and barcodes for palette completion.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Flask', 'Oracle DB', 'Excel Integration'],
      status: 'Production'
    },
    {
      title: 'Automated Tenure Notification System',
      duration: '04/2025 – 05/2025',
      description: 'Full-Stack Flask application that automatically sends emails to employees whose tenure is within 10 days. Created for HRL Department in Bosch, Chakan to automate manual email processes.',
      tech: ['Flask', 'Python', 'Excel Integration', 'Email Automation'],
      status: 'Deployed'
    },
    {
      title: 'Gen-AI based Retrieval Augmented Generation Brain',
      duration: '02/2025 – 06/2025',
      description: 'RAG-based Brain (Personal Chatbot by AskBosch) for efficient data retrieval, responsive only to fed documents/data. Tested overall efficiency of the brain system.',
      tech: ['Gen-AI', 'RAG', 'Python', 'Data Retrieval'],
      status: 'Completed'
    },
    {
      title: 'E-Commerce Website',
      duration: '06/2023 – 12/2023',
      description: 'Shopping website for men, women and kids with complete frontend implementation using modern web technologies.',
      tech: ['React.js', 'Tailwind CSS', 'Frontend Development'],
      status: 'Completed'
    },
    {
      title: 'Travel and Tourism Management Application',
      duration: '01/2023 – 05/2023',
      description: 'Personal tour-guide application for users with booking functionality for hotels, packages, and tourist places.',
      tech: ['Java', 'MySQL', 'Application Development'],
      status: 'Completed'
    }
  ];

  const achievements = [
    {
      title: 'BOSCH 2025 Hackathon Participation',
      description: 'Participated in the prestigious BOSCH 2025 hackathon held at Bosch, Chakan Plant',
      type: 'Competition'
    },
    {
      title: 'Production Application Deployment',
      description: 'Deployed full-stack "Ant Entry Barrier Process Completion Confirmation" application actively used in production by shopfloor operators',
      type: 'Achievement'
    },
    {
      title: 'IBM Full Stack Software Developer',
      description: 'Coursera Certification in Full Stack Software Development',
      type: 'Certification'
    },
    {
      title: 'Microsoft Introduction to AI in Azure',
      description: 'Microsoft Azure AI Certification',
      type: 'Certification'
    },
    {
      title: 'Java HackerRank Certification',
      description: 'Java programming certification from HackerRank',
      type: 'Certification'
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Electronics and Telecommunication Engineering',
      institution: 'Bansilal Ramnath Agarwal Charitable Trust\'s Vishwakarma Institute of Technology',
      location: 'Bibwewadi, Pune',
      duration: '06/2021 – 06/2025',
      grade: 'CGPA: 7.7'
    },
    {
      degree: 'XII (HSC)',
      institution: 'Matoshri Junior College',
      location: 'Mhasrul, Nashik',
      duration: '2021',
      grade: '92.33%'
    },
    {
      degree: 'X (CBSE)',
      institution: 'Nashik Cambridge School',
      location: 'Nashik',
      duration: '2019',
      grade: '91.8%'
    }
  ];

  // Navigation Component
  const Navigation = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => navigateToPage('home')}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            Asthha Navandar
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {pages.map((page) => {
              const Icon = page.icon;
              return (
                <button
                  key={page.id}
                  onClick={() => navigateToPage(page.id)}
                  className={`flex items-center gap-2 transition-colors hover:text-purple-400 ${
                    currentPage === page.id ? 'text-purple-400' : 'text-gray-300'
                  }`}
                >
                  <Icon size={18} />
                  {page.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 py-2 space-y-2">
            {pages.map((page) => {
              const Icon = page.icon;
              return (
                <button
                  key={page.id}
                  onClick={() => navigateToPage(page.id)}
                  className="flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg transition-colors hover:bg-white/10 hover:text-purple-400"
                >
                  <Icon size={18} />
                  {page.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );

  // Page Header Component
  const PageHeader = ({ title, subtitle, icon: Icon }) => (
    <div className="text-center mb-16 pt-24">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
          <Icon size={32} className="text-white" />
        </div>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        {title}
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
    </div>
  );

  // Home Page
  const HomePage = () => (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="w-48 h-48 mx-auto mb-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
            <User size={80} className="text-white" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            Asthha Navandar
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            B.Tech in Electronics and Telecommunication Engineering
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Recent B.Tech graduate with hands-on experience through internships at Bosch. 
            Skilled in Full-Stack Development, Generative AI, and Data Analytics. 
            Passionate about creating innovative solutions that drive digital transformation 
            and operational efficiency.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:aasthanavandar@gmail.com" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-all hover:scale-105">
              <Mail size={20} />
              Contact Me
            </a>
            <a href="https://linkedin.com/in/asthha-navandar-1a5288325" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all hover:scale-105">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <button 
              onClick={() => navigateToPage('projects')}
              className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 px-6 py-3 rounded-lg transition-all hover:scale-105"
            >
              <FolderOpen size={20} />
              View Projects
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-gray-300 mb-12">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              aasthanavandar@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              +91 8767753471
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              Pune, 411037
            </div>
          </div>

          {/* Quick Stats */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">2</div>
              <div className="text-gray-300">Internships</div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-gray-300">Major Projects</div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-gray-300">Certifications</div> */}
            {/* </div>
          </div> */}

          {/* Education Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-purple-400 mb-2">{edu.degree}</h3>
                      <p className="text-gray-300 mb-1">{edu.institution}</p>
                      <p className="text-gray-400">{edu.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-400 mb-1">{edu.duration}</div>
                      <div className="text-purple-400 font-semibold">{edu.grade}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Experience Page
  const ExperiencePage = () => (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader 
          title="Experience" 
          subtitle="Internships and professional achievements"
          icon={Briefcase}
        />
        
        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-gray-300 mb-2">
                    <Building size={16} />
                    {exp.company}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={16} />
                    {exp.location}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 mt-4 md:mt-0">
                  <Calendar size={16} />
                  {exp.duration}
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <ChevronRight size={16} className="text-purple-400 mt-1 flex-shrink-0" />
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Projects Page
  const ProjectsPage = () => (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader 
          title="Projects" 
          subtitle="Innovative solutions and applications"
          icon={FolderOpen}
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Code className="text-purple-400" size={20} />
                  <h3 className="text-xl font-bold text-purple-400">{project.title}</h3>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  project.status === 'Production' ? 'bg-green-600/20 text-green-400' :
                  project.status === 'Deployed' ? 'bg-blue-600/20 text-blue-400' :
                  'bg-purple-600/20 text-purple-400'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <Calendar size={16} />
                {project.duration}
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Skills Page
  const SkillsPage = () => (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader 
          title="Skills" 
          subtitle="Technical expertise and competencies"
          icon={Wrench}
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <h3 className="text-xl font-bold text-purple-400 mb-4">{category}</h3>
              <div className="space-y-2">
                {skillList.map((skill, i) => (
                  <div key={i} className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 px-4 py-3 rounded-lg border border-purple-500/30 hover:border-purple-500/60 transition-all hover:scale-105">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Achievements Page
  const AchievementsPage = () => (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader 
          title="Achievements" 
          subtitle="Recognition and certifications"
          icon={Trophy}
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full ${
                  achievement.type === 'Competition' ? 'bg-yellow-600/20 text-yellow-400' :
                  achievement.type === 'Certification' ? 'bg-blue-600/20 text-blue-400' :
                  'bg-green-600/20 text-green-400'
                }`}>
                  <Award size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-purple-400">{achievement.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      achievement.type === 'Competition' ? 'bg-yellow-600/20 text-yellow-400' :
                      achievement.type === 'Certification' ? 'bg-blue-600/20 text-blue-400' :
                      'bg-green-600/20 text-green-400'
                    }`}>
                      {achievement.type}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Render current page
  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'experience': return <ExperiencePage />;
      case 'projects': return <ProjectsPage />;
      case 'skills': return <SkillsPage />;
      case 'achievements': return <AchievementsPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation />
      
      {renderPage()}

      {/* Footer */}
      <footer className="py-12 bg-slate-900/80 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Asthha Navandar
            </div>
            <p className="text-gray-400 mb-6">
              B.Tech in Electronics and Telecommunication Engineering
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:aasthanavandar@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://linkedin.com/in/asthha-navandar-1a5288325" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
            <p className="text-gray-500 mt-6">
              © 2025 Asthha Navandar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;