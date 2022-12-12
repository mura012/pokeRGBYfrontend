export const useTypeCheck = () => {
  const typeCheck = (type: string | undefined) => {
    console.log(type);
    if (type === undefined) return;
    if (type === "ノーマル") return "gray-300";
    if (type === "ほのお") return "red-500";
    if (type === "みず") return "blue-600";
    if (type === "でんき") return "yellow-500";
    if (type === "くさ") return "green-600";
    if (type === "エスパー") return "pink-500";
    if (type === "かくとう") return "red-900";
    if (type === "どく") return "purple-700";
    if (type === "じめん") return "orange-400";
    if (type === "ひこう") return "sky-400";
    if (type === "ドラゴン") return "indigo-600";
    if (type === "むし") return "green-300";
    if (type === "いわ") return "orange-800";
    if (type === "ゴースト") return "purple-800";
    if (type === "こおり") return "blue-300";
  };
  return { typeCheck };
};
