"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import SocialSignIn from "../SocialSignIn";
import Logo from "@/components/Layout/Header/Logo"
import Loader from "@/components/Common/Loader";
import toast, { Toaster } from 'react-hot-toast';
import AuthDialogContext from "@/app/context/AuthDialogContext";


const Signin = ({signInOpen}:{signInOpen?:any}) => {
  const { data: session } = useSession();
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");
  const authDialog = useContext(AuthDialogContext);


  const handleSubmit = async (e: any) => {
    const notify = () => toast('Here is your toast.');
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });
    console.log(result);
    if (result?.error) {
      // Handle successful sign-in
      setError(result.error);
    }
    if(result?.status === 200){
       setTimeout(() => {
        signInOpen(false);
       }, 1200);
      authDialog?.setIsSuccessDialogOpen(true);
      setTimeout(() => {
        authDialog?.setIsSuccessDialogOpen(false);
      }, 1100);
    }else{
      authDialog?.setIsFailedDialogOpen(true);
      setTimeout(() => {
        authDialog?.setIsFailedDialogOpen(false);
      }, 1100);
    }
  };


  




  return (
    <>
      <div className="mb-10 text-center mx-auto inline-block max-w-[160px]">
        <Logo />
      </div>

      <SocialSignIn />

      <span className="z-1 relative my-8 block text-center">
        <span className="-z-1 absolute left-0 top-1/2 block h-px w-full bg-BorderLine dark:bg-dark_border"></span>
        <span className="text-body-secondary relative z-10 inline-block bg-white px-3 text-base dark:bg-secondary">
          OR
        </span>
        <Toaster />
      </span>

      <form onSubmit={handleSubmit}>
        <div className="mb-[22px]">
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-md border placeholder:text-gray-400  border-BorderLine dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition  focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="password"
            required
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-BorderLine dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition  focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-9">
          <button
            type="submit"
            className="flex w-full cursor-pointer items-center justify-center rounded-md border border-primary bg-primary hover:bg-darkprimary dark:hover:bg-darkprimary! px-5 py-3 text-base text-white transition duration-300 ease-in-out "
          >
            Sign In
            {/* {loading && <Loader />} */}
          </button>
      
        </div>
      </form>

      <Link
        href="/"
        className="mb-2 inline-block text-base text-dark hover:text-primary dark:text-white dark:hover:text-primary"
      >
        Forget Password?
      </Link>
      <p className="text-body-secondary text-base">
        Not a member yet?{" "}
        <Link href="/" className="text-primary hover:underline">
          Sign Up
        </Link>
      </p>
    </>
  );
};

export default Signin;