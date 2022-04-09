import React from "react";
import { LoadingShape } from "react-rainbow-components";
import { Transaction } from "../../../interfaces/transaction";
import { CardTransaction, LabelIcon } from "./index.style";

export type CardSensorPropsType = {
  icon: React.ReactNode;
  label: string;
  name: keyof Pick<
    Transaction,
    "temperature" | "moisture" | "soilMoisture" | "windSpeed"
  >;
  unit: string;
  bg: string;
  chartColors: string;
  latestTransaction: Transaction | undefined | "loading";
};

const CardSensor: React.FC<CardSensorPropsType> = ({
  name,
  bg,
  icon,
  label,
  latestTransaction,
  unit,
}) => {
  return (
    <CardTransaction
      key={name}
      style={{
        backgroundImage: bg,
      }}
    >
      <LabelIcon
        style={{
          alignItems: "flex-end",
        }}
      >
        {icon}
        <p>{label}</p>
      </LabelIcon>
      <h1>
        {latestTransaction === "loading" ? (
          <div
            className="rainbow-m-vertical_medium"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <LoadingShape
              shape={"rounded-rect"}
              variant={"solid"}
              style={{
                margin: 4,
                width: "30%",
              }}
            />
          </div>
        ) : latestTransaction ? (
          `${latestTransaction[name]} ${unit}`
        ) : (
          "-"
        )}
      </h1>
    </CardTransaction>
  );
};

export default CardSensor;
