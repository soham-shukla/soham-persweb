import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

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
                    <a href="#" className="mukta-malar-regular" style={btnStyle}>
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
                <img src="/path-to-wide-circuit-shot.jpg" alt="Drive Safe System" style={imageFill} />
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

            {/* === 5. DETAILS & IMAGES THROUGHOUT === */}
            <main style={detailsContainer}>
                
                {/* Detail Block 1 */}
                <div style={detailBlock}>
                    <h3 className="mukta-malar-medium" style={subHeading}>01 / architecture & fsm design</h3>
                    <p className="mukta-malar-light" style={bodyText}>
                        The core logic relies on a speed-tracking state machine. Rather than using traditional IR sensors which suffer from ambient light interference, we pivoted to potentiometers and ultrasonic distance tracking to maintain signal integrity.
                    </p>
                    
                    {/* Inline Image */}
                    <div style={inlineImageWrapper}>
                        <img src="/path-to-fsm-diagram.png" alt="FSM State Diagram" style={imageFill} />
                        <span className="mukta-malar-extralight" style={caption}>Fig 1.0 — Speed tracking finite state machine logic flow.</span>
                    </div>
                </div>

                {/* Detail Block 2 */}
                <div style={detailBlock}>
                    <h3 className="mukta-malar-medium" style={subHeading}>02 / subcircuit calibration</h3>
                    <p className="mukta-malar-light" style={bodyText}>
                        To handle the alert outputs, the FSM connects directly to a MOSFET gate rather than the internal oscillator. This allowed precise control over the alarm subcircuit pulse widths without overloading the 555 timers.
                    </p>

                    {/* Inline Image Grid (Two pics side by side) */}
                    <div style={imageRow}>
                        <div style={halfImage}>
                            <img src="/path-to-breadboard1.jpg" alt="Breadboard wiring" style={imageFill} />
                        </div>
                        <div style={halfImage}>
                            <img src="/path-to-oscilloscope.jpg" alt="Oscilloscope readout" style={imageFill} />
                        </div>
                    </div>
                    <span className="mukta-malar-extralight" style={caption}>Fig 2.0 — Physical breadboard implementation and oscilloscope frequency verification.</span>
                </div>

            </main>

        </div>
    );
}

// ==========================================
// LAYOUT & WRAPPERS
// ==========================================

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

// ==========================================
// CONTENT & TYPOGRAPHY
// ==========================================

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
