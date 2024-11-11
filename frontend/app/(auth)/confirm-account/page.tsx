import { Button } from "@/components/ui/button";

export default function ComfirmAccount() {
  return (
    <main className="w-full min-h-[590px] h-full max-w-full flex items-center justify-center ">
      <div className="w-full h-full p-5 rounded-md border shadow">
        <div className="size-[40px] rounded-lg  flex items-center border-2 dark:border-gray-200 justify-center  bg-gradient-to-br from-gray-500 to-black to-90% ">
          <div className="font-bold text-gray-50 text-2xl">S</div>
        </div>
        <h1
          className="text-xl tracking-[-0.16px] dark:text-[#fcfdffef] font-bold mb-4 mt-8
        text-center sm:text-left"
        >
          Account confirmation
        </h1>
        <p className="mb-6 text-center sm:text-left text-[15px] dark:text-[#f1f7feb5] font-normal">
          To confirm your account, please follow the button below.
        </p>
        <form>
          <Button className="w-full text-[15px] h-[40px] text-white font-semibold">
            Confirm account
          </Button>
        </form>

        <p className="mt-6 text-sm text-muted-foreground dark:text-[#f1f7feb5] font-normal">
          If you have any issue confirming your account please, contact{" "}
          <a
            className="outline-none transition duration-150 ease-in-out 
            focus-visible:ring-2 text-primary hover:underline focus-visible:ring-primary"
            href="#"
          >
            support@resend.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}
