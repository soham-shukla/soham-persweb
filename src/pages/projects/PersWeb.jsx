import { Link } from 'react-router-dom';
import '../../App.css'; 

export default function ProjectPersWeb() {
    return (
        <div style={pageLayout}>
            
            <div style={navBar}>
                <Link to="/projects" className="mukta-malar-light" style={backLink}>
                    &larr; back to projects
                </Link>
            </div>

            <header style={headerSection}>
                <span className="mukta-malar-light" style={metaTags}>./projects </span>
                <h1 className="mukta-malar-bold" style={title}>personal website</h1>
                
                <div style={actionButtons}>
                    <a href="https://github.com/soham-shukla/soham-persweb" target="_blank" rel="noreferrer" className="mukta-malar-regular" style={btnStyle}>
                        [ github repo ]
                    </a>
                </div>
            </header>

            <section style={overviewGrid}>
                <div style={overviewLeft}>
                    <h2 className="mukta-malar-semibold" style={sectionHeading}>overview</h2>
                    <p className="mukta-malar-light" style={bodyText}>
                        A minimalist personal portfolio built to showcase who I am and what I do.
                        <br /><br />
                        The core purpose was to learn frontend development and showcase my growth with it, as well as present my other work in an organized space.
                    </p>
                </div>

                <div style={overviewRight}>
                    <div style={specBox}>
                        <span style={specLabel}>role</span>
                        <span className="mukta-malar-regular" style={specValue}>Frontend Developer</span>
                        
                        <span style={specLabel}>stack</span>
                        <span className="mukta-malar-regular" style={specValue}>React, Vite, CSS, HTML, JavaScript</span>

                        <span style={specLabel}>other tools</span>
                        <span className="mukta-malar-regular" style={specValue}>Framer Motion, Formspree</span>
                    </div>
                </div>
            </section>

            <hr style={divider} />

            <main style={detailsContainer}>
                
                {/* Detail Block 1 */}
                <div style={detailBlock}>
                    <h3 className="mukta-malar-medium" style={subHeading}>01 / structure</h3>
                    <p className="mukta-malar-light" style={bodyText}>
                        The application is a multi-page React ecosystem routed into five distinct focal areas: An `About` module powered by smooth accordion text boxes, a `Projects` directory utilizing a bento box layout, a scroll-linked `Career` timeline, and a functional `Contact` portal.
                    </p>
                </div>

                {/* Detail Block 2 */}
                <div style={detailBlock}>
                    <h3 className="mukta-malar-medium" style={subHeading}>02 / element design & state management</h3>
                    <p className="mukta-malar-light" style={bodyText}>
                        The UI relies heavily on modular, reusable React components. Dense information is abstracted into JavaScript data arrays and mapped directly into the DOM. The seperation of formatting from individual pages allows me to add projects or job experiences by editing a single line of JSON instead of rebuilding layout blocks. Elements like the bento cards and timeline glass-panels utilize localized states to trigger hover effects and conditional rendering.
                    </p>
                </div>

                {/* Detail Block 3 */}
                <div style={detailBlock}>
                    <h3 className="mukta-malar-medium" style={subHeading}>03 / frameworks & tooling</h3>
                    <p className="mukta-malar-light" style={bodyText}>
                        The project was bootstrapped with Vite to use rapid Hot Module Replacement (HMR) and optimized build times. The core interface is built in React.js, with all complex micro-interactions, layout transitions, and scroll-linked animations powered by Framer Motion. Page naviation is handled by React Router. Backendless form submission on the Contact page is managed via Formspree for privacy. 
                    </p>
                </div>

                {/* Detail Block 4 */}
                <div style={detailBlock}>
                    <h3 className="mukta-malar-medium" style={subHeading}>04 / the design philosophy</h3>
                    <p className="mukta-malar-light" style={bodyText}>
                        The aesthetic identity aims for a minimalistic, industrial application feel. This is established by the use of a simple black background with white texts and grayscale accents, monospaced and undercase typography, and boxy and slightly blurred images. 
                    </p>
                </div>

            </main>

        </div>
    );
}

// ==========================================
// STYLES
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