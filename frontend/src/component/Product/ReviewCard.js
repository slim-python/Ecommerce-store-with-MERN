import ReactStars from "react-rating-stars-component";
import React from "react";
import profilePng from "../../images/Profile.png";

const ReviewCard = ({ review }) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    value: review.rating,
    isHalf: true,
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 15 : 20,
  };
  let arr = [1, 2, 3, 4, 5];
  return (
    <div>
      <div className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
          <div className="flex items-center xl:col-span-1">
            <ReactStars {...options} />

            <p className="ml-3 text-sm text-gray-700">
              {review.rating} Star{" "}
              <span className="sr-only"> out of 5 stars</span>
            </p>
          </div>

          <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
            <h3 className="text-sm font-medium text-gray-900">Review:</h3>

            <div className="mt-3 space-y-6 text-sm text-gray-500">
              <p>{review.comment}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
          <p className="font-medium text-gray-900">{review.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
