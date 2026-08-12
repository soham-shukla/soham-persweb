import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import '../../App.css'; 
import productpage from '../../assets/dieselhomescreen.png';
export default function ProjectDiesel() {
    return (
        <div style={pageLayout}>
            
            <div style={navBar}>
                <Link to="/projects" className="mukta-malar-light" style={backLink}>
                    &larr; back to projects
                </Link>
            </div>

            <header style={headerSection}>
                <span className="mukta-malar-light" style={metaTags}>./projects</span>
                <h1 className="mukta-malar-bold" style={title}>omniscient</h1>
                
                <div style={actionButtons}>
                    <a href="https://github.com/soham-shukla/omniscient" target="_blank" rel="noreferrer" className="mukta-malar-regular" style={btnStyle}>
                        [ github repo ]
                    </a>
                </div>
            </header>

            <motion.div 
                style={heroImageContainer}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <img src= {productpage} alt="Omniscient Dashboard Interface" style={imageFill} />
            </motion.div>

            <section style={overviewGrid}>
                <div style={overviewLeft}>
                    <h2 className="mukta-malar-semibold" style={sectionHeading}>overview</h2>
                    <p className="mukta-malar-light" style={bodyText}>
                        A full-stack web application designed to automate e-commerce price tracking, visualize market trends, and provide data-driven shopping advice through an integrated Large Language Model (LLM).
                        <br /><br />
                        The  objective was to leverage an open source AI agent as a shopping agent. Instead of relying on manual price searches and endless browsing, Omni autonomously scrapes real-time market data, builds a historical price database, and injects that live context into a local LLM to tell users exactly when and where to buy.
                    </p>
                </div>

                <div style={overviewRight}>
                    <div style={specBox}>
                        <span style={specLabel}>role</span>
                        <span className="mukta-malar-regular" style={specValue}>Full-Stack Developer</span>
                        
                        <span style={specLabel}>frontend</span>
                        <span className="mukta-malar-regular" style={specValue}>React, Tailwind, Recharts</span>

                        <span style={specLabel}>backend</span>
                        <span className="mukta-malar-regular" style={specValue}>Python, FastAPI, Playwright, Ollama</span>
                    </div>
                </div>
            </section>

            <hr style={divider} />

            {/* details */}
            <main style={detailsContainer}>
                
                <div style={detailBlock}>
                    <h3 className="mukta-malar-medium" style={subHeading}>01 / asynchronous data collection</h3>
                    <p className="mukta-malar-light" style={bodyText}>
                        When a user inputs a new product to track, the FastAPI backend spins up an asynchronous Playwright scraping instance. To prevent the AI from cherry-picking low-quality backup options, the data passes through a custom sorting algorithm that strips non-numeric characters, truncates the list to the top four verified deals, and converts the clean data to JSON.
                    </p>
                </div>

                <div style={detailBlock}>
                    <h3 className="mukta-malar-medium" style={subHeading}>02 / background scheduling</h3>
                    <p className="mukta-malar-light" style={bodyText}>
                        To ensure the database remains current without manual user intervention, the backend utilizes APScheduler running natively within the FastAPI event loop. Every day at midnight, a background cron job queries the SQLite database for tracked products, silently boots the Playwright scraper, and logs the new lowest daily price to build autonomous historical data models.
                    </p>
                </div>

                <div style={detailBlock}>
                    <h3 className="mukta-malar-medium" style={subHeading}>03 / interactive visualization</h3>
                    <p className="mukta-malar-light" style={bodyText}>
                        Historical data is visualized using Recharts on a clean Tailwind CSS dashboard. The Y-axis utilizes a custom scaling algorithm to ensure the price curve remains comfortably centered on the graph so users can accurately visualize price drops, alongside real-time array reductions for all-time highs and lows.
                    </p>
                </div>

                <div style={detailBlock}>
                    <h3 className="mukta-malar-medium" style={subHeading}>04 / ai context injection (RAG)</h3>
                    <p className="mukta-malar-light" style={bodyText}>
                        The chat interface allows users to converse directly with a local LLM about their tracked products. The backend queries the SQLite database for the most recent raw JSON market data and packages it into a structured prompt sent to the Ollama AI agent. This localized Retrieval-Augmented Generation (RAG) pipeline strictly grounds the LLM in real-time data, eliminating hallucination.
                    </p>
                </div>

                <div style={detailBlock}>
                    <h3 className="mukta-malar-medium" style={subHeading}>05 / project outcome</h3>
                    <p className="mukta-malar-light" style={bodyText}>
                        The final product is fully comprehensive application. By application simultaneously boots the FastAPI server, initializes the background scheduler, and serves the React frontend.
                    </p>
                </div>

            </main>

        </div>
    );
}

// styles 

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
    borderRadius: "4px",
    overflow: "hidden",
    marginBottom: "60px",
};

const imageFill = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
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