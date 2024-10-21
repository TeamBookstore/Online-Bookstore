import { Link } from 'react-router-dom';
import Logo from '../../Assets/images/bookstoreLogo.png';

const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">Find the perfect <b>BOOK</b> for every moment</p>
          </div>
        </div>
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="logoWrapper d-flex align-items-center col-sm-2">
                        <Link to={'/'}><img src={Logo} alt='Logo'/></Link>
                    </div>

                    <div> 
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;
