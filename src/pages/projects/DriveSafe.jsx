import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import fsmImage from '../../assets/drive_safe_fsm.png';
import circuitImage from '../../assets/finaldrivesafe.png';
import mainImage from '../../assets/drivesafedemo1.gif';

export default function ProjectDetail() {
    return (
        <div style={pageLayout}>
            
            <div style={navBar}>
                <Link to="/Projects" className="mukta-malar-light" style={backLink}>
                    &larr; back to projects
                </Link>
            </div>  

            <header style={headerSection}>
                <span className="mukta-malar-light" style={metaTags}>./projects </span>
                <h1 className="mukta-malar-bold" style={title}>drive-safe</h1>
                
                <div style={actionButtons}>
                    {/*}  <a href="https://github.com/yourusername/repo" target="_blank" rel="noreferrer" className="mukta-malar-regular" style={btnStyle}>
                        [ github repo ]
                    </a> */}
                    <a href="https://docs.google.com/document/d/18sj_k81UuiqbHjKynH73bcQcj5jq__jPX1IMA4pWoJ0/edit?tab=t.x68x4w2ta77w" className="mukta-malar-regular" style={btnStyle}>
                        [ read paper ]
                    </a>
                </div>
            </header>

            <motion.div 
                style={heroImageContainer}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <img src={mainImage} alt="Drive Safe System" style={imageFill} />
            </motion.div>

            <section style={overviewGrid}>
                <div style={overviewLeft}>
                    <h2 className="mukta-malar-semibold" style={sectionHeading}>overview</h2>
                    <p className="mukta-malar-light" style={bodyText}>
                        A hardware solution to distracted driving, designed to dynamically account for attentivity relative to vehicle speed. Utilizes various sensors to detect driver head & hand prescence, swerving, and collisions, feeding all data into a custom
                        finite state machine to trigger progressive visual and audio alerts to reorient the driver. <break/> <p/>
                    </p>
                    
                    <p className="mukta-malar-light" style={bodyText}>
                        Designed for the ECE145 Honors Design Lab in Spring 2026. Won the "Most Commercializable" award at the end of the semester.
                    </p>
                </div>

                <div style={overviewRight}>
                    <div style={specBox}>
                        <span style={specLabel}>role</span>
                        <span className="mukta-malar-regular" style={specValue}>Logic & Design Lead</span>
                        
                        <span style={specLabel}>toolkit</span>
                        <span className="mukta-malar-regular" style={specValue}> Mixed Signal Electronics, Analog Signal Chain, Pulse & Timing Circuits </span>

                        <span style={specLabel}>collaborators</span>
                        <span className="mukta-malar-regular" style={specValue}> Praneel, Sanjit</span>
                    </div>
                </div>
            </section>

            <hr style={divider} />

            <main style={detailsContainer}>
                
                {/* detail 1*/}
                <div style={detailBlock}>
                    <h3 className="mukta-malar-medium" style={subHeading}>01 / problem statement</h3>
                    <p className="mukta-malar-light" style={bodyText}>
                        To combat the severe threat of distracted driving—which the FCC reports causes 3,725 deaths and 325,000 injuries annually when drivers divert their hands or eyes—our product utilizes a finite state machine with adaptive safeguards to continuously monitor driver attentiveness relative to vehicle speed. By integrating force-sensing resistors, ultrasonic sensors, and potentiometers to track hand presence, head orientation, dangerous swerving, and rapid speed changes, the system evaluates these inputs to trigger a reorienting audio alarm if distraction is detected.
                    </p>
                    
                    {/* image 1 */}
                    <div style={inlineImageWrapper}>
                        <img src={fsmImage} alt="FSM State Diagram" style={imageFill} />
                        <span className="mukta-malar-extralight" style={caption}>Fig 1.0 — Speed tracking finite state machine logic flow.</span>
                    </div>
                </div>

                {/* detail 2 */}
                <div style={detailBlock}>
                    <h3 className="mukta-malar-medium" style={subHeading}>02 / project implementation</h3>
                    <p className="mukta-malar-light" style={bodyText}>
                        To implement our adaptive safeguards, we integrate Force Sensing Resistors (FSRs) to detect hand presence, an ultrasonic sensor governed by a 555 timer circuit to track head orientation, and a steering-mounted potentiometer to monitor unsafe wheel tilt. These sensor inputs are evaluated alongside a binary speed counter to generate a fault signal, which drives a custom finite state machine (FSM) through three distinct operational states: OK, WARN, and ALARM. Upon fault detection, the FSM transitions to the WARN state and initiates a speed-dependent countdown—drastically reducing the driver's grace period at higher speeds—using a multiplexer and a tolerance counter. If the fault persists beyond this countdown, the FSM latches into the ALARM state, triggering a MOSFET gate that releases an oscillating current to a buzzer to continuously reorient the driver until the system is manually reset.
                    </p>

                    {/* image 2*/}
                    <div style={imageRow}>
                        <div style={inlineImageWrapper}>
                            <img src={circuitImage} alt="Drive Safe Circuit Diagram" style={diagramStyle} />
                            <span className="mukta-malar-extralight" style={caption}>Fig 1.0 — Speed tracking finite state machine logic flow.</span>
                        </div>
                        <div style={halfImage}>
                            <img src="/path-to-oscilloscope.jpg" alt="Demonstration" style={imageFill} />
                        </div>
                    </div>
                    <span className="mukta-malar-extralight" style={caption}>Fig 2.0 — Physical breadboard implementation and oscilloscope frequency verification.</span>
                </div>

            </main>

        </div>
    );
}


const pageLayout = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "40px 20px 100px 20px",
    color: "#fff",
};

const navBar = {
    width: "100%",
    maxWidth: "900px",
    marginBottom: "40px",
};

const backLink = {
    color: "#888",
    textDecoration: "none",
    fontSize: "1rem",
    transition: "color 0.2s",
};

const headerSection = {
    width: "100%",
    maxWidth: "900px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "12px",
    marginBottom: "40px",
};

const metaTags = {
    color: "#888",
    fontSize: "0.95rem",
};

const title = {
    fontSize: "clamp(2.5rem, 5vw, 4rem)", 
    lineHeight: "1.1",
    margin: 0,
};

const actionButtons = {
    display: "flex",
    gap: "16px",
    marginTop: "10px",
};

const btnStyle = {
    color: "#fff",
    textDecoration: "none",
    borderBottom: "1px solid rgba(255,255,255,0.4)",
    paddingBottom: "2px",
    fontSize: "0.95rem",
};



const heroImageContainer = {
    width: "100%",
    maxWidth: "900px",
    height: "400px",
    backgroundColor: "#111",
    overflow: "hidden",
    marginBottom: "60px",
};

const imageFill = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
};

const inlineImageWrapper = {
    width: "100%",
    margin: "24px 0",
    backgroundColor: "#111",
    padding: "40px 20px", 
    borderRadius: "8px",  
};

const imageRow = {
    display: "flex",
    gap: "16px",
    width: "100%",
    margin: "24px 0 8px 0",
};

const halfImage = {
    flex: 1,
    height: "260px",
    backgroundColor: "#111",
    overflow: "hidden",
};

const caption = {
    display: "block",
    color: "#666",
    fontSize: "0.85rem",
    marginTop: "8px",
    textAlign: "center",
};

const overviewGrid = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "40px",
    width: "100%",
    maxWidth: "900px",
};

const overviewLeft = {
    flex: "2 1 450px", 
};

const overviewRight = {
    flex: "1 1 250px", 
};

const specBox = {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    padding: "20px",
    backgroundColor: "#0a0a0a",
    borderLeft: "2px solid #333",
};

const specLabel = {
    color: "#666",
    fontSize: "0.8rem",
    fontFamily: "monospace",
    textTransform: "uppercase",
    marginTop: "8px",
};

const specValue = {
    color: "#ddd",
    fontSize: "1.05rem",
};

const divider = {
    width: "100%",
    maxWidth: "900px",
    border: "0",
    borderTop: "1px solid #222",
    margin: "60px 0",
};

const detailsContainer = {
    width: "100%",
    maxWidth: "900px",
    display: "flex",
    flexDirection: "column",
    gap: "60px",
};

const detailBlock = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
};

const sectionHeading = {
    fontSize: "1.5rem",
    marginBottom: "12px",
    color: "#fff",
};

const subHeading = {
    fontSize: "1.25rem",
    color: "#fff",
    margin: 0,
};

const bodyText = {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#bbb",
    margin: 0,
};

const diagramStyle = {
    maxWidth: "100%", // Shrinks on small screens, but won't stretch on large ones
    height: "auto",   // Maintains perfect aspect ratio
    display: "block",
    margin: "0 auto", // Centers the diagram perfectly
};