import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Background, Centered } from '../StyledComponents';
import '../App.css'; 

// terminal-design

export function TerminalHeader({ onComplete }) {
    const [step, setStep] = useState(1);

    const cmd1 = "cd ~/about_me";
    const cmd2 = "cat soham.txt"; 

    return (
        <div style={terminalWrapper}>
            <div style={terminalHeaderBar}>
                <div style={dotContainer}>
                    <div style={{ ...macDot, backgroundColor: "#ff5f56" }} />
                    <div style={{ ...macDot, backgroundColor: "#ffbd2e" }} />
                    <div style={{ ...macDot, backgroundColor: "#27c93f" }} />
                </div>
                <span style={terminalTitle}>bash — 80x24</span>
            </div>
            
            <div style={terminalBody}>
                {/* line 1 */}
                <div style={lineWrapper}>
                    <span style={promptPrefix}>soham@macbook-pro:~$ </span>
                    <motion.span
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: { transition: { staggerChildren: 0.05, delayChildren: 0.5 } },
                            hidden: {}
                        }}
                        onAnimationComplete={() => setStep(2)} 
                    >
                        {cmd1.split("").map((char, i) => (
                            <motion.span key={i} variants={charVariants} style={typeText}>
                                {char === " " ? "\u00A0" : char} 
                            </motion.span>
                        ))}
                    </motion.span>
                    
                    {step === 1 && <Cursor />}
                </div>

                {/* line 2 */}
                {step === 2 && (
                    <div style={lineWrapper}>
                        <span style={promptPrefix}>soham@macbook-pro:~/about_me$ </span>
                        <motion.span
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.4 } },
                                hidden: {}
                            }}
                            onAnimationComplete={() => {
                                if (onComplete) onComplete();
                            }}
                        >
                            {cmd2.split("").map((char, i) => (
                                <motion.span key={i} variants={charVariants} style={typeText}>
                                    {char === " " ? "\u00A0" : char} 
                                </motion.span>
                            ))}
                        </motion.span>
                        <Cursor />
                    </div>
                )}
            </div>
        </div>
    );
}

function Cursor() {
    return (
        <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            style={cursorStyle}
        >
            █
        </motion.span>
    );
}

// helper-function
function TerminalRow({ label, children }) {
    return (
        <div style={rowWrapper}>
            <span style={rowLabel}>{label}:</span>
            <span style={rowContent}>{children}</span>
        </div>
    );
}

// output

function About() {
    const [showBio, setShowBio] = useState(false);

    return (
        <Background> 
            <div style={contentLayout}>
                <TerminalHeader onComplete={() => setShowBio(true)} />

                <AnimatePresence>
                    {showBio && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { height: 0, opacity: 0, transformOrigin: "top" },
                                visible: { 
                                    height: "auto", 
                                    opacity: 1, 
                                    transformOrigin: "top",
                                    transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] }
                                }
                            }}
                            style={expandingWrapper} 
                        >
                            <div style={bioTextContainer}>
                                <p>hi, i'm soham. i love to build, design, optimize, and learn.</p>
                                <p>always cooking something up to help others and make the world just a little better off.</p>
                                <p>some more about me:</p>
                            </div>

                            <div style={sectionContainer}>
                                <h2 style={sectionHeading}>~/education</h2>
                                
                                <TerminalRow label="major">computer engineering, b.s.</TerminalRow>
                                <TerminalRow label="minor">bioengineering</TerminalRow>
                                <TerminalRow label="university">university of illinois @ urbana-champaign (exp. fall 2028)</TerminalRow>
                                <TerminalRow label="research">undergraduate researcher @ dr. hua wang labs</TerminalRow>
                                <TerminalRow label="involvement">acm @ uiuc, eob @ uiuc, issa @ uiuc</TerminalRow>
                                <TerminalRow label="current classes">data structures, analog systems, discrete math, digital systems lab, quantum & thermal physics</TerminalRow>
                                <TerminalRow label="past classes">computing & electronics intros, linear algebra, diff eq, physics (e&m), ece honors design lab</TerminalRow>
                                <TerminalRow label="awards">dean's list (x2), james scholar, national merit scholar, ap scholar w/ distinction, isac state scholar</TerminalRow>
                            </div>

                            <div style={sectionContainer}>
                                <h2 style={sectionHeading}>~/skills</h2>
                                
                                <TerminalRow label="software">C, C++, Python, Java, JS, HTML/CSS, Assembly</TerminalRow>
                                <TerminalRow label="hardware">analog & digital circuit design, FSMs, soldering, oscilloscopes</TerminalRow>
                                <TerminalRow label="frameworks">React, Vite, Git, Google Suite</TerminalRow>
                                <TerminalRow label="spoken">english (native), spanish, hindi, gujarati, marathi</TerminalRow>
                            </div>

                            <div style={sectionContainer}>
                                <h2 style={sectionHeading}>~/passions</h2>
                                
                                <TerminalRow label="athletics">lifting, hooping, tennis, pickleball, and getting into running</TerminalRow>
                                <TerminalRow label="music">band, choir, learning guitar, and hoping to pick up producing</TerminalRow>
                                <TerminalRow label="travel">trying to visit all 63 national parks (~40 down so far)</TerminalRow>
                            </div>

                            <div style={sectionContainer}>
                                <h2 style={sectionHeading}>~/gallery</h2>
                                {/* still need to finish gallery scroll wheel */}
                                <div style={{ height: "100px", border: "1px dashed rgba(255, 255, 255, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#888", fontFamily: "monospace" }}>
                                    [ gallery module otw ]
                                </div>
                            </div>

                            <div style={menuContainer}>
                                <h2 style={sectionHeading}>~/nav</h2>
                                <Centered>
                                    <div style={menuList}>
                                        <div style={menuRow}>
                                            <span>what i've done?</span>
                                            <a href="/career" style={menuLink}>see career.</a>
                                        </div>
                                        <div style={menuRow}>
                                            <span>what i'm doing?</span>
                                            <a href="/projects" style={menuLink}>see projects.</a>
                                        </div>
                                        <div style={menuRow}>
                                            <span>where i'm going?</span>
                                            <a href="/contact" style={menuLink}>see contact.</a>
                                        </div>
                                    </div>
                                </Centered>

                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </Background>
    );
}

export default About;

// component-styles 

const charVariants = {
    visible: { opacity: 1, display: "inline-block" },
    hidden: { opacity: 0, display: "none" }
};

const terminalWrapper = {
    width: "100%",
    maxWidth: "900px",
    margin: "60px auto 20px auto", 
    borderRadius: "6px",
    background: "rgba(10, 10, 10, 0.6)", 
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.8)",
    overflow: "hidden",
};

const terminalHeaderBar = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center", 
    padding: "10px 15px",
    background: "rgba(255, 255, 255, 0.05)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    position: "relative",
};

const dotContainer = { display: "flex", gap: "6px", position: "absolute", left: "15px" };
const macDot = { width: "12px", height: "12px", borderRadius: "50%" };

const terminalTitle = {
    color: "#ffffffff",
    opacity: 0.5,
    fontFamily: "monospace",
    fontSize: "0.8rem",
    letterSpacing: "1px",
};

const terminalBody = {
    padding: "30px 20px",
    fontFamily: "monospace",
    fontSize: "0.95rem",
    lineHeight: "1.5",
    color: "#fff",
    display: "flex",
    flexDirection: "column", 
    gap: "10px", 
};

const lineWrapper = {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
};

const promptPrefix = { color: "#3dbb3dff", marginRight: "8px" };
const typeText = { color: "#fff", opacity: 0.9 };
const cursorStyle = { display: "inline-block", marginLeft: "4px", color: "#fff", opacity: 0.8 };

// page-styles

const contentLayout = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", 
    width: "100%",
};

const expandingWrapper = {
    width: "100%",
    maxWidth: "900px", 
    margin: "0 auto",
    overflow: "hidden", 
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
};

const bioTextContainer = {
    width: "100%",
    color: "#fff",
    opacity: 0.8,
    lineHeight: "1.8",
    fontSize: "1.1rem", 
    whiteSpace: "pre-line",
    paddingBottom: "40px", 
};


const sectionContainer = {
    width: "100%",
    paddingBottom: "50px",
};

const sectionHeading = {
    color: "#fff",
    fontSize: "1.6rem", 
    fontWeight: "normal",
    letterSpacing: "1px",
    margin: "0 0 20px 0",
    paddingBottom: "10px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.15)", 
    textAlign: "left",
};

const rowWrapper = {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "12px",
    lineHeight: "1.6",
    fontSize: "1.1rem",
};

const rowLabel = {
    color: "#ffffffbe", 
    minWidth: "160px", 
    fontWeight: "bold",
    flexShrink: 0,
};

const rowContent = {
    color: "#d1d5db", 
    flex: 1,
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
    maxWidth: "450px", 
    fontFamily: "monospace",
    fontSize: "0.95rem",
    color: "#fff",
};

const menuRow = {
    display: "flex",
    justifyContent: "space-between", 
    alignItems: "left",
    opacity: 0.8,
    borderBottom: "1px dashed rgba(255, 255, 255, 0.15)",
    paddingBottom: "6px",
};

const menuLink = {
    color: "#ccd3cdff",
    textDecoration: "none",
    cursor: "pointer",
    transition: "opacity 0.2s ease",
};