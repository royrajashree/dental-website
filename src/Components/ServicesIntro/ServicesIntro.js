import TwentyTwenty from 'react-twentytwenty';

const ServicesIntro = () => {
    return (
        <div className="servicesDiv d-flex flex-direction-row" style={{ marginTop: "100px" }}>
            <div className="row">
            <div className="sliderDiv col-3">
                    <div>
                        <div>
                            <TwentyTwenty
                                left={<img src={process.env.PUBLIC_URL + 'assets/images/bleaching1.jpg'} height="230" width="250" style={{ borderRadius: "5px" }} />}
                                right={<img src={process.env.PUBLIC_URL + 'assets/images/bleaching2.jpg'} height="230" width="250" style={{ borderRadius: "5px" }} />}
                                slider={<div className="slider" />}
                            />
                        </div>
                        <div>
                            <p className="serviceIntroName mt-4">NAME OF THE SERVICE</p>
                            <p className="serviceIntroText">A one line description</p>
                        </div>
                            <button className="learnMoreBtn" style={{transform: "translateX(85%)"}}>LEARN MORE</button>
                    </div>
                </div>
                
                <div className="sliderDiv col-3">
                    <div>
                        <div>
                            <TwentyTwenty
                                left={<img src={process.env.PUBLIC_URL + 'assets/images/bleaching1.jpg'} height="230" width="250" style={{ borderRadius: "5px" }} />}
                                right={<img src={process.env.PUBLIC_URL + 'assets/images/bleaching2.jpg'} height="230" width="250" style={{ borderRadius: "5px" }} />}
                                slider={<div className="slider" />}
                            />
                        </div>
                        <div>
                            <p className="serviceIntroName mt-4">NAME OF THE SERVICE</p>
                            <p className="serviceIntroText">A one line description</p>
                        </div>
                            <button className="learnMoreBtn" style={{transform: "translateX(85%)"}}>LEARN MORE</button>
                    </div>
                </div>
                
                <div className="sliderDiv col-3">
                    <div>
                        <div>
                            <TwentyTwenty
                                left={<img src={process.env.PUBLIC_URL + 'assets/images/bleaching1.jpg'} height="230" width="250" style={{ borderRadius: "5px" }} />}
                                right={<img src={process.env.PUBLIC_URL + 'assets/images/bleaching2.jpg'} height="230" width="250" style={{ borderRadius: "5px" }} />}
                                slider={<div className="slider" />}
                            />
                        </div>
                        <div>
                            <p className="serviceIntroName mt-4">NAME OF THE SERVICE</p>
                            <p className="serviceIntroText">A one line description</p>
                        </div>
                            <button className="learnMoreBtn" style={{transform: "translateX(85%)"}}>LEARN MORE</button>
                    </div>
                </div>
                <div className="sliderDiv col-3">
                    <div>
                        <div>
                            <TwentyTwenty
                                left={<img src={process.env.PUBLIC_URL + 'assets/images/bleaching1.jpg'} height="230" width="250" style={{ borderRadius: "5px" }} />}
                                right={<img src={process.env.PUBLIC_URL + 'assets/images/bleaching2.jpg'} height="230" width="250" style={{ borderRadius: "5px" }} />}
                                slider={<div className="slider" />}
                            />
                        </div>
                        <div>
                            <p className="serviceIntroName mt-4">NAME OF THE SERVICE</p>
                            <p className="serviceIntroText">A one line description</p>
                        </div>
                            <button className="learnMoreBtn" style={{transform: "translateX(85%)"}}>LEARN MORE</button>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default ServicesIntro;