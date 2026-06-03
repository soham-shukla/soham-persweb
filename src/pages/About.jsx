import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Background, Centered } from '../StyledComponents';
import '../App.css'; 

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

// output

function About() {
    const [showBio, setShowBio] = useState(false);

    return (
        <Background> 
            <div style= {contentLayout}>
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

                            <div style={educationContainer}>
                                <Centered> <h2>education</h2> </Centered>
                                <p> i'm studying computer engineering at the university of illinois @ urbana-champaign. currently a sophomore. <br/> <br/>
                                    started: fall 2025. expected graduation: fall 2029. <br/> <br/>
                                    previous coursework: computer programming & systems, both introductions to computing & electronics, linear algebra, differential equations, physics: mechanics & electricty + magnetism, and the ECE honors design lab. <br/> <br/>
                                    current coursework: data structures, analog systems, discrete math, digital systems lab, quantum & thermal physics <br/><br/> 
                                    outside of class, i've been involved with ACM @ UIUC, EOB @ UIUC, and ISSA @ UIUC. <br/><br/>
                                    i also work as an undergraduate researcher in the Dr. Hua Wang Lab. my work there focuses on researching the RNA receptors on cell surfaces <br/><br/>
                                    side note, i have a personal interest in applying advancements in computing and AI towards medicine and drug discovery. <br/> <br/>working on a minor in bioengineering <br/><br/>
                                    awards: dean's list (x2), James Scholar, AP scholar with distinction, national merit scholar, ISAC state scholar, graduated high school magna cum laude, etc. <br/><br/>
                                </p>
                                <Centered> <h2> passions </h2></Centered>
                                <p> 
                                    you can typically find me at the gym. i lift, hoop, play tennis & pickleball, and i'm trying to get into running too. <br/><br/>
                                    i love music. i did band, played guitar, and i'm trying to pick up producing <br/><br/>
                                    also love to travel and be outside. especially national parks. trying to visit all 63, and already ~40 down. <br/><br/>
                                    taco bell enthusiast <br/><br/>
                                </p>
                                <Centered> <h2> skills </h2></Centered>
                                <p>
                                    programming: C, C++, Python, Java, JS, HTML/CSS, Assembly <br/><br/>
                                    tools/frameworks: React, Vite, Git, Google Suite, Microsoft Office <br/><br/>
                                    hardware: analog & digital circuit design, FSMs, soldering, osciloscopes, etc. <br/><br/>
                                    languages: english (native), spanish, hindi, gujurati, marathi... to some degree <br/><br/>
                                    also pretty good at just figuring things out one way or another :) <br/><br/>
                                </p>
                                <Centered> <h2> gallery </h2></Centered>

                                <div style={menuContainer}>
                                    <Centered> <h2> where to?</h2> </Centered>
                                    
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
                                </div>
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
    color: "#fff",
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

const promptPrefix = { color: "#27c93f", marginRight: "8px" };
const typeText = { color: "#fff", opacity: 0.9 };
const cursorStyle = { display: "inline-block", marginLeft: "4px", color: "#fff", opacity: 0.8 };

// page-styles

const contentLayout = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", 
    width: "100%",
};

// textbox-styles 

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
    fontFamily: "monospace",
    fontSize: "0.95rem",
    whiteSpace: "pre-line",
    paddingBottom: "40px", 
};

const educationContainer = {
    width: "100%",
    padding: "0", 
    boxSizing: "border-box",
    paddingBottom: "60px",
};

const menuContainer = {
    width: "100%",
    paddingBottom: "60px",
};

const menuList = {
    display: "flex",
    flexDirection: "column",
    gap: "16px", 
    width: "100%",
    maxWidth: "900px", 
    fontFamily: "monospace",
    fontSize: "0.95rem",
    color: "#fff",
};

const menuRow = {
    display: "flex",
    justifyContent: "space-between", 
    alignItems: "right",
    opacity: 0.8,
};

const menuLink = {
    color: "#27c93f",
    textDecoration: "none",
    cursor: "pointer",
    transition: "opacity 0.2s ease",
};