import '../App.css';
import {motion} from 'motion/react';
import {useForm, ValidationError} from '@formspree/react';

export default function Contact() {

    const [state, handleSubmit] = useForm("xgoqgyor");

    return (
        <div style={pageWrapper}>
            <div style={scrollSection}>
                <motion.div 
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ amount: 0.4, once: true }} 
                    style={glassContainer} 
                    variants={cardVariants}
                >
                    <h2 style={formTitle}>reach out!</h2>
                    
                    <div style={instructionBox}>
                        <p style={instructionText}>
                           for anything and everything, don't hesitate to reach out to me here. i'll return the favor as soon as i can
                        </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} style={formStyle}>
                        <div style={inputGroup}>
                            <label style={labelStyle} htmlFor="name">name</label>
                            <input style={inputBox} type="text" id="name" name="name" required />
                            <ValidationError prefix="Name" field="name" errors={state.errors} style={errorText} />
                        </div>

                        <div style={inputGroup}>
                            <label style={labelStyle} htmlFor="email">email</label>
                            <input style={inputBox} type="email" id="email" name="email" required />
                            <ValidationError prefix="Email" field="email" errors={state.errors} style={errorText} />
                        </div>

                        <div style={inputGroup}>
                            <label style={labelStyle} htmlFor="message">message</label>
                            <textarea 
                                style={{ ...inputBox, minHeight: "150px", resize: "vertical" }} 
                                id="message" 
                                name="message" 
                                required 
                            />
                            <ValidationError prefix="Message" field="message" errors={state.errors} style={errorText} />
                        </div>

                        <button 
                            type="submit" 
                            style={submitButton} 
                            disabled={state.submitting || state.succeeded}
                        >
                            {state.submitting ? "sending..." : state.succeeded ? "sent! ✓" : "send message"}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}

// page-styles

const pageWrapper = { position: 'relative', width: "100%", backgroundColor: "#000" };

const scrollSection = { 
    position: 'relative', 
    minHeight: "100vh", 
    padding: "100px 20px", 
    display: "flex", 
    zIndex: 3, 
    justifyContent: "center",
    alignItems: "center", 
};

const glassContainer = {
    width: "100%",
    maxWidth: "600px", 
    padding: "40px",
    boxSizing: "border-box",
    borderRadius: "2px", 
    background: "rgba(255, 255, 255, 0.03)", 
    backdropFilter: "blur(20px)",            
    WebkitBackdropFilter: "blur(20px)",      
    borderTop: "1px solid rgba(255, 255, 255, 0.15)", 
    borderBottom: "1px solid rgba(0, 0, 0, 0.8)", 
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)", 
};

// component-styles

const instructionBox = {
    backgroundColor: "rgba(0, 0, 0, 0.2)", 
    borderLeft: "2px solid rgba(255, 255, 255, 0.3)", 
    padding: "20px",
    marginBottom: "30px",
};

const instructionText = {
    margin: 0,
    color: "#fff",
    opacity: 0.8,
    fontSize: "0.95rem",
    lineHeight: "1.6",
    whiteSpace: "pre-line", 
};

const formTitle = { color: "#fff", fontSize: "1.8rem", fontWeight: "normal", margin: "0 0 20px 0", letterSpacing: "1px" };
const formStyle = { display: "flex", flexDirection: "column", gap: "20px" };
const inputGroup = { display: "flex", flexDirection: "column", gap: "8px" };
const labelStyle = { color: "#fff", opacity: 0.6, fontFamily: "monospace", fontSize: "0.85rem", letterSpacing: "1px" };
const errorText = { color: "#ff6b6b", fontSize: "0.8rem", fontFamily: "monospace", marginTop: "-4px" };

const inputBox = {
    width: "100%",
    padding: "12px 15px",
    backgroundColor: "rgba(0, 0, 0, 0.3)", 
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "2px",
    color: "#fff",
    fontFamily: "inherit",
    fontSize: "1rem",
    outline: "none", 
    boxSizing: "border-box",
};

const submitButton = {
    marginTop: "10px",
    padding: "15px",
    backgroundColor: "#fff",
    color: "#000",
    border: "none",
    borderRadius: "2px",
    fontFamily: "monospace",
    fontSize: "0.9rem",
    textTransform: "lowercase",
    letterSpacing: "2px",
    cursor: "pointer",
};

const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", bounce: 0.2, duration: 1 },
    },
};