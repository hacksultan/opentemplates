export const TypographyConfiguration = () => {
    return (
        <>
            <h3 className=" text-black text-xl font-semibold mt-8 dark:text-white" >Typography</h3>
            <div className="p-6 rounded-md border mt-4 border-BorderLine dark:border-dark_border border-solid">
                <p className="text-base font-medium text-SlateBlue dark:text-darktext" >1. Change Font family over here : <span className="font-semibold text-base">src/app/layout.tsx</span>  </p>
                <div className="py-4 px-3 rounded-md bg-black mt-8">
                    <p className="text-sm text-BorderLine flex flex-col gap-2 mb-3">
                    {`import { DM_Sans } from "next/font/google";`}
                    </p>
                    <p className="text-sm text-BorderLine flex flex-col gap-2">
                    {`const dmsans = DM_Sans({ subsets: ["latin"] });`}
                    </p>
                </div>
            </div>
        </>
    )
}