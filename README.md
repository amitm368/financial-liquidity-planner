# Financial Liquidity Planner

Financial Liquidity Planner is a web application designed to help users manage their financial liquidity effectively. The application allows users to input and track their financial data, visualize it through charts, and plan for future financial needs.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Features

- **Data Input**: Easily input your financial data through an intuitive interface.
- **Real-Time Updates**: View real-time updates to your financial plan.
- **Charts and Graphs**: Visualize your financial data with dynamic charts.
- **Customizable Plans**: Create and customize multiple financial plans.

## Installation

To get started with the Financial Liquidity Planner, follow these steps:

1. **Clone the repository**
    ```bash
    git clone https://github.com/amitm368/financial-liquidity-planner.git
    cd financial-liquidity-planner
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Run the application**
    ```bash
    npm run dev
    ```

4. **Build the application for production**
    ```bash
    npm run build
    ```

## Usage

After starting the development server, open your browser and navigate to `http://localhost:3000`. You can now start using the Financial Liquidity Planner.

### Adding Financial Data

1. Navigate to the data input section.
2. Enter your financial details such as income, expenses, savings, and investments.
3. Save your entries to see real-time updates and visualizations.

### Viewing and Analyzing Data

- Use the chart section to view graphical representations of your financial data.

## Project Structure

Here is a brief overview of the project's structure:

```
financial-liquidity-planner
├─ .eslintrc.cjs
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 1a
│  │  │  └─ 2c763007cc870b1ed736b0c3b94d54ac306e75
│  │  ├─ 1d
│  │  │  └─ ee2a70a451c4f8841ea32a76e1b2def5238174
│  │  ├─ 24
│  │  │  └─ af0fc84a74db93c2f3d1b2cc12dac4142e85e2
│  │  ├─ 28
│  │  │  └─ ad8bb2237187783f6463fbffe6f1861f8bbb5a
│  │  ├─ 2e
│  │  │  └─ d98ef62f7e4786b9b1c29d98802a4328926e73
│  │  ├─ 4f
│  │  │  └─ a84aa19dd0edb452c5ca3b22497c6ac6ea2dee
│  │  ├─ 97
│  │  │  └─ 5c59b143785aeac8167db0dfa3d17556851f35
│  │  ├─ a1
│  │  │  └─ 5167cd9fbe101316608e6878786756fb0c6b1c
│  │  ├─ b7
│  │  │  └─ 3238cb373f4f60f3b0c763efa22198e8d672a3
│  │  ├─ e1
│  │  │  └─ 9e6ca0039d8a4d00110364123c55ddbdfeddda
│  │  ├─ ee
│  │  │  └─ eeb4f9cc2a39efcf88b5fcd99c77b4d25f5135
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-0340fce6b814ea88af5b6f447ebd918e21b8be5e.idx
│  │     ├─ pack-0340fce6b814ea88af5b6f447ebd918e21b8be5e.pack
│  │     └─ pack-0340fce6b814ea88af5b6f447ebd918e21b8be5e.rev
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  ├─ main
│     │  └─ master
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     └─ master
│     └─ tags
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ icon.png
│  │  └─ styles.css
│  ├─ cells.ts
│  ├─ chart.ts
│  ├─ getColumns.ts
│  ├─ getRows.ts
│  ├─ helpers.ts
│  ├─ index.css
│  ├─ interfaces.ts
│  ├─ LiquidityPlanner.tsx
│  ├─ main.tsx
│  ├─ plannerOutputVariables.ts
│  └─ rawData.ts
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```
