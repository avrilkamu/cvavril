import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect,useState } from "react";
const Skill = () => {
    const [skill, setSkill] = useState ({})
    useEffect (() => {
        const db = getDatabase();
        const skillRef = ref(db, "skill");
        onValue(skillRef, (snapshot) => {
            const data = snapshot.val();
            setSkill(data);
        });
    }, []);
    return (
        <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 text-center mx-auto">
              <h2 className="mb-5">{skill.title}</h2>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="featured-block d-flex justify-content-center align-items-center">
                <a className="d-block">
                  <img src={skill.imghtml|| ""} className="featured-block-image img-fluid" alt />
                  <p className="featured-block-text"> <strong>{skill.html}</strong></p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
              <div className="featured-block d-flex justify-content-center align-items-center">
                <a href="donate.html" className="d-block">
                  <img src={skill.imgcss|| ""} className="featured-block-image img-fluid" alt />
                  <p className="featured-block-text">{skill.css} </p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
              <div className="featured-block d-flex justify-content-center align-items-center">
                <a href="donate.html" className="d-block">
                  <img src={skill.imgjs|| ""}className="featured-block-image img-fluid" alt />
                  <p className="featured-block-text"> <strong>{skill.js}</strong></p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="featured-block d-flex justify-content-center align-items-center">
                <a href="donate.html" className="d-block">
                  <img src={skill.imgf|| ""} className="featured-block-image img-fluid" alt />
                  <p className="featured-block-text">{skill.f} </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Skill; 