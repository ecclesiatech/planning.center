import React from "react";
import Symbol from "@planningcenter/symbol";
import planningCenter from "@planningcenter/icons/sprites/planning-center.svg";
import apps from "@planningcenter/icons/sprites/apps.svg";

let icons = { apps, "planning-center": planningCenter };

export default function({ symbol: s, ...platformProps }) {
  let [collection, symbol] = s.replace(".svg", "").split("#");

  return (
    <Symbol symbol={`${icons[collection]}#${symbol}`} {...platformProps} />
  );
}

//EX: <Icon symbol="apps#services-app" />