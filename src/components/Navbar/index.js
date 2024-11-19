import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect,useState } from "react";

const Navbar = () => {
    const [navbar, setNavbar ] = useState ({})
    useEffect (() => {
        const db = getDatabase();
        const navbarRef = ref(db, "navbar");
        onValue(navbarRef, (snapshot) => {
            const data = snapshot.val();
            setNavbar(data);
        });
    }, []);
    return (
        <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
        <a href="index.html" className="navbar-brand ml-lg-3">
          <h1 className="m-0 display-5"><span className="text-primary">{navbar.lg}</span>{navbar.lg1}</h1>
        </a>   
        <div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
          <div className="navbar-nav m-auto py-0">
            <a href="#home" className="nav-item nav-link active">{navbar.hm}</a>
            <a href="#about" className="nav-item nav-link active">{navbar.a}</a>
            <a href="#qualification" className="nav-item nav-link active">{navbar.qs}</a>
            <a href="#portfolio" className="nav-item nav-link active">{navbar.p}</a>    
          </div>
        </div>
      </nav>
    )
}

export default Navbar; 