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
