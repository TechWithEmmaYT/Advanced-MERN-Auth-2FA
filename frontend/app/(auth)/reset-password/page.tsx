"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ResetPassword() {
  const formSchema = z.object({
    email: z.string().trim().email().min(1, {
      message: "Email is required",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {};

  return (
    <main className="w-full min-h-[590px] h-full max-w-full flex items-center justify-center ">
      <div className="w-full h-full p-5 rounded-md border shadow">
        <div className="size-[40px] rounded-lg  flex items-center border-2 dark:border-gray-200 justify-center  bg-gradient-to-br from-gray-500 to-black to-90% ">
          <div className="font-bold text-gray-50 text-2xl">S</div>
        </div>
        <h1
          className="text-xl tracking-[-0.16px] dark:text-[#fcfdffef] font-bold mb-1.5 mt-8
        text-center sm:text-left"
        >
          Reset password
        </h1>
        <p className="mb-6 text-center sm:text-left text-base dark:text-[#f1f7feb5] font-normal">
          Include the email address associated with your account and we’ll send
          you an email with instructions to reset your password.
        </p>
        <Form {...form}>
          <form
            className="flex flex-col gap-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="mb-0">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-[#f1f7feb5] text-sm">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="subscribeto@channel.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className="w-full text-[15px] h-[40px] text-white font-semibold">
              Send reset instructions
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
