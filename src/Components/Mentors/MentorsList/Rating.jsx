/* eslint-disable react/prop-types */
import star from '../../../assets/images/mentors/Star.svg';

const Rating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(<img key={i} src={star} alt={`Star ${i}`} />);
    }
    return stars;
  };

  return <div className="rating flex">{renderStars()}</div>;
};

export default Rating;
