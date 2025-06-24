import FooterCard from "@components/footer-card";
import { KeyFeatures } from "./key-features";
import { LatestResources } from "./latest-resources";
import { LeadsAndDeals } from "./leads-and-deals";
import { SalesContact } from "./sales-contact";
import { SalesFeatures } from "./sales-features";
import { SalesReports } from "./sales-reports";
import { SalesTrusted } from "./sales-trusted";

export const SalesSection = () => {
  return (
    <>
      <SalesContact />
      <KeyFeatures />
      <LeadsAndDeals />
      <SalesReports />
      <SalesFeatures />
      <SalesTrusted />
      <LatestResources />
      <FooterCard
        title="Let’s Automate & Simplify Your Sales Performance"
        desc="Boost efficiency with intelligent automation and seamless workflows."
        hasHighlightedText={false}
        hasBtn={true}
      />
    </>
  );
};
