import DashboardBox from "@/components/DashboardBox";
import { useGetTransactionsQuery } from "@/state/api";

// type Props = {};

const Row3 = () => {
  const {data: transactionsData} = useGetTransactionsQuery()

  // console.log(data)
  return (
    <>
      <DashboardBox gridArea="g" >

      </DashboardBox>
      <DashboardBox gridArea="h" />
      <DashboardBox gridArea="i" />
      <DashboardBox gridArea="j" />
    </>
  );
};

export default Row3;
