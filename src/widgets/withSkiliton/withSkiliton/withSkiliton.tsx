import Skiliton from "../skiliton/Skiliton";

interface I_props {
  isLoading: boolean;
  direction: string;
}

export default function withSkiliton<P extends object>(
  Companent: React.ComponentType<P>,
  amount: number,
) {
  return function WithSkiliton(props: I_props & P) {
    const { isLoading, direction, ...restProps } = props;
    // console.log(isLoading);
    if (isLoading) {
      return <Skiliton direction={direction} amount={amount}></Skiliton>;
    }

    return <Companent direction={direction} {...(restProps as P)}></Companent>;
  };
}
