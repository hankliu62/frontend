import { Octokit } from "octokit";

import {
  GithubAccessToken,
  GitHubApiVersion,
  GithubOwner,
  GithubRepo,
} from "@/constants/backend";
import { TLabel } from "@/interfaces/questions";

const auth = GithubAccessToken.join("");

/**
 * 根据获取所有的标签
 *
 * @param {*} page
 * @returns
 */
export const fetchLabels = async (
  page?: number,
  options = {}
): Promise<TLabel[]> => {
  const octokit = new Octokit({
    auth: auth,
  });

  const res = await octokit.request(
    `GET /repos/${GithubOwner}/${GithubRepo}/labels`,
    {
      owner: GithubOwner,
      repo: GithubRepo,
      per_page: 100,
      page: page || 1,
      headers: {
        "X-GitHub-Api-Version": GitHubApiVersion,
      },
      ...options,
    }
  );

  // 请求成功
  if (res.status === 200) {
    return res.data;
  } else {
    throw res;
  }
};
