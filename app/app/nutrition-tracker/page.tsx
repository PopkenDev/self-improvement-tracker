"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";

import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "@/components/ui/modal";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const NutritionTrackerPage = () => {
  const [protein, setProtein] = useState({
    percentage: 0,
    grams: 180,
    total: 200,
  });
  const [carbs, setCarbs] = useState({
    percentage: 0,
    grams: 320,
    total: 350,
  });
  const [fat, setFat] = useState({
    percentage: 0,
    grams: 80,
    total: 100,
  });
  const [openModal, setOpenModal] = useState(false);

  const targetPercentageProtein = (
    (protein.grams / protein.total) *
    100
  ).toFixed();
  const targetPercentageCarbs = ((carbs.grams / carbs.total) * 100).toFixed();
  const targetPercentageFat = ((fat.grams / fat.total) * 100).toFixed();

  return (
    <main className="flex flex-col justify-center p-4">
      <section className="grid h-fit grid-cols-3 gap-x-2">
        <div className="h-fit">
          <div className="relative">
            <svg width="100%" height="100%" viewBox="0 0 42 42">
              <circle
                cx="21"
                cy="21"
                r="15.91549430918954"
                fill="transparent"
                stroke="rgba(4, 120, 87, 0.2)"
                strokeWidth="4"
              ></circle>
              <circle
                cx="21"
                cy="21"
                r="15.91549430918954"
                fill="transparent"
                stroke="rgb(5 150 105)"
                strokeWidth="4"
                strokeDasharray={`${100 - Number(targetPercentageCarbs)} ${Number(targetPercentageCarbs)}`}
                strokeDashoffset="25"
                strokeLinecap="round"
              ></circle>
            </svg>
            <div
              className={`text-md absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center font-semibold text-white ${font.className}`}
            >
              <span>{100 - Number(targetPercentageCarbs)}%</span>
              <span className="text-xs">Carbs</span>
            </div>
          </div>
          <p className={`text-center text-xs text-white ${font.className}`}>
            {carbs.grams}g left
          </p>
        </div>
        <div className="h-fit">
          <div className="relative">
            <svg width="100%" height="100%" viewBox="0 0 42 42">
              <circle
                cx="21"
                cy="21"
                r="15.91549430918954"
                fill="transparent"
                stroke="rgba(4, 120, 87, 0.2)"
                strokeWidth="4"
              ></circle>
              <circle
                cx="21"
                cy="21"
                r="15.91549430918954"
                fill="transparent"
                stroke="rgb(5 150 105)"
                strokeWidth="4"
                strokeDasharray={`${100 - Number(targetPercentageProtein)} ${Number(targetPercentageProtein)}`}
                strokeDashoffset="25"
                strokeLinecap="round"
              ></circle>
            </svg>
            <div
              className={`text-md absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center font-semibold text-white ${font.className}`}
            >
              <span>{100 - Number(targetPercentageProtein)}%</span>
              <span className="text-xs">Protein</span>
            </div>
          </div>
          <p className={`text-center text-xs text-white ${font.className}`}>
            {protein.grams}g left
          </p>
        </div>
        <div className="h-fit">
          <div className="relative">
            <svg width="100%" height="100%" viewBox="0 0 42 42">
              <circle
                cx="21"
                cy="21"
                r="15.91549430918954"
                fill="transparent"
                stroke="rgba(4, 120, 87, 0.2)"
                strokeWidth="4"
              ></circle>
              <circle
                cx="21"
                cy="21"
                r="15.91549430918954"
                fill="transparent"
                stroke="rgb(5 150 105)"
                strokeWidth="4"
                strokeDasharray={`${100 - Number(targetPercentageFat)} ${Number(targetPercentageFat)}`}
                strokeDashoffset="25"
                strokeLinecap="round"
              ></circle>
            </svg>
            <div
              className={`text-md absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center font-semibold text-white ${font.className}`}
            >
              <span>{100 - Number(targetPercentageFat)}%</span>
              <span className="text-xs">Fat</span>
            </div>
          </div>
          <p className={`text-center text-xs text-white ${font.className}`}>
            {fat.grams}g left
          </p>
        </div>
      </section>
      <Button
        type="button"
        variant="default"
        className="absolute bottom-4 right-4"
      >
        <span
          className="flex cursor-pointer items-center gap-x-2"
          onClick={() => setOpenModal(true)}
        >
          <FontAwesomeIcon icon={faPlus} className="text-white/70" />
          Add meal
        </span>
      </Button>
      {openModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <div></div>
        </Modal>
      )}
    </main>
  );
};

export default NutritionTrackerPage;
