
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import bupt from "../assets/img/BUPT_LOGO.png"
import neu from "../assets/img/Northeastern_seal.svg.png"

export const Education = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="education">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Education</h2>
                            <div style={{display: "flex"}}>
                            <div style={{flex:1}}></div>
                                <div style={{padding: '20px', flex: 1}}>
                                    <img src={bupt} alt="BUPT" style={{margin: "10px"}}/>
                                    
                                    <h5>Beijing University of Posts and Telecommunications</h5>
                                    <h5>Bachelor of Postal Management</h5>
                                </div>
                                <div style={{flex:0.5}}></div>
                                <div style={{padding: '20px', flex: 1}}>
                                    <img src={neu} alt="Spring Boot" style={{margin: "10px"}} />
                                    
                                    <h5>Northeastern University</h5>
                                    <h5>Master of Computer Science</h5>
                                </div>
                                <div style={{flex:1}}></div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
