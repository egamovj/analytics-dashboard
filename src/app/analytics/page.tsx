import { analytics } from "@/utils/analytics";

const Page = async () => {
  const pageview = await analytics.retrieve("pageview", "20/02/2024");

  return <pre>{JSON.stringify(pageview)}</pre>;
};
export default Page;
