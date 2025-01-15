import WebDesignIcon from "../assets/icon-web-design.svg";
import WebDevelopmentIcon from "../assets/icon-web-development.svg";
import FinancialAdvisoryIcon from "../assets/icon-financial-advisory.svg";
import AppDevelopmentIcon from "../assets/icon-app-development.svg";
import BrandingIcon from "../assets/icon-branding.svg";
import ProcessAutomationIcon from "../assets/icon-process-automation.svg";

export interface ServiceItem {
  icon: string;
  title: string;
}

export const servicesData: ServiceItem[] = [
  {
    icon: WebDesignIcon,
    title: "WEB DESIGN",
  },
  {
    icon: WebDevelopmentIcon,
    title: "WEB DEVELOPMENT",
  },
  {
    icon: FinancialAdvisoryIcon,
    title: "FINANCIAL ADVISORY",
  },
  {
    icon: AppDevelopmentIcon,
    title: "APP DEVELOPMENT",
  },
  {
    icon: BrandingIcon,
    title: "BRANDING",
  },
  {
    icon: ProcessAutomationIcon,
    title: "PROCESS AUTOMATION",
  },
];
