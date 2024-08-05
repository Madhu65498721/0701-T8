import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => (
  <div className="navbar">
    <div className="navbar-left">
      <Link href="#">
        <a className="logo">
          <Image src="/images/Logo.jpg" alt="Logo" width={100} height={50} />
        </a>
      </Link>
    </div>
    <ul className="nav-links">
      <li><Link href="#home">Home</Link></li>
      <li><Link href="#services">Service</Link></li>
      <li><Link href="#process">Process</Link></li>
      <li><Link href="#testimonial">Testimonial</Link></li>
      <li><Link href="#portfolio">Portfolio</Link></li>
      <li><Link href="#pricing">Pricing</Link></li>
      <li><Link href="#blog">Blog</Link></li>
      <li><Link href="#contact">Contact</Link></li>
    </ul>
  </div>
);

export default Navbar;
