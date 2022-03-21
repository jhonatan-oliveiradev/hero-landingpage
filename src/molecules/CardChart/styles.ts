import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 415px;
  bottom: -40px;
  left: -30px;
  width: 210px;
  height: 210px;
  padding: 20px;
  border-radius: 18px;
  background-color: #ffffff;
  box-shadow: 0px 17.5px 28px rgba(0, 0, 0, 0.1);
  opacity: 0;
  animation: showOnPage 0.5s linear forwards;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  strong {
    font-size: 18px;
    font-weight: 500;
  }

  @keyframes showOnPage {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
      bottom: 0;
    }
  }
`;

function generateBars() {
  const amountBars = [...Array(12).keys()];
  let styleSpan: any = [];

  amountBars.forEach((item) => {
    styleSpan.push(`
            div:nth-child(${item + 1}) {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;


                  div{
                      background-color: #eff3fe;
                      height: 91px;
                      width: 2.1px;
                      border-radius: 5px;
                      display: flex;
                      justify-content: flex-end;

                  span {
                      background-color: #5236ff;
                      display: block;
                      height: 0px;
                      max-height: ${Math.ceil(Math.random() * 100)}px;
                      width: 3.5px;
                      border-radius: 5px;
                      animation: animationHeight 1s linear forwards;
                    }
                  }

                  small{
                      font-size: 10px;
                      color: #baccfd;
                      font-weight: 200;
                      margin-top: 10px;
                  }
        }
        `);
  });

  return styleSpan.join("");
}

export const Chart = styled.div`
  margin-top: 28px;

  ${generateBars()}

  @keyframes animationHeight {
    from {
      height: 0px;
    }

    to {
      height: 91px;
    }
  }
`;
