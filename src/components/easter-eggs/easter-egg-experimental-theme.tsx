"use client";

import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { useTranslation } from "@/lib/i18n/i18n-context";

const UNLOCK_CLICKS = 7;
const STORAGE_KEY = "experimental-unlocked";

// Module-level state
let _experimentalUnlocked = false;
let _justUnlocked = false;
let _clickCount = 0;

type State = { experimentalUnlocked: boolean; justUnlocked: boolean };
const listeners: Array<(s: State) => void> = [];

function dispatch() {
  listeners.forEach((l) => l({ experimentalUnlocked: _experimentalUnlocked, justUnlocked: _justUnlocked }));
}

export function registerProfileClick() {
  if (_experimentalUnlocked) return;
  _clickCount++;
  if (_clickCount >= UNLOCK_CLICKS) {
    _experimentalUnlocked = true;
    _justUnlocked = true;
    localStorage.setItem(STORAGE_KEY, "true");
    dispatch();
    setTimeout(() => {
      _justUnlocked = false;
      dispatch();
    }, 1200);
  }
}

export function useEasterEgg() {
  const [state, setState] = useState<State>({ experimentalUnlocked: _experimentalUnlocked, justUnlocked: _justUnlocked });

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "true") {
      _experimentalUnlocked = true;
      setState({ experimentalUnlocked: true, justUnlocked: false });
    }
    listeners.push(setState);
    return () => {
      const i = listeners.indexOf(setState);
      if (i > -1) listeners.splice(i, 1);
    };
  }, []);

  return state;
}

export function EasterEggExperimentalTheme() {
  const { justUnlocked } = useEasterEgg();
  const { t } = useTranslation();

  useEffect(() => {
    if (!justUnlocked) return;
    toast({
      title: t("EASTER_EGG_EXPERIMENTAL_TITLE"),
      description: t("EASTER_EGG_EXPERIMENTAL_DESC"),
    });
  }, [justUnlocked]);

  return null;
}
