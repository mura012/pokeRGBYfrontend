import { Button, NumberInput } from "@mantine/core";
import { PokemonSearch } from "components/pokemonsSearch";
import { Layout } from "layout";
import { useReducer, useState } from "react";
import { PokemonType } from "types/pokemon";

type State = {
  errorMessage: string;
  currentLevel: number;
  targetLevel: number;
  needLevel: number;
  levelType: number;
};

const initialState: State = {
  errorMessage: "",
  currentLevel: 1,
  targetLevel: 1,
  needLevel: 0,
  levelType: 0,
};

type Action =
  | {
      type: "error";
      error: string;
    }
  | {
      type: "current";
      current: number;
    }
  | {
      type: "target";
      target: number;
    }
  | {
      type: "need";
      need: number;
    }
  | {
      type: "levelType";
      levelType: number;
    };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "error":
      return {
        ...state,
        errorMessage: action.error,
      };
    case "current":
      return {
        ...state,
        currentLevel: action.current,
      };
    case "target":
      return {
        ...state,
        targetLevel: action.target,
      };
    case "need":
      return {
        ...state,
        needLevel: action.need,
      };
    case "levelType":
      return {
        ...state,
        levelType: action.levelType,
      };
    default:
      throw new Error("設定されていないactionです");
  }
};

const Experience = ({ pokemonData }: { pokemonData: PokemonType }) => {
  const [selected, setSelected] = useState("");

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleEvolution = (select: string) => {
    const [level] = pokemonData.filter((pokemon) => pokemon.name === select);

    if (select === "") {
      dispatch({ type: "error", error: "ポケモンを選択してください" });
      return;
    }

    if (level.evolutionLevel === undefined) {
      dispatch({
        type: "error",
        error: "このポケモンは進化しないかレベルアップによる進化をしません",
      });
      return;
    }
    dispatch({ type: "target", target: level.evolutionLevel });
  };

  const handleSearch = (
    targetPokemon: string,
    current: number,
    target: number
  ) => {
    dispatch({ type: "error", error: "" });
    if (targetPokemon === "") {
      dispatch({ type: "error", error: "ポケモンを選択してください" });
      return;
    }

    if (target > 100) {
      dispatch({ type: "error", error: "目標のレベルを100以下にしてください" });
      return;
    }
    if (current > target || current === target) {
      dispatch({
        type: "error",
        error: "現在のレベル<目標のレベルにして下さい",
      });
      return;
    }

    const [experience] = pokemonData.filter(
      (pokemon) => pokemon.name === targetPokemon
    );
    if (experience === undefined) return;
    dispatch({ type: "levelType", levelType: experience.point });
    const level = (point: number) => {
      if (point === 105 && current === 1) {
        const need = target ** 3 * 1.2 - 15 * target ** 2 + 100 * target - 140;
        dispatch({ type: "need", need: Math.floor(need) });

        return;
      }
      if (point === 105) {
        const need =
          target ** 3 * 1.2 -
          15 * target ** 2 +
          100 * target -
          140 -
          (current ** 3 * 1.2 - 15 * current ** 2 + 100 * current - 140);
        dispatch({ type: "need", need: Math.floor(need) });

        return;
      }
      if (current === 1) {
        const need = target ** 3 * (point / 100);
        dispatch({ type: "need", need: Math.floor(need) });
      } else {
        const need = target ** 3 * (point / 100) - current ** 3 * (point / 100);
        dispatch({ type: "need", need: Math.floor(need) });
      }
    };
    level(experience.point);
  };

  return (
    <Layout title="経験値計算">
      <div className="relative m-auto mt-24 flex w-80 flex-col items-center justify-center bg-gray-100 pb-7 pt-7 shadow-md">
        <div className="flex">
          <PokemonSearch
            selected={selected}
            setSelected={setSelected}
            pokemonData={pokemonData}
          />
          <input
            className="flex w-6 items-center text-right"
            value={state.levelType}
            disabled
          />
          <p className="flex items-center">万タイプ</p>
        </div>
        <label>
          <p className="mb-0 flex justify-center">現在のレベル</p>
          <NumberInput
            placeholder="1~99"
            type="number"
            value={state.currentLevel}
            onChange={(e: number) => {
              dispatch({ type: "current", current: e });
            }}
            min={1}
            stepHoldDelay={500}
            stepHoldInterval={100}
          />
        </label>
        <label>
          <p className="mb-0 flex justify-center">目標のレベル</p>
          <div className="relative">
            <NumberInput
              placeholder="2~100"
              type="number"
              value={state.targetLevel}
              onChange={(e: number) => {
                dispatch({ type: "target", target: e });
              }}
              min={1}
              stepHoldDelay={200}
              stepHoldInterval={50}
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
        </label>
        <Button
          radius="xl"
          size="md"
          color="dark"
          onClick={() => {
            handleSearch(selected, state.currentLevel, state.targetLevel);
          }}
          className="absolute right-4 bottom-4 py-2 px-3"
        >
          検索
        </Button>
        <div className="pb-6">
          {state.errorMessage ? (
            <p className="mt-4 text-sm text-red-500 after:content-['！']">
              {state.errorMessage}
            </p>
          ) : (
            <>
              <p className="mb-0 mt-4">目標のレベルに必要な経験値は</p>
              <p className="mt-0">{`約${state.needLevel}です`}</p>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const data = await fetch(
    "https://pokemonrgbytoolsbackend.onrender.com/api/pokemon"
  );
  const pokemonData = await data.json();

  return {
    props: {
      pokemonData,
      fallback: false,
    },
  };
};

export default Experience;
