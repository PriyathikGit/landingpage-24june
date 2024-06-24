import { useState } from "react"
import "./index.css"
import img1 from "../../assets/1.png"
import img2 from "../../assets/2.png"
import img3 from "../../assets/3.png"
import img4 from "../../assets/4.png"
import img5 from "../../assets/5.png"
import img6 from "../../assets/6.png"
import img7 from "../../assets/7.png"
import img8 from "../../assets/8.png"
import img9 from "../../assets/9.png"
import img10 from "../../assets/10.png"
import img11 from "../../assets/11.png"
import img12 from "../../assets/12.png"
import img13 from "../../assets/13.png"
import img14 from "../../assets/14.png"
import img15 from "../../assets/last.png"

const Page = () => {
    const [activeButton, setActiveButton] = useState('jobs');
    const [activeItem, setActiveItem] = useState('Job Preview');
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
      };
      const handleItemClick = (itemName) => {
        setActiveItem(itemName);
      };
    return (
        <>
            <header>
                <div className="logo">Logo</div>
                <nav>
                    <button  className={`nav-button ${activeButton === 'jobs' ? 'active' : ''}`}
                    onClick={()=>handleButtonClick('jobs')}
                    >Jobs <img src={img1} alt="" /></button>
                    <button  className={`nav-button ${activeButton === 'message' ? 'active' : ''}`}
                    onClick={()=>handleButtonClick('message')}
                    >Messages <img src={img2} alt="" /></button>
                    <button  className={`nav-button ${activeButton === 'payments' ? 'active' : ''}`}
                    onClick={()=>handleButtonClick('payments')}
                    >Payments <img src={img3} alt="" /></button>
                </nav>
                <div className="user-icon">
                    <img src={img4} alt="" />
                    <div className="dot"></div>
                    <img src={img5} alt="" />
                </div>
            </header>
            <main>
            <div className="section">
      <span
        className={activeItem === 'Job Preview' ? 'active' : ''}
        onClick={() => handleItemClick('Job Preview')}
      >
        Job Preview
      </span>
      <span
        className={activeItem === 'Applicants' ? 'active' : ''}
        onClick={() => handleItemClick('Applicants')}
      >
        Applicants
      </span>
      <span
        className={activeItem === 'Match' ? 'active' : ''}
        onClick={() => handleItemClick('Match')}
      >
        Match
      </span>
      <span
        className={activeItem === 'Messages' ? 'active' : ''}
        onClick={() => handleItemClick('Messages')}
      >
        Messages
      </span>
    </div>
                <div className="hero">
                    <section className="job-preview">
                        <div className="job-header">
                            <h1>Senior Product Designer</h1>
                            <span>posted 2 days ago</span>
                            <div className="online"><span className="dot2"></span><span>Open</span></div>
                        </div>
                        <div className="job-location-salary">
                            <p>Delaware, USA</p>
                            <p>$300k-$400k</p>
                        </div>
                        <div className="job-details">
                            <div className="skills">
                                <div className="cnt"> <img src={img6} alt="" /><span>Figma</span></div>
                                <div className="cnt"><img src={img7} alt="" /><span>Adobe Illustrator</span></div>
                                <div className="cnt"><img src={img8} alt="" /> <span>Adobe XD</span></div>
                            </div>
                            <div className="language col">
                                <span>Preferred Language</span>
                                <p>English</p>
                            </div>
                            <div className="type col">
                                <span>Type</span>
                                <p>Full time</p>
                            </div>
                            <div className="other-details col">
                                <span>Years of Experience</span>
                                <p>3+ Years of Experience</p>
                            </div>
                        </div>
                        <div className="about-job">
                            <h2>About the job</h2>
                            <ul>
                                <li>Handle the UI/UX research design</li>
                                <li>Work on researching on latest web applications designs & trends</li>
                                <li>Work on conceptualizing and visualizing</li>
                                <li>Work on creating graphics content and other graphic related works</li>
                            </ul>
                            <div className="markup">
                                <h3 >Benefits:</h3>
                                <ul>
                                    <li>Health insurance</li>
                                    <li>Provident Fund</li>
                                </ul>
                            </div>

                            <h3>Schedule:</h3>
                            <p>Day shift</p>
                            <div className="markup">
                                <h3>Supplemental pay types:</h3>
                                <ul>
                                    <li>Performance bonus</li>
                                    <li>Yearly bonus</li>
                                </ul>
                            </div>
                            <p>Work Location: In person</p>
                        </div>
                    </section>
                    <aside>
                        <div className="job-actions">
                            <button className="delete-job">
                                <img src={img9} alt="" />
                                <span>Delete job</span></button>
                            <button className="edit-job">
                                <img src={img10} alt="" />
                                <span>Edit job</span></button>
                        </div>
                        <div className="job-stats">
                            <div className="myrow">
                                <div className="img-row">
                                    <img src={img11} alt="" />Applicants
                                </div>
                                <span>400</span>
                            </div>
                            <div className="myrow">
                                <div className="img-row">
                                    <img src={img12} alt="" />Matches
                                </div>
                                <span>100</span>
                            </div>
                            <div className="myrow">
                                <div className="img-row">
                                    <img src={img13} alt="" />Messages
                                </div>
                                <span>147</span>
                            </div>
                            <div className="myrow">
                                <div className="img-row">
                                    <img src={img14} alt="" />Views
                                </div>
                                <span>800</span>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
            <footer className="company-footer">
                <div className="company-info">
                    <div className="img-row"><img src={img15} alt="Company Logo" className="company-logo"/>
                    <h2>Atlassian</h2></div>
                        
                        <div className="detail">
                        <span className="label">Company size</span>
                        <span className="value">1k - 2k Employees</span>
                    </div>
                    <div className="detail">
                        <span className="label">Sector</span>
                        <span className="value">Information Technology, Infrastructure</span>
                    </div>
                    <div className="detail">
                        <span className="label">Founded In</span>
                        <span className="value">2019</span>
                    </div>
                </div>
                <div className="company-details">
                    
                    <div className="detail">
                        <span className="label">Type</span>
                        <span className="value">Private</span>
                    </div>
                   
                    <div className="detail">
                        <span className="label">Funding</span>
                        <span className="value">Bootstrapped</span>
                    </div>
                    
                    <div className="detail">
                        <span className="label">Founded By</span>
                        <span className="value">Scott Farquhar, Mike Cannon-Brookes</span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Page