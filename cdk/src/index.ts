import { App } from "aws-cdk-lib";
import { MattbTechWebsite } from "./stack";

const app = new App();
new MattbTechWebsite(app, "MattbTechWebsite");
