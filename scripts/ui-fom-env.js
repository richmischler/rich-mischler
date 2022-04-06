const { spawn } = require("child_process");
function stages() {
  if (process.env.CDK_DEPLOY_STAGES) {
    return process.env.CDK_DEPLOY_STAGES.split(" ");
  } else return ["local"];
}
console.log(stages());
const runner = async () => {
  for (const stage of stages()) {
    let dotEnv = stage === "local" ? ".env" : `.env.${stage}`;

    console.log("running " + stage);
    const yarn = spawn("dotenv", [
      "-e",
      dotEnv,
      "yarn",
      "workspace",
      "rich-mischler-ui",
      "run",
      "build",
    ]);
    yarn.on("exit", (code) => {
      if (code !== 0) {
        process.exit(code);
      }
    });
    for await (let data of yarn.stdout) {
      console.log(`stdout: ${data}`);
    }
    console.log("finish " + stage);
  }
};
runner();
