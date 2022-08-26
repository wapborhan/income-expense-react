import React from "react";
import BarChart from "./BarChart";
import Summary from "./Summary";

const Dashboard = (props) => {
  document.title = "Dashboard - SR Book";
  return (
    <section>
      <div className="sw">
        <Summary data={props.alldata} />
        <BarChart />
      </div>
    </section>
  );
};

export default Dashboard;
