export const useTypeCheck = () => {
  const typeCheck = (type: string | undefined) => {
    console.log(type);
    if (type === undefined) return;
    if (type === "ノーマル") return "bg-gray-300";
    if (type === "ほのお") return "bg-red-500";
    if (type === "みず") return "bg-blue-600";
    if (type === "でんき") return "bg-yellow-500";
    if (type === "くさ") return "bg-green-600";
    if (type === "エスパー") return "bg-pink-500";
    if (type === "かくとう") return "bg-red-900";
    if (type === "どく") return "bg-purple-700";
    if (type === "じめん") return "bg-orange-400";
    if (type === "ひこう") return "bg-sky-400";
    if (type === "ドラゴン") return "bg-indigo-600";
    if (type === "むし") return "bg-green-300";
    if (type === "いわ") return "bg-orange-800";
    if (type === "ゴースト") return "bg-purple-800";
    if (type === "こおり") return "bg-blue-300";
  };
  return { typeCheck };
};
