import { DateHeader } from '../components/Header';
import  Footer  from '../components/Footer';
import HomeScreen from '../assets/IMG_5845.jpeg';
import '../App.css';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { Background } from '../StyledComponents';


// helper functions 

function ScrollMenu(){
    return(
        <div style={container}>
            {pageData.map((data, i) => (
                <Card i={i} data={data} key={data.title} />
            ))}
        </div>
    );
}

const pageData = [
    { id: "01", title: "about", path: "/about" },       
    { id: "02", title: "projects", path: "/projects" },        
    { id: "03", title: "career", path: "/career" },   
    { id: "04", title: "contact", path: "/contact" },       
];

function Card({ data, i }) {
    const isLeft = i % 2 === 0;

    return (
        <div style={{ ...cardContainer, justifyContent: isLeft ? "flex-start" : "flex-end" }}>
            <motion.div 
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ amount: 0.6 }} 
                style={card} 
                variants={cardVariants} 
                className="card"
            >
                <Link to={data.path} style={linkStyle}>
                    <span style={numberStyle}>{data.id}</span>
                    <h2 style={titleStyle}>{data.title}</h2>
                </Link>
            </motion.div>
        </div>
    )
}

// animations 

const cardVariants = {
    offscreen: { y: 80, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", bounce: 0.2, duration: 1 },
    },
};

// page-styles 

const pageWrapper = {
    position: 'relative',
    width: "100%",
    backgroundColor: "#000"
};

const landingSection = {
    position: "relative",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    zIndex: 3,
};

const fixedBackground = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${HomeScreen})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: 1, 
};

const darkOverlay = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.95))",
    zIndex: 2,
};


const textOverlay = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "2rem",
    boxSizing: "border-box",
};

const scrollSection = {
    position: 'relative',
    minHeight: "100vh", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", 
    padding: "100px 20px", 
    display: "flex",
    zIndex: 3,
    justifyContent: "center",
};

// component-styles

const container = {
    maxWidth: 700, 
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "140px", 
};

const cardContainer = {
    width: "100%",
    display: "flex",
};

const card = {
    width: "70%", 
    minWidth: "250px",
    height: "140px",
    
    borderRadius: "2px", 
    
    background: "rgba(255, 255, 255, 0.03)", 
    backdropFilter: "blur(20px)",            
    WebkitBackdropFilter: "blur(20px)",      
    borderTop: "1px solid rgba(255, 255, 255, 0.15)", 
    borderBottom: "1px solid rgba(0, 0, 0, 0.8)", 
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)", 
    
    overflow: "hidden", 
};

const linkStyle = {
    textDecoration: "none",
    color: "#ffffff", 
    width: "100%",
    height: "100%",
    padding: "20px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", 
    boxSizing: "border-box",
};

const numberStyle = {
    fontSize: "0.8rem",
    opacity: 0.5,
    fontFamily: "monospace",
    letterSpacing: "2px",
};

const titleStyle = {
    margin: 0,
    fontSize: "2rem",
    textTransform: "lowercase", 
    letterSpacing: "1px",
    textAlign: "right", 
    fontWeight: "normal",
};


// output 

function Home(){
    const {scrollY} = useScroll();
    const overlay = useTransform(scrollY, [0,600], [0,1]);
    
    return (
        <div style={pageWrapper}>
            <div style = {fixedBackground}/>
            <motion.div style={{ ...darkOverlay, opacity: overlay }} />

            <div className="home" style={landingSection}> 
                <div style={textOverlay}>
                    <div className="top-text"> soham shukla </div>
                    <div className="bottom-text"> <DateHeader/> </div>
                </div>
            </div>

            <div style={scrollSection}>
                <ScrollMenu />
            </div>
            <div>
                <Background style = {{ zIndex: 3,}}>
                    <Footer/>
                </Background>
            </div>
        </div>
    )
}

export default Home;
