import { Dispatch, SetStateAction, useEffect, useState } from "react";

let elementId = 0;
let listeners: Dispatch<SetStateAction<number>>[] = []

export function useElementID(): [number, (newID: number) => void] {
  const setElementId = useState(elementId)[1];

  const setID = (newID: number) => {
    elementId = newID;

    for (const listener of listeners) {
      listener(elementId);
    }
  }
  
  useEffect(() => {
    listeners.push(setElementId);
    return () => {
      listeners = listeners.filter((li) => li !== setElementId);
    };
  }, [setElementId]);

  return [elementId, setID];
}