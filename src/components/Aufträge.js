import React from 'react';
import './Aufträge.css';



const Aufträge = (props) => {
    return (

        <section className="section2" >
            <article className="heading2">
                <div>
                    <img className="img2" src={props.Image2} alt="" />
                </div>
                <div className="auftrag">
                    <h1 >Aufträge</h1>
                
            
                    <p>Excepteur sint occaecat cupidatat non proident, <br />
                        sunt in culpa qui officia deserunt mollit anim id <br />
                        esteopksio laborum. Sed ut perspiciatis unde omnis <br />
                        tempora incidunt ut labore et dolore wopeir magnam <br />
                        aliquam quaerat voluptatem </p>

                        <div>
                    <button className="button2">Erfahren Mehr</button>
                </div>

                </div>
                
            </article>

        </section>
        




    );
}

export default Aufträge;