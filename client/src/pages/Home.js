import withRoot from "../withRoot";

import React from "react";
import AppFooter from "../views/AppFooter";
import ProductHero from "../views/ProductHero";
import AppAppBar from "../views/AppAppBar";

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
