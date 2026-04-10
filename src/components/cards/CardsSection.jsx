import React, { useRef } from "react";
import { useSelector } from "react-redux";

import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import {
  SectionContainer,
  SectionHeader,
  SectionTitle,
  NavButtons,
  CardsContainer,
  ArrowButton
} from "./CardsSection.styles";

import ProgressCard from "./ProgressCard";
import { getTodayKey } from "../utils/dateUtils"; //  FIXED SOURCE

const CardsSection = () => {

  const scrollRef = useRef(null);
  const schedule = useSelector((state) => state.schedule);

  //  ALWAYS CORRECT FORMAT
  const todayKey = getTodayKey();

  //  SAFE DATA FETCH
  const activities = schedule?.[todayKey] || [];

  //  COUNTERS
  let exercise = 0;
  let meals = 0;
  let sleep = 0;

  activities.forEach((item) => {
    if (item.type === "exercise") exercise += 1;
    if (item.type === "meal") meals += 1;
    if (item.type === "sleep") sleep += Number(item.hours || 0);
  });

  //  TARGETS
  const targets = {
    exercise: 10,
    meals: 6,
    sleep: 8
  };

  //  SAFE PROGRESS CALC
  const calcProgress = (value, target) => {
    if (!target) return 0;
    return Math.min(100, Math.round((value / target) * 100));
  };

  //  SCROLL
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -300,
      behavior: "smooth"
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 300,
      behavior: "smooth"
    });
  };

  return (
    <SectionContainer>

      <SectionHeader>
        <SectionTitle>Today's Progress</SectionTitle>

        <NavButtons>
          <ArrowButton onClick={scrollLeft}>
            <ChevronLeftIcon />
          </ArrowButton>

          <ArrowButton onClick={scrollRight}>
            <ChevronRightIcon />
          </ArrowButton>
        </NavButtons>
      </SectionHeader>

      <CardsContainer ref={scrollRef}>

        <ProgressCard
          title="Exercise"
          icon={<FitnessCenterIcon sx={{ fontSize: 60, color: "#fff" }} />}
          value={exercise}
          unit="sets"
          target={targets.exercise}
          progress={calcProgress(exercise, targets.exercise)}
          type="exercise"
        />

        <ProgressCard
          title="Meals"
          icon={<RestaurantIcon sx={{ fontSize: 60, color: "#fff" }} />}
          value={meals}
          unit="meals"
          target={targets.meals}
          progress={calcProgress(meals, targets.meals)}
          type="meals"
        />

        <ProgressCard
          title="Sleep"
          icon={<BedtimeIcon sx={{ fontSize: 60, color: "#fff" }} />}
          value={sleep}
          unit="hrs"
          target={targets.sleep}
          progress={calcProgress(sleep, targets.sleep)}
          type="sleep"
        />

      </CardsContainer>
    </SectionContainer>
  );
};

export default CardsSection;