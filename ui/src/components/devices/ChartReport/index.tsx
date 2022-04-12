import dayjs from "dayjs";
import React from "react";
import { Chart, Dataset } from "react-rainbow-components";
import { Transaction } from "../../../interfaces/transaction";
import Header from "../../Header";
import "dayjs/locale/th"; // import locale
import { transactionList } from "../index.config";
export type ChartReportPropsType = {
  allTransaction: Transaction[] | undefined | "loading";
};
const ChartReport: React.FC<ChartReportPropsType> = ({ allTransaction }) => {
  const getArrayChartData = (
    allTransaction: Transaction[] | undefined | "loading",
    key: "temperature" | "moisture" | "soilMoisture" | "windSpeed"
  ) =>
    allTransaction === undefined || allTransaction === "loading"
      ? []
      : (allTransaction.map((item) => item[key]) as number[]);

  const getArrayChartLabel = (
    allTransaction: Transaction[] | undefined | "loading"
  ) =>
    allTransaction === undefined || allTransaction === "loading"
      ? []
      : allTransaction.map((item) =>
          dayjs(item.timestamp).format("HH:mm DD/MM/YYYY")
        );
  return (
    <>
      <Header title={"Transaction"} />
      <div className="rainbow-align-content_center">
        <Chart
          labels={getArrayChartLabel(allTransaction)}
          type="bar"
          className="rainbow-m-horizontal_xx-large rainbow-m-top_x-large"
        >
          {transactionList.map((chart) => (
            <Dataset
              key={chart.name}
              title={chart.label}
              values={getArrayChartData(allTransaction, chart.name)}
              backgroundColor={chart.chartColors}
            />
          ))}
        </Chart>
      </div>
    </>
  );
};

export default ChartReport;
