import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {motion} from 'motion/react';



export const Background = styled.div`
    background-color: black;
    color: white;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    position: relative;
`

export const Centered = styled.div`
    display: flex;
    flex-direction: column;     
    align-items: center;        
    justify-content: center;    
    text-align: center;        
    width: 100%;
    color: white;
`

export const TabWrapper = styled(Link)`
    padding: 10px ;
    background-color: #000000ff;
    opacity: 1;
    border: none;
    outline: none;
    color: white;
    text-decoration: none;           
    text-align: center;             
    transition: ease border-bottom 250ms;
    width: 100%;
    flex: 1;
    position: relative;
`
export const UnderlineMotion = styled(motion.div)`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background-color: white;
`
export const Spring = {
    type: 'spring',
    stiffness: 300,
    damping: 50,
}
