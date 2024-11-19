import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect,useState } from "react";
import { Fade , Bounce, Flash, HeadShake} from "react-awesome-reveal";
const Header = () => {
    const [header, setHeader ] = useState ({})
    useEffect (() => {
        const db = getDatabase();
        const headerRef = ref(db, "header");
        onValue(headerRef, (snapshot) => {
            const data = snapshot.val();
            setHeader(data);
        });
    }, []);
    return (
      <Bounce>
        <div className="container-fluid bg-primary d-flex align-items-center mb-5 py-5" id="home" style={{minHeight: '100vh'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
              <img className="img-fluid w-100 rounded-circle shadow-sm" src={header.img1|| ""} alt />
            </div>
            <div className="col-lg-7 text-center text-lg-left">
              <h2 className="display text-uppercase text-primary mb-2" style={{WebkitTextStroke: '2px #000000'}}>{header.title2}</h2>
              <h1 className="display-2 text-uppercase text-primary mb-2" style={{WebkitTextStroke: '4px #000000'}}>{header.title1}</h1>
              <h3 className="text-white font-weight-normal mb-2" style={{WebkitTextStroke: '3px #00000'}}> {header.title3}</h3>
            </div>
          </div>
        </div>
      </div>
      </Bounce>
    )
}

export default Header;