import {motion, useScroll} from 'motion/react';
import {useRef} from 'react';
 
// component-styles

const timelineHeader = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    top: "-40px",

    color: "white",
    fontFamily: "monospace",
    fontSize: "1rem",
    opacity: 0.8,
};

const pageWrapper = {
    position: "relative",
    minHeight: "100vh",
    backgroundColor: "#000", 
    padding: "100px 20px",
    display: "flex",
    justifyContent: "center",
    color: "#fff",
};
const tickMarksStyle = {
    position: "absolute",
    left: "50%",
    top: 0, 
    bottom: 0,
    width: "20px", 
    transform: "translateX(-50%)",
    backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 1px, transparent 1px)",
    backgroundSize: "100% 80px",   
    zIndex: 1, 
};

const timelineContainer = {
    position: "relative",
    width: "100%",
    maxWidth: "900px",
    display: "flex",
    flexDirection: "column",
    gap: "100px",
    padding: "50px 0",
};

const backgroundLine = {
    position: "absolute",
    left: "50%",
    top: 0,
    bottom: 0,
    width: "2px",
    background: "rgba(255, 255, 255, 0.1)",
    transform: "translateX(-50%)",
};

const activeLine = {
    position: "absolute",
    left: "50%",
    top: 0,
    bottom: 0,
    width: "2px",
    background: "#ffffff",
    transform: "translateX(-50%)",
    transformOrigin: "top", 
};

const itemWrapper = {
    width: "100%",
    display: "flex",
    position: "relative",
    zIndex: 2,
};

const glassCard = {
    width: "calc(50% - 40px)", 
    padding: "30px",
    boxSizing: "border-box",
    
    borderRadius: "2px", 
    background: "rgba(255, 255, 255, 0.03)", 
    backdropFilter: "blur(20px)",            
    WebkitBackdropFilter: "blur(20px)",      
    borderTop: "1px solid rgba(255, 255, 255, 0.15)", 
    borderBottom: "1px solid rgba(0, 0, 0, 0.8)", 
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)", 
};

const yearStyle = {
    fontSize: "0.85rem",
    opacity: 0.6,
    fontFamily: "monospace",
    letterSpacing: "2px",
    display: "block",
    marginBottom: "10px",
};

const titleStyle = {
    margin: "0 0 15px 0",
    fontSize: "1.5rem",
    fontWeight: "normal",
    letterSpacing: "1px",
};

const companyStyle = {
    margin: "0 0 15px 0",
    fontSize: "0.75rem",
    fontWeight: "bold",
    letterSpacing: "1px",
};

const descStyle = {
    margin: 0,
    fontSize: "0.95rem",
    whiteSpace: "pre-line",
    lineHeight: "1.6",
    opacity: 0.8,
};

const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", bounce: 0.2, duration: 0.8 },
    },
};

// helper functions

function TimelineItem({item, index}) {
    const isLeft = index % 2 === 0;

    return (
        <div style = {{ ...itemWrapper, justifyContent: isLeft ? "flex-start" : "flex-end"}}>
            <motion.div 
                initial = "offscreen"
                whileInView = "onscreen"
                viewport = {{amount: 0.5, once: false}}
                variants = {cardVariants}
                style = {glassCard}>
                
                <span style = {yearStyle}> {item.year} </span>
                <h2 style = {titleStyle}> {item.title} </h2>
                <h3 style = {companyStyle}> {item.company} </h3>
                <p style = {descStyle}> {item.description} </p>
            </motion.div>
        </div>

    );

}

// data

const careerData = [
    {
        year: "May 2026 - Present",
        title: "AI Curriculum Assistant",
        company: "Code Ninjas | Naperville, IL",
        description: "• spearheaded a 6-week program empowering youth to use generative AI as a creative multi-tool, providing students through hands-on projects emphasizing human-AI collaboration.",
    },
    {
        year: "January 2026 - Present",
        title: "Research Assistant",
        company: "Wang Research Lab | University of Illinois",
        description: "• designed a high-throughput bioinformatics pipeline utilizing Python, Bowtie2, and RNAfold to identify exclusive rRNA fragments on activated M1 macrophages \n• developed automated data processing scripts using pandas and pysam to perform targeted sequence alignment, extract mapping coordinates, and calculate secondary structures"
    },
        {
        year: "June 2023 - August 2025",
        title: "Junior Tennis Instructor",
        company: "Five Star Tennis Center | Plainfield, IL",
        description: "• mentored youth by developing students’ technical abilities, athleticism, and sportsmanship, guiding them through structured developmental pathways. \n• demonstrated consistent professionalism through collaboration with students, staff, and parents to cultivate a supportive and growth-oriented environment."
    },
    {
        year: "June 2022 - May 2026",
        title: "Mathematics & Computer Science Intern",
        company: "Argonne National Laboratory | Lemont, IL",
        description:  "• collaborated with post-graduate researchers as a high school intern in the Rapid Prototyping Lab to develop automated biology protocols leveraging robotic systems and machine learning models \n• performed antimicrobial research using BV-BRC datasets and API tools, gaining experience in large-scale bioinformatic pipelines and data analysis \n• designed a Retrieval-Augmented Generation model featuring OCR-enhanced document retrieval to optimize the accessibility of scientific publications \n• constructed a Model Context Protocol server to facilitate natural language querying of the BV-BRC API through integrated RAG workflows."
    },

];

// output

export default function CareerTimeline(){
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll();
    return(
        <> 
            <div style = {pageWrapper} >
                <div style = {timelineContainer} ref = {containerRef}>
                    <div style = {timelineHeader}>
                        <p> present</p>
                    </div>
                    <div style = {tickMarksStyle} />
                    <div style = {backgroundLine}/>
                    <motion.div style = {{
                        ... activeLine,
                        scaleY: scrollYProgress,

                    }} />
                    {careerData.map((item, i) => (
                        <TimelineItem key = {i} item = {item} index = {i} /> 
                    ))}
                </div>
            </div>
        </>

    );
}
