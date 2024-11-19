import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect,useState } from "react";
const About = () => {
    const [about, setAbout ] = useState ({})
    useEffect (() => {
        const db = getDatabase();
        const aboutRef = ref(db, "about");
        onValue(aboutRef, (snapshot) => {
            const data = snapshot.val();
            setAbout(data);
        });
    }, []);
    return (
        <div className="container-fluid py-5" id="about">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke: '1px #dee2e6'}}>{about.title}</h1>
            <h1 className="position-absolute text-uppercase text-primary">{about.am}</h1>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 pb-4 pb-lg-0">
              <img className="img-fluid rounded w-100" src={about.img1|| ""} alt />
            </div>
            <div className="col-lg-7">
              <h3 className="mb-4">{about.aak1}</h3>
              <p>{about.s} <strong>{about.uk}</strong> {about.kt}</p>
              <div className="row mb-3">
                <div className="col-sm-6 py-2"><h6>{about.n} <span className="text-secondary">{about.aak1}</span></h6></div>
                <div className="col-sm-6 py-2"><h6>{about.b} <span className="text-secondary">{about.t}</span></h6></div>
                <div className="col-sm-6 py-2"><h6>{about.d} <span className="text-secondary">{about.shs}</span></h6></div>
                <div className="col-sm-6 py-2"><h6>{about.e}<span className="text-secondary">{about.ic}</span></h6></div>
                <div className="col-sm-6 py-2"><h6>{about.a} <span className="text-secondary">{about.an}</span></h6></div>
                <div className="col-sm-6 py-2"><h6>{about.sk} <span className="text-secondary">{about.ss}</span></h6></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default About;