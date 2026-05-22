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

### 方式一：GitHub 安装

```bash
# 下载主题包
git clone https://github.com/ming2tap/halo-theme-Ming.git

# 或将 halo-theme-Ming.zip 上传到 themes 目录
```

### 方式二：直接上传

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

## 链接

- [GitHub 仓库](https://github.com/ming2tap/halo-theme-Ming)
- [问题反馈](https://github.com/ming2tap/halo-theme-Ming/issues)
