import styles from "./../../styles/Plan.module.scss";
import { assets } from "../../store/Assets";
import { useState } from "react";
import Heading from "../Heading";
import Box from "./Box";
import Toggle from "./Toggle";

const { iconArcade, iconAdvanced, iconPro } = assets;

const plans = [
  {
    name: "Arcade",
    monthly: "9",
    yearly: "90",
    icon: iconArcade,
  },
  {
    name: "Advanced",
    monthly: "12",
    yearly: "120",
    icon: iconAdvanced,
  },
  {
    name: "Pro",
    monthly: "15",
    yearly: "150",
    icon: iconPro,
  },
];

function Plan() {
  const [monthly, setMonthly] = useState(true);
  const [activePlan, setActivePlan] = useState("Arcade");

  function handleActive({ target }) {
    const { plan } = target.dataset;
    setActivePlan(plan);
  }

  function submitData() {
    const plan = plans.find((plan) => plan.name === activePlan);
    activePlan;
    const billed = monthly ? "Monthly" : "Yearly";
    const price = monthly ? plan.monthly : plan.yearly;
  }

  return (
    <>
      <section className={styles.section}>
        <Heading
          h1="Select your plan"
          text="You have the option of monthly or yearly billing."
        />

        {plans.map((plan, i) => {
          return (
            <Box
              key={i}
              icon={plan.icon}
              title={plan.name}
              price={monthly ? `$${plan.monthly}/mo` : `$${plan.yearly}/yr`}
              active={plan.name === activePlan ? true : false}
              onClick={handleActive}
            />
          );
        })}

        <Toggle setMonthly={setMonthly} />
      </section>
    </>
  );
}

export default Plan;
