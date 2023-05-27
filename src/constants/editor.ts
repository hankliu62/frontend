// python语言案例
const LanguageDemoPython = `# encoding:utf-8
import requests
import base64
import cv2
import numpy as np
from PIL import Image

source_folder = 'D:\\Workspace\\personal\\python\\small-tools\\images\\source'
temp_folder = 'D:\\Workspace\\personal\\python\\small-tools\\images\\temp'
dist_folder = 'D:\\Workspace\\personal\\python\\small-tools\\images\\dist'
image_name = 'avatar.png'

def fetch_access_token(client_key, client_secret):
  # client_id 为官网获取的AK， client_secret 为官网获取的SK
  url = 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=%s&client_secret=%s'%(client_key, client_secret)
  response = requests.get(url)
  if response:
    return response.json().get('access_token')

def portrait_split(access_token):
  url = 'https://aip.baidubce.com/rest/2.0/image-classify/v1/body_seg?access_token=%s' % access_token
  # 二进制方式打开图片文件
  f = open('%s\\%s' % (source_folder, image_name), 'rb')
  img = base64.b64encode(f.read())

  params = {'image': img}
  headers = {'content-type': 'application/x-www-form-urlencoded'}
  response = requests.post(url, data=params, headers=headers)

  return response.json()

def download_labelmap_image(labelmap):
  labelmap = base64.b64decode(labelmap)
  nparr = np.frombuffer(labelmap, np.uint8)
  label_img = cv2.imdecode(nparr, 1)
  # width, height为图片原始宽、高
  width = label_img.shape[1]
  height = label_img.shape[0]
  label_img = cv2.resize(label_img, (width, height), interpolation=cv2.INTER_NEAREST)
  im_new = np.where(label_img == 1, 255, label_img)
  cv2.imwrite('%s\\label_%s' % (temp_folder, image_name), im_new)

def download_foreimage(foreground):
  foreimage_url = '%s\\foreground_%s' % (temp_folder, image_name)
  with open(foreimage_url, 'wb') as f:
    f.write(base64.b64decode(foreground))

def download_scoremap_image(scoremap):
  image_score_url = '%s\\score_%s' % (temp_folder, image_name)
  with open(image_score_url, 'wb') as f:
    f.write(base64.b64decode(scoremap))

def combine_image(foreimage, baseimage, rate):
  baseimage_pillow = Image.open(baseimage)
  base_width, base_height = baseimage_pillow.size

  foreimage_pillow = Image.open(foreimage)
  fore_width, fore_height = foreimage_pillow.size

  # 将前景安装指定的比例进行缩放以适应背景大小
  foreimage_pillow = foreimage_pillow.resize((int(fore_width * rate), int(fore_height * rate)))
  fore_width, fore_height = foreimage_pillow.size

  # 分离通道
  r, g, b, a = foreimage_pillow.split()
  box = (int(base_width / 2 - fore_width / 2), base_height - fore_height,
          int(base_width / 2 + fore_width / 2), base_height)

  # 将前景粘贴到背景中
  baseimage_pillow.paste(foreimage_pillow, box, mask=a)

  # 返回粘贴合成好的照片
  return baseimage_pillow


if __name__ == "__main__":
  access_token = fetch_access_token('XCq******hl8Yh****CQ4Na5', 'Qjnecnab*********5ZO78G****4beBE')
  res = portrait_split(access_token)

  download_scoremap_image(res.get('scoremap'))

  download_foreimage(res.get('foreground'))

  download_labelmap_image(res.get('labelmap'))

  baseimage_url = '%s\\bg.jpg' % source_folder
  foreimage_url = '%s\\foreground_%s' % (temp_folder, image_name)
  combined_image_url = '%s\\combined_%s' % (dist_folder, image_name)
  combine_image(foreimage_url, baseimage_url, 10).save(combined_image_url)
`;

const LanguageDemoLess = `// Reset.less
// Adapted from Normalize.css http://github.com/necolas/normalize.css
// ------------------------------------------------------------------------
//#st:!lessc

.reset(){
//@charset "UTF-8";
// Display in IE6-9 and FF3
// -------------------------
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  nav,
  section {
    display: block;
  }

  // Display block in IE6-9 and FF3
  // -------------------------

  audio,
  canvas,
  video {
    display: inline-block;
    *display: inline;
    *zoom: 1;
  }

  // Prevents modern browsers from displaying 'audio' without controls
  // -------------------------

  audio:not([controls]) {
      display: none;
  }

  // Base settings
  // -------------------------

  html {
    line-height: 1;
    font-size: 100%;
    text-size-adjust: none;
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -o-text-size-adjust: none;
    -ms-text-size-adjust: none;
    // 解决IE6背景图片不缓存
    _zoom: ~'expression(function(ele){ele.style.zoom = "1";document.execCommand("BackgroundImageCache",false,true);}(this))';
    // 解决IE6中fixed元素抖动问题
    _text-overflow:ellipsis;
  }

  // Focus states
  a:focus {
    outline: 0;
  }
  // Hover & Active
  a:hover,
  a:active {
    outline: 0;
  }
  a:hover{
    _zoom: 1;// 解决IE6:hover伪类bug
  }

  // Prevents sub and sup affecting line-height in all browsers
  // -------------------------

  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }
  sup {
    top: -0.5em;
  }
  sub {
    bottom: -0.25em;
  }

  // Img border in a's and image quality
  // -------------------------

  img {
    height: auto;
    border: 0;
    -ms-interpolation-mode: bicubic;/* Internet Explorer 7.0+ 画面失真呈锯齿状 */
    image-rendering: optimizeQuality; /* Firefox 3.6+ */
    vertical-align: middle;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  address, caption, cite, code, dfn, em, strong, th, var {
    font-weight: normal;
    font-style: normal;
  }

  caption, th { text-align: left; }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    font-size: 100%;
  }

  /* remember to define focus styles! */
  :focus { outline: 0; }
  /* for webkit textarea resize enable! */
  textarea { resize:none; }
  /* remember to highlight inserts somehow! */
  ins { text-decoration: none; }
  del { text-decoration: line-through; }

  // Forms
  // -------------------------

  // Font size in all browsers, margin changes, misc consistency
  button,
  input,
  select,
  textarea {
    margin: 0;
    font-size: 100%;
    vertical-align: middle;
  }
  button,
  input {
    *overflow: visible; // Inner spacing ie IE6/7
    line-height: normal; // FF3/4 have !important on line-height in UA stylesheet
  }
  button::-moz-focus-inner,
  input::-moz-focus-inner { // Inner padding and border oddities in FF3/4
    padding: 0;
    border: 0;
  }
  button,
  input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    cursor: pointer; // Cursors on all buttons applied consistently
    -webkit-appearance: button; // Style clickable inputs in iOS
  }
  input[type="search"] { // Appearance in Safari/Chrome
    -webkit-appearance: textfield;
    -webkit-box-sizing: content-box;
       -moz-box-sizing: content-box;
            box-sizing: content-box;
  }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none; // Inner-padding issues in Chrome OSX, Safari 5
  }
  textarea {
    overflow: auto; // Remove vertical scrollbar in IE6-9
    vertical-align: top; // Readability and alignment cross-browser
  }
}
`;

const LanguageDemoScss = `// http://meyerweb.com/eric/tools/css/reset/
//  v2.0 | 20110126
//  License: none (public domain)

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
// HTML5 display-role reset for older browsers
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`;

const LanguageDemoCss = `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`;

const LanguageDemoTypescript = `/* eslint-disable no-restricted-globals */
/* eslint-disable no-case-declarations */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import defaults from "lodash/defaults";
import groupBy from "lodash/groupBy";
import MyWorker from "worker-loader!./parser.worker.ts";

import {
  ICompletionItem,
  ICursorInfo,
  ITableInfo,
  reader,
} from "../sql-parser";
import { IParseResult } from "../syntax-parser";
import { DefaultOpts, IMonacoVersion, IParserType } from "./default-opts";

const supportedMonacoEditorVersion = ["0.13.2", "0.15.6"];

export function monacoSqlAutocomplete(
  monaco: any,
  editor: any,
  opts?: Partial<DefaultOpts>
) {
  opts = defaults(opts || {}, new DefaultOpts(monaco));

  // eslint-disable-next-line unicorn/prefer-includes
  if (supportedMonacoEditorVersion.indexOf(opts.monacoEditorVersion) === -1) {
    throw new Error(
      \`monaco-editor version \${
        opts.monacoEditorVersion
      } is not allowed, only support \${supportedMonacoEditorVersion.join(" ")}\`
    );
  }

  // Get parser info and show error.
  let currentParserPromise: any = null;
  let editVersion = 0;

  editor.onDidChangeModelContent((event: any) => {
    editVersion++;
    const currentEditVersion = editVersion;

    currentParserPromise = new Promise((resolve) => {
      setTimeout(() => {
        const model = editor.getModel();

        // eslint-disable-next-line promise/catch-or-return
        asyncParser(
          editor.getValue(),
          model.getOffsetAt(editor.getPosition()),
          opts.parserType
        ).then((parseResult) => {
          resolve(parseResult);

          if (currentEditVersion !== editVersion) {
            return;
          }

          opts.onParse(parseResult);

          if (parseResult.error) {
            const newReason =
              parseResult.error.reason === "incomplete"
                ? \`Incomplete, expect next input: \n\${parseResult.error.suggestions
                    .map((each) => {
                      return each.value;
                    })
                    .join("\n")}\`
                : \`Wrong input, expect: \n\${parseResult.error.suggestions
                    .map((each) => {
                      return each.value;
                    })
                    .join("\n")}\`;

            const errorPosition = parseResult.error.token
              ? {
                  startLineNumber: model.getPositionAt(
                    parseResult.error.token.position[0]
                  ).lineNumber,
                  startColumn: model.getPositionAt(
                    parseResult.error.token.position[0]
                  ).column,
                  endLineNumber: model.getPositionAt(
                    parseResult.error.token.position[1]
                  ).lineNumber,
                  endColumn:
                    model.getPositionAt(parseResult.error.token.position[1])
                      .column + 1,
                }
              : {
                  startLineNumber: 0,
                  startColumn: 0,
                  endLineNumber: 0,
                  endColumn: 0,
                };

            model.getPositionAt(parseResult.error.token);

            monaco.editor.setModelMarkers(model, opts.language, [
              {
                ...errorPosition,
                message: newReason,
                severity: getSeverityByVersion(
                  monaco,
                  opts.monacoEditorVersion
                ),
              },
            ]);
          } else {
            monaco.editor.setModelMarkers(editor.getModel(), opts.language, []);
          }
        });
      });
    });
  });

  monaco.languages.registerCompletionItemProvider(opts.language, {
    triggerCharacters:
      // eslint-disable-next-line unicorn/prefer-spread
      " $.:{}=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    provideCompletionItems: async () => {
      const currentEditVersion = editVersion;
      const parseResult: IParseResult = await currentParserPromise;

      if (currentEditVersion !== editVersion) {
        return returnCompletionItemsByVersion([], opts.monacoEditorVersion);
      }

      const cursorInfo = await reader.getCursorInfo(
        parseResult.ast,
        parseResult.cursorKeyPath
      );

      const parserSuggestion = opts.pipeKeywords(parseResult.nextMatchings);

      if (!cursorInfo) {
        return returnCompletionItemsByVersion(
          parserSuggestion,
          opts.monacoEditorVersion
        );
      }

      switch (cursorInfo.type) {
        case "tableField": {
          const cursorRootStatementFields = await reader.getFieldsFromStatement(
            parseResult.ast,
            parseResult.cursorKeyPath,
            opts.onSuggestTableFields
          );

          // group.fieldName
          const groups = groupBy(
            cursorRootStatementFields.filter((cursorRootStatementField) => {
              return cursorRootStatementField.groupPickerName !== null;
            }),
            "groupPickerName"
          );

          const functionNames = await opts.onSuggestFunctionName(
            cursorInfo.token.value
          );

          return returnCompletionItemsByVersion(
            [
              ...cursorRootStatementFields,
              ...parserSuggestion,
              ...functionNames,
              ...(groups
                ? Object.keys(groups).map((groupName) => {
                    return opts.onSuggestFieldGroup(groupName);
                  })
                : []),
            ],
            opts.monacoEditorVersion
          );
        }
        case "tableFieldAfterGroup": {
          // 字段 . 后面的部分
          const cursorRootStatementFieldsAfter =
            await reader.getFieldsFromStatement(
              parseResult.ast,
              parseResult.cursorKeyPath as any,
              opts.onSuggestTableFields
            );

          return returnCompletionItemsByVersion(
            [
              ...cursorRootStatementFieldsAfter.filter(
                (cursorRootStatementField: any) => {
                  return (
                    cursorRootStatementField.groupPickerName ===
                    (cursorInfo as ICursorInfo<{ groupName: string }>).groupName
                  );
                }
              ),
              ...parserSuggestion,
            ],
            opts.monacoEditorVersion
          );
        }
        case "tableName": {
          const tableNames = await opts.onSuggestTableNames(
            cursorInfo as ICursorInfo<ITableInfo>
          );

          return returnCompletionItemsByVersion(
            [...tableNames, ...parserSuggestion],
            opts.monacoEditorVersion
          );
        }
        case "functionName": {
          return opts.onSuggestFunctionName(cursorInfo.token.value);
        }
        default: {
          return returnCompletionItemsByVersion(
            parserSuggestion,
            opts.monacoEditorVersion
          );
        }
      }
    },
  });

  monaco.languages.registerHoverProvider(opts.language, {
    provideHover: async (model: any, position: any) => {
      const parseResult: IParseResult = await asyncParser(
        editor.getValue(),
        model.getOffsetAt(position),
        opts.parserType
      );

      const cursorInfo = await reader.getCursorInfo(
        parseResult.ast,
        parseResult.cursorKeyPath
      );

      if (!cursorInfo) {
        return null as any;
      }

      let contents: any = [];

      switch (cursorInfo.type) {
        case "tableField": {
          const extra = await reader.findFieldExtraInfo(
            parseResult.ast,
            cursorInfo,
            opts.onSuggestTableFields,
            parseResult.cursorKeyPath
          );
          contents = await opts.onHoverTableField(
            cursorInfo.token.value,
            extra
          );
          break;
        }
        case "tableFieldAfterGroup": {
          const extraAfter = await reader.findFieldExtraInfo(
            parseResult.ast,
            cursorInfo,
            opts.onSuggestTableFields,
            parseResult.cursorKeyPath
          );
          contents = await opts.onHoverTableField(
            cursorInfo.token.value,
            extraAfter
          );
          break;
        }
        case "tableName": {
          contents = await opts.onHoverTableName(cursorInfo as ICursorInfo);
          break;
        }
        case "functionName": {
          contents = await opts.onHoverFunctionName(cursorInfo.token.value);
          break;
        }
        default:
      }

      return {
        range: monaco.Range.fromPositions(
          model.getPositionAt(cursorInfo.token.position[0]),
          model.getPositionAt(cursorInfo.token.position[1] + 1)
        ),
        contents,
      };
    },
  });
}

// 实例化一个 worker
const worker: Worker = new (MyWorker as any)();

let parserIndex = 0;

const asyncParser = async (
  text: string,
  index: number,
  parserType: IParserType
) => {
  parserIndex++;
  const currentParserIndex = parserIndex;

  let resolve: any = null;
  let reject: any = null;

  // eslint-disable-next-line promise/param-names
  const promise = new Promise((promiseResolve, promiseReject) => {
    resolve = promiseResolve;
    reject = promiseReject;
  });

  worker.postMessage({ text, index, parserType });

  // eslint-disable-next-line unicorn/prefer-add-event-listener
  worker.onmessage = (event) => {
    if (currentParserIndex === parserIndex) {
      resolve(event.data);
    } else {
      reject();
    }
  };

  return promise as Promise<IParseResult>;
};

function returnCompletionItemsByVersion(
  value: ICompletionItem[],
  monacoVersion: IMonacoVersion
) {
  switch (monacoVersion) {
    case "0.13.2": {
      return value;
    }
    case "0.15.6": {
      return {
        suggestions: value,
      };
    }
    default: {
      throw new Error("Not supported version");
    }
  }
}

function getSeverityByVersion(monaco: any, monacoVersion: IMonacoVersion) {
  switch (monacoVersion) {
    case "0.13.2": {
      return monaco.Severity.Error;
    }
    case "0.15.6": {
      return monaco.MarkerSeverity.Error;
    }
    default: {
      throw new Error("Not supported version");
    }
  }
}
`;

const LanguageDemoJavascript = `(function(w){
  var rest = {};
  rest.methods = ['get', 'post', 'put', 'del'];
  rest.offline = true;
  rest.before = function(params) {
      //TODO
      console.log('sentData', params);
  };

  rest.after = function(params) {
      //TODO
      console.log('gotData', params);
  };

  if (rest.offline) {
      rest.get = function(url, data, okCallback, failCallback) {
          rest.before(arguments);
          if ('function' === typeof(data)) {
              failCallback = okCallback;
              okCallback = data;
              data = {};
          }
          $.getJSON(url, data, function(data, textStatus, jqXHR){
              okCallback(data, textStatus, jqXHR);
              rest.after(data, textStatus, jqXHR);
          });
      };
      rest.post = rest.put = rest.del = rest.get;
  } else {
      var len =  rest.methods.length;
      for (var i = 0; i < len; i++) {
          (function(){
              var methodName = rest.methods[i];
              rest[methodName] = function(url, data, okCallback, failCallback) {
                  if ('function' === typeof(data)) {
                      failCallback = okCallback;
                      okCallback = data;
                      data = {};
                  }
                  ('del' === methodName) && (methodName = 'delete');
                  if (!failCallback) {
                      failCallback = function(jqXHR, textStatus, errorThrown) {
                          console.error(jqXHR, textStatus, errorThrown);
                      };
                  }
                  rest.before(arguments);
                  $.ajax({
                      dataType: 'json',
                      type: methodName,
                      url: url,
                      data: data,
                      success: okCallback,
                      fail: failCallback,
                      complete: rest.after
                  });
              };
          })();
      }
  }

  if ( typeof define === "function") {
      if (define.amd || define.cmd) {
          define('rest', [], function() {
              return rest;
          });
      }
  } else {
      w.rest = rest;
  }
})(window);
`;

const LanguageDemoJson = `{"title":"json在线解析","json.url":"https://www.hankliu.com","keywords":"json在线解析","功能":["JSON美化","JSON数据类型显示","JSON数组显示角标","高亮显示","错误提示",{"备注":["www.hankliu.com","json.la"]}],"加入我们":{"qq群":"xxxxxxx"}}`;

const LanguageDemoSql = `SELECT start_time, COUNT(DISTINCT lesson_uid) AS count FROM (SELECT FROM_UNIXTIME(s.start_time / 1000, '%Y-%m-%d') AS start_time, s.lesson_uid AS lesson_uid FROM \`audio_xx_tickets_summary\` s JOIN \`audio_xx_tickets_detail\` d ON d.ticket_id = s.ticket_id WHERE s.start_time BETWEEN 1561939200000 AND 1562630399000 AND s.ticket_bu = 2 AND d.message_page LIKE '%杂音%') temp1 GROUP BY start_time ORDER BY start_time DESC

SELECT start_time, COUNT(DISTINCT lesson_uid) AS count FROM (SELECT FROM_UNIXTIME(s.start_time / 1000, '%Y-%m-%d') AS start_time, s.lesson_uid AS lesson_uid FROM \`audio_xx_tickets_summary\` s JOIN \`audio_xx_tickets_detail\` d ON d.ticket_id = s.ticket_id WHERE s.start_time BETWEEN 1561939200000 AND 1562630399000 AND s.ticket_bu = 2 AND d.message_page LIKE '%回音%') temp1 GROUP BY start_time ORDER BY start_time DESC

SELECT start_time, COUNT(DISTINCT lesson_uid) AS count FROM (SELECT FROM_UNIXTIME(s.start_time / 1000, '%Y-%m-%d') AS start_time, s.lesson_uid AS lesson_uid FROM \`audio_xx_tickets_summary\` s JOIN \`audio_xx_tickets_detail\` d ON d.ticket_id = s.ticket_id WHERE s.start_time BETWEEN 1561939200000 AND 1562630399000 AND s.ticket_bu = 2) temp1 GROUP BY start_time ORDER BY start_time DESC

SELECT
  i.stat_date AS "time",
  ROUND(COUNT(i.id) / temp2.total * 100, 2) AS "value",
  IF(i.audio_name='','Unknown',i.audio_name) AS "metric"
FROM \`tb_avs_xx_day_ticket_info\` i
LEFT JOIN (
  SELECT
    stat_date,
    COUNT(id) AS total
  FROM \`tb_avs_xx_day_ticket_info\`
  GROUP BY stat_date
) temp2
ON i.stat_date = temp2.stat_date
WHERE
  i.audio_name IN (
    SELECT
      audio_name
    FROM (
      SELECT
        COUNT(id) AS count,
        audio_name
      FROM \`tb_avs_xx_day_ticket_info\`
      GROUP BY audio_name
      ORDER BY count DESC
      LIMIT 0, 20
    ) temp1
  )
GROUP BY i.stat_date, i.audio_name
ORDER BY i.stat_date DESC
`;

const LanguageDemoMarkdown = `# Turndown Demo

This demonstrates [turndown](https://github.com/mixmark-io/turndown) – an HTML to Markdown converter in JavaScript.

## Usage

\`\`\`js
var turndownService = new TurndownService()
  console.log(
    turndownService.turndown('<h1>Hello world</h1>')
  )
\`\`\`

* * *

It aims to be [CommonMark](http://commonmark.org/) compliant, and includes options to style the output. These options include:

-   headingStyle (setext or atx)
-   horizontalRule (\*, -, or \_)
-   bullet (\*, -, or +)
-   codeBlockStyle (indented or fenced)
-   fence (~ or ~)
-   emDelimiter (\_ or \*)
-   strongDelimiter (\*\* or \_\_)
-   linkStyle (inlined or referenced)
-   linkReferenceStyle (full, collapsed, or shortcut)
`;

const LanguageDemoHtml = `<h1>Turndown Demo</h1>

<p>This demonstrates <a href="https://github.com/mixmark-io/turndown">turndown</a> – an HTML to Markdown converter in JavaScript.</p>

<h2>Usage</h2>

<pre><code class="language-js">var turndownService = new TurndownService()
console.log(
  turndownService.turndown('&lt;h1&gt;Hello world&lt;/h1&gt;')
)</code></pre>

<hr />

<p>It aims to be <a href="http://commonmark.org/">CommonMark</a>
 compliant, and includes options to style the output. These options include:</p>

<ul>
  <li>headingStyle (setext or atx)</li>
  <li>horizontalRule (*, -, or _)</li>
  <li>bullet (*, -, or +)</li>
  <li>codeBlockStyle (indented or fenced)</li>
  <li>fence (~ or ~)</li>
  <li>emDelimiter (_ or *)</li>
  <li>strongDelimiter (** or __)</li>
  <li>linkStyle (inlined or referenced)</li>
  <li>linkReferenceStyle (full, collapsed, or shortcut)</li>
</ul>
`;

const LanguageDemoYaml = `apiVersion: v1
kind: Pod
metadata:
  annotations:
    kubectl.kubernetes.io/default-container: xxxxxx-web-admin-k8s
    kubectl.kubernetes.io/default-logs-container: xxxxxx-web-admin-k8s
    kubernetes.io/psp: ack.privileged
    sidecar.istio.io/status: '{"initContainers":["istio-init"],"containers":["istio-proxy"],"volumes":["workload-socket","workload-certs","istio-envoy","istio-data","istio-podinfo","istio-token","istiod-ca-cert"],"imagePullSecrets":null,"revision":"default"}'
  creationTimestamp: "2023-03-27T11:39:57Z"
  generateName: xxxxxx-web-admin-k8s-6662884b9b-
  labels:
    ASM_TRAFFIC_TAG: version-base
    app: xxxxxx-web-admin-k8s
    pod-template-hash: 6662884b9b
    security.istio.io/tlsMode: istio
    service.istio.io/canonical-name: xxxxxx-web-admin-k8s
    service.istio.io/canonical-revision: base
    version: base
  name: xxxxxx-web-admin-k8s-6662884b9b-9lnjb
  namespace: sop
  ownerReferences:
  - apiVersion: apps/v1
    blockOwnerDeletion: true
    controller: true
    kind: ReplicaSet
    name: xxxxxx-web-admin-k8s-6662884b9b
    uid: 2aa629e1-362d-47e4-62df-45a622872071
  resourceVersion: "211472390"
  uid: 66426263-623c-6230-a313-e0d2e62ac704
spec:
  containers:
  - args:
    - proxy
    - sidecar
    - --domain
    - $(POD_NAMESPACE).svc.cluster.local
    - --proxyLogLevel=warning
    - --proxyComponentLogLevel=misc:error
    - --log_output_level=default:info
    - --concurrency
    - "2"
    env:
    - name: TERMINATION_DRAIN_DURATION_SECONDS
      value: "5"
    - name: JWT_POLICY
      value: third-party-jwt
    - name: PILOT_CERT_PROVIDER
      value: istiod
    - name: CA_ADDR
      value: istiod-1-14-3.istio-system.svc:15012
    - name: POD_NAME
      valueFrom:
        fieldRef:
          apiVersion: v1
          fieldPath: metadata.name
    - name: POD_NAMESPACE
      valueFrom:
        fieldRef:
          apiVersion: v1
          fieldPath: metadata.namespace
    - name: INSTANCE_IP
      valueFrom:
        fieldRef:
          apiVersion: v1
          fieldPath: status.podIP
    - name: SERVICE_ACCOUNT
      valueFrom:
        fieldRef:
          apiVersion: v1
          fieldPath: spec.serviceAccountName
    - name: HOST_IP
      valueFrom:
        fieldRef:
          apiVersion: v1
          fieldPath: status.hostIP
    - name: PROXY_CONFIG
      value: |
        {"configPath":"/etc/istio/proxy","discoveryAddress":"istiod-1-14-3.istio-system.svc:15012","proxyMetadata":{"DNS_AGENT":""},"proxyStatsMatcher":{"inclusionRegexps":[".*adaptive_concurrency.*"]}}
    - name: ISTIO_META_POD_PORTS
      value: |-
        [
            {"name":"http-0","containerPort":80,"protocol":"TCP"}
        ]
    - name: ISTIO_META_APP_CONTAINERS
      value: xxxxxx-web-admin-k8s
    - name: ISTIO_META_INTERCEPTION_MODE
      value: REDIRECT
    - name: ISTIO_META_WORKLOAD_NAME
      value: xxxxxx-web-admin-k8s
    - name: ASM_APP_VERSION
      value: base
    - name: ISTIO_META_OWNER
      value: kubernetes://apis/apps/v1/namespaces/sop/deployments/xxxxxx-web-admin-k8s
    - name: ISTIO_META_MESH_ID
      value: cluster.local
    - name: ASM_ID
      value: c362d1ff621f746262206248f7462cbvc
    - name: TRUST_DOMAIN
      value: cluster.local
    - name: DNS_AGENT
    - name: ISTIO_META_CLUSTER_ID
      value: 6261e625d7bdaxx6b6255165b6234ad6e
    image: registry-vpc.cn-beijing.aliyuncs.com/acs/proxyv2:v1.14.3.47-ga31201346f-aliyun
    imagePullPolicy: IfNotPresent
    lifecycle:
      postStart:
        exec:
          command:
          - pilot-agent
          - wait
      preStop:
        exec:
          command:
          - /bin/sh
          - -c
          - sleep 15
    name: istio-proxy
    ports:
    - containerPort: 15090
      name: http-envoy-prom
      protocol: TCP
    readinessProbe:
      failureThreshold: 30
      httpGet:
        path: /healthz/ready
        port: 15021
        scheme: HTTP
      initialDelaySeconds: 1
      periodSeconds: 2
      successThreshold: 1
      timeoutSeconds: 3
    resources:
      limits:
        cpu: "2"
        memory: 1Gi
      requests:
        cpu: 100m
        memory: 128Mi
    securityContext:
      allowPrivilegeEscalation: false
      capabilities:
        drop:
        - ALL
      privileged: false
      readOnlyRootFilesystem: true
      runAsGroup: 1337
      runAsNonRoot: true
      runAsUser: 1337
    terminationMessagePath: /dev/termination-log
    terminationMessagePolicy: File
    volumeMounts:
    - mountPath: /var/run/secrets/workload-spiffe-uds
      name: workload-socket
    - mountPath: /var/run/secrets/workload-spiffe-credentials
      name: workload-certs
    - mountPath: /var/run/secrets/istio
      name: istiod-ca-cert
    - mountPath: /var/lib/istio/data
      name: istio-data
    - mountPath: /etc/istio/proxy
      name: istio-envoy
    - mountPath: /var/run/secrets/tokens
      name: istio-token
    - mountPath: /etc/istio/pod
      name: istio-podinfo
    - mountPath: /var/run/secrets/kubernetes.io/serviceaccount
      name: kube-api-access-txd8s
      readOnly: true
  - env:
    - name: APP_NAME
      value: xxxxxx-web-admin-k8s
    - name: ENV
      value: test
    - name: VERSION
      value: base
    - name: apollo_domain
      value: http://apollo-config.middleware:8081
    - name: apolloAppId
      value: intelligence-frontend
    image: dockerhub.xxxxxx.com/sop/xxxxxx-web-admin-k8s/test:202303271937329038264614
    imagePullPolicy: IfNotPresent
    livenessProbe:
      failureThreshold: 3
      initialDelaySeconds: 20
      periodSeconds: 10
      successThreshold: 1
      tcpSocket:
        port: 80
      timeoutSeconds: 10
    name: xxxxxx-web-admin-k8s
    ports:
    - containerPort: 80
      name: http-0
      protocol: TCP
    readinessProbe:
      failureThreshold: 3
      initialDelaySeconds: 20
      periodSeconds: 10
      successThreshold: 1
      tcpSocket:
        port: 80
      timeoutSeconds: 10
    resources:
      limits:
        cpu: "2"
        memory: 2Gi
      requests:
        cpu: 20m
        memory: 256Mi
    terminationMessagePath: /dev/termination-log
    terminationMessagePolicy: File
    volumeMounts:
    - mountPath: /var/run/secrets/kubernetes.io/serviceaccount
      name: kube-api-access-txd8s
      readOnly: true
  dnsPolicy: ClusterFirst
  enableServiceLinks: true
  imagePullSecrets:
  - name: registry-key
  initContainers:
  - args:
    - istio-iptables
    - -p
    - "15001"
    - -z
    - "15006"
    - -u
    - "1337"
    - -m
    - REDIRECT
    - -i
    - '*'
    - -x
    - 172.31.0.1/32
    - -b
    - '*'
    - -d
    - 15090,15021,15081,9191,15020
    env:
    - name: DNS_AGENT
    image: registry-vpc.cn-beijing.aliyuncs.com/acs/proxyv2:v1.14.3.47-ga52201276f-aliyun
    imagePullPolicy: IfNotPresent
    name: istio-init
    resources:
      limits:
        cpu: "2"
        memory: 1Gi
      requests:
        cpu: 10m
        memory: 10Mi
    securityContext:
      allowPrivilegeEscalation: false
      capabilities:
        add:
        - NET_ADMIN
      privileged: false
      readOnlyRootFilesystem: false
      runAsGroup: 0
      runAsNonRoot: false
      runAsUser: 0
    terminationMessagePath: /dev/termination-log
    terminationMessagePolicy: File
    volumeMounts:
    - mountPath: /var/run/secrets/kubernetes.io/serviceaccount
      name: kube-api-access-txd8s
      readOnly: true
  nodeName: cn-beijing.11.210.117.97
  preemptionPolicy: PreemptLowerPriority
  priority: 0
  restartPolicy: Always
  schedulerName: default-scheduler
  securityContext: {}
  serviceAccount: default
  serviceAccountName: default
  terminationGracePeriodSeconds: 30
  tolerations:
  - effect: NoExecute
    key: node.kubernetes.io/not-ready
    operator: Exists
    tolerationSeconds: 300
  - effect: NoExecute
    key: node.kubernetes.io/unreachable
    operator: Exists
    tolerationSeconds: 300
  volumes:
  - emptyDir: {}
    name: workload-socket
  - emptyDir: {}
    name: workload-certs
  - emptyDir:
      medium: Memory
    name: istio-envoy
  - emptyDir: {}
    name: istio-data
  - downwardAPI:
      defaultMode: 420
      items:
      - fieldRef:
          apiVersion: v1
          fieldPath: metadata.labels
        path: labels
      - fieldRef:
          apiVersion: v1
          fieldPath: metadata.annotations
        path: annotations
    name: istio-podinfo
  - name: istio-token
    projected:
      defaultMode: 420
      sources:
      - serviceAccountToken:
          audience: istio-ca
          expirationSeconds: 86400
          path: istio-token
  - configMap:
      defaultMode: 420
      name: istio-ca-root-cert
    name: istiod-ca-cert
  - name: kube-api-access-txd8s
    projected:
      defaultMode: 420
      sources:
      - serviceAccountToken:
          expirationSeconds: 3607
          path: token
      - configMap:
          items:
          - key: ca.crt
            path: ca.crt
          name: kube-root-ca.crt
      - downwardAPI:
          items:
          - fieldRef:
              apiVersion: v1
              fieldPath: metadata.namespace
            path: namespace
status:
  conditions:
  - lastProbeTime: null
    lastTransitionTime: "2023-03-27T11:40:00Z"
    status: "True"
    type: Initialized
  - lastProbeTime: null
    lastTransitionTime: "2023-03-27T11:40:37Z"
    status: "True"
    type: Ready
  - lastProbeTime: null
    lastTransitionTime: "2023-03-27T11:40:37Z"
    status: "True"
    type: ContainersReady
  - lastProbeTime: null
    lastTransitionTime: "2023-03-27T11:39:57Z"
    status: "True"
    type: PodScheduled
  containerStatuses:
  - containerID: docker://c6234fcab19ffaa96c34ea211e8398356c220d7f7c8262a8d73dea361207ecbc
    image: registry-vpc.cn-beijing.aliyuncs.com/acs/proxyv2:v1.14.3.47-ga52201276f-aliyun
    imageID: docker-pullable://registry-vpc.cn-beijing.aliyuncs.com/acs/proxyv2@sha256:a2a4d61a8a6183a890c7beac21e6790fc125a0e45ebbc299e728f96755f334b6
    lastState: {}
    name: istio-proxy
    ready: true
    restartCount: 0
    started: true
    state:
      running:
        startedAt: "2023-03-27T11:40:01Z"
  - containerID: docker://62bdf04f293fad0a562480859aedb69ce62fd7ca1cc872d4983ebf01f3462bdf
    image: dockerhub.xxxxxx.com/sop/xxxxxx-web-admin-k8s/test:202303271937329038264614
    imageID: docker-pullable://dockerhub.xxxxxx.com/sop/xxxxxx-web-admin-k8s/test@sha256:622f3106086b1ba11f3ffa826296afd59b2177c54462b5ed1d662b8766d62dbc
    lastState: {}
    name: xxxxxx-web-admin-k8s
    ready: true
    restartCount: 0
    started: true
    state:
      running:
        startedAt: "2023-03-27T11:40:13Z"
  hostIP: 10.210.107.97
  initContainerStatuses:
  - containerID: docker://df3050cb479dff5a362b8162ed70e3dedcbec80620b20b2499621b1d249626b3
    image: registry-vpc.cn-beijing.aliyuncs.com/acs/proxyv2:v1.14.3.47-ga52201276f-aliyun
    imageID: docker-pullable://registry-vpc.cn-beijing.aliyuncs.com/acs/proxyv2@sha256:a2a626162a61836290c7bea621e6790fc125a6245ebbc299e728f96755f624b6
    lastState: {}
    name: istio-init
    ready: true
    restartCount: 0
    state:
      terminated:
        containerID: docker://df3050c6279dff623d628131ed70e6262cbec80b62b20624996a1b1d629846b3
        exitCode: 0
        finishedAt: "2023-03-27T11:39:59Z"
        reason: Completed
        startedAt: "2023-03-27T11:39:59Z"
  phase: Running
  podIP: 170.30.12.204
  podIPs:
  - ip: 170.30.12.204
  qosClass: Burstable
  startTime: "2023-03-27T11:39:57Z"
`;

export const LanguageDemo = {
  python: LanguageDemoPython,
  less: LanguageDemoLess,
  scss: LanguageDemoScss,
  css: LanguageDemoCss,
  typescript: LanguageDemoTypescript,
  javascript: LanguageDemoJavascript,
  json: LanguageDemoJson,
  sql: LanguageDemoSql,
  markdown: LanguageDemoMarkdown,
  html: LanguageDemoHtml,
  yaml: LanguageDemoYaml,
  plaintext: "",
  graphql: "",
  abap: "",
  apex: "",
  azcli: "",
  bat: "",
  bicep: "",
  cameligo: "",
  clojure: "",
  coffeescript: "",
  c: "",
  cpp: "",
  csharp: "",
  csp: "",
  cypher: "",
  dart: "",
  dockerfile: "",
  ecl: "",
  elixir: "",
  flow9: "",
  fsharp: "",
  freemarker2: "",
  "freemarker2.tag-angle.interpolation-dollar": "",
  "freemarker2.tag-bracket.interpolation-dollar": "",
  "freemarker2.tag-angle.interpolation-bracket": "",
  "freemarker2.tag-bracket.interpolation-bracket": "",
  "freemarker2.tag-auto.interpolation-dollar": "",
  "freemarker2.tag-auto.interpolation-bracket": "",
  go: "",
  handlebars: "",
  hcl: "",
  ini: "",
  java: "",
  julia: "",
  kotlin: "",
  lexon: "",
  lua: "",
  liquid: "",
  m3: "",
  mips: "",
  msdax: "",
  mysql: "",
  "objective-c": "",
  pascal: "",
  pascaligo: "",
  perl: "",
  pgsql: "",
  php: "",
  pla: "",
  postiats: "",
  powerquery: "",
  powershell: "",
  proto: "",
  pug: "",
  qsharp: "",
  r: "",
  razor: "",
  redis: "",
  redshift: "",
  restructuredtext: "",
  ruby: "",
  rust: "",
  sb: "",
  scala: "",
  scheme: "",
  shell: "",
  sol: "",
  aes: "",
  sparql: "",
  st: "",
  swift: "",
  systemverilog: "",
  verilog: "",
  tcl: "",
  twig: "",
  vb: "",
  xml: "",
};

export const Languages = Object.keys(LanguageDemo);

// export const Languages = [
//   "plaintext",
//   "sql",
//   "json",
//   "markdown",
//   "css",
//   "typescript",
//   "javascript",
//   "html",
//   "graphql",
//   "python",
//   "scss",
//   "yaml",
//   "abap",
//   "apex",
//   "azcli",
//   "bat",
//   "bicep",
//   "cameligo",
//   "clojure",
//   "coffeescript",
//   "c",
//   "cpp",
//   "csharp",
//   "csp",
//   "cypher",
//   "dart",
//   "dockerfile",
//   "ecl",
//   "elixir",
//   "flow9",
//   "fsharp",
//   "freemarker2",
//   "freemarker2.tag-angle.interpolation-dollar",
//   "freemarker2.tag-bracket.interpolation-dollar",
//   "freemarker2.tag-angle.interpolation-bracket",
//   "freemarker2.tag-bracket.interpolation-bracket",
//   "freemarker2.tag-auto.interpolation-dollar",
//   "freemarker2.tag-auto.interpolation-bracket",
//   "go",
//   "handlebars",
//   "hcl",
//   "ini",
//   "java",
//   "julia",
//   "kotlin",
//   "less",
//   "lexon",
//   "lua",
//   "liquid",
//   "m3",
//   "mips",
//   "msdax",
//   "mysql",
//   "objective-c",
//   "pascal",
//   "pascaligo",
//   "perl",
//   "pgsql",
//   "php",
//   "pla",
//   "postiats",
//   "powerquery",
//   "powershell",
//   "proto",
//   "pug",
//   "qsharp",
//   "r",
//   "razor",
//   "redis",
//   "redshift",
//   "restructuredtext",
//   "ruby",
//   "rust",
//   "sb",
//   "scala",
//   "scheme",
//   "shell",
//   "sol",
//   "aes",
//   "sparql",
//   "st",
//   "swift",
//   "systemverilog",
//   "verilog",
//   "tcl",
//   "twig",
//   "vb",
//   "xml",
// ];
