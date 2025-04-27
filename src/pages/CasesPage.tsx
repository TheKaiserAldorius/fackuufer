import React from 'react';
import './CasesPage.scss';

// Импортируем изображения кейсов
import CakeCaseImg    from '../assets/case/CakeCase.png';
import EggCaseImg     from '../assets/case/EggCase.png';
import TopHeadCaseImg from '../assets/case/TopHeadCase.png';
import SkeletonCaseImg from '../assets/case/SceletonCase.png';
import JackboxCaseImg from '../assets/case/JackboxCase.png';
import RingCaseImg    from '../assets/case/RingCase.png';

// Импорт иконки звёздочки
import starIcon from '../assets/buttonsicons/StarTg.png';

const casesList = [
  { title: 'Easter Case',    img: EggCaseImg,      price: 30, new: false },
  { title: 'Jack Case',      img: JackboxCaseImg,  price: 30, new: true  },
  { title: 'Cake Case',      img: CakeCaseImg,     price: 30, new: true  },
  { title: 'Top Hat Case',   img: TopHeadCaseImg,  price: 60, new: true  },
  { title: 'Skeleton Case',  img: SkeletonCaseImg, price: 30, new: false },
  { title: 'Ring Case',      img: RingCaseImg,     price: 30, new: false },
];

const CasesPage = () => (
  <div className="cases-page">
    <div className="cases-grid">
      {casesList.map((c, i) => (
        <div key={i} className="case-card">
          <div className="case-header">
            <span className="case-title">{c.title}</span>
            {c.new && <span className="case-badge">Новый</span>}
          </div>
          <div className="case-image-wrapper">
            <img src={c.img} alt={c.title} className="case-image" />
          </div>
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
