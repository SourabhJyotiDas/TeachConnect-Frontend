import React, { useEffect, useState } from "react";
import { buySubscription } from "../../redux/actions/user";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../layouts/Loading";
import { toast } from "react-toastify";
import { server } from "../../redux/store";
import axios from "axios";

export default function Subscribe() {
  const dispatch = useDispatch();

  const [key, setKey] = useState("");

  const { user } = useSelector((state) => state.user);
  const { error: courseError } = useSelector((state) => state.course);
  const { loading, error, message, subscriptionId } = useSelector(
    (state) => state.subscription
  );

  const subscribeHandler = async () => {
    const {
      data: { key },
    } = await axios.get(`${server}/razorpaykey`);
    setKey(key);
    await dispatch(buySubscription());
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
    if (courseError) {
      toast.error(courseError);
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
      dispatch({ type: "clearMessage" });
    }

    if (subscriptionId) {
      const openPopup = () => {
        const options = {
          key,
          name: "TeachConnect",
          description: "Get access to all premium content",
          subscription_id: subscriptionId,
          callback_url: `http://localhost:4000/api/v1/paymentverification`,
          prefill: {
            name: user.name,
            email: user.email,
            contact: "",
          },
          notes: {
            address: "Nowhere",
          },
          theme: {
            color: "#FFC800",
          },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      };
      openPopup();
    }
    window.scroll(0, 0);
  }, [
    dispatch,
    error,
    courseError,
    message,
    user && user.name,
    user && user.email,
    key,
    subscriptionId,
  ]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
                Pricing
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center -m-4">
              <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                  <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                    POPULAR
                  </span>
                  <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
                    PRO
                  </h2>
                  <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                    <span>₹299</span>
                    <span className="text-lg ml-1 font-normal text-gray-400">
                      /only
                    </span>
                  </h1>
                  <p className="flex items-center text-gray-400 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Vexillologist pitchfork
                  </p>
                  <p className="flex items-center text-gray-400 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Tumeric plaid portland
                  </p>
                  <p className="flex items-center text-gray-400 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Hexagon neutra unicorn
                  </p>
                  <p className="flex items-center text-gray-400 mb-6">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Mixtape chillwave tumeric
                  </p>
                  <button
                    onClick={subscribeHandler}
                    className="heading flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
                    Lifetime Access
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-auto"
                      viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p className="text-xs text-gray-400 mt-3">
                    Literally you probably haven't heard of them jean shorts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
