import { App } from "aws-cdk-lib";
import { MattbTechWebsite } from "./MattbTechWebsite";

const app = new App();
new MattbTechWebsite(app, "MattbTechWebsite");
