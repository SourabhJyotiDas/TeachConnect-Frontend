import React, { useEffect, useState } from "react";
import { BiShow } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { resetPassword } from "../../redux/actions/profile";
import Loading from "../layouts/Loading";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState("password");

  const params = useParams();
  const navigate = useNavigate();

  const { loading, message, error } = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(resetPassword(params.token, password));
    navigate("/login");
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
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="text-gray-400 bg-gray-900 body-font ">
          <div className="container px-5 py-24 mx-auto flex justify-center items-center flex-wrap">
            <h3 className="text-4xl ">Reset Password</h3>
            <form
              onSubmit={submitHandler}
              className="flex flex-col justify-center items-start mt-10 w-full">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400 para">
                New Password
              </label>
              <div className="flex items-center w-full">
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type={show}
                  placeholder="abc@gmail.com"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out heading"
                />
                <BiShow
                  className="text-4xl"
                  onClick={() => {
                    setShow(show === "password" ? "text" : "password");
                  }}
                />
              </div>

              <button
                type="submit"
                className="text-white bg-purple-500 border-0 py-3 px-3 focus:outline-none hover:bg-purple-600 rounded flex items-center justify-center heading w-full my-3">
                Reset Password
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
}
