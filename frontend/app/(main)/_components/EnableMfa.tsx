"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

const EnableMfa = () => {
  const FormSchema = z.object({
    pin: z.string().min(6, {
      message: "Your one-time password must be 6 characters.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {}

  return (
    <div className="via-root to-root rounded-xl bg-gradient-to-r p-0.5">
      <div className="rounded-[10px] p-6">
        <h3 className="text-xl tracking-[-0.16px] text-slate-12 font-bold mb-1">
          Multi-Factor Authentication (MFA)
        </h3>
        <p className="mb-6 text-sm text-[#0007149f] dark:text-gray-100 font-normal">
          Protect your account by adding an extra layer of security.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="h-[40px] text-white">Enable MFA</Button>
          </DialogTrigger>
          <DialogContent className="!gap-0">
            <DialogHeader>
              <DialogTitle className="text-[17px] text-slate-12 font-semibold">
                Setup Multi-Factor Authentication
              </DialogTitle>
            </DialogHeader>
            <div className="">
              <p className="mt-6 text-sm text-[#0007149f] dark:text-inherit font-bold">
                Scan the QR code
              </p>
              <span className="text-sm text-[#0007149f] dark:text-inherit font-normal">
                Use an app like{" "}
                <a
                  className="!text-primary underline decoration-primary decoration-1 underline-offset-2 transition duration-200 ease-in-out hover:decoration-blue-11 dark:text-current dark:decoration-slate-9 dark:hover:decoration-current "
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://support.1password.com/one-time-passwords/"
                >
                  1Password
                </a>{" "}
                or{" "}
                <a
                  className="!text-primary underline decoration-primary decoration-1 underline-offset-2 transition duration-200 ease-in-out hover:decoration-blue-11 dark:text-current dark:decoration-slate-9 dark:hover:decoration-current "
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://safety.google/authentication/"
                >
                  Google Authenticator
                </a>{" "}
                to scan the QR code below.
              </span>
            </div>
            <div className="mt-4 flex flex-row items-center gap-4">
              <div className="rounded-md border p-2  border-[#0009321f] dark:border-gray-600 bg-white">
                <img
                  alt="QR code"
                  decoding="async"
                  width="160"
                  height="160"
                  className="rounded-md"
                />
              </div>
              <span className="text-sm text-[#0007149f] dark:text-muted-foreground font-normal">
                Can't scan the code?
                <button
                  className="block text-primary transition duration-200 ease-in-out hover:underline
                   dark:text-white"
                  type="button"
                >
                  View the Setup Key
                </button>
              </span>
            </div>

            <div className="mt-8 border-t">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-full mt-6  flex flex-col  gap-4 "
                >
                  <FormField
                    control={form.control}
                    name="pin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm mb-1 text-slate-11 font-bold">
                          Then enter the code
                        </FormLabel>
                        <FormControl>
                          <InputOTP
                            className="!text-lg"
                            maxLength={6}
                            pattern={REGEXP_ONLY_DIGITS}
                            {...field}
                          >
                            <InputOTPGroup>
                              <InputOTPSlot
                                index={0}
                                className="!w-14 !h-12 !text-lg"
                              />
                              <InputOTPSlot
                                index={1}
                                className="!w-14 !h-12 !text-lg"
                              />
                            </InputOTPGroup>
                            <InputOTPGroup>
                              <InputOTPSlot
                                index={2}
                                className="!w-14 !h-12 !text-lg"
                              />
                              <InputOTPSlot
                                index={3}
                                className="!w-14 !h-12 !text-lg"
                              />
                            </InputOTPGroup>
                            <InputOTPGroup>
                              <InputOTPSlot
                                index={4}
                                className="!w-14 !h-12 !text-lg"
                              />
                              <InputOTPSlot
                                index={5}
                                className="!w-14 !h-12 !text-lg"
                              />
                            </InputOTPGroup>
                          </InputOTP>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button className="w-full h-[40px]">Verify</Button>
                </form>
              </Form>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EnableMfa;
