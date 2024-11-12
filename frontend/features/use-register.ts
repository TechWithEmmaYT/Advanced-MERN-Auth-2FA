"use client";
import { toast } from "@/hooks/use-toast";
import { registerMutationFn } from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useRegister = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: registerMutationFn,
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

export default useRegister;
