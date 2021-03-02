import React from 'react';

const Section = () => {
    return (
            <section className="page-section" id="services"> 
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Wayfarer is</h2> 
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="far fa-smile fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Community</h4>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-plane fa-stack-1x fa-inverse"></i>  
                        </span>
                        <h4 className="my-3">Travel</h4>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-camera-retro fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Saring Memories</h4>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                </div>
            </div>
        </section>
)
}

export default Section;