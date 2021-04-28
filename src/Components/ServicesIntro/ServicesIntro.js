import TwentyTwenty from 'react-twentytwenty';

const ServicesIntro = () => {
    if (window.innerWidth > 900) {
        return (
            <div className="servicesDiv d-flex flex-direction-row" style={{ marginTop: "100px" }}>
                <div className="row">
                    <div className="sliderDiv col-md-3 col-sm-12">

                        <TwentyTwenty
                            left={<img src={process.env.PUBLIC_URL + 'assets/images/bleaching1.jpg'} height="230" width="250" style={{ borderRadius: "5px" }} />}
                            right={<img src={process.env.PUBLIC_URL + 'assets/images/bleaching2.jpg'} height="230" width="250" style={{ borderRadius: "5px" }} />}
                            slider={<div className="slider" />}
                        />

                        <p className="serviceIntroName mt-4">NAME OF THE SERVICE</p>
                        <p className="serviceIntroText">A one line description</p>

                        <button className="learnMoreBtn" style={{ transform: "translateX(85%)" }}>LEARN MORE</button>

                    </div>

                    <div className="sliderDiv col-md-3 col-sm-12">

                        <TwentyTwenty
                            left={<img src={process.env.PUBLIC_URL + 'assets/images/bleaching1.jpg'} height="230" width="250" style={{ borderRadius: "5px" }} />}
                            right={<img src={process.env.PUBLIC_URL + 'assets/images/bleaching2.jpg'} height="230" width="250" style={{ borderRadius: "5px" }} />}
                            slider={<div className="slider" />}
                        />

                        <p className="serviceIntroName mt-4">NAME OF THE SERVICE</p>
                        <p className="serviceIntroText">A one line description</p>

                        <button className="learnMoreBtn" style={{ transform: "translateX(85%)" }}>LEARN MORE</button>

                    </div>

                    <div className="sliderDiv col-md-3 col-sm-12">

                        <TwentyTwenty
                            left={<img src={process.env.PUBLIC_URL + 'assets/images/bleaching1.jpg'} height="230" width="250" style={{ borderRadius: "5px" }} />}
                            right={<img src={process.env.PUBLIC_URL + 'assets/images/bleaching2.jpg'} height="230" width="250" style={{ borderRadius: "5px" }} />}
                            slider={<div className="slider" />}
                        />

                        <p className="serviceIntroName mt-4">NAME OF THE SERVICE</p>
                        <p className="serviceIntroText">A one line description</p>

                        <button className="learnMoreBtn" style={{ transform: "translateX(85%)" }}>LEARN MORE</button>

                    </div>
                    <div className="sliderDiv col-md-3 col-sm-12">

                        <TwentyTwenty
                            left={<img src={process.env.PUBLIC_URL + 'assets/images/bleaching1.jpg'} height="230" width="250" style={{ borderRadius: "5px" }} />}
                            right={<img src={process.env.PUBLIC_URL + 'assets/images/bleaching2.jpg'} height="230" width="250" style={{ borderRadius: "5px" }} />}
                            slider={<div className="slider" />}
                        />

                        <p className="serviceIntroName mt-4">NAME OF THE SERVICE</p>
                        <p className="serviceIntroText">A one line description</p>

                        <button className="learnMoreBtn" style={{ transform: "translateX(85%)" }}>LEARN MORE</button>

                    </div>

                </div>

            </div >
        )
    } else {
        return (
            <div style={{ marginTop: "20vh" }}>
                <div className="row mobileRow">
                    <div className="sliderDiv col-md-3 col-sm-6">

                        <TwentyTwenty
                            left={<img src={process.env.PUBLIC_URL + 'assets/images/bleaching1.jpg'} height="230" width="250" style={{ borderRadius: "5px" }} />}
                            right={<img src={process.env.PUBLIC_URL + 'assets/images/bleaching2.jpg'} height="230" width="250" style={{ borderRadius: "5px" }} />}
                            slider={<div className="slider" />}
                        />

                        <p className="serviceIntroName mt-4">NAME OF THE SERVICE</p>
                        <p className="serviceIntroText">A one line description</p>

                        <button className="learnMoreBtn" style={{ transform: "translateX(60%)" }}>LEARN MORE</button>

                    </div>

                    <div className="sliderDiv col-md-3 col-sm-6">

                        <TwentyTwenty
                            left={<img src={process.env.PUBLIC_URL + 'assets/images/bleaching1.jpg'} height="230" width="250" style={{ borderRadius: "5px" }} />}
                            right={<img src={process.env.PUBLIC_URL + 'assets/images/bleaching2.jpg'} height="230" width="250" style={{ borderRadius: "5px" }} />}
                            slider={<div className="slider" />}
                        />

                        <p className="serviceIntroName mt-4">NAME OF THE SERVICE</p>
                        <p className="serviceIntroText">A one line description</p>

                        <button className="learnMoreBtn" style={{ transform: "translateX(60%)" }}>LEARN MORE</button>

                    </div>
                </div>

                <div className="row mobileRow" style={{marginTop: "300px"}}>

                    <div className="sliderDiv col-md-3 col-sm-6">

                        <TwentyTwenty
                            left={<img src={process.env.PUBLIC_URL + 'assets/images/bleaching1.jpg'} height="230" width="250" style={{ borderRadius: "5px" }} />}
                            right={<img src={process.env.PUBLIC_URL + 'assets/images/bleaching2.jpg'} height="230" width="250" style={{ borderRadius: "5px" }} />}
                            slider={<div className="slider" />}
                        />

                        <p className="serviceIntroName mt-4">NAME OF THE SERVICE</p>
                        <p className="serviceIntroText">A one line description</p>

                        <button className="learnMoreBtn" style={{ transform: "translateX(60%)" }}>LEARN MORE</button>

                    </div>
                    <div className="sliderDiv col-md-3 col-sm-6">

                        <TwentyTwenty
                            left={<img src={process.env.PUBLIC_URL + 'assets/images/bleaching1.jpg'} height="230" width="250" style={{ borderRadius: "5px" }} />}
                            right={<img src={process.env.PUBLIC_URL + 'assets/images/bleaching2.jpg'} height="230" width="250" style={{ borderRadius: "5px" }} />}
                            slider={<div className="slider" />}
                        />

                        <p className="serviceIntroName mt-4">NAME OF THE SERVICE</p>
                        <p className="serviceIntroText">A one line description</p>

                        <button className="learnMoreBtn" style={{ transform: "translateX(60%)" }}>LEARN MORE</button>

                    </div>

                </div>
            </div>
        )
    }

}

export default ServicesIntro;