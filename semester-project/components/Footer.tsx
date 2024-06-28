import Logo from "@/components/Logo";
import Icons from "@/components/Icons";
import Link from 'next/link';
import './Footer.css';

type TitleProps = {
  children: string;
};

type ListProps = {
  title: string;
  items: { label: string; href: string }[];
};

const FooterListTitle = ({ children }: TitleProps) => (
  <div className="footer-title">
    {children}
  </div>
);

const FooterList = ({ title, items }: ListProps) => {
  return (
    <div className="footer-column">
      <FooterListTitle>{title}</FooterListTitle>
      <ul className="footer-list">
        {items.map((item, index) => (
          <li key={index} className="footer-list-item">
            <Link href={item.href}>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => (
  <div className="footer-container">
    <div className="footer-inner-container">
      <div className="footer-columns">
        
        <FooterList
          title="Usluge"
          items={[
            { label: "Atrakcije", href: "/usluge" },
            { label: "Aktivnosti", href: "/usluge" },
          ]}
        />

        <FooterList
          title="CityScape station"
          items={[
            { label: "O nama", href: "/" },
            { label: "Recenzije i osvrti", href: "/" },
            { label: "Usluge", href: "/usluge" },
          ]}
        />

        <div className="footer-column">
          <FooterListTitle>Kontaktiraj nas!</FooterListTitle>
          <div className="footer-icons">
            <Icons.facebook className="footer-icon" />
            <Icons.twitter className="footer-icon" />
            <Icons.linked className="footer-icon" />
            <Icons.instagram className="footer-icon" />
          </div>
        </div>
      </div>
      <p className="footer-copyright">
        Copyright @ 2024 FESB. All rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
