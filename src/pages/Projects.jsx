import { useState } from 'react';
import { motion } from 'motion/react';
import '../App.css'; 

//output 

function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div style={pageLayout}> 

            {/* row 1 */}
            <div 
                style={gridContainer}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <ImageButton 
                    index={0}
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                    title="soham-persweb" 
                    subtitle="may 2026"
                    imageSrc= "src/assets/gemini_code_cover_2.png"
                    link="/projects/car"
                />
                <ImageButton 
                    index={1}
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                    title="wang-lab" 
                    subtitle="jan 2026 - present"
                    imageSrc="src/assets/gemini_lab_cover.png" 
                    link="/projects/bio"
                />
                <ImageButton 
                    index={2}
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                    title="drive-safe" 
                    subtitle="jan 2026 - may 2026"
                    imageSrc="src/assets/gemini_ecelab_cover.png"
                    link="/projects/web"
                />
            </div>
            
            <div style={{ height: "24px", width: "100%" }} />
            
            {/* row 2  */}
            <div 
                style={gridContainer}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <ImageButton 
                    index={3}
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                    title="bvbrc-mcp" 
                    subtitle="jan 2026"
                    imageSrc="src/assets/gemini_code_cover_3.png"
                    link="/projects/car"
                />
                <ImageButton 
                    index={4}
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                    title="chip-defects" 
                    subtitle="nov 2025 - dec 2025"
                    imageSrc="src/assets/gemini_code_cover.png"
                    link="/projects/bio"
                />
                <ImageButton 
                    index={5} 
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                    title="val-challenge" 
                    subtitle="jan 2024 - march 2024"
                    imageSrc="src/assets/gemini_stock_cover.png"
                    link="/projects/web"
                />
            </div>

        </div>
    );
}

// helper-functions

function ImageButton({ title, subtitle, imageSrc, link, index, hoveredIndex, setHoveredIndex }) {
    const isHovered = hoveredIndex === index;
    const isAnotherHovered = hoveredIndex !== null && hoveredIndex !== index;

    return (
        <motion.a 
            href={link}
            onMouseEnter={() => setHoveredIndex(index)}
            animate={{
                flex: isHovered ? 3 : isAnotherHovered ? 0.5 : 1,
                filter: isAnotherHovered ? "brightness(0.3) grayscale(0.8)" : "brightness(0.9) contrast(1.1) grayscale(0)",
            }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }} 
            style={cardWrapper}
        >
            <motion.img 
                src={imageSrc} 
                alt={title} 
                style={cardImage} 
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            />
            
            <div style={gradientOverlay} />

            <div style={textContainer}>
                <h3 className="mukta-malar-semibold" style={cardTitle}>{title}</h3>
                <span className="mukta-malar-light" style={cardSubtitle}>{subtitle}</span>
            </div>
        </motion.a>
    );
}

// page-styles

const pageLayout = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "60px 20px", 
};

const gridContainer = {
    display: "flex",
    justifyContent: "space-between",
    gap: "24px", 
    width: "100%",
    maxWidth: "900px",
};

// component-styles

const cardWrapper = {
    position: "relative",
    flex: 1,
    height: "450px",
    overflow: "hidden", 
    cursor: "pointer",
    textDecoration: "none", 
    backgroundColor: "#050505", 
};

const cardImage = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
};

const gradientOverlay = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "50%", 
    background: "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 100%)",
    zIndex: 1,
};

const textContainer = {
    position: "absolute",
    bottom: "20px",
    width: "100%", 
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center", 
    gap: "4px",
};

const cardSubtitle = {
    color: "#fff",
    fontSize: "0.85rem",
    opacity: 0.8,
    textShadow: "1px 1px 4px rgba(0,0,0,0.8)",
};

const cardTitle = {
    color: "#fff",
    fontSize: "1.8rem",
    margin: 0,
    textShadow: "2px 2px 8px rgba(0,0,0,0.8)", 
};

export default Projects;