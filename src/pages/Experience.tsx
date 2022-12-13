import { Button, Input } from "@mantine/core";
import { Header } from "components/header";
import { PokemonPullDown } from "components/pokemonsPullDown";
import { useState } from "react";

const Experience = () => {
  const [selected, setSelected] = useState("");

  const handleClick = () => {};

  return (
    <div>
      <Header />
      <div className="relative m-auto mt-24 flex w-80 flex-col items-center justify-center bg-gray-100 p-3 shadow-md">
        <div className="flex">
          <PokemonPullDown selected={selected} setSelected={setSelected} />
          <p>100万タイプ</p>
        </div>
        <p>現在のレベル</p>
        <Input />
        <p>目標のレベル</p>
        <Input />
        <Button onClick={handleClick} className="absolute right-2 bottom-2 ">
          検索
        </Button>
        <p className="mb-0">目標のレベルに必要な経験値は</p>
        <p className="mt-0 pb-5">１００００です</p>
      </div>
    </div>
  );
};

export default Experience;
