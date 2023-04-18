## DeleteNodeModules

DeleteNodeModules 是一个用于清理工作目录中所有多余的 node_modules 文件夹的 Node.js 脚本。

### 安装

#### 全局安装

#### npm

```bash
npm install -g @h7ml/deletenodemodules
```

#### yarn

```bash
yarn global add @h7ml/deletenodemodules
```

#### pnpm

```bash
pnpm install -g @h7ml/deletenodemodules
```

#### 局部安装

```bash
npm install @h7ml/deletenodemodules
```

#### 使用方法

全局安装后，在命令行中输入 `deletenodemodules` 命令即可运行脚本：

```bash
deletenodemodules
```

脚本将在工作目录中查找所有的 `node_modules` 文件夹，并删除它们。

### 开发

如果你想要对 `DeleteNodeModules` 进行开发或进行本地测试，则可以从 `GitHub` 上将项目克隆到本地：

```bash
git clone https://github.com/h7ml/DeleteNodeModules.git
```

#### 安装依赖

```bash
npm install
```

#### 运行脚本

```bash
npm run start
```

#### 构建脚本

```bash
npm run build
```

### 许可证`MIT`

详见 [LICENSE](./LICENSE) 文件。
