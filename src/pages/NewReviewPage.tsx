import { ReviewFormLayout } from "hoc/reviewFormPage/components/ReviewFormLayout";
import { withAddNewReview } from "hoc/reviewFormPage/withAddNewReview";

export const NewReviewPage = withAddNewReview(ReviewFormLayout);