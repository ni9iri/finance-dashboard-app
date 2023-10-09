import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";


// type Props = {};

const Row1 = () => {
  const {data} = useGetKpisQuery()

  console.log("data", data)
  return (
    <>
      <DashboardBox gridArea="a" />
      <DashboardBox gridArea="b" />
      <DashboardBox gridArea="c" />
    </>
  );
};

export default Row1;
