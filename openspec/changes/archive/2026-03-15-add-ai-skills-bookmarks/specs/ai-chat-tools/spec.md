## ADDED Requirements

### Requirement: AI 聊天工具分类展示

网站应提供 AI 聊天工具分类，展示主流 AI 对话产品官网链接。

#### Scenario: 查看 AI 聊天工具分类

- **WHEN** 用户导航到 AI 聊天工具分类页面
- **THEN** 系统显示包含以下网站的列表：Claude、ChatGPT、Gemini、DeepSeek、豆包等主流 AI 对话产品

#### Scenario: 访问 AI 聊天工具网站

- **WHEN** 用户点击某个 AI 聊天工具的链接
- **THEN** 系统在新标签页打开对应的 AI 官网

### Requirement: AI 聊天工具数据完整性

AI 聊天工具分类应包含完整的产品信息和链接。

#### Scenario: 显示网站信息

- **WHEN** 系统渲染 AI 聊天工具列表
- **THEN** 每个网站项显示：网站名称、图标（如果有）、简短描述、官方链接

#### Scenario: 链接可访问

- **WHEN** 用户点击 AI 聊天工具的链接
- **THEN** 链接指向正确的官方地址，可正常访问
