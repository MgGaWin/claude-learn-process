<div align="center">

# 📚 Claude Learn Process

**学习过程可视化 · Remotion 视频演示 + Claude Code 自定义技能**

[![Version](https://img.shields.io/github/v/release/MgGaWin/claude-learn-process?style=flat-square&label=Version&color=blue)](https://github.com/MgGaWin/claude-learn-process/releases)
[![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20macOS%20%7C%20Linux-0078d4?style=flat-square&logo=visualstudiocode)]()
[![License](https://img.shields.io/github/license/MgGaWin/claude-learn-process?style=flat-square&color=green)](LICENSE)
[![Stars](https://img.shields.io/github/stars/MgGaWin/claude-learn-process?style=flat-square&color=yellow)]()

---

[功能特性](#-功能特性) · [快速开始](#-快速开始) · [场景系统](#-场景系统) · [Claude Code 技能](#-claude-code-技能) · [许可证](#-许可证)

</div>

## ✨ 功能特性

| 功能 | 说明 |
|:---|:---|
| 🎬 **章节视频** | 基于 Remotion 的程序化视频生成，按章节组织 |
| 🧠 **认知场景** | 多场景切换：沉思、含义解读、卡片展示、舞台介绍 |
| 🎨 **帧精确控制** | `useCurrentFrame` + `interpolate` 实现逐帧动画 |
| 🛠️ **Claude Code 技能** | 内置 `remotion-video-presentation` 技能，一键生成演示视频 |
| 📦 **TypeScript** | 全类型安全的组件开发 |

## 🚀 快速开始

```bash
git clone https://github.com/MgGaWin/claude-learn-process.git
cd claude-learn-process
npm install
```

### 预览与渲染

```bash
# 预览（Remotion Studio）
npm start

# 渲染 MP4
npm run render
```

渲染输出：`out/chapter1.mp4`

## 🎭 场景系统

```
Chapter1
├── StageIntro      → 章节开场介绍
├── Scene0Cogitating → 沉思/思考动画
├── Scene1Meaning   → 含义解读场景
└── Scene2Cards     → 卡片展示场景
```

| 场景 | 效果 |
|------|------|
| `StageIntro` | 章节标题渐入，建立上下文 |
| `Scene0Cogitating` | 沉思动画，营造思考氛围 |
| `Scene1Meaning` | 概念含义的可视化解读 |
| `Scene2Cards` | 多卡片依次展示关键信息 |

## 🛠️ Claude Code 技能

项目包含 `skills/remotion-video-presentation/` 目录，这是一个 Claude Code 自定义技能：

- `SKILL.md` — 技能工作流定义
- `references/` — 参考资料

安装为 Claude Code 技能后，可通过对话驱动视频生成。

## 📁 项目结构

```
claude-learn-process/
├── src/
│   ├── index.ts              # Remotion 入口
│   ├── Root.tsx              # 根组件
│   ├── Chapter1.tsx          # 第一章组合
│   ├── scenes/               # 各场景组件
│   │   ├── StageIntro.tsx
│   │   ├── Scene0Cogitating.tsx
│   │   ├── Scene1Meaning.tsx
│   │   └── Scene2Cards.tsx
│   ├── components/           # 通用组件
│   └── styles/               # 样式
├── skills/
│   └── remotion-video-presentation/  # Claude Code 技能
└── package.json
```

## 🛠️ 技术栈

- **Remotion 4.0** — React 视频生成框架
- **React 18** — UI 组件
- **TypeScript** — 类型安全

## 📄 许可证

本项目基于 [MIT License](LICENSE) 开源。

---

<div align="center">

**如果觉得有用，请给个 ⭐ Star 支持一下！**

</div>
