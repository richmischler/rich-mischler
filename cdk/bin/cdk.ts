#!/usr/bin/env node
import * as cdk from "@aws-cdk/core";
import { RichMischlerStack } from "../src/app";

const app = new cdk.App();

new RichMischlerStack(app, "rich-mischler-ui-prod");

app.synth();
