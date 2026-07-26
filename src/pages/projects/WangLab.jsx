import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import '../../App.css'; 
import img_one from '../../assets/1_Contig_Location_Spike.png';
import img_two from '../../assets/2_Thermodynamic_Viability_Matrix.png';
import img_three from '../../assets/3_Contig_Assembly_Impact.png';
import img_zero from '../../assets/0_Exclusivity_Bar_Chart.png';

export default function ProjectWangLab() {
    return (
        <div style={pageLayout}>
            
            <div style={navBar}>
                <Link to="/projects" className="mukta-malar-light" style={backLink}>
                    &larr; back to projects
                </Link>
            </div>

            <header style={headerSection}>
                <span className="mukta-malar-light" style={metaTags}>./projects</span>
                <h1 className="mukta-malar-bold" style={title}>biomarker discovery & targeting </h1>
                <h2 className="mukta-malar-light" style={metaTags}>Wang Lab @ UIUC</h2>
                
                <div style={actionButtons}>
                    <a href="#" className="mukta-malar-regular" style={btnStyle}>
                        [github repo]
                    </a>
                </div>
            </header>

            <motion.div 
                style={heroImageContainer}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <img src= {img_one} alt=" Final Locations of Contigs" style={imageFill} />
                <span className="mukta-malar-extralight" style={caption}> Genomic mapping showing target hotspots exclusivity for the M1 28S rRNA.</span>

            </motion.div>

            <section style={overviewGrid}>
                <div style={overviewLeft}>
                    <h2 className="mukta-malar-semibold" style={sectionHeading}>overview</h2>
                    <p className="mukta-malar-light" style={bodyText}>
                        A high-throughput bioinformatics pipeline designed to identify exclusive, cell-surface RNA (csRNA) biomarkers on inflammatory M1 macrophages. These biomarkers serve as highly specific targets for future Hybridization Chain Reaction (HCR v3) diagnostic sensors and targeted Lipid Nanoparticle (LNP) delivery systems.
                        <br /><br />
                        This pileline uses Relative Abundance (RPM) profiling and it revealed that ~87% of the M1 surface RNA consisted of fragmented ribosomal RNA (rRNA). The pipeline strategically works on identifying abundant, structurally conserved, and entirely M1-exclusive rRNA fragments.
                    </p>
                </div>

                <div style={overviewRight}>
                    <div style={specBox}>
                        <span style={specLabel}>role</span>
                        <span className="mukta-malar-regular" style={specValue}>Undergraduate Researcher</span>
                        
                        <span style={specLabel}>stack</span>
                        <span className="mukta-malar-regular" style={specValue}>Python, pandas, pysam</span>

                        <span style={specLabel}>tooling</span>
                        <span className="mukta-malar-regular" style={specValue}>Bowtie2, RNAfold, NUPACK</span>
                    </div>
                </div>
            </section>

            <hr style={divider} />

            <main style={detailsContainer}>
                
                <div style={detailBlock}>
                    <h3 className="mukta-malar-medium" style={subHeading}>01 / normalization & exclusivity filtering</h3>
                    <p className="mukta-malar-light" style={bodyText}>
                        Raw sequence counts are first converted to Reads Per Million (RPM) using pandas to determine absolute surface abundance. The script cross-references the top 100 overrepresented sequences from M1 libraries against healthy controls, mathematically guaranteeing exclusivity by filtering out any sequence without a &gt;4x fold enrichment. Sequences with restrictive structural anomalies are also automatically discarded.
                    </p>
                </div>

                <div style={detailBlock}>
                    <h3 className="mukta-malar-medium" style={subHeading}>02 / targeted genomic mapping</h3>
                    <p className="mukta-malar-light" style={bodyText}>
                        To identify physical origins, sequences are converted to FASTA format and mapped using Bowtie2 against a custom genomic index restricted to parent rRNAs. Python's pysam library is leveraged to programmatically extract exact start and end coordinates directly from the SAM files, confirming that the M1-exclusive fragments reliably cluster in the central region of the 28S rRNA.
                    </p>
                    
                    <div style={inlineImageWrapper}>
                        <img src= {img_zero} alt="Thermodynamic Stability for Consequent Probing" style={diagramStyle} />
                        <span className="mukta-malar-extralight" style={caption}> Top 10 M1-exclusive RNA targets ranked by absolute surface abundance.</span>
                    </div>
                </div>

                <div style={detailBlock}>
                    <h3 className="mukta-malar-medium" style={subHeading}>03 / contig assembly via coordinate math</h3>
                    <p className="mukta-malar-light" style={bodyText}>
                        Since Illumina sequencing caps long RNA molecules into maximums of ~150-nucleotide reads, the targets had to be reconstructed. The script uses coordinate math to identify overlapping mapping intervals. It slices a continuous 300–500nt consensus sequence directly from the reference genome, summating the physical mass of the constituent reads.
                    </p>
                </div>

                <div style={detailBlock}>
                    <h3 className="mukta-malar-medium" style={subHeading}>04 / 2d structural prediction</h3>
                    <p className="mukta-malar-light" style={bodyText}>
                        The probes used by our lab need physical space to bind, meaning flat sequence data is insufficient. The massive assembled contigs are fed directly into the ViennaRNA RNAfold algorithm via Python's subprocess module. Enforcing physiological temperatures (37°C), RNAfold calculates the Minimum Free Energy (MFE) and outputs a topological 2D dot-bracket string, identifying wide-open, single-stranded loops where synthetic probes can easily dock.
                    </p>
                    
                    <div style={imageRow}>
                        <div style={halfImage}>
                            <img src= {img_two} alt="RNA Dot Bracket Notation" style={imageFill} />
                        </div>
                        <div style={halfImage}>
                            <img src= {img_three} alt="2D RNA Structure Diagram" style={imageFill} />
                        </div>
                    </div>
                    <span className="mukta-malar-extralight" style={caption}>Left: Target evaluation comparing physical abundance against structural stability for optimal probe binding. <br/> Right: Short sequencing reads successfully merged into massive, continuous probe-binding regions.</span>
                </div>

                <div style={detailBlock}>
                    <h3 className="mukta-malar-medium" style={subHeading}>05 / clinical impact & output</h3>
                    <p className="mukta-malar-light" style={bodyText}>
                        The pipeline compresses choppy, noisy RNA-seq data into a master dataset of massive, structurally evaluated consensus targets. Researchers can now scan the 2D dot-bracket strings of these exclusive 28S rRNA targets to locate open 20-nucleotide loops, design complementary HCR v3 initiator probes, and feed the sequences into NUPACK. This guarantees both biological exclusivity and physical accessibility, severely reducing the risk of off-target therapeutic delivery.
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

const inlineImageWrapper = {
    width: "100%",
    margin: "24px 0",
    backgroundColor: "#0a0a0a",
    padding: "40px 20px", 
    borderRadius: "8px", 
    border: "1px solid rgba(255, 255, 255, 0.05)",
};

const imageRow = {
    display: "flex",
    gap: "16px",
    width: "100%",
    margin: "24px 0 8px 0",
};

const halfImage = {
    flex: 1,
    height: "260px",
    backgroundColor: "#111",
    borderRadius: "8px",
    overflow: "hidden",
    border: "1px solid rgba(255, 255, 255, 0.05)",
};

const diagramStyle = {
    maxWidth: "100%", 
    height: "auto",   
    display: "block",
    margin: "0 auto", 
};

const caption = {
    display: "block",
    color: "#666",
    fontSize: "0.85rem",
    marginTop: "20px",
    textAlign: "center",
};