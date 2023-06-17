import styled from "styled-components";
import Basket from "./basket";
import Field from "./field";


const PlannerWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 700px;
  margin: 0 auto;
  display: grid;
  background: #f3f3f3;
  grid-template-columns: 1fr;
  column-gap: 30px;
  border-radius: 20px;
  @media (min-width: 1080px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Planner = () => {

    return (
      <PlannerWrapper>
          <Basket/>
          <Field/>
      </PlannerWrapper>
    )
}
