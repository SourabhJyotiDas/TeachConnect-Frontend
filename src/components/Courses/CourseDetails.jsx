import React, { useEffect } from "react";
import IntroVideo from "../layouts/IntroVideo";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getCourseLectures } from "../../redux/actions/course";
import { toast } from "react-toastify";
import Loading from "../layouts/Loading";

export default function CourseDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { user } = useSelector((state) => state.user);
  const { lectures, loading } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(getCourseLectures(params.id));
  }, [dispatch, params.id]);

  if (
    user.role !== "admin" &&
    (user.subscription === undefined || user.subscription.status !== "active")
  ) {
    return <Navigate to={"/subscribe"} />;
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <IntroVideo video={""} />
          {lectures?.map((ele,index)=>(
            <div key={index}>

            </div>
          ))}
        </div>
      )}
    </>
  );
}
