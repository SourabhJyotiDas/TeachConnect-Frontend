import React, { useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../layouts/Loading";
import moment from "moment";
import PlaylistCard from "./PlaylistCard";
import { cancelSubscription, loadUser } from "../../redux/actions/user";
import { toast } from "react-toastify";

export default function Profile() {
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.user);
  const { error, message } = useSelector((state) => state.profile);
  const { loading: subsLoading } = useSelector((state) => state.subscription);

  const cancelSubscriptionHandler = () => {
    dispatch(cancelSubscription());
  };

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        progress: undefined,
        theme: "dark",
      });
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        progress: undefined,
        theme: "dark",
      });
      dispatch(loadUser());
      dispatch({ type: "clearMessage" });
    }
    window.scroll(0, 0);
  }, [dispatch, error, message]);

  return (
    <>
      {loading || subsLoading ? (
        <Loading />
      ) : (
        <>
          {user && (
            <section className="text-gray-400 bg-gray-900 body-font flex flex-col space-y-5 items-center justify-center py-10">
              <img
                className="inline-block h-[100px] w-[100px] rounded-full bg-gradient-to-r from-pink-500 to-violet-500 p-1"
                src={user.avatar.url}
                alt={user.name}
              />
              <h3 className="text-2xl heading">Name : {user.name}</h3>
              <p>Email : {user.email}</p>
              <p className="para text-center">
                JoinedAT : {moment(user.createdAt).fromNow()}
              </p>
              {user.role !== "admin" && (
                <div className="flex items-center space-x-5">
                  <p>Subscription : </p>
                  {user.subscription &&
                  user.subscription.status === "active" ? (
                    <button
                      onClick={cancelSubscriptionHandler}
                      className="bg-red-400 text-white py-1 px-3 heading hover:bg-green-600">
                      Cancel Subscription
                    </button>
                  ) : 
                      <button className="bg-green-500 text-white py-1 px-3 heading hover:bg-green-600">
                        Subscribed
                      </button>
                  }
                </div>
              )}
              <div className="flex items-center justify-evenly w-full">
                {user && user.role === "admin" ? (
                  <>
                    <Link to={"/admin/dashboard"}>
                      <button className="text-white bg-purple-500 border-0 py-1 px-3 focus:outline-none hover:bg-purple-600 rounded flex items-center heading">
                        <FiSettings className="mx-2" />
                        Admin
                      </button>
                    </Link>
                  </>
                ) : null}
                <Link to={"/settings"}>
                  <button className="text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded  flex items-center heading">
                    <FiSettings className="mx-2" />
                    Profile
                  </button>
                </Link>
              </div>
              {user.playlist.length === 0 ? (
                <></>
              ) : (
                <div className="pt-10">
                  <p className="text-center text-xl para underline">Your  Playlist</p>
                  <div className="flex flex-wrap items-center">
                    {user.playlist?.map((ele, index) => (
                      <PlaylistCard key={index} data={ele} />
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}
        </>
      )}
    </>
  );
}
