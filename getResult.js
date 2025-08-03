export default function handler(req, res) {
  const data = globalThis.storedResult || { result: "暂无数据" };
  res.status(200).json(data);
}
