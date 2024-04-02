import { InteractionOutlined } from "@ant-design/icons";
import { Affix, Card, Collapse, Input } from "antd";
import classNames from "classnames";
import { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";

import Article from "@/components/Article";
import LoadMore from "@/components/LoadMore";
import { GithubBlogRepo } from "@/constants/backend";
import useAsyncEffect from "@/hooks/useAsyncEffect";
import { IIssue, ILabel } from "@/interfaces/questions";
import { fetchLabelsByStaticProps } from "@/lib/backend/labels";
import { searchIssues } from "@/lib/frontend/issues";

// 标签排序
const LabelOrders = {
  javascript: 1,
  html: 2,
  css: 3,
  react: 4,
  vue: 5,
  webpack: 6,
  typescript: 7,
  engine: 8,
  algorithm: 9,
  node: 10,
  mixture: 11,
  project: 12,
  handwritten: 13,
  visualization: 14,
  other: 15,
  "no answer": 16,
};

export default function Questions({
  labels,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  // 选择的Label
  const [selectedLabel, setSelectedLabel] = useState<string>(
    router.query.label as string
  );
  // 是否展开
  const [expanded, setExpanded] = useState<boolean>(true);
  // 是否正在获取面试题
  const [isFetching, setIsFetching] = useState<boolean>(false);
  // 是否获取完所有面试题
  const [isEnd, setIsEnd] = useState<boolean>(true);
  // 面试题列表
  const [articles, setArticles] = useState<IIssue[]>([]);
  // 分页-当前页数
  const [page, setPage] = useState<number>(1);
  // 搜索关键词
  const [searchKeyWord, setSearchKeyWord] = useState<string>();

  useAsyncEffect(async () => {
    getArticles(1, searchKeyWord, router.query.label as string);
  }, []);

  // 获取面试题
  const getArticles = async (
    page: number,
    keyword?: string,
    label?: string
  ) => {
    setIsFetching(true);
    if (page === 1) {
      setIsEnd(false);
    }
    console.log("fetch articles", page, label);
    const articles = await searchIssues(GithubBlogRepo, page, keyword, {
      labels: ["blog", label].filter(Boolean).join(","),
    });
    setIsFetching(false);
    setPage(page);
    // 首页
    if (page === 1) {
      setArticles(articles);
    } else {
      setArticles((pre) => [...pre, ...(articles || [])]);
    }

    if (articles?.length === 0) {
      setIsEnd(true);
    }
  };

  const onChangeLabel = useCallback(
    (label?: ILabel) => {
      setSelectedLabel(label?.name);
      getArticles(1, searchKeyWord, label?.name);
      const newQuery = label
        ? { ...router.query, label: label.name }
        : { ...router.query };

      if (!label) {
        delete newQuery.label;
      }

      // 重写路由并传递更新后的查询参数
      router.replace({
        pathname: router.pathname,
        query: newQuery,
      });
    },
    [router, searchKeyWord]
  );

  const onLoadMore = useCallback(() => {
    getArticles(page + 1, searchKeyWord, selectedLabel);
  }, [page, searchKeyWord, selectedLabel]);

  const onSearch = useCallback(
    (value) => {
      setSearchKeyWord(value);
      getArticles(1, value, selectedLabel);
    },
    [selectedLabel]
  );

  return (
    <div className="flex space-x-6 bg-white p-6">
      <div className="-mx-6 flex-1 space-y-8 overflow-hidden px-6">
        {(articles || []).map((article) => (
          <Card
            className="list-article-card cursor-pointer !border-[#d9d9d9] !p-6 shadow-md"
            key={article.id}
            onClick={() => {
              router.push({
                pathname: `${router.pathname}/${article.number}`,
              });
            }}
          >
            <Article key={article.id} article={article} />
          </Card>
        ))}

        <LoadMore
          className={classNames({ invisible: page === 1 })}
          disabled={isFetching}
          visible={!isEnd}
          onEnter={onLoadMore}
        />
      </div>
      <div className="w-64">
        <Affix offsetTop={24}>
          <Input.Search
            placeholder="输入关键词，按回车搜索"
            className="mb-4 w-full"
            onSearch={onSearch}
            size="large"
            allowClear
          />
          <Collapse
            className="articles-collapse"
            defaultActiveKey={["labels"]}
            onChange={(key) => {
              setExpanded(key.includes("labels"));
            }}
            expandIconPosition="end"
            items={[
              {
                key: "labels",
                label: (
                  <span
                    className="cursor-pointer text-base font-bold underline-offset-2 hover:text-[#1171ee] hover:underline"
                    onClick={(e) => {
                      e?.preventDefault && e.preventDefault();
                      e?.stopPropagation && e.stopPropagation();
                      // 清空选择的标签
                      onChangeLabel();
                    }}
                    aria-hidden="true"
                  >
                    标签
                  </span>
                ),
                children: (
                  <div className="max-h-[620px] overflow-y-auto p-[16px]">
                    {(labels || []).map((item) => (
                      <div
                        className={classNames(
                          "group flex space-x-4 rounded-md p-2 hover:cursor-pointer hover:bg-[#f7f8fa]",
                          {
                            "bg-[#eaf2ff] hover:bg-[#eaf2ff]":
                              item.name === selectedLabel,
                          }
                        )}
                        key={item.id}
                        onClick={() => onChangeLabel(item)}
                        aria-hidden="true"
                      >
                        <div className="flex flex-col justify-center">
                          <InteractionOutlined
                            rev={undefined}
                            style={{ color: `#${item.color}` }}
                            className="text-lg font-medium"
                          />
                        </div>
                        <div
                          className={classNames(
                            "text-base font-normal text-[#515767] group-hover:text-[#1171ee]",
                            {
                              "text-[#1e80ff] group-hover:text-[#1e80ff]":
                                item.name === selectedLabel,
                            }
                          )}
                        >
                          {item.title}
                        </div>
                      </div>
                    ))}
                  </div>
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

export async function getStaticProps() {
  const labels = await fetchLabelsByStaticProps(GithubBlogRepo, 1);

  const sortedLabels = labels
    .filter((item) =>
      /^分类-(.*)相关$|^分类-(.*)$/.test(item.description || "")
    )
    .map((item) => ({
      ...item,
      title: item.description.replace(/^分类-(.*)相关$|^分类-(.*)$/, "$1$2"),
    }))
    .sort((pre, next) => {
      return (
        (LabelOrders[pre.name] || LabelOrders.other) -
        (LabelOrders[next.name] || LabelOrders.other)
      );
    });

  return {
    props: {
      labels: sortedLabels,
    },
  };
}
