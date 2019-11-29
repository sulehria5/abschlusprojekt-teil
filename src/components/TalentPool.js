import React from 'react';
import './TalentPool.css';


const TalentPool = (props) => {
    return (

        <section className="section1" >
            <article className="heading1">
                <div>
                    <img className="img1" src={props.Image} alt="" />
                </div>
                <div >
                    <h1 >Talent Pool</h1>
                    <p >Excepteur sint occaecat cupidatat non proident, <br />
                        sunt in culpa qui officia deserunt mollit anim id <br />
                        esteopksio laborum. Sed ut perspiciatis unde omnis <br />
                        tempora incidunt ut labore et dolore wopeir magnam <br />
                        aliquam quaerat voluptatem </p>

                        <div>
                    <button className="button1">Erfahren Mehr</button>
                </div>

                </div>
                
            </article>

        </section>
        




    );
}

export default TalentPool;