// SSG 不允许使用Node服务
import fetch from "isomorphic-fetch";
import { NextApiRequest, NextApiResponse } from "next";

import {
  GithubApi,
  GitHubApiVersion,
  GithubFrontendToken,
  GithubOwner,
} from "@/constants/backend";
import { IIssue } from "@/interfaces/questions";

const auth = GithubFrontendToken.join("");

// API路由处理函数
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IIssue[]>
) {
  const { query, method } = req;
  const { repo, page, ...options } = query;

  switch (method) {
    case "GET": {
      try {
        let url = `${GithubApi}/repos/${GithubOwner}/${repo}/issues`;

        // 添加参数
        url += `?creator=${GithubOwner}&per_page=10&page=${page || 1}`;

        for (const key in options) {
          if (Object.prototype.hasOwnProperty.call(options, key)) {
            url += `&${key}=${options[key]}`;
          }
        }

        const issues: IIssue[] = await fetch(url, {
          headers: {
            "X-GitHub-Api-Version": GitHubApiVersion,
            Authorization: `Bearer ${auth}`,
          },
        }).then((response) => response.json());

        // 返回获取的数据
        res.status(200).json(issues);
        break;
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).end("Internal Server Error");
      }
    }
    default: {
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
}
