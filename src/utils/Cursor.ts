import gsap from "gsap"
import getMousePosition from "./getMousePosition"



export default class Cursor {
    public Cursor: HTMLDivElement;
    public items;
    public config;
    //public onMouseMoveEvent;

    constructor(el:HTMLDivElement){
        this.Cursor = el
        this.Cursor.style.opacity = "0";
        this.items = document.querySelectorAll(".hero-inner-link-item");
        this.config = {
            x:{prev:0, current:0, amt:0.5},
            y:{prev:0, current:0, amt:0.5}
        }
        
        window.addEventListener("mousemove", (e)=>this.onMouseMoveEvent(e))
    }

    lerp(first:number, last:number, amt:number){
        return (1-amt) * first + amt * last
    }

    onScaleMouse = () => {

        this.items.forEach((link, i)=>{
            if(link.matches(":hover")){
                this.setVideo(link)
                this.scaleAnimation(this.Cursor.children[0], 0.6)
            }
            link.addEventListener("mouseenter", ()=>{
                this.setVideo(link)
                this.scaleAnimation(this.Cursor.children[0], 0.6)
            })

            link.addEventListener("mouseleave", ()=>{
                this.setVideo(link)
                this.scaleAnimation(this.Cursor.children[0], 0)
            })

            link.children[1].addEventListener("mouseenter", ()=>{
                this.Cursor.classList.add("media-blend")
                this.scaleAnimation(this.Cursor.children[0], 2)
            })

            link.children[1].addEventListener("mouseleave", ()=>{
                this.Cursor.classList.remove("media-blend")
                this.scaleAnimation(this.Cursor.children[0], 0.6)
            })
        })

        
    }

    scaleAnimation = (el:Element, amt:number) => {
        gsap.to(el, {
                    duration:0.8,
                    scale:amt,
                    ease:"Power3.easeOut"
        })
    }

    setVideo = (el:Element) => {
        let src = el.getAttribute("data-video-src");
        let video = document.querySelector(`#${src}`);
        let siblings = getSiblings(video)

        if (video?.id == src) {
            gsap.set(video, { zIndex: 4, opacity: 1 });
            siblings.forEach((i) => {
              gsap.set(i, { zIndex: 1, opacity: 0 });
            });
        }
    }

    onMouseMoveEvent = (e:MouseEvent)=>{
        
        gsap.to(this.Cursor, {
            opacity:1,
            duration:1,
            ease:"Power3.easeOut"
        })
        this.onScaleMouse()
        requestAnimationFrame(()=>this.render(e))
        window.removeEventListener("mousemove", (e)=>this.onMouseMoveEvent(e))
    }

    render = (e:MouseEvent)=>{
        let pos = getMousePosition(e)
        this.config.x.current = pos.x;
        this.config.y.current = pos.y
        
        this.config.x.prev = this.lerp(this.config.x.prev, this.config.x.current, this.config.x.amt)
        this.config.y.prev = this.lerp(this.config.y.prev, this.config.y.current, this.config.y.amt)

        this.Cursor.style.transform = `translateX(${this.config.x.current}px) translateY(${this.config.y.current}px)`

        requestAnimationFrame(()=>this.render(e))
    }
}

const getSiblings = (e:any) => {
    // for collecting siblings
    let siblings:Element[] = [];
    // if no parent, return no sibling
    if (!e.parentNode) {
      return siblings;
    }
    // first child of the parent node
    let sibling = e.parentNode.firstChild;
    // collecting siblings
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== e) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }
    return siblings;
  };