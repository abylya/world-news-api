import Skiliton from "./skiliton/Skiliton";

interface I_props {
  isLoading: boolean;
  type: string;
}

export default function withSkiliton<P extends object>(
  Companent: React.ComponentType<P>,
  amount: number,
) {
  return function WithSkiliton(props: I_props & P) {
    const { isLoading, type, ...restProps } = props;
    // console.log(isLoading);
    if (isLoading) {
      return (
        <Skiliton
          direction={type === "banner" ? "row" : "column"}
          amount={amount}
        ></Skiliton>
      );
    }

    return <Companent type={type} {...(restProps as P)}></Companent>;
  };
}
