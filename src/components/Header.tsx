import { User, Star, Plus } from "lucide-react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__profile">
        <User size={28} />
      </div>
      <div className="header__balance">
        <button className="balance-button">
          <Star size={22} />
          <Plus size={16} className="plus-icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
