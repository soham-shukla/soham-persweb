import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Background } from '../StyledComponents';
import '../App.css'; 
import img1 from '../assets/googleoffice.png';
import img2 from '../assets/IMG_6679.png';
import img3 from '../assets/niuvalchal.jpg';

// output 

export default function About() {

    // image gallery data 
    const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
    const galleryRef = useRef(null);

    const handleGalleryScroll = () => {
        if (!galleryRef.current) return;
        
        const scrollLeft = galleryRef.current.scrollLeft;
        const scrollWidth = galleryRef.current.scrollWidth;
        const clientWidth = galleryRef.current.clientWidth;
        
        const maxScroll = scrollWidth - clientWidth;
        if (maxScroll <= 0) return;
        
        const scrollPercent = scrollLeft / maxScroll;
        
        const closestIndex = Math.round(scrollPercent * (galleryImages.length - 1));
        
        if (closestIndex !== activeGalleryIndex) {
            setActiveGalleryIndex(closestIndex);
        }
    };

    const galleryImages = [
        { id: 1, src: img1, caption: "visited Google's Chicago office with my AI students and colleagues" },
        { id: 2, src: img2, caption: "high school graduation" },
        { id: 3, src: img3, caption: "Nothern Illinois Valuation Challenge 2024" }
    ];

    return (
        <Background> 
            <motion.div 
                style={contentLayout}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                
                {/* header + bio*/}
                <header style={headerSection}>
                    <h1 className="mukta-malar-bold" style={pageTitle}>about.</h1>
                    <div style={bioTextContainer}>
                        <p>hi, i'm soham. i love to design, solve, and learn.</p>
                        <p>always cooking something up to help others and make the world just a little better off.</p>
                    </div>
                </header>

                {/* dropdowns*/}
                <div style={accordionContainer}>
                    
                    <Accordion title="01 / education">
                        <InfoRow label="major">computer engineering, b.s.</InfoRow>
                        <InfoRow label="minor">bioengineering</InfoRow>
                        <InfoRow label="university">university of illinois @ urbana-champaign (exp. fall 2028)</InfoRow>
                        <InfoRow label="research">undergraduate researcher @ dr. hua wang labs</InfoRow>
                        <InfoRow label="involvement">acm @ uiuc, eob @ uiuc, issa @ uiuc</InfoRow>
                        <InfoRow label="current classes">data structures, analog systems, discrete math, digital systems lab, quantum & thermal physics</InfoRow>
                        <InfoRow label="past classes">computing & electronics intros, linear algebra, diff eq, physics (mech, e&m), ece honors design lab, anatomy & physiology</InfoRow>
                        <InfoRow label="awards">dean's list (x2), james scholar, national merit scholar, ap scholar w/ distinction, isac state scholar</InfoRow>
                    </Accordion>

                    <Accordion title="02 / skills">
                        <InfoRow label="software">C, C++, Python, Java, JS, JSON, SQL, HTML/CSS, Assembly</InfoRow>
                        <InfoRow label="hardware">analog & digital circuit design, FSMs, soldering, oscilloscopes</InfoRow>
                        <InfoRow label="frameworks">React, Vite, Git, Google Suite</InfoRow>
                        <InfoRow label="language">english (native), spanish, hindi, gujarati, marathi</InfoRow>
                    </Accordion>

                    <Accordion title="03 / passions">
                        <InfoRow label="athletics">lifting, basketball, tennis, pickleball, and running</InfoRow>
                        <InfoRow label="music">band, chorus, guitar</InfoRow>
                        <InfoRow label="travel">on the road to visit all 63 national parks (41 down so far)</InfoRow>
                    </Accordion>

                </div>

                {/* scrollable image boxes*/}
                <div style={sectionContainer}>
                    <h2 className="mukta-malar-medium" style={sectionHeading}>04 / gallery</h2>
                    <div 
                        style={scrollGallery}
                        ref={galleryRef}
                        onScroll={handleGalleryScroll}
                    >
                        {/* picture cards*/}
                        {galleryImages.map((img, index) => {
                            const isActive = activeGalleryIndex === index;
                            return (
                                <div key={img.id} style={galleryItemWrapper}>
                                    <motion.div 
                                        style={scrollCard}
                                        animate={{ 
                                            scale: isActive ? 1.05 : 0.9, 
                                            opacity: isActive ? 1 : 0.4 
                                        }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                    >
                                        <img src={img.src} alt={img.caption} style={galleryImageStyle} />
                                    </motion.div>
                                    <motion.div
                                        style={captionStyle}
                                        animate={{ 
                                            opacity: isActive ? 1 : 0, 
                                            y: isActive ? 0 : 10 
                                        }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                    >
                                        {img.caption}
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* nav menu */}
                <div style={menuContainer}>
                    <h2 className="mukta-malar-medium" style={sectionHeading}>05 / directory</h2>
                    <div style={menuList}>
                        <div style={menuRow}>
                            <span>what i've done?</span>
                            <a href="/career" style={menuLink}>see career &rarr;</a>
                        </div>
                        <div style={menuRow}>
                            <span>what i'm doing?</span>
                            <a href="/projects" style={menuLink}>see projects &rarr;</a>
                        </div>
                        <div style={menuRow}>
                            <span>where i'm going?</span>
                            <a href="/contact" style={menuLink}>see contact &rarr;</a>
                        </div>
                    </div>
                </div>

            </motion.div>
        </Background>
    );
}

// helper functions

// dropdown menu
function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={accordionWrapper}>
            <button 
                style={accordionButton} 
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="mukta-malar-medium" style={accordionTitle}>{title}</span>
                <motion.span 
                    animate={{ rotate: isOpen ? 45 : 0 }} 
                    style={accordionIcon}
                >
                    +
                </motion.span>
            </button>
            
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                    >
                        <div style={accordionContent}>
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// data row
function InfoRow({ label, children }) {
    return (
        <div style={rowWrapper}>
            <span style={rowLabel}>{label}</span>
            <span style={rowContent}>{children}</span>
        </div>
    );
}

// styles

const contentLayout = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "900px", 
    margin: "0 auto",
    padding: "80px 20px",
    color: "#fff",
};


const headerSection = {
    marginBottom: "60px",
};

const pageTitle = {
    fontSize: "clamp(3rem, 5vw, 4rem)",
    margin: "0 0 20px 0",
    lineHeight: "1",
};

const bioTextContainer = {
    color: "#aaa",
    lineHeight: "1.8",
    fontSize: "1.1rem", 
    maxWidth: "600px",
};


const accordionContainer = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginBottom: "80px",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
};

const accordionWrapper = {
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
};

const accordionButton = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 0",
    background: "transparent",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    textAlign: "left",
};

const accordionTitle = {
    fontSize: "1.4rem",
    letterSpacing: "0.5px",
};

const accordionIcon = {
    fontSize: "1.5rem",
    fontWeight: "300",
    color: "#888",
};

const accordionContent = {
    paddingBottom: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
};


const rowWrapper = {
    display: "flex",
    alignItems: "flex-start",
    lineHeight: "1.6",
    fontSize: "1.05rem",
};

const rowLabel = {
    color: "#777", 
    minWidth: "160px", 
    flexShrink: 0,
    textTransform: "uppercase",
    fontSize: "0.85rem",
    letterSpacing: "1px",
    paddingTop: "3px",
};

const rowContent = {
    color: "#ddd", 
    flex: 1,
};


const sectionContainer = {
    width: "100%",
    marginBottom: "80px",
};

const sectionHeading = {
    fontSize: "1.4rem",
    marginBottom: "24px",
    color: "#fff",
    letterSpacing: "0.5px",
};

// scroll animations

const scrollGallery = {
    display: "flex",
    gap: "40px",
    overflowX: "auto",
    padding: "0 calc(50% - 150px) 20px calc(50% - 150px)",
    scrollSnapType: "x mandatory",
    WebkitOverflowScrolling: "touch", 
    scrollbarWidth: "none", 
};

// image styles 

const galleryItemWrapper = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    scrollSnapAlign: "center",
    flexShrink: 0,
};

const galleryImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "8px",
    display: "block",
};

const captionStyle = {
    color: "#aaa",
    fontSize: "0.9rem",
    fontFamily: "monospace",
    textAlign: "center",
    letterSpacing: "0.5px",
};

const scrollCard = {
    minWidth: "300px",
    height: "400px",
    backgroundColor: "#111",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#555",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    boxSizing: "border-box", 
    flexShrink: 0, 
};


const menuContainer = {
    width: "100%",
    paddingBottom: "80px",
};

const menuList = {
    display: "flex",
    flexDirection: "column",
    gap: "16px", 
    width: "100%",
    fontSize: "1.1rem",
    color: "#fff",
};

const menuRow = {
    display: "flex",
    justifyContent: "space-between", 
    alignItems: "center",
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
    paddingBottom: "12px",
};

const menuLink = {
    color: "#fff",
    textDecoration: "none",
    opacity: 0.6,
    cursor: "pointer",
    transition: "opacity 0.2s ease",
};