import { motion } from 'motion/react';
import{ Link} from 'react-router-dom';
import '../App.css'; 

// project list

const projectData = [
    { id: "diesel", number: "01", title: "diesel", subtitle: "july 2026", link: "/projects/diesel" },
    { id: "persweb", number: "02", title: "pers-web", subtitle: "may 2026 - july 2026", link: "/projects/persweb" },
    { id: "wanglab", number: "03", title: "wang-lab", subtitle: "jan 2026 - present", link: "/projects/wanglab" },
    { id: "drivesafe", number: "04", title: "drive-safe", subtitle: "jan 2026 - may 2026", link: "/projects/drivesafe" },
    { id: "bvbrc", number: "05", title: "bvbrc-mcp", subtitle: "jan 2026", link: "/projects/bvbrc" },
]
// output 

export default function Projects() {
    return (
        <div style={pageLayout}>
            <h1 className="mukta-malar-bold" style={pageTitle}>projects.</h1>
            
            <div style={uniformGrid}>
                {projectData.map((proj) => (
                    <BentoCard 
                        key={proj.id}
                        number={proj.number}
                        title={proj.title}
                        subtitle={proj.subtitle}
                        link={proj.link}
                    />
                ))}
            </div>
        </div>
    );
}

// card components

function BentoCard({ title, subtitle, number, link }) {
    return (
        <motionLink
            to= {link}
            style={cardWrapper}
            initial="idle"
            whileHover="hover"
        >
            {/* numbers*/}
            <motion.div 
                style={numberTexture}
                variants={{
                    idle: { opacity: 0.03, scale: 1, x: 0 },
                    hover: { opacity: 0.08, scale: 1.05, x: -10 } 
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                {number}
            </motion.div>

            {/* content */}
            <div style={textContainer}>
                <h3 className="mukta-malar-semibold" style={cardTitle}>{title}</h3>
                <span className="mukta-malar-light" style={cardSubtitle}>{subtitle}</span>
            </div>
        </motionLink>
    );
}

// styles

const pageLayout = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "80px 20px", 
};

const pageTitle = {
    color: "#fff",
    fontSize: "clamp(3rem, 5vw, 4rem)",
    width: "100%",
    maxWidth: "900px",
    textAlign: "left",
    marginBottom: "40px",
};

const uniformGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", 
    gap: "24px",
    width: "100%",
    maxWidth: "1000px",
};

// --- Card Styles ---

const cardWrapper = {
    position: "relative",
    height: "280px", 
    backgroundColor: "#050505", 
    border: "1px solid rgba(255, 255, 255, 0.05)",
    borderRadius: "12px",
    overflow: "hidden", 
    cursor: "pointer",
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end", 
    padding: "30px",
};

const numberTexture = {
    position: "absolute",
    bottom: "-30px",   
    right: "-10px",    
    fontSize: "14rem", 
    lineHeight: "1",
    fontWeight: "900",
    fontFamily: "monospace", 
    color: "#fff",
    zIndex: 0,
    pointerEvents: "none", 
};

const textContainer = {
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    gap: "4px",
};

const cardTitle = {
    color: "#fff",
    fontSize: "1.6rem",
    margin: 0,
};

const cardSubtitle = {
    color: "#888",
    fontSize: "0.95rem",
};