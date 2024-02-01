import { useMutation, useQueryClient } from "react-query";
import { PostModerationReq, postModeration } from ".";

export const usePostModeration = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: PostModerationReq) => postModeration(data),
    onSuccess: () => {
      queryClient.invalidateQueries("moderations");
    },
  });

  return mutation;
};
