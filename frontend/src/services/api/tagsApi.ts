import { TagsState } from "../../store/ducks/tags/contracts/state";
import axios from "axios";

export const TagsApi = {
  async fetchTags(): Promise<TagsState["items"]> {
    return await axios.get("/tags").then(({ data }) => data);
  },
};
