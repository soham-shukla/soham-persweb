import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import claude_ss from '../../assets/bvbrc_claude.png'
import '../../App.css'; 

export default function ProjectBvbrc() {
    return (
        <div style={pageLayout}>
            
            <div style={navBar}>
                <Link to="/projects" className="mukta-malar-light" style={backLink}>
                    &larr; back to projects
                </Link>
            </div>

            <header style={headerSection}>
                <span className="mukta-malar-light" style={metaTags}>./projects </span>
                <h1 className="mukta-malar-bold" style={title}>bvbrc-mcp</h1>
                
                <div style={actionButtons}>
                    <a href="https://github.com/soham-shukla/mcp-bvbrc" target="_blank" rel="noreferrer" className="mukta-malar-regular" style={btnStyle}>
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
                <img src= {claude_ss} alt="BV-BRC MCP Server Interface" style={imageFill} />
            </motion.div>

            <section style={overviewGrid}>
                <div style={overviewLeft}>
                    <h2 className="mukta-malar-semibold" style={sectionHeading}>overview</h2>
                    <p className="mukta-malar-light" style={bodyText}>
                        Created for Argonne National Laboratory, a Model Context Protocol (MCP) server that connects Large Language Models and the Bacterial and Viral Bioinformatics Resource Center (BV-BRC) API. 
                        <br /><br />
                        This server adapts conversational AI with specific tools from the BVBRC API. It empowers LLMs to autonomously query, retrieve, and analyze complex genomic data, antimicrobial resistance profiles, and epitope assays by providing them with a strict set of executable search tools and database schemas.
                    </p>
                </div>

                <div style={overviewRight}>
                    <div style={specBox}>
                        <span style={specLabel}>role</span>
                        <span className="mukta-malar-regular" style={specValue}>Backend Developer</span>
                        
                        <span style={specLabel}>stack</span>
                        <span className="mukta-malar-regular" style={specValue}>Python, asyncio</span>

                        <span style={specLabel}>tooling</span>
                        <span className="mukta-malar-regular" style={specValue}>BV-BRC API, RQL</span>
                    </div>
                </div>
            </section>

            <hr style={divider} />

            <main style={detailsContainer}>
                
                <div style={detailBlock}>
                    <h3 className="mukta-malar-medium" style={subHeading}>01 / core functionality</h3>
                    <p className="mukta-malar-light" style={bodyText}>
                        The application exposes the massive BV-BRC database to MCP-compatible applications. By running this server locally, tools like Claude Desktop gain native access to over 13 distinct biological data types. The AI can dynamically search for specific bacterial strains, extract genome features (CDS, RNA), and cross-reference antimicrobial resistance (AMR) mechanisms without the user ever needing to manually write an API request.
                    </p>
                </div>

                <div style={detailBlock}>
                    <h3 className="mukta-malar-medium" style={subHeading}>02 / technical architecture</h3>
                    <p className="mukta-malar-light" style={bodyText}>
                        Built entirely with Python, the server orchestrates a strict set of defined MCP tools, such as search_genomes and query_data_type. When the LLM determines it needs external data to answer a prompt, the server catches the tool call and translates it into Relational Query Language (RQL). The Python client executes the asynchronous HTTP request against the BV-BRC API, sanitizes the resulting JSON payload, and injects the raw biological data back into the LLM's context window.
                    </p>
                </div>

                <div style={detailBlock}>
                    <h3 className="mukta-malar-medium" style={subHeading}>03 / semantic tool discovery</h3>
                    <p className="mukta-malar-light" style={bodyText}>
                        To prevent the LLM from becoming overwhelmed by the sheer volume of available biological data types, the server implements semantic search for tool discovery. Instead of brute-forcing API endpoints, the AI can dynamically find the exact database schemas, endpoints, and query parameters it needs based on the semantic intent of the user's natural language prompt.
                    </p>
                </div>

                <div style={detailBlock}>
                    <h3 className="mukta-malar-medium" style={subHeading}>04 / research utility & impact</h3>
                    <p className="mukta-malar-light" style={bodyText}>
                        This project accelerates traditional bioinformatics workflows. Instead of researchers spending extra time learning the API, writing precise queries, or searching through massive datasets, they can simply ask the AI to "Find antibiotic-resistant Salmonella genomes" or "Locate CDS features in this specific sequence." The AI autonomously constructs the query, fetches the genomic coordinates, and returns insights in plain language.
                    </p>
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
    borderRadius: "4px",
    overflow: "hidden",
    marginBottom: "60px",
};

const imageFill = {
    width: "100%",
    height: "100%",
    objectFit: "contain", 
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