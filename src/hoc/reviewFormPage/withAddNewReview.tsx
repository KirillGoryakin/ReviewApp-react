import { Review } from "appTypes";
import { useAppDispatch } from "hooks/app";
import { useTranslate } from "hooks/useTranslate";
import { useState } from "react";
import { useNavigate } from "react-router";
import { addReview } from "store/slices/reviewsSlice";

type InjectedProps = {
  review: Review;
  setReview: (newReview: Review) => void;
  handleClick: () => void;
  buttonText: string;
};

const withAddNewReview =
  <P extends InjectedProps>(Component: React.ComponentType<P>) => {
  return (props: P) => {
    const { __ } = useTranslate();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const initialReview = {
      id: 0,
      title: '',
      body: '',
      imageUrl: '',
      date: new Date(Date.now()).toISOString(),
      tags: [],
      folder: '',
      score: 0
    };

    const [review, setReview] = useState(initialReview);

    const handleClick = () => {
      if(review.title.trim().length){
        dispatch(addReview(review));
        navigate('/');
      }
    };

    return (
      <Component
        {...props}
        review={review}
        setReview={setReview}
        handleClick={handleClick}
        buttonText={__("addReviewPage.button")}
      />
    );
  }
}

export { withAddNewReview };