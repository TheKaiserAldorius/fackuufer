import './CasesPage.scss';

// Импорт изображений кейсов
import CakeCaseImg     from '../assets/CaseItems/CakeCase.png';
import EggCaseImg      from '../assets/CaseItems/EggCase.png';
import TopHeadCaseImg  from '../assets/CaseItems/TopHeadCase.png';
import SkeletonCaseImg from '../assets/CaseItems/SceletonCase.png';
import JackboxCaseImg  from '../assets/CaseItems/JackboxCase.png';
import RingCaseImg     from '../assets/CaseItems/RingCase.png';

// Импорт иконки звёздочки
import starIcon from '../assets/buttonsicons/StarTg.png';

const casesList = [
  { img: EggCaseImg,      price: 30 },
  { img: JackboxCaseImg,  price: 30 },
  { img: CakeCaseImg,     price: 30 },
  { img: TopHeadCaseImg,  price: 60 },
  { img: SkeletonCaseImg, price: 30 },
  { img: RingCaseImg,     price: 30 },
];

const CasesPage = () => (
  <div className="cases-page">
    <div className="cases-grid">
      {casesList.map((c, i) => (
        <div
          key={i}
          className="case-card"
          style={{ backgroundImage: `url(${c.img})` }}
        >
          <div className="case-footer">
            <img src={starIcon} alt="звезда" className="case-star-icon" />
            <span className="case-price">{c.price}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CasesPage;
