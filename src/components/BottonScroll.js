import React,{useState} from "react";
import { Button } from "react-bootstrap";

export default function BottonScroll(){
    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 100){
        setVisible(true)
      } 
      else if (scrolled <= 100){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return(
        <Button onClick={scrollToTop} className="bottonscroll" variant="outline-dark"
        style={{display: visible ? 'inline' : 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" stroke="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
</svg>
        </Button>
    )
}