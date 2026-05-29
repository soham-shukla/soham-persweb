import { useLocation } from 'react-router-dom';
import '../App.css';
import {Background, TabWrapper, Spring, UnderlineMotion} from '../StyledComponents';
import {useState, useEffect} from 'react';
import {motion, useScroll, useMotionValueEvent} from 'motion/react';


const Tabs = ["about", "projects", "home", "career", "contact"]

export function MainHeader(){
    const location = useLocation();
    const activeIndex = Tabs.findIndex(tab =>     
        location.pathname === (tab === "home" ? "/" : `/${tab}`));

    return( 
            <Background style = {{position: 'relative'}}> 
                {Tabs.map((tab) => {
                    const path = tab === "home" ? "/" : `/${tab}`;
                    const isActive = location.pathname === path;

                    return ( 
                        <TabWrapper
                            key = {tab}
                            to = {path}
                            $active = {isActive}
                        >
                            {tab}                         
                        </TabWrapper>
                    )
                }) }
        <UnderlineMotion
            initial={{ left: `${(activeIndex / Tabs.length) * 100}%` }}
            animate={{ left: `${(activeIndex / Tabs.length) * 100}%` }}
            transition={Spring}
            style={{
                width: `${100 / Tabs.length}%`,
            }}
        />
            </Background>

    );
}

const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
}

export function DateHeader(){

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());

        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return(  
        <> 
            <p className= 'mukta-malar-regular ${className}' > {date.toLocaleString('en-US', options).replace(/,/g, '').replace(/\//g, '.')} </p>
        </>
    )
}

export function HideMainHeader(){
    const {scrollY} = useScroll()
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollY, "change",(current) => {
        const prev = scrollY.getPrevious() ?? 0
        if (current > prev && current > 150) {setHidden(true)}
        else {setHidden(false)}
    })

    return(
        <motion.header
            className = "header"
            animate = {{ y: hidden ? -140 : 0, opacity: hidden ? 0 : 1,}}
            transiton = {{ duration :0.4, ease: "easeInOut"}} >

                <MainHeader/> 

        </motion.header>
    );
}

