## Setup

```bash
$ npm init -y
```

```bash
$ npm install langchain @langchain/ollama
```

```bash
$ sudo apt install curl
$ curl -fsSL https://ollama.com/install.sh | sh
```

モデルはここで探して、pullしておく: https://ollama.com/search

```bash
$ ollama pull llama3.3
```

GPUオフロードは、環境が整っていれば自動的に行われるようだ。

## Code

```typescript
import { Ollama } from "@langchain/ollama";

const model = new Ollama({
  model: "llama3.3", // 使用するモデル (事前に `ollama pull llama3` で取得)
});

const inputText = "日本の首都はどこですか？";

async function run() {
  try {
    const response = await model.invoke(inputText);
    console.log("AIの応答:", response);
  } catch (error) {
    console.error("エラー:", error);
  }
}

run();
```

```bash
$ node index.js
AIの応答: 😊

The capital of Japan is Tokyo ().
```
