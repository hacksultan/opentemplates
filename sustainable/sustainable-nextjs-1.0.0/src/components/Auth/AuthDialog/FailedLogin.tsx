import SocialSignIn from "@/components/Auth/SocialSignIn"
import Logo from "@/components/Layout/Header/Logo"
import { Icon } from "@iconify/react/dist/iconify.js"
import Link from "next/link"



export const FailedLogin = () => {
    return (
        <>
        <div className="mb-10 text-center mx-auto inline-block bg-error p-3 rounded-md">
          <div className="flex item-center gap-4">
            <Icon icon="carbon:close-filled" className="text-xl bg-error" />
            <p className="text-sm font-medium">Failed! Logged in failed.</p>
          </div>
        </div>
      </>
    )
}