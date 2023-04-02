import styles from "./styles.module.css";
import {Link} from 'react-router-dom'

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Plastic Waste Management</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className={styles.addedbtn}>
        <div>
          <Link to ="/dataprovider">
            {" "}
            <button type="button" style={styling} className="btn btn-info">
              Data Provider
            </button>
          </Link>
        </div>

        <div>
          <Link to ="/admin">
            <button type="button" style={styling} className="btn btn-info">
              Admin
            </button>
          </Link>
        </div>
        <div>
          <Link to="/financial">
            <button type="button" style={styling} className="btn btn-info">
              Financial Manager
            </button>
          </Link>
        </div>
        <div>
          <Link to="/researcher">
            <button type="button" style={styling} className="btn btn-info">
              Researcher
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
const styling = {
	marginBottom: "60%",
	marginTop: "4%"
}
export default Main;
