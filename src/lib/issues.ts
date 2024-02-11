import fetch from "isomorphic-fetch";
import { Octokit } from "octokit";

import {
  GithubAccessToken,
  GithubApi,
  GitHubApiVersion,
  GithubOwner,
  GithubRepo,
} from "@/constants/backend";
import { TIssue } from "@/interfaces/questions";

const auth = GithubAccessToken.join("");

/**
 * 根据分页获取数据
 *
 * @param {*} page
 * @returns
 */
export const fetchIssueByStaticProps = async (
  issueNumber: string
): Promise<TIssue> => {
  const octokit = new Octokit({
    auth: auth,
  });

  const res = await octokit.request(
    `GET /repos/${GithubOwner}/${GithubRepo}/issues/${issueNumber}`,
    {
      owner: GithubOwner,
      repo: GithubRepo,
      issue_number: +issueNumber,
      headers: {
        "X-GitHub-Api-Version": GitHubApiVersion,
      },
    }
  );

  // 请求成功
  if (res.status === 200) {
    return res.data;
  } else {
    throw res;
  }
};

/**
 * 根据分页获取数据
 *
 * @param {*} page
 * @returns
 */
export const fetchIssuesByStaticProps = async (
  page?,
  options = {}
): Promise<TIssue[]> => {
  const octokit = new Octokit({
    auth: auth,
  });

  const res = await octokit.request(
    `GET /repos/${GithubOwner}/${GithubRepo}/issues`,
    {
      owner: GithubOwner,
      repo: GithubRepo,
      labels: "interview questions",
      per_page: 30,
      page: page || 1,
      headers: {
        "X-GitHub-Api-Version": GitHubApiVersion,
      },
      direction: "asc",
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

/**
 * 获取所有问题
 * @returns
 */
export const fetchAllIssuesByStaticProps = async (options = {}) => {
  return new Promise<TIssue[]>((resolve, reject) => {
    // 问题列表
    const questions: TIssue[] = [];
    let page = 1;
    async function loopFetchIssue() {
      const currentQuestions = await fetchIssuesByStaticProps(page, options);
      if (currentQuestions.length > 0) {
        for (const question of currentQuestions) {
          questions.push(question);
        }
        page++;
        setTimeout(loopFetchIssue, 100);
      } else {
        resolve(questions);
      }
    }

    loopFetchIssue();
  });
};

/**
 * 前端获取问题列表
 *
 * @param page
 * @param options
 * @returns
 */
export const fetchIssues = async (page?, options = {}): Promise<TIssue[]> => {
  let url = `${GithubApi}/repos/${GithubOwner}/${GithubRepo}/issues`;

  // 添加参数
  url += `?creator=${GithubOwner}&per_page=30&page=${page || 1}`;

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
