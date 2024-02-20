import React, { useRef, useState } from "react";
import circle from "../Assets/circle.png";
import cross from "../Assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);

  let titleRef = useRef(0);

  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross}' style="margin: 40px">>`;
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src='${circle}' style="margin: 40px">> `;
      data[num] = "o";
      setCount(++count);
    }
    checkWinner();
  };

  const checkWinner = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = ` Congratulations: <img src=${cross} style="height:80px; padding: 20px; margin-top: 20px;"> wins.`;
    } else {
      titleRef.current.innerHTML = ` Congartulations: <img src=${circle}  style="height:80px; padding: 20px; margin-top: 20px;"> wins`;
    }
  };

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = "Tic Tac Toe Game";
    box_array.map((e) => {
      e.current.innerHTML = "";
    });
  };

  return (
    <div className="text-center">
      <h1
        className="text-white text-6xl flex justify-center items-center"
        ref={titleRef}
      >
        Tic Tac Toe Game
      </h1>
      <div className="h-[500px] w-[490px] flex mx-auto mt-3 gap-2">
        <div className="">
          <div
            className="flex h-[150px] w-[160px] border-4 border-white bg-gray-500 cursor-pointer rounded my-2"
            onClick={(e) => {
              toggle(e, 0);
            }}
            ref={box1}
          ></div>
          <div
            className="flex h-[150px] w-[160px] border-4 border-white bg-gray-500 cursor-pointer rounded my-2"
            onClick={(e) => {
              toggle(e, 1);
            }}
            ref={box2}
          ></div>
          <div
            className="flex h-[150px] w-[160px] border-4 border-white bg-gray-500 cursor-pointer rounded my-2"
            onClick={(e) => {
              toggle(e, 2);
            }}
            ref={box3}
          ></div>
        </div>
        <div className="row2">
          <div
            className="flex h-[150px] w-[160px] border-4 border-white bg-gray-500 cursor-pointer rounded my-2"
            onClick={(e) => {
              toggle(e, 3);
            }}
            ref={box4}
          ></div>
          <div
            className="flex h-[150px] w-[160px] border-4 border-white bg-gray-500 cursor-pointer rounded my-2"
            onClick={(e) => {
              toggle(e, 4);
            }}
            ref={box5}
          ></div>
          <div
            className="flex h-[150px] w-[160px] border-4 border-white bg-gray-500 cursor-pointer rounded my-2"
            onClick={(e) => {
              toggle(e, 5);
            }}
            ref={box6}
          ></div>
        </div>
        <div className="row3">
          <div
            className="flex h-[150px] w-[160px] border-4 border-white bg-gray-500 cursor-pointer rounded my-2"
            onClick={(e) => {
              toggle(e, 6);
            }}
            ref={box7}
          ></div>
          <div
            className="flex h-[150px] w-[160px] border-4 border-white bg-gray-500 cursor-pointer rounded my-2"
            onClick={(e) => {
              toggle(e, 7);
            }}
            ref={box8}
          ></div>
          <div
            className="flex h-[150px] w-[160px] border-4 border-white bg-gray-500 cursor-pointer rounded my-2"
            onClick={(e) => {
              toggle(e, 8);
            }}
            ref={box9}
          ></div>
        </div>
      </div>
      <button
        className="w-60 h-14 cursor-pointer bg-slate-500 text-white text-2xl font-bold rounded-3xl"
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
