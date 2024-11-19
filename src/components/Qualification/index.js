import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect,useState } from "react";
const Qualification = () => {
        const [qualification, setQualification ] = useState ({})
        useEffect (() => {
            const db = getDatabase();
            const qualificationRef = ref(db, "qualification");
            onValue(qualificationRef, (snapshot) => {
                const data = snapshot.val();
                setQualification(data);
            });
        }, []);
    return (
        <div className="container-fluid py-5" id="qualification">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke: '1px #dee2e6'}}>{qualification.q}</h1>
            <h1 className="position-absolute text-uppercase text-primary">{qualification.e} &amp; {qualification.p}</h1>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="mb-4">{qualification.me}</h3>
              <div className="border-left border-primary pt-2 pl-4 ml-2">
                <div className="position-relative mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{top: 2, left: '-32px'}} />
                  <h5 className="font-weight-bold mb-1">{qualification.taa}</h5>
                  <p className="mb-2"><strong>{qualification.tp}</strong> | <small>{qualification.thn1}</small></p>
                </div>
                <div className="position-relative mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{top: 2, left: '-32px'}} />
                  <h5 className="font-weight-bold mb-1">{qualification.ea}</h5>
                  <p className="mb-2"><strong>{qualification.tp}</strong> | <small>{qualification.thn2}</small></p>
                </div>
                <div className="position-relative mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{top: 2, left: '-32px'}} />
                  <h5 className="font-weight-bold mb-1">{qualification.ja}</h5>
                  <p className="mb-2"><strong>{qualification.tp}</strong> | <small>{qualification.thn3}</small></p>
                </div>
                <div className="position-relative mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{top: 2, left: '-32px'}} />
                  <h5 className="font-weight-bold mb-1">{qualification.sa}</h5>
                  <p className="mb-2"><strong>{qualification.tp}</strong> | <small>{qualification.thn4}</small></p>
                </div>
                <div className="position-relative mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{top: 2, left: '-32px'}} />
                  <h5 className="font-weight-bold mb-1">{qualification.ku}</h5>
                  <p className="mb-2"><strong>{qualification.ns}</strong> | <small>{qualification.thn5}</small></p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="mb-4">{qualification.me}</h3>
              <div className="border-left border-primary pt-2 pl-4 ml-2">
                <div className="position-relative mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{top: 2, left: '-32px'}} />
                  <h5 className="font-weight-bold mb-1">{qualification.dc}</h5>
                  <p className="mb-2"><strong>{qualification.c}</strong> | <small>{qualification.th1}</small></p>
                </div>
                <div className="position-relative mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{top: 2, left: '-32px'}} />
                  <h5 className="font-weight-bold mb-1">{qualification.vocs}</h5>
                  <p className="mb-2"><strong>{qualification.da}</strong> | <small>{qualification.th1}</small></p>
                </div>
                <div className="position-relative mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{top: 2, left: '-32px'}} />
                  <h5 className="font-weight-bold mb-1">{qualification.eo}</h5>
                  <p className="mb-2"><strong>{qualification.ku}</strong> | <small>{qualification.th1}</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Qualification;