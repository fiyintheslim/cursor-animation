import React, {useEffect, useRef} from "react"
import gsap from "gsap"
import Cursor from "./utils/Cursor"
import './App.css';
import "./styles/styles.scss"


function App() {
  const cursor = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    
    let app = document.querySelector(".App")
    if(app){
     
     gsap.fromTo(app, {
      opacity:0,
     }, {
       opacity:1,
       duration:1,
       ease: "Power3.easeInOut"
     })
    }
    if(cursor.current){
     new Cursor(cursor.current)
    }
  }, [])
  
   
  
  return (
    <div className="App">
      
    <header>
      <div className="header-inner">
        <div className="header-inner-col left">
          <div className="header-inner-logo">
            <h2>cursorto</h2>
          </div>
        </div>
        <div className="header-inner-col right">
          <div className="header-inner-nav">
            <span className="header-inner-nav-link">showreel</span>
            <div className="header-inner-nav-menu">
              <span className="header-inner-nav-link">menu</span>
              <div className="header-inner-nav-menu-hamburger">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-inner-banner">
            <div className="hero-inner-col left"></div>
            <div className="hero-inner-col right">
              <div className="hero-inner-title">
                <h1>We make it happen</h1>
              </div>
              <div className="hero-inner-links">
                <div data-video-src="websites" className="hero-inner-link-item">
                  <div className="hero-inner-link-item-padding"></div>
                  <a href="/"> <span>Websites</span></a>
                </div>
                <div data-video-src="apps" className="hero-inner-link-item">
                  <div className="hero-inner-link-item-padding"></div>
                  <a href="/"> <span>Apps</span></a>
                </div>
                <div className="hero-inner-link-item" data-video-src="branding">
                  <div className="hero-inner-link-item-padding"></div>
                  <a href="/"> <span>Branding</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-inner-footer">
          <div className="hero-inner-footer-text">
            <p>
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </p>
          </div>
        </div>
      </div>
    </section>

    
    <div className="chat">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30" id="chat">
        <path
          d="M16 26c8.84 0 16-5.82 16-13S24.84 0 16 0 0 5.82 0 13a11.72 11.72 0 004.12 8.71L3.33 30l7.53-4.69A19.11 19.11 0 0016 26z"
        ></path>
      </svg>
    </div>

    <div ref={cursor} className="cursor">
      <div className="cursor-media">
        <video
          src="videos/websites.mp4"
          preload="auto"
          autoPlay={true}
          muted
          loop
          id="websites"
        ></video>
        <video
          src="videos/apps.mp4"
          preload="auto"
          autoPlay={true}
          muted
          loop
          id="apps"
        ></video>
        <video
          src="videos/branding.mp4"
          preload="auto"
          autoPlay={true}
          muted
          loop
          id="branding"
        ></video>
      </div>
    </div>
    </div>
  );
}

export default App;
