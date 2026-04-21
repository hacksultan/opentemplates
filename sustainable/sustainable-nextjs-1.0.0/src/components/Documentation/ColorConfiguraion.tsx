export const ColorConfiguration = () => {
    return (
        <>
            <h3 className=" text-black text-xl font-semibold mt-8 dark:text-white" >Colors</h3>
            <div className="p-6 rounded-md border mt-4 border-BorderLine dark:border-dark_border border-solid">
                <p className="text-base font-medium text-SlateBlue dark:text-darktext" ><span className="font-semibold text-lg"><span className="text-black dark:text-white" >1. Override Colors</span></span> <br />
                    For any change in colors : src/utils/globals.css</p>
                <div className="py-4 px-5 rounded-md bg-black mt-8">
                    <p className="text-sm text-BorderLine flex flex-col gap-2">
                        <span>--color-primary: #1358d8;</span>
                        <span>--color-darkprimary: #054ac8;</span>
                        <span>--color-lightPrimary: #3187f4;</span>
                        <span>--color-secondary: #102c46;</span>
                        <span>--color-SlateBlue: #547593;</span>
                        <span>--color-AliceBlue: #f3f9fd;</span>
                        <span>--color-LightApricot: #f9c78f;</span>
                        <span>--color-border: #233d55;</span>
                        <span>--color-BorderLine: #ccd7e1;</span>
                        <span>--color-darkmode: #021526;</span>
                        <span>--color-darklight: #061b2e;</span>
                        <span>--color-darktext: #7f8487;</span>
                        <span>--color-dark_border: #224767;</span>
                        <span>--color-Cream: #eee8a9;</span>
                        <span>--color-LavenderBlue: #dbe7ff;</span>
                        <span>--color-LightSoftBlue: #dbe9f6;</span>
                        <span>--color-gray: #acbcca;</span>

                    </p>
                </div>
            </div>
            <div className="p-6 rounded-md border mt-4 border-BorderLine dark:border-dark_border border-solid">
                <p className="text-base font-medium text-SlateBlue dark:text-darktext" ><span className="font-semibold text-lg text-black dark:text-white">2. Override Theme Colors</span> <br />
                    For change , go to : src/utils/globals.css</p>
                <div className="py-4 px-5 rounded-md bg-black mt-8">
                    <p className="text-sm text-BorderLine flex flex-col gap-2">
                        <span>--color-primary: #1358d8;</span>
                        <span>--color-secondary: #102c46;</span>
                    </p>
                </div>
            </div>
        </>
    )
}