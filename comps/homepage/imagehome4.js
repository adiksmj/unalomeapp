const Imagehome4 = () => {
    return ( 
        <div>
        <div className="container">
            <img src="/bromo.jpg"></img>
        </div>
        <style jsx>{`
        .container {
            position: relative;
            width: 100%;
            height: 650px;
            z-index: -1;
         
            
           
        }

        div img {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
            height: auto;
            width: inherit;
            position: fixed;
            top: 0px; 
        }
        
        `}</style>
        </div>
     );
}
 
export default Imagehome4;