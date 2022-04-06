import * as cloudfront from "@aws-cdk/aws-cloudfront";
import { ErrorResponse } from "@aws-cdk/aws-cloudfront";
import * as origins from "@aws-cdk/aws-cloudfront-origins";
import * as iam from "@aws-cdk/aws-iam";
import * as s3 from "@aws-cdk/aws-s3";
import * as s3deployment from "@aws-cdk/aws-s3-deployment";
import * as cdk from "@aws-cdk/core";

export class RichMischlerStack extends cdk.Stack {
  constructor(
    scope: cdk.Construct,
    id: string,
  ) {
    super(scope, id);

    const destinationBucket = new s3.Bucket(this, "Bucket", {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      publicReadAccess: true,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "index.html",
      cors: [
        {
          allowedMethods: [s3.HttpMethods.GET, s3.HttpMethods.POST],
          allowedHeaders: ["*"],
          allowedOrigins: ["*"],
        },
      ],
    });

    const originIdentity = new cloudfront.OriginAccessIdentity(
      this,
      "DistributionIdentity"
    );

    destinationBucket.addToResourcePolicy(
      new iam.PolicyStatement({
        actions: ["s3:GetObject", "s3:ListBucket"],
        resources: [
          destinationBucket.bucketArn,
          destinationBucket.arnForObjects("*"),
        ],
        principals: [originIdentity.grantPrincipal],
      })
    );

    const defaultBehaviorOptions: cloudfront.BehaviorOptions = {
      origin: new origins.S3Origin(destinationBucket),
      originRequestPolicy: cloudfront.OriginRequestPolicy.CORS_S3_ORIGIN,
      cachePolicy: cloudfront.CachePolicy.CACHING_DISABLED,
    };

    const errorResponses: ErrorResponse[] = [
      {
        httpStatus: 404,
        responseHttpStatus: 404,
        responsePagePath: "/index.html",
      },
      {
        httpStatus: 403,
        responseHttpStatus: 403,
        responsePagePath: "/index.html",
      },
    ];

    const distributionProps: cloudfront.DistributionProps = {
      errorResponses: errorResponses,
      defaultBehavior: defaultBehaviorOptions,
      domainNames: ["richmischler.com"]
    };

    const distribution = new cloudfront.Distribution(
      this,
      "Distribution",
      distributionProps
    );
    new s3deployment.BucketDeployment(this, "Deployment", {
      sources: [s3deployment.Source.asset(`./ui/build`)],
      cacheControl: [
        s3deployment.CacheControl.maxAge(cdk.Duration.seconds(0)),
        s3deployment.CacheControl.noCache(),
      ],
      destinationBucket,
      distribution,
      distributionPaths: ["/index.html"],
    });

    new cdk.CfnOutput(this, "CloudfrontHost", {
      value: `https://${distribution.distributionDomainName}`,
    });

    new cdk.CfnOutput(this, "ContentBucket", {
      value: destinationBucket.bucketName,
    });
  }
}
