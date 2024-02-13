import { Affix, Card, Collapse, Divider } from "antd";
import classNames from "classnames";
import Dayjs from "dayjs";
import { InferGetStaticPropsType } from "next";
import ErrorPage from "next/error";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState } from "react";

import MarkdownPreview from "@/components/MarkdownPreview";
import { GithubBlogRepo, GithubOrigin, GithubOwner } from "@/constants/backend";
import useAnchor from "@/hooks/useAnchor";
import {
  fetchAllArticlesByStaticProps,
  fetchArticleByStaticProps,
} from "@/lib/issues";
import { isMobile } from "@/utils/doc";
import { getRoutePrefix } from "@/utils/route";

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
 * 博客文章详情
 *
 * @returns
 */
export default function ArticlePage({
  article,
  menus,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  // 是否展开
  const [expanded, setExpanded] = useState<boolean>(true);

  const articleMenus = useMemo<IIssueMenu[]>(() => {
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

  // banner元素
  const bannerRef = useRef<HTMLDivElement>(null);
  const bannerBeforeRef = useRef<HTMLDivElement>(null);
  const bannerAfterRef = useRef<HTMLDivElement>(null);

  function transformElement(x: number, y: number) {
    const multiple = 2;
    const elem = bannerRef.current;
    if (elem) {
      const box = elem.getBoundingClientRect();
      y = Math.min(y, box.y + box.height + 102);
      y = Math.max(y, box.y - 102);

      x = Math.min(x, box.x + box.width + 102);
      x = Math.max(x, box.x - 102);
      let calcX = -(y - box.y - box.height / 2);
      let calcY = x - box.x - box.width / 2;

      calcX =
        (Math.log2(1 + Math.abs(calcX)) * (calcX < 0 ? -1 : 1)) / Math.log2(2);
      calcY =
        ((Math.log2(1 + Math.abs(calcY)) * (calcY < 0 ? -1 : 1)) /
          Math.log2(2)) *
        multiple;

      elem.style.transform =
        "rotateX(" + calcX + "deg) " + "rotateY(" + calcY + "deg)";
      elem.style.boxShadow = "none";

      /*
      if (calcX < 0 && calcY < 0) {
        if(bannerBeforeRef.current) { // 左右阴影
          bannerBeforeRef.current.style.top = '-10px';
          bannerBeforeRef.current.style.left = 'initial';
          bannerBeforeRef.current.style.right = '-10px'
          bannerBeforeRef.current.style.bottom = 'initial';
          bannerBeforeRef.current.style.transform = 'skewY(-45deg)';
          bannerBeforeRef.current.style.background = 'linear-gradient(-105.28deg, #9ba5b6 97.55%, #9ba5b6 13.23%)';
        }

        if (bannerAfterRef.current) { // 上下阴影
          bannerAfterRef.current.style.top = '-10px';
          bannerAfterRef.current.style.left = '10px';
          bannerAfterRef.current.style.right = 'initial';
          bannerAfterRef.current.style.bottom = 'initial';
          bannerAfterRef.current.style.transform = 'skewX(-45deg)';
        }
      } else if (calcX > 0 && calcY < 0) {
        if(bannerBeforeRef.current) { // 左右阴影
          bannerBeforeRef.current.style.top = '10px';
          bannerBeforeRef.current.style.left = 'initial';
          bannerBeforeRef.current.style.right = '-10px';
          bannerBeforeRef.current.style.transform = 'skewY(45deg)';
          bannerBeforeRef.current.style.background = 'linear-gradient(105.28deg, #9ba5b6 97.55%, #9ba5b6 13.23%)';
        }

        if (bannerAfterRef.current) { // 上下阴影
          bannerAfterRef.current.style.top = 'initial';
          bannerAfterRef.current.style.left = 'initial';
          bannerAfterRef.current.style.right = 'initial';
          bannerAfterRef.current.style.bottom = '-10px';
          bannerAfterRef.current.style.transform = 'skewX(45deg)';
        }
      } else if (calcX > 0 && calcY > 0) {
        if(bannerBeforeRef.current) { // 左右阴影
          bannerBeforeRef.current.style.top = 'initial';
          bannerBeforeRef.current.style.left = '-10px';
          bannerBeforeRef.current.style.right = 'initial';
          bannerBeforeRef.current.style.bottom = 'initial';
          bannerBeforeRef.current.style.transform = 'skewY(-45deg)';
          bannerBeforeRef.current.style.background = 'linear-gradient(105.28deg, #c4cad3 13.23%, #c4cad3 97.55%)';
        }

        if (bannerAfterRef.current) { // 上下阴影
          bannerAfterRef.current.style.top = 'initial';
          bannerAfterRef.current.style.left = 'initial';
          bannerAfterRef.current.style.bottom = '-10px';
          bannerAfterRef.current.style.transform = 'skewX(-45deg)';

        }
      } else if (calcX < 0 && calcY > 0) {
        if(bannerBeforeRef.current) { // 左右阴影
          bannerBeforeRef.current.style.top = 'initial';
          bannerBeforeRef.current.style.left = '-10px';
          bannerBeforeRef.current.style.right = 'initial';
          bannerBeforeRef.current.style.bottom = 'initial';
          bannerBeforeRef.current.style.transform = 'skewY(45deg)';
          bannerBeforeRef.current.style.background = 'linear-gradient(105.28deg, #c4cad3 13.23%, #c4cad3 97.55%)';
        }

        if (bannerAfterRef.current) { // 上下阴影
          bannerAfterRef.current.style.top = '-10px';
          bannerAfterRef.current.style.left = '-10px';
          bannerAfterRef.current.style.right = 'initial';
          bannerAfterRef.current.style.bottom = 'initial';
          bannerAfterRef.current.style.transform = 'skewX(45deg)';
        }
      }
      */
    }
  }

  const onBodyMouseMove = (e: MouseEvent) => {
    window.requestAnimationFrame(function () {
      transformElement(e.clientX, e.clientY);
    });
  };

  const onBodyMouseLeave = (e: MouseEvent) => {
    window.requestAnimationFrame(function () {
      if (bannerRef.current) {
        bannerRef.current.removeAttribute("style");
      }

      // if (bannerBeforeRef.current) {
      //   bannerBeforeRef.current.removeAttribute('style');
      // }

      // if (bannerAfterRef.current) {
      //   bannerAfterRef.current.removeAttribute('style');
      // }
    });
  };

  useEffect(() => {
    if (!isMobile()) {
      document.body &&
        document.body.addEventListener("mousemove", onBodyMouseMove);
      document.body &&
        document.body.addEventListener("mouseleave", onBodyMouseLeave);
    }

    return () => {
      if (!isMobile()) {
        document.body &&
          document.body.removeEventListener("mousemove", onBodyMouseMove);
        document.body &&
          document.body.removeEventListener("mouseleave", onBodyMouseLeave);
      }
    };
  }, []);

  const currentSection = useAnchor(articleMenus);

  function isActive(section) {
    if (section.id === currentSection) {
      return true;
    }
    if (!section.children) {
      return false;
    }
    return section.children.findIndex((element) => isActive(element)) > -1;
  }

  if (!router.isFallback && !article?.number) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className="flex space-x-6 bg-white p-6">
      <div className="flex-1">
        <Card className="article-card min-h-full !border-[#d9d9d9]">
          <article>
            {/* 基础信息 */}
            <div className="mx-auto mb-[36px] max-w-[1045px] px-[30px] lg:mb-[52px] lg:flex lg:px-0">
              {/* 正文封面｜正文视频 */}
              {
                <div
                  id="banner"
                  ref={bannerRef}
                  className="media-wrapper image-media-wrapper w-full rounded-[8px] border-[1px] border-solid border-[#1D2129] lg:ml-0 lg:h-[320px] lg:w-[500px]"
                >
                  <div
                    className={classNames("hidden", "before")}
                    ref={bannerBeforeRef}
                  />
                  <div
                    className={classNames("hidden", "after")}
                    ref={bannerAfterRef}
                  />
                  <div
                    className={classNames(
                      "scale-103 h-full w-full border-[8px] border-solid border-white lg:scale-100",
                      "cover-wrapper"
                    )}
                  >
                    <img
                      className={classNames(
                        "h-full w-full rounded-md object-cover",
                        "cover"
                      )}
                      src={`${getRoutePrefix()}/dashboard/images/banner.png`}
                      alt=""
                    />
                  </div>
                </div>
              }
              {/* 基本信息 */}
              <div
                className={classNames(
                  "mt-[60px] overflow-hidden lg:ml-[32px] lg:mt-0 lg:flex-1"
                )}
              >
                {/* 标题 */}
                <h1
                  className={classNames(
                    "leading-130 montserrat-bold mb-[9px] text-[36px] font-medium text-[#1D2129] lg:mb-[8px]"
                  )}
                >
                  {article.title}
                </h1>
                {/* 内容编号和发表时间 */}
                <div
                  className={classNames(
                    "mb-[9px] flex whitespace-nowrap lg:mb-[10px]"
                  )}
                >
                  <div
                    className={classNames(
                      "leading-120 cursor-pointer truncate text-[24px] font-normal text-[#1D2129] underline-offset-2 hover:underline lg:text-[20px]"
                    )}
                    onClick={(e) => {
                      e?.stopPropagation && e.stopPropagation();
                      e?.preventDefault && e.preventDefault();
                      window.open(
                        `${GithubOrigin}/${GithubOwner}/${GithubBlogRepo}/issues/${article?.number}`,
                        "_blank"
                      );
                    }}
                    aria-hidden
                  >
                    # VOL.{article?.number}
                  </div>
                  <div
                    className={classNames(
                      "leading-120 ml-[48px] text-[24px] font-normal text-[#1D2129] lg:ml-[32px] lg:text-[20px]"
                    )}
                  >
                    {article?.created_at &&
                      Dayjs(article?.created_at).format("YYYY/MM/DD")}
                  </div>
                </div>
                {/* 标签 */}
                {article?.labels?.length > 0 && (
                  <div
                    className={classNames("mb-[12px] flex flex-wrap lg:mb-0")}
                  >
                    {article?.labels.map((item, index) => (
                      <div
                        key={index}
                        className={classNames(
                          "leading-150 mb-[12px] mr-[18px] rounded-[30px] border border-solid border-[#1D2129] px-[24px] py-[6px] text-[20px] font-normal text-[#1D2129] lg:mb-[12px] lg:mr-[10px] lg:rounded-[20px] lg:px-[16px] lg:py-[4px] lg:text-[14px]"
                        )}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                )}

                {/* 分隔符 */}
                <div
                  className={classNames(
                    "my-[30px] hidden w-[213px] border border-[#1D2129] lg:mb-[20px] lg:mt-[8px] lg:block"
                  )}
                />

                {/* 设计者 */}
                <div
                  className={classNames(
                    "lg:rounded-0 rounded-[12px] bg-white/30 p-[36px] lg:flex lg:bg-transparent lg:p-0"
                  )}
                >
                  {/* 设计者头像 */}
                  <div
                    className={classNames(
                      "float-left h-[118px] w-[118px] lg:float-none lg:h-[112px] lg:w-[112px]"
                    )}
                  >
                    <img
                      src={article?.user?.avatar_url}
                      className={classNames(
                        "h-full w-full rounded-[8px] object-cover lg:rounded-[12px]"
                      )}
                      alt=""
                    />
                  </div>
                  <div
                    className={classNames(
                      "lg:ml-[32px] lg:flex-1 lg:overflow-hidden"
                    )}
                  >
                    <div
                      className={classNames(
                        "mb-[10px] flex h-[118px] flex-col justify-center pl-[36px] lg:h-auto lg:flex-row lg:items-center lg:justify-between lg:pl-0"
                      )}
                    >
                      {/* 设计者姓名 */}
                      <div
                        className={classNames(
                          "leading-130 montserrat-bold mb-[12px] w-full truncate text-[30px] font-medium text-[#1D2129] lg:mb-0 lg:flex-1 lg:text-[24px]"
                        )}
                      >
                        {article?.user?.login}
                      </div>
                      {/* 设计者名片 */}
                      <a
                        className={classNames(
                          "leading-170 ml-0 whitespace-pre-wrap text-[20px] font-normal !text-[#1D2129] !underline hover:!text-[#1D2129] hover:!underline focus:!text-[#1D2129] lg:ml-[5px] lg:text-[14px]"
                        )}
                        href={`${GithubOrigin}/${article?.user?.login}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        TA的个人名片
                      </a>
                    </div>

                    {/* 设计者描述 */}
                    <div
                      className={classNames(
                        "leading-170 text-[20px] font-normal text-[#4E5969] lg:text-[14px]"
                      )}
                    >
                      HankLiu前端开发工程师，精通前端，涉猎后端，对前端有着浓厚的兴趣，希望能够在前端这条路上一直走下去。努力去听风的声音，不必在意风的方向。
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Divider className="!mt-0 !border-[#bfc3c7]" />

            <section>
              <MarkdownPreview source={article.body || ""} showLoading />
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
                    {articleMenus.map((menu) => (
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
  const article = await fetchArticleByStaticProps(params.id);

  const menus = (article.body || "")
    .split("\r\n")
    .filter((line) => line.startsWith("##"));

  return {
    props: {
      article,
      menus,
    },
  };
}

export async function getStaticPaths() {
  const issus = await fetchAllArticlesByStaticProps();

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
