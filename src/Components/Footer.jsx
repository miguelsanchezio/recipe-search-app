import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='py-8 text-center'>
      <p>
        Built by{" "}
        <Link to='https://miguelsanchez.io' className='font-bold text-salmon'>
          Miguel
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
