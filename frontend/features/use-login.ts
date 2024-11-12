"use client";
import { toast } from "@/hooks/use-toast";
import { loginMutationFn } from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useLogin = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: loginMutationFn,
    onSuccess: (response) => {
      console.log(response);
      queryClient.invalidateQueries({ queryKey: ["documents"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  return mutation;
};

export default useLogin;
