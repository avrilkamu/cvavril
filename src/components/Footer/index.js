import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect,useState } from "react";
const Footer = () => {
    const [footer, setFooter ] = useState ({})
    useEffect (() => {
        const db = getDatabase();
        const footerRef = ref(db, "footer");
        onValue(footerRef, (snapshot) => {
            const data = snapshot.val();
            setFooter(data);
        });
    }, []);
    return (
        <div className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="container text-center py-5">
          <div className="d-flex justify-content-center mb-4">
            <a className="btn btn-light btn-social mr-2" href="#"><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-light btn-social mr-2" href="#"><i className="fab fa-instagram" /></a>
            <a className="btn btn-light btn-social" href="#"><i className="fab fa-whatsapp" /></a>
          </div>

          <p className="m-0">{footer.id} <a className="text-white font-weight-bold" href="#">{footer.daak}</a>{footer.html}<a className="text-white font-weight-bold" href="https://htmlcodex.com">{footer.thn}</a>
          </p>
        </div>
      </div>     
    )
}
export default Footer ;