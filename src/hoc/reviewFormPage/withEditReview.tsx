import { Review } from "appTypes";
import { useAppDispatch, useAppSelector } from "hooks/app";
import { useTranslate } from "hooks/useTranslate";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { editReview } from "store/slices/reviewsSlice";

type InjectedProps = {
  review: Review;
  setReview: (newReview: Review) => void;
  handleClick: () => void;
  buttonText: string;
};

const withEditReview =
  <P extends InjectedProps>(Component: React.ComponentType<P>) => {
    return (props: P) => {
      const { __ } = useTranslate();
      
      const dispatch = useAppDispatch();
      const navigate = useNavigate();
      const { id } = useParams();
      const reviews = useAppSelector(state => state.reviews.reviews);

      const initialReview = reviews.find(review => review.id === Number(id));

      if( initialReview === undefined)
        return <Navigate to='/' />;

      const [review, setReview] = useState({...initialReview});

      const handleClick = () => {
        if (review.title.trim().length) {
          dispatch(editReview(review));
          navigate('/');
        }
      };

      return (
        <Component
          {...props}
          review={review}
          setReview={setReview}
          handleClick={handleClick}
          buttonText={__("editReviewPage.button")}
        />
      );
    }
  }

export { withEditReview };