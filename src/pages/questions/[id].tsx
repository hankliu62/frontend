import { BranchesOutlined } from "@ant-design/icons";
import { Affix, Card, Collapse, Space, Tag } from "antd";
import classNames from "classnames";
import Dayjs from "dayjs";
import { InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";
import ErrorPage from "next/error";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";

import MarkdownPreview from "@/components/MarkdownPreview";
import { GithubOrigin, GithubOwner, GithubRepo } from "@/constants/backend";
import useAnchor from "@/hooks/useAnchor";
import {
  fetchAllIssuesByStaticProps,
  fetchIssueByStaticProps,
} from "@/lib/issues";

// const MarkdownPreview = dynamic(() => import("@uiw/react-markdown-preview"), {
//   ssr: false,
// });

interface IIssueMenu {
  id: string;
  title: string;
  text: string;
  href: string;
  prefixLength: number;
  minPrefixLength?: number;
  paddingLeft?: number;
}

/**
 * 面试题目
 *
 * @returns
 */
export default function PostPage({
  issue,
  menus,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  // 是否展开
  const [expanded, setExpanded] = useState<boolean>(true);

  const issueMenus = useMemo<IIssueMenu[]>(() => {
    let minPrefixLength = Number.MAX_VALUE;
    const items = [];
    for (const menu of menus) {
      const prefixLength = menu.replace(/^(#+)\s(.*)/, "$1").length;
      minPrefixLength = Math.min(prefixLength, minPrefixLength);
      const title = menu.replace(/^#+\s/, "");

      // ID需要特殊处理，生成的markdown中标题犹如下规则(不全，遇到就补充)：
      //  1. 英文字符大写 => 小写
      //  2. 空格 => 中划线
      //  3. 中文符号 => 删除
      const id = title
        .toLowerCase()
        .replace(/\s/g, "-")
        .replace(
          // eslint-disable-next-line unicorn/better-regex
          /[\u3002\uFF1F\uFF0C\uFF1A\u201C-\u201D\uFF08-\uFF09\u3001\uFF1B\uFF1A]/g,
          ""
        );
      items.push({
        id,
        text: menu,
        href: `#${id}`,
        title,
        prefixLength,
      });
    }

    return items.map((item) => ({
      ...item,
      minPrefixLength,
      paddingLeft: (item.prefixLength - minPrefixLength) * 16 + 16,
    }));
  }, [menus]);

  const currentSection = useAnchor(issueMenus);

  function isActive(section) {
    if (section.id === currentSection) {
      return true;
    }
    if (!section.children) {
      return false;
    }
    return section.children.findIndex((element) => isActive(element)) > -1;
  }

  if (!router.isFallback && !issue?.number) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className="flex space-x-6 bg-white p-6">
      <div className="flex-1">
        <Card className="article-card min-h-full !border-[#d9d9d9]">
          <article>
            <header>
              <h1 className="mb-5 text-4xl font-bold">{issue.title}</h1>
            </header>

            <section className="mb-12 flex items-center space-x-8">
              <Space
                key="list-vertical-id"
                onClick={(e) => {
                  e?.stopPropagation && e.stopPropagation();
                  e?.preventDefault && e.preventDefault();
                  window.open(
                    `${GithubOrigin}/${GithubOwner}/${GithubRepo}/issues/${issue?.number}`,
                    "_blank"
                  );
                }}
                className="group cursor-pointer"
              >
                <BranchesOutlined
                  className="group-hover:text-[#1171ee]"
                  rev={undefined}
                />
                <span className="group-hover:text-[#1171ee]">{`#${issue?.number}`}</span>
              </Space>

              <Space
                key="list-vertical-user"
                onClick={(e) => {
                  e?.stopPropagation && e.stopPropagation();
                  e?.preventDefault && e.preventDefault();
                  window.open(
                    `${GithubOrigin}/${issue?.assignee?.login}`,
                    "_blank"
                  );
                }}
                className="group cursor-pointer"
              >
                <span className="group-hover:text-sky-500">
                  {issue?.assignee?.login}
                </span>
              </Space>

              <Space>
                <span className="text-[#8a919f]">
                  {issue?.created_at &&
                    Dayjs(issue?.created_at).format("YYYY-MM-DD HH:mm:ss")}
                </span>
              </Space>

              <Space>
                <div className="flex items-center justify-start">
                  {(issue?.labels || []).map((label) => (
                    <Tag color={`#${label.color}`} key={label.id}>
                      {label.name}
                    </Tag>
                  ))}
                </div>
              </Space>
            </section>

            <section>
              <MarkdownPreview source={issue.body || ""} showLoading />
            </section>
          </article>
        </Card>
      </div>

      <div className="w-64 bg-white">
        <Affix offsetTop={60}>
          <Collapse
            className="question-menus-collapse"
            defaultActiveKey={["menu"]}
            onChange={(key) => {
              setExpanded(key.includes("labels"));
            }}
            expandIconPosition="end"
            items={[
              {
                key: "menu",
                label: <span className="text-base">目录</span>,
                children: (
                  <ul className="max-h-[520px] list-none space-y-3 overflow-y-auto text-slate-500 dark:text-slate-400">
                    {issueMenus.map((menu) => (
                      <li
                        key={menu.title}
                        id={menu.text}
                        className={classNames(
                          "border-0 !border-l-2 border-solid border-transparent pr-[16px] text-base",
                          {
                            "!border-sky-500": isActive(menu),
                          }
                        )}
                      >
                        <Link
                          href={menu.href}
                          className={classNames(
                            "w-full overflow-hidden !text-[#515767]",
                            isActive(menu)
                              ? "!text-sky-500"
                              : "!hover:text-slate-600 !dark:hover:text-slate-300"
                          )}
                        >
                          <div
                            className="truncate"
                            style={{
                              paddingLeft: `${menu.paddingLeft}px`,
                            }}
                          >
                            {menu.title}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ),
                extra: (
                  <div className="-mr-2">{expanded ? "收起" : "展开"}</div>
                ),
              },
            ]}
          />
        </Affix>
      </div>
    </div>
  );
}

type Params = {
  params: {
    id: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const issue = await fetchIssueByStaticProps(params.id);

  const menus = (issue.body || "")
    .split("\r\n")
    .filter((line) => line.startsWith("##"));

  return {
    props: {
      issue,
      menus,
    },
  };
}

export async function getStaticPaths() {
  const issus = await fetchAllIssuesByStaticProps();

  return {
    paths: issus.map((item) => {
      return {
        params: {
          id: `${item.number}`,
        },
      };
    }),
    fallback: false,
  };
}
