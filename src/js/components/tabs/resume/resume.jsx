import React from 'react';
import './resume.scss';

const Resume = () => (
  <div className="wrapper">
    <div className="preview-box">
      <div className="container">
        <div className="container-main">
          <div className="top-block">
            <div className="top-block-details">
              <div className="top-block-name setting-primary-text">
                <p>
                  Jean Luis Urena
                  <br />
                  Software Engineer
                </p>
              </div>
              <div className="top-block-contacts">
                <span className="top-block-city">
                  <span>B</span>
                  <span>R</span>
                  <span>O</span>
                  <span>N</span>
                  <span>X</span>
                  <span>,</span>
                  <span />
                  <span>N</span>
                  <span>Y</span>
                </span>
                <span className="top-block-contacts-sep">·</span>
                <span className="top-block-email reverse">moc.evil@naejle</span>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section-header">
              <span>P</span>
              <span>R</span>
              <span>O</span>
              <span>F</span>
              <span>I</span>
              <span>L</span>
              <span>E</span>
            </div>
            <div className="section-content">
              <div className="profile">
                <p>
                  I focus on designing and implementing smart and scalable solutions
                  with meaningful experiences for the end users.
                </p>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section-header">
              <span>E</span>
              <span>D</span>
              <span>U</span>
              <span>C</span>
              <span>A</span>
              <span>T</span>
              <span>I</span>
              <span>O</span>
              <span>N</span>
            </div>
            <div className="section-content">
              <div className="experience" style={{ breakInside: 'avoid' }}>
                <div className="experience-header">
                  <div className="experience-header-line">
                    <div className="experience-title">
                      Rochester Institute of Technology, B.S in Computer Science
                    </div>
                    <div className="experience-date">
                      Aug 2015 – Dec 2018, Rochester, NY
                    </div>
                  </div>
                </div>
                <div className="experience-description" />
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section-header">
              <span>E</span>
              <span>M</span>
              <span>P</span>
              <span>L</span>
              <span>O</span>
              <span>Y</span>
              <span>M</span>
              <span>E</span>
              <span>N</span>
              <span>T</span>
              <span> </span>
              <span>H</span>
              <span>I</span>
              <span>S</span>
              <span>T</span>
              <span>O</span>
              <span>R</span>
              <span>Y</span>
            </div>
            <div className="section-content">
              <div className="experience" style={{ breakInside: 'auto' }}>
                <div className="experience-header">
                  <div className="experience-header-line">
                    <div className="experience-title">
                      Associate Software Engineer,
                      <span>Teladoc Health</span>
                    </div>
                    <div className="experience-date">
                      Jan 2018 – Present, Purchase, NY
                    </div>
                    <br />
                    <div
                      className="experience-date"
                      style={{ marginLeft: '-2px' }}
                    >
                      May 2017 – August 2017, Purchase, NY
                    </div>
                  </div>
                </div>
                <div className="experience-description">
                  <p>
                    Work with Ruby on Rails, React, Redux, Elixir with Phoenix and
                    MySQL to&nbsp;develop, demonstrate and document software
                    solutions based on user stories, changes and information
                    needed.&nbsp;
                  </p>
                  <p>
                    - Enhanced video conference experience and video conference
                    logging. Ultimately, this helped decrease canceled visits due to
                    technical issues by over 10% and increased our confidence on
                    detecting and ease to debug/fix future production issues
                    involving video conferences.
                  </p>
                  <p>
                    - Spearheaded WCAG initiative to help make the member website
                    accessible to all users irrespective of disability. With this
                    work we were awarded a WCAG compliance certification with an
                    overall score of 9/10.&nbsp;
                  </p>
                </div>
              </div>
              <div className="experience" style={{ breakInside: 'avoid' }}>
                <div className="experience-header">
                  <div className="experience-header-line">
                    <div className="experience-title">
                      Software Engineer (Intern),
                      {' '}
                      <span>Ultimate Software</span>
                    </div>
                    <div className="experience-date">
                      Aug 2017 – Dec 2017, Weston, FL
                    </div>
                  </div>
                </div>
                <div className="experience-description">
                  <p>
                    Worked with .NET, Ruby and JavaScript to developed and
                    documented software improvements and changes.&nbsp;
                  </p>
                  <p>
                    Most notably, decoupled various services into modular
                    micro-services, essentially increasing scalability, improving
                    performance by over 30% and improving user experience.
                  </p>
                </div>
              </div>
              <div className="experience" style={{ breakInside: 'avoid' }}>
                <div className="experience-header">
                  <div className="experience-header-line">
                    <div className="experience-title">
                      Quality Assurance Engineer,
                      {' '}
                      <span>EarthLink</span>
                    </div>
                    <div className="experience-date">
                      Jan 2017 – Apr 2017, Rochester, NY
                    </div>
                  </div>
                </div>
                <div className="experience-description">
                  <p>
                    Using the CUITe testing framework on a .NET application,
                    implemented automated integration, performance and load tests to
                    ensure, quality of the application and to provide detailed
                    reports of quality metrics.
                  </p>
                </div>
              </div>
              <div className="experience" style={{ breakInside: 'avoid' }}>
                <div className="experience-header">
                  <div className="experience-header-line">
                    <div className="experience-title">
                      Coding Instructor,
                      {' '}
                      <span>iCanCode Club</span>
                    </div>
                    <div className="experience-date">
                      Sep 2016 – Jan 2017, Rochester, NY
                    </div>
                  </div>
                </div>
                <div className="experience-description">
                  <p>
                    Developed teaching plans to engage and instruct coding students
                    from ages 5 to 13 on the fundamentals of programming in
                    JavaScript and MIT Scratch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-aside">
          <div className="section section-sidebar">
            <div className="section-header">
              <span>L</span>
              <span>I</span>
              <span>N</span>
              <span>K</span>
              <span>S</span>
            </div>
            <div className="section-content">
              <div className="socials">
                <a
                  className="socials-link setting-primary-text"
                  href="https://jlurena.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Personal Website
                </a>
              </div>
              <div className="socials">
                <a
                  className="socials-link setting-primary-text"
                  href="https://github.com/jlurena"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div className="socials">
                <a
                  className="socials-link setting-primary-text"
                  href="https://medium.com/@jlurena123"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </div>
            </div>
          </div>
          <div className="section section-sidebar">
            <div className="section-header">
              <span>S</span>
              <span>K</span>
              <span>I</span>
              <span>L</span>
              <span>L</span>
              <span>S</span>
            </div>
            <div className="section-content">
              <div className="skill">
                <div className="skill-name">JavaScript</div>
                <div className="skill-progress">
                  <div className="skill-progress-inner" style={{ width: '80%' }} />
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">React.JS</div>
                <div className="skill-progress">
                  <div className="skill-progress-inner" style={{ width: '80%' }} />
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">Redux</div>
                <div className="skill-progress">
                  <div className="skill-progress-inner" style={{ width: '80%' }} />
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">Ruby</div>
                <div className="skill-progress">
                  <div className="skill-progress-inner" style={{ width: '80%' }} />
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">Ruby on Rails</div>
                <div className="skill-progress">
                  <div className="skill-progress-inner" style={{ width: '80%' }} />
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">CSS &amp; HTML</div>
                <div className="skill-progress">
                  <div
                    className="skill-progress-inner"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">Java</div>
                <div className="skill-progress">
                  <div className="skill-progress-inner" style={{ width: '80%' }} />
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">Elixir</div>
                <div className="skill-progress">
                  <div className="skill-progress-inner" style={{ width: '80%' }} />
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">Phoenix Framework</div>
                <div className="skill-progress">
                  <div className="skill-progress-inner" style={{ width: '80%' }} />
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">SQL</div>
                <div className="skill-progress">
                  <div className="skill-progress-inner" style={{ width: '80%' }} />
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">Android Development</div>
                <div className="skill-progress">
                  <div className="skill-progress-inner" style={{ width: '80%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="btn-download"
        href="./web-resume.pdf"
        target="_blank"
        type="button"
      >
        Download
      </a>
    </div>
  </div>
);

export default Resume;
