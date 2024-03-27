import fetch from "isomorphic-fetch";

import {
  GithubApi,
  GitHubApiVersion,
  GithubBackendToken,
  GithubFrontendToken,
  GithubOwner,
} from "@/constants/backend";
import { IIssue } from "@/interfaces/questions";

const auth = GithubFrontendToken.join("");

/**
 * 前端获取问题列表
 *
 * @param page
 * @param options
 * @returns
 */
export const fetchIssues = async (
  repo: string,
  page: number,
  options = {}
): Promise<IIssue[]> => {
  let url = `${GithubApi}/repos/${GithubOwner}/${repo}/issues`;

  console.log(GithubFrontendToken, GithubBackendToken, "----------------");
  // 添加参数
  url += `?creator=${GithubOwner}&per_page=10&page=${page || 1}`;

  for (const key in options) {
    if (Object.prototype.hasOwnProperty.call(options, key)) {
      url += `&${key}=${options[key]}`;
    }
  }

  return fetch(url, {
    headers: {
      "X-GitHub-Api-Version": GitHubApiVersion,
      Authorization: `Bearer ${auth}`,
    },
  }).then((response) => response.json());
};
