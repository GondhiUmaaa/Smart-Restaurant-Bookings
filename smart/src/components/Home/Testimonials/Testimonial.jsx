import "./Testimonial.scss";

const Testimonial = () => {
    return (
      <div>
        <div className="testimonials-container">
            <div className="content-wrapper">
                <div className="header-section">
                    <h1 className="main-heading">What people <br /> are saying.</h1>
                    <h3 className="sub-heading">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    <div className="divider">
                        <span className="dot small"></span>
                        <span className="dot medium"></span>
                        <span className="line"></span>
                        <span className="dot medium"></span>
                        <span className="dot small"></span>
                    </div>
                </div>
                <div className="testimonials-grid">
                    <div className="testimonial-column">
                        <div className="testimonial-card">
                            <div className="card-header">
                                <div className="avatar">
                                    <img src="https://i.pravatar.cc/100?img=1" alt="" />
                                </div>
                                <div className="user-info">
                                    <h6 className="user-name">Kenzie Edgar.</h6>
                                </div>
                            </div>
                            <div className="card-body">
                                <p className="testimonial-text">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti."</p>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="card-header">
                                <div className="avatar">
                                    <img src="https://i.pravatar.cc/100?img=1" alt="" />
                                </div>
                                <div className="user-info">
                                    <h6 className="user-name">Kenzie Edgar.</h6>
                                </div>
                            </div>
                            <div className="card-body">
                                <p className="testimonial-text">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti."</p>
                            </div>
                        </div>
                        
                        {/* Repeat for other testimonials */}
                    </div>
                    <div className="testimonial-column">
                        <div className="testimonial-card">
                            <div className="card-header">
                                <div className="avatar">
                                    <img src="https://i.pravatar.cc/100?img=1" alt="" />
                                </div>
                                <div className="user-info">
                                    <h6 className="user-name">Kenzie Edgar.</h6>
                                </div>
                            </div>
                            <div className="card-body">
                                <p className="testimonial-text">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti."</p>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="card-header">
                                <div className="avatar">
                                    <img src="https://i.pravatar.cc/100?img=1" alt="" />
                                </div>
                                <div className="user-info">
                                    <h6 className="user-name">Kenzie Edgar.</h6>
                                </div>
                            </div>
                            <div className="card-body">
                                <p className="testimonial-text">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti."</p>
                            </div>
                        </div>
                        
                        {/* Repeat for other testimonials */}
                    </div>
                    <div className="testimonial-column">
                        <div className="testimonial-card">
                            <div className="card-header">
                                <div className="avatar">
                                    <img src="https://i.pravatar.cc/100?img=1" alt="" />
                                </div>
                                <div className="user-info">
                                    <h6 className="user-name">Kenzie Edgar.</h6>
                                </div>
                            </div>
                            <div className="card-body">
                                <p className="testimonial-text">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti."</p>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="card-header">
                                <div className="avatar">
                                    <img src="https://i.pravatar.cc/100?img=1" alt="" />
                                </div>
                                <div className="user-info">
                                    <h6 className="user-name">Kenzie Edgar.</h6>
                                </div>
                            </div>
                            <div className="card-body">
                                <p className="testimonial-text">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti."</p>
                            </div>
                        </div>
                        
                        {/* Repeat for other testimonials */}
                    </div>
                    {/* Repeat for other columns */}
                </div>
            </div>
        </div>
      </div>
    );
};
  
export default Testimonial;
