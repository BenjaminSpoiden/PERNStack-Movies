import { useRouter } from "next/dist/client/router";
import { useMeQuery } from "../generated/graphql";

const useGetIntId = () => {
  const router = useRouter();
  
  const intId = typeof router.query.id === "string" ? parseInt(router.query.id) : -1;
  return intId;
};

export const useGetCart = () => {
    const id = useGetIntId()
    return useMeQuery({
        skip: id === -1
    })
}