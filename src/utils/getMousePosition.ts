
const mousePosition = (e:MouseEvent) => {
    let x = e.clientX;
    let y = e.clientY;
    
    return {x, y}
}

export default mousePosition