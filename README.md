# Ming 一款简约而不简单的主题

> 基于 [halo-theme-Ying](https://github.com/MagicBreeze/halo-theme-Ying) 主题优化修改而来

一款简约而不简单的主题，移植于 Typecho 主题 [Ying](https://github.com/Siooooooooo/Ying)，部分样式参考 [优世界](https://usj.cc/)

专注内容分享记录，目前正在持续优化中

[主题预览](https://11ao.cn/)

---

## 🆚 对比原主题优化内容

### 修复问题

| 问题 | 原主题 | Ming 主题 |
|------|--------|----------|
| **背景图片拉伸** | 样式 1 使用 `background-size: cover` 导致纹理图片变形 | 改为 `background-repeat: repeat` 平铺模式，纹理正常显示 |
| **友链 Logo 不显示** | 依赖未加载的 jQuery lazyload 插件，Logo 显示为占位图 | 移除懒加载依赖，使用浏览器原生 `loading="lazy"` |
| **资源路径错误** | 硬编码 `theme-Ying` 路径 | 统一改为 `theme-Ming` |

### 功能调整

| 调整项 | 说明 |
|--------|------|
| **精简模块** | 删除"个人装备"模块，减少不必要的设置项和模板文件 |
| **背景设置优化** | 简化背景选项逻辑，纯色模式固定为 `#f5f5f5` |
| **页脚信息** | 更新版权信息为 Ming，链接改为 https://11ao.cn |

### 代码质量

- ✅ 修复所有模板中的主题路径引用
- ✅ 移除了未使用的懒加载脚本依赖
- ✅ 精简了 35+ 行设置代码
- ✅ 删除了 equipment.html 模板及相关配置

---

## 特性

- **极简设计**: 白色简约风格，聚焦内容本身
- **响应式布局**: 完美适配移动端、平板和桌面端
- **暗色模式**: 支持黑夜/白天模式一键切换
- **性能优化**: 精简代码，减少不必要的依赖

---

## 功能支持

| 功能 | 插件/来源 |
|------|----------|
| 文章搜索 | [plugin-search-widget](https://github.com/halo-sigs/plugin-search-widget) |
| RSS 订阅 | [plugin-feed](https://github.com/halo-dev/plugin-feed) |
| 动态瞬间 | [plugin-moments](https://github.com/halo-sigs/plugin-moments) |
| 评论系统 | [plugin-comment-widget](https://github.com/halo-sigs/plugin-comment-widget) |
| 友情链接 | [plugin-links](https://github.com/halo-sigs/plugin-links) |
| 回忆相册 | [plugin-photos](https://github.com/halo-sigs/plugin-photos) |

---

## 背景模式

主题支持三种背景显示模式：

1. **纯色** - `#f5f5f5` 浅灰色背景
2. **图片** - 自定义背景图片（cover 拉伸模式）
3. **样式 1** - texture.png 纹理平铺（repeat 模式）

---

## 安装方式

### 方式一：应用市场

前往 Halo 官网应用市场下载并安装

### 方式二：GitHub 安装

```bash
# 下载主题包
git clone https://github.com/ming2tap/halo-theme-Ming.git

# 或将 halo-theme-Ming.zip 上传到 themes 目录
```

### 方式三：直接上传

在 Halo 后台 → 主题 → 安装主题，上传 `halo-theme-Ming.zip`

---

## 版权相关

- 本主题免费，请勿用于二次分发或销售！
- 基于 GPL-3.0 协议开源

---

## 致谢

- 原主题作者：[MagicBreeze](https://github.com/MagicBreeze)
- Typecho Ying 主题：[Siooooooooo](https://github.com/Siooooooooo/Ying)

---

## 更新日志

### v2.0.4 (2026-05-27)

#### 性能优化

| 类别 | 内容 | 说明 |
|------|------|------|
| **字体预加载** | 关键字体资源预加载 | 对高频使用的中文字体分包添加`preload`，减少首次渲染延迟 |
| **CSS 异步加载** | 非关键 CSS 延迟加载 | `output.css`和 `main.css` 使用`media="print"`技巧，避免阻塞渲染 |
| **JS 加载顺序** | 优化依赖顺序 | Alpine.js 必须在 init.js 之前加载，确保依赖可用 |
| **图片布局稳定** | 添加尺寸声明 | 所有图片添加 `width/height`，防止布局偏移（CLS） |
| **图片尺寸优化** | 优化 sizes 属性 | 文章缩略图 `sizes="44px"`，动态图片`sizes="720px"`，避免加载过大图片 |
| **Loading 优化** | SVG 替代 GIF | 占位图从 141KB GIF 改为 0.5KB SVG，减少 99.6% 体积 |
| **内容可见性** | CSS 性能优化 | 文章图片添加`content-visibility: auto`和`contain-intrinsic-size`，提升滚动性能 |
| **DNS 预解析优化** | preconnect 改进 | 添加`crossorigin`属性，提升外部资源连接速度 |

**性能提升预估**：
- 首次内容绘制（FCP）提升 15-25%
- 累计布局偏移（CLS）< 0.1
- loading 占位图体积减少 99.6%（141KB → 0.5KB）

---

### v2.0.3 (2026-05-23)

#### 性能优化

| 类别 | 内容 | 说明 |
|------|------|------|
| **资源本地化** | Alpine.js 改为本地引用 | 移除 CDN 依赖，45KB 本地加载，避免外部请求失败 |
| **图片优化** | 首屏图片优先级 | 头像和第一篇文章缩略图添加 `fetchpriority="high"` |
| **图片解码** | 异步解码 | 所有图片添加 `decoding="async"`，避免阻塞渲染 |
| **DNS 预解析** | 添加预连接提示 | 保留 `dns-prefetch` 和 `preconnect` 用于字体等外部资源 |

---

### v2.0.2 (2026-05-23)

#### 性能优化

| 类别 | 内容 | 说明 |
|------|------|------|
| **性能** | output.css 体积验证 | gzip 压缩后仅 21.1KB（压缩率 79%），无需进一步优化 |

---

### v2.0.1 (2026-05-23)

#### 优化修复

| 类别 | 内容 | 说明 |
|------|------|------|
| **Bug** | 修复默认字体路径引用错误 | `settings.yaml` 中遗留的 `theme-Ying` 路径改为 `theme-Ming` |
| **Bug** | 引入 Alpine.js CDN | `moments.html` 依赖 Alpine.js 但未加载，现已通过 CDN 引入 |
| **Bug** | 实现图片懒加载 | `lazy/` 目录为空导致 `lazyload` class 无效，现已用 IntersectionObserver 实现 |
| **Bug** | 修复 PJAX 过度拦截链接 | 原 `elements: 'a'` 会拦截外部链接、锚点等，现排除 `http://`、`https://`、`#`、`javascript:`、`target="_blank"` |
| **性能** | 暗色模式防闪烁 | 在 `<head>` 中内联执行暗色模式检测，避免页面渲染后闪烁 |
| **性能** | pjax.min.js 异步加载 | 原同步加载阻塞首屏渲染，现添加 `defer` |
| **性能** | scroll 事件节流 | 返回顶部按钮的 scroll 监听改为 rAF 节流 |
| **暗色模式** | 修复暗色模式下背景覆盖 | 内联 `background-image` 在暗色模式下被强制重置，避免图片背景刺眼 |
| **代码质量** | 清理 10 个模板中的废弃参数 | 移除 Ying 主题遗留的 `hero`/`footer` 参数 |
| **代码质量** | 删除未使用的 CSS 类 | `.hbefore`、`.postnext` 在模板中无任何引用 |
| **代码质量** | 提取时间格式化片段 | `index.html`、`post.html` 中重复的时间格式逻辑提取到 `modules/time.html` |

#### 性能现状

| 指标 | 数值 | 说明 |
|------|------|------|
| **output.css** | 21.1KB (gzip) | 原始 102KB，gzip 压缩率 79%，加载性能优秀 |
| **alpine.js** | 45KB (本地) | 已本地化，无 CDN 依赖 |
| **暗色模式** | ✅ 无闪烁 | 在 `<head>` 中内联检测，避免渲染后闪烁 |
| **图片加载** | ✅ 懒加载 | 使用 IntersectionObserver，首屏图片高优先级 |
| **代码分割** | ✅ 已优化 | pjax.min.js 异步加载，不阻塞首屏 |

---

## 链接

- [GitHub 仓库](https://github.com/ming2tap/halo-theme-Ming)
- [问题反馈](https://github.com/ming2tap/halo-theme-Ming/issues)
- [作者网站](https://11ao.cn)
