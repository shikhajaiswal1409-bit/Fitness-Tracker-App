import React, { useEffect, useState } from "react";
import { Typography, Box, IconButton } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

import {
  CardContainer,
  HeaderRow,
  StatsRow,
  StatBox,
  NetBox,
  StatusBadge,
  ProgressBar,
  AssistantContainer,
  AvatarCircle,
  ChatBubble,
  TypingDots,
  TopAccent,
  ActionButton
} from "./TodayPerformance.styles";

const TodayPerformance = ({
  gained,
  burned,
  net,
  status,
  suggestion,
  streak,
  netColor
}) => {

  const [isThinking, setIsThinking] = useState(true);

  // 🎤 Speak function
  const speak = (text) => {
    if (!window.speechSynthesis) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  // 🤖 Thinking effect
  useEffect(() => {
    setIsThinking(true);

    const timer = setTimeout(() => {
      setIsThinking(false);
      if (suggestion) speak(suggestion);
    }, 1200);

    return () => clearTimeout(timer);
  }, [suggestion]);

  // 📊 Progress
  const progress = Math.min(100, Math.max(0, 50 + net / 10));

  // 🎯 Action
  const getAction = () => {
    if (status === "OFF TRACK") {
      return net > 0 ? "Go for a walk 🚶" : "Eat something 🍗";
    }
    return "Keep it up 💪";
  };

  return (
    <CardContainer>

      <TopAccent />

      {/* HEADER */}
      <HeaderRow>
        <WhatshotIcon sx={{ color: "#f97316" }} />
        <Typography fontSize={22} fontWeight={700}>
          Today Performance
        </Typography>
      </HeaderRow>

      {/* STATS */}
      <StatsRow>
        <StatBox>
          <Typography fontSize={13} color="text.secondary">
            Calories Gained
          </Typography>
          <Typography fontSize={24} fontWeight={700}>
            {gained} kcal
          </Typography>
        </StatBox>

        <StatBox>
          <Typography fontSize={13} color="text.secondary">
            Calories Burned
          </Typography>
          <Typography fontSize={24} fontWeight={700}>
            {burned} kcal
          </Typography>
        </StatBox>
      </StatsRow>

      {/* NET */}
      <NetBox>
        <Typography color="text.secondary">
          Net Calories
        </Typography>

        <Typography fontSize={24} fontWeight={800} color={netColor}>
          {net > 0 ? "+" : ""}
          {net} kcal
        </Typography>
      </NetBox>

      {/* PROGRESS */}
      <ProgressBar progress={progress} />

      {/* STATUS */}
      <StatusBadge status={status}>
        {status}
      </StatusBadge>

      {/* 🤖 AI Assistant */}
      {suggestion && (
        <AssistantContainer>

          <AvatarCircle>⚡</AvatarCircle>

          <Box>

            {isThinking ? (
              <TypingDots>
                <span></span>
                <span></span>
                <span></span>
              </TypingDots>
            ) : (
              <>
                <ChatBubble>
                  {suggestion}

                  <IconButton
                    size="small"
                    onClick={() => speak(suggestion)}
                  >
                    <VolumeUpIcon fontSize="small" />
                  </IconButton>
                </ChatBubble>

                <ActionButton>
                  {getAction()}
                </ActionButton>
              </>
            )}

          </Box>

        </AssistantContainer>
      )}

      {/* 🔥 STREAK */}
      <Box display="flex" alignItems="center" gap={1}>
        <WhatshotIcon sx={{ color: "#f97316" }} />
        <Typography fontWeight={600}>
          {streak} day streak
        </Typography>
      </Box>

    </CardContainer>
  );
};

export default TodayPerformance;