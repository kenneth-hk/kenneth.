export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { result } = req.body;
    globalThis.storedResult = { result };
    res.status(200).json({ message: '保存成功', result });
  } else {
    res.status(405).json({ message: '方法不允许' });
  }
}
