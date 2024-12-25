import { memo } from "react";

const HomePage = () => {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
};
export default memo(HomePage);
