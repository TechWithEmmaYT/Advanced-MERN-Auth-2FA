"use client";

import { useQuery } from "@tanstack/react-query";
import { authUserQueryFn } from "@/lib/api";

const useAuth = () => {
  const query = useQuery({
    queryKey: ["authUser"],
    queryFn: authUserQueryFn,
    // staleTime: 0,
    // refetchInterval: 20000,
  });
  return query;
};

export default useAuth;
