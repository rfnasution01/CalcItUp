import { Route, Routes } from "react-router-dom";
import { Geometry, Mathulator, NumCheck, NumConv, UniqMath } from "../../pages/mathOps";
import { History, NotFound, Share, Theme } from "../../pages";
import { AngleConv, ComplexNums, Conversion, MatrixOps, Statistics } from "../../pages/sciMode";
import { Exponential, Linear, Quadratic, Systems, Trigonometri } from "../../pages/equation";
import { Length, Temperature, Time, Weight, Speed } from "../../pages/unitConv";
import { Finance, Investment, Loan, Savings, Tax } from "../../pages/finCalc";
import { Differential, FuncRoots, LinearProgramming, NonLinear, Optimization } from "../../pages/solver";
import { Bmi, Body, Calory, Health, Nutrition } from "../../pages/health";
import PageLayout from "../../layout/pageLayout";

const MainRouting = () => {
    return (
      <Routes>
        <Route index element={<PageLayout />} />
        {/* --- MathOps --- */}
        <Route
          path="/mathops"
          element={<PageLayout />}
        >
          <Route
            index
            element={<Mathulator />}
          />
          <Route
            path="mathulator"
            element={<Mathulator />}
          />
          <Route
            path="check"
            element={<NumCheck />}
          />
          <Route
            path="uniq"
            element={<UniqMath />}
          />
          <Route
            path="geometry"
            element={<Geometry />}
          />
          <Route
            path="convert"
            element={<NumConv />}
          />
        </Route>
        {/* --- Scimode --- */}
        <Route
          path="/scimode"
          element={<PageLayout />}
        >
          <Route
            index
            element={<Conversion />}
          />
          <Route
            path="complex-number"
            element={<ComplexNums />}
          />
          <Route
            path="matrix"
            element={<MatrixOps />}
          />
          <Route
            path="angle"
            element={<AngleConv />}
          />
          <Route
            path="statistic"
            element={<Statistics />}
          />
          <Route
            path="conversion"
            element={<Conversion />}
          />
        </Route>
        {/* --- Equation --- */}
        <Route
          path="/equation"
          element={<PageLayout />}
        >
          <Route
            index
            element={<Linear />}
          />
          <Route
            path="linear"
            element={<Linear />}
          />
          <Route
            path="quadratic"
            element={<Quadratic />}
          />
          <Route
            path="systems"
            element={<Systems />}
          />
          <Route
            path="exponential"
            element={<Exponential />}
          />
          <Route
            path="trigonometri"
            element={<Trigonometri />}
          />
        </Route>
        {/* --- UnitConv --- */}
        <Route
          path="/unit"
          element={<PageLayout />}
        >
          <Route
            index
            element={<Length />}
          />
          <Route
            path="length"
            element={<Length />}
          />
          <Route
            path="weight"
            element={<Weight />}
          />
          <Route
            path="time"
            element={<Time />}
          />
          <Route
            path="temperature"
            element={<Temperature />}
          />
          <Route
            path="speed"
            element={<Speed />}
          />
        </Route>
        {/* --- FinCalc --- */}
        <Route
          path="/fincal"
          element={<PageLayout />}
        >
          <Route
            index
            element={<Loan />}
          />
          <Route
            path="loan"
            element={<Loan />}
          />
          <Route
            path="savings"
            element={<Savings />}
          />
          <Route
            path="investment"
            element={<Investment />}
          />
          <Route
            path="finance"
            element={<Finance />}
          />
          <Route
            path="tax"
            element={<Tax />}
          />
        </Route>
        {/* --- Solver --- */}
        <Route
          path="/solver"
          element={<PageLayout />}
        >
          <Route
            index
            element={<NonLinear />}
          />
          <Route
            path="non-linear"
            element={<NonLinear />}
          />
          <Route
            path="functional-roots"
            element={<FuncRoots />}
          />
          <Route
            path="optimization"
            element={<Optimization />}
          />
          <Route
            path="linear-programming"
            element={<LinearProgramming />}
          />
          <Route
            path="differential"
            element={<Differential />}
          />
        </Route>
        {/* --- Health --- */}
        <Route
          path="/health"
          element={<PageLayout />}
        >
          <Route
            index
            element={<Bmi />}
          />
          <Route
            path="bmi"
            element={<Bmi />}
          />
          <Route
            path="calory"
            element={<Calory />}
          />
          <Route
            path="heart"
            element={<Health />}
          />
          <Route
            path="body"
            element={<Body />}
          />
          <Route
            path="nutrition"
            element={<Nutrition />}
          />
        </Route>
        {/* --- Theme --- */}
        <Route
          path="/theme"
          element={<Theme />}
        />
        {/* --- History --- */}
        <Route
          path="/history"
          element={<History />}
        />
        {/* --- Share --- */}
        <Route
          path="/share"
          element={<Share />}
        />
        {/* --- Notfound --- */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };
  
export default MainRouting;