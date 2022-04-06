import { Box, ListItemText, Typography } from "@material-ui/core";
import { FunctionComponent } from "react";

export const Resume: FunctionComponent = () => {
  return (
    <Box component="header">
      <Typography variant="h4" align="center">
        Rich Mischler
      </Typography>
      <Box component="div">
        <Typography variant="h5">About</Typography>
        <Typography variant={"body1"}>
          Seeking a challenging Senior Software Engineer - DevOps position in
          which I am given the opportunity to directly impact the company’s
          success and continued growth. I have 12 years’ experience as a
          Software Engineer and DevOps Engineer and have been recognized for
          leadership, high level of commitment, strong goal orientation, and
          high level of performance.
        </Typography>
        <Typography variant="h5">Skills</Typography>
        <Typography variant="body1">
          Javascript, Typescript, Java, Python, PHP, React, Kubernetes, GraphQL,
          Terraform, Helm, Groovy, Docker, Jenkins CI/CD, AWS Services (AppSync,
          EC2, RDS, CDK, Step Functions, Lambda, Glue, Athena, S3, Trusted
          Advisor, Support, Cloudwatch, AppSync, EventBridge, Parameter Store)
        </Typography>
        <Typography variant="h5">Professional Experience</Typography>
        <Typography variant="h6">Blackboard, Oct 2016 - Present</Typography>
        <Typography variant="subtitle1">
          Senior Software Engineer - DevOps
        </Typography>
        <Typography variant="body1">
          <ListItemText inset={true}>
            Hired as a Senior Software Engineer in Test, promoted to Senior
            DevOps Engineer
          </ListItemText>
          <ListItemText inset={true}>
            Built customer facing self-service portal for clients to use.
          </ListItemText>
          <ListItemText inset={true}>
            Built and maintained microservice written in Typescript which is an
            AWS Event Bus with lambda handler that performs actions based on the
            event.
          </ListItemText>
          <ListItemText inset={true}>
            Built and maintained React App written in PHP which is responsible
            for running all jobs related to site operations in AWS
          </ListItemText>
          <ListItemText inset={true}>
            Built and maintained test framework written in Java which is an AWS
            Lambda test runner reducing test time and cost significantly for the
            main product.
          </ListItemText>
          <ListItemText inset={true}>
            Built and maintained microservice written in Java which runs AWS
            Lambda to pull Trusted Advisor data from all AWS accounts, creates a
            data lake using Glue crawler/Athena and publishes a report of
            under-utilized EC2/RDS instances to Chartio.
          </ListItemText>
          <ListItemText inset={true}>
            Built and maintained microservice written in Python to push and pull
            site configuration to AWS parameter store
          </ListItemText>
          <ListItemText inset={true}>
            Built K8 cron job for auto-decommissioning unused ec2 instances
          </ListItemText>
          <ListItemText inset={true}>
            Built dozens of CI/CD pipelines using jenkins, kubernetes,
            terraform, helm
          </ListItemText>
          <ListItemText inset={true}>
            Built a quota system to limit the number of ec2 instances that can
            be spun up at one time in AWS playground accounts
          </ListItemText>
          <ListItemText inset={true}>
            Increased overall job success rates from 90% to 97% over a six month
            period by improving the code
          </ListItemText>
          <ListItemText inset={true}>
            Saved company hundreds of thousands of dollars in AWS costs
          </ListItemText>
        </Typography>
        <Typography variant="h6">
          Fusion Alliance, Feb 2013 - Oct 2016
        </Typography>
        <Typography variant="subtitle1">
          Test Automation Engineer / Team Lead
        </Typography>
        <Typography variant="body1">
          <ListItemText inset={true}>
            Hired as Test Automation Engineer, promoted to Team Competency Lead
          </ListItemText>
          <ListItemText inset={true}>
            Worked as a consultant for several companies.
          </ListItemText>
          <ListItemText inset={true}>
            Won 3 High5 Performance Excellence Awards for going above and beyond
            expectations
          </ListItemText>
          <ListItemText inset={true}>
            Built a test automation framework written in Java, using Selenium
            WebDriver, JUnit, Maven, Allure, BrowserStack, and Git repository.
          </ListItemText>
          <ListItemText inset={true}>
            Worked on a project to produce initial performance baseline of
            native client desktop application using TestComplete during a 4 week
            period. I worked with staff personnel to come up with the
            appropriate workflows to baseline, created script routines with
            performance counters for those workflows, ran script routines and
            produced a report matrix based on the test logs, created script
            routines to log TestComplete data to excel, reviewed performance
            baseline with stakeholder for approval, and performed knowledge
            transfer to six personnel.
          </ListItemText>
          <ListItemText inset={true}>
            Worked on two separate projects during a 12 week period. ○ Project 1
            (WPF Application): I trained 3 team members on automation best
            practices, writing automation test cases, scripting in C# / j
            script, all aspects of TestComplete functionality, performing
            Keyword Driven Testing, and fixed all broken automation scripts. ○
            Project 2 (Web Application): I trained 1 team member on automation
            best practices, writing automation test cases and holding test case
            reviews, scripting in C# / j script, all aspects of TestComplete
            functionality, and performing Data Driven Testing.
          </ListItemText>
        </Typography>
        <Typography variant="h6">
          Allied Solutions LLC, Apr 2010 - Feb 2013
        </Typography>
        <Typography variant="subtitle1">Test Automation Engineer</Typography>
        <Typography variant="body1">
          <ListItemText inset={true}>
            Hired as a Functional Tester, promoted to Test Automation Engineer.
          </ListItemText>
          <ListItemText inset={true}>
            Received 4 months of test automation training from two automation
            professionals.
          </ListItemText>
          <ListItemText inset={true}>
            Created, reviewed and managed test cases.
          </ListItemText>
          <ListItemText inset={true}>
            Built automated smoke and regression test suite to run on a nightly
            basis using C# and TestComplete
          </ListItemText>
        </Typography>
        <Typography variant="h6">
          OfficeArrow LLC, Jul 2008 - Oct 2009
        </Typography>
        <Typography variant="subtitle1">Test Automation Engineer</Typography>
        <Typography variant="body1">
          <ListItemText inset={true}>
            I started on this project as a Functional Tester, taught myself test
            automation
          </ListItemText>
          <ListItemText inset={true}>
            Implemented automated regression testing. Generated test scenarios,
            test cases, and test data. Responsible for verification of all tasks
            in an interation including support for IE6, IE7, IE8, FF3, and
            Safari 3. All testing was handled through agile and scrum software
            development methodology on 2-3 week iteration cycles. Managed the
            publication of all site content on a daily basis. Published over
            1500 pieces of content. Responsible for uploading content using
            HTML. Managed the content management database system which holds all
            of the content on the website, and was responsible for the placement
            of all right rail content and advertisement.
          </ListItemText>
        </Typography>
        <Typography variant="h5">Education & Certifications</Typography>
        <Typography variant="subtitle1">
          Berry College - Campbell School of Business 2001-2005 Bachelor of
          Science, Finance
        </Typography>
        <Typography variant="subtitle1">
          Certified Tester Advanced Level - Technical Test Analyst (CTAL-TTA)
          International Software Testing Qualifications Board (ISTQB) Issued Mar
          2013 Credential ID 13-CTAL-TTA-00014-USA
        </Typography>
        <Typography variant="subtitle1">
          Certified Tester Foundation Level (CTFL) International Software
          Testing Qualifications Board (ISTQB) Issued Mar 2013 Credential ID
          13-CTFL-00289-USA
        </Typography>
      </Box>
    </Box>
  );
};
