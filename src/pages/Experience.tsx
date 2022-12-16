import { Button, NumberInput } from "@mantine/core";
import { Header } from "components/header";
import { PokemonSearch } from "components/pokemonsSearch";
import { PokemonData } from "mock/pokemons";
import Head from "next/head";
import { useState } from "react";

const Experience = () => {
  const [selected, setSelected] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [currentLevel, setCurrentLevel] = useState<number>(1);
  const [targetLevel, setTargetLevel] = useState<number>(1);
  const [needLevel, setNeedLevel] = useState<number>(0);
  const [levelType, setLevelType] = useState<number>(0);

  const handleEvolution = (select: string) => {
    const [level] = PokemonData.filter((pokemon) => pokemon.name === select);

    if (level.evolutionLevel === undefined) {
      alert("このポケモンは進化しないかレベルアップによる進化をしません。");
      return;
    }
    setTargetLevel(level.evolutionLevel);
  };

  const handleSearch = (
    targetPokemon: string,
    current: number,
    target: number
  ) => {
    setErrorMessage("");
    if (targetPokemon === "---" || targetPokemon === "") {
      setErrorMessage("ポケモンを選択してください");
      return;
    }
    if (current <= 0) {
      setErrorMessage("現在のレベルを1以上にしてください");
      return;
    }
    if (target > 100) {
      setErrorMessage("目標のレベルを100以下にしてください");
      return;
    }
    if (current > target || current === target) {
      setErrorMessage("現在のレベル<目標のレベルにして下さい");
      return;
    }

    const [experience] = PokemonData.filter(
      (pokemon) => pokemon.name === targetPokemon
    );
    if (experience === undefined) return;
    setLevelType(experience.point);
    const level = (point: number) => {
      if (point === 105 && current === 1) {
        const need = target ** 3 * 1.2 - 15 * target ** 2 + 100 * target - 140;
        setNeedLevel(Math.floor(need));
        return;
      }
      if (point === 105) {
        const need =
          target ** 3 * 1.2 -
          15 * target ** 2 +
          100 * target -
          140 -
          (current ** 3 * 1.2 - 15 * current ** 2 + 100 * current - 140);
        setNeedLevel(Math.floor(need));
        return;
      }
      if (current === 1) {
        const need = target ** 3 * (point / 100);
        setNeedLevel(Math.floor(need));
      } else {
        const need = target ** 3 * (point / 100) - current ** 3 * (point / 100);
        setNeedLevel(Math.floor(need));
      }
    };
    level(experience.point);
  };

  return (
    <div>
      <Head>
        <title>経験値計算</title>
      </Head>
      <Header />
      <div className="relative m-auto mt-24 flex w-96 flex-col items-center justify-center bg-gray-100 p-3 shadow-md">
        <div className="flex">
          <PokemonSearch selected={selected} setSelected={setSelected} />
          <input
            className="flex w-6 items-center text-right"
            value={levelType}
            disabled
          />
          <p>万タイプ</p>
        </div>
        <p>現在のレベル</p>
        <NumberInput
          placeholder="1~99"
          type="number"
          value={currentLevel}
          onChange={(e: number) => {
            setCurrentLevel(e);
          }}
        />
        <p>目標のレベル</p>
        <div className="relative">
          <NumberInput
            placeholder="2~100"
            type="number"
            value={targetLevel}
            onChange={(e: number) => {
              setTargetLevel(e);
            }}
          />
          <button
            onClick={() => {
              handleEvolution(selected);
            }}
            className="absolute right-7 top-3 cursor-pointer border-0 bg-white p-0 text-xs font-semibold text-black hover:bg-white"
          >
            進化レベル
          </button>
        </div>
        <Button
          onClick={() => {
            handleSearch(selected, currentLevel, targetLevel);
          }}
          className="absolute right-2 bottom-2"
        >
          検索
        </Button>
        <div className="pb-6">
          {errorMessage ? (
            <p>{errorMessage}</p>
          ) : (
            <>
              <p className="mb-0">目標のレベルに必要な経験値は</p>
              <p className="mt-0">{`約${needLevel}です`}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
