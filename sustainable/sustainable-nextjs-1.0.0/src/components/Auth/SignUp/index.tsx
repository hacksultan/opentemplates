"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SocialSignUp from "../SocialSignUp";
import Logo from "@/components/Layout/Header/Logo"
import { useContext, useState } from "react";
import Loader from "@/components/Common/Loader";
import AuthDialogContext from "@/app/context/AuthDialogContext";
const SignUp = ({signUpOpen}:{signUpOpen?:any}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const authDialog = useContext(AuthDialogContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setLoading(true);
    const data = new FormData(e.currentTarget);
    const value = Object.fromEntries(data.entries());
    const finalData = { ...value };

    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully registered");
        setLoading(false);
        router.push("/");
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
      setTimeout(() => {
        signUpOpen(false);
      }, 1200);
      authDialog?.setIsUserRegistered(true);

      setTimeout(() => {
        authDialog?.setIsUserRegistered(false);
      }, 1100);

  };

  return (
    <>
      <div className="mb-10 text-center mx-auto inline-block max-w-[160px]">
        <Logo />
      </div>

      <SocialSignUp />

      <span className="z-1 relative my-8 block text-center">
        <span className="-z-1 absolute left-0 top-1/2 block h-px w-full bg-BorderLine dark:bg-dark_border"></span>
        <span className="text-body-secondary relative z-10 inline-block bg-white dark:bg-darklight px-3 text-base dark:bg-dark">
          OR
        </span>
      </span>

      <form onSubmit={handleSubmit}>
        <div className="mb-[22px]">
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            className="w-full rounded-md border border-BorderLine dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-gray-300 focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="w-full rounded-md border border-BorderLine dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-gray-300 focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="text"
            placeholder="Password"
            name="password"
            required
            className="w-full rounded-md border border-BorderLine dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-gray-300 focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-9">
          <button
            type="submit"
            className="flex w-full cursor-pointer items-center justify-center rounded-md bg-primary px-5 py-3 text-base text-white transition duration-300 ease-in-out hover:bg-darkprimary! dark:hover:bg-darkprimary!"
          >
            Sign Up {loading && <Loader />}
          </button>
        </div>
      </form>

      <p className="text-body-secondary mb-4 text-base">
        By creating an account you are agree with our{" "}
        <a href="/#" className="text-primary hover:underline">
          Privacy
        </a>{" "}
        and{" "}
        <a href="/#" className="text-primary hover:underline">
          Policy
        </a>
      </p>

      <p className="text-body-secondary text-base">
        Already have an account?
        <Link
          href="/"
          className="pl-2 text-primary hover:bg-darkprimary hover:underline"
        >
          Sign In
        </Link>
      </p>
    </>
  );
};

export default SignUp;
