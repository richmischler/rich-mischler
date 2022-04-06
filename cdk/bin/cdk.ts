#!/usr/bin/env node
// eslint-disable-next-line import/no-extraneous-dependencies
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { RichMischlerStack } from "../src/app";

const app = new cdk.App();

new RichMischlerStack(app, "rich-mischler-ui-prod");

app.synth();
