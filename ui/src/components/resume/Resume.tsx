import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@material-ui/lab";
import { FunctionComponent } from "react";
import experiences from "../../resources/experience.json";
import { HomeDetails } from "../home/HomeDetails";
import { Event } from "./Event";

export interface ResumeProps {
  readonly active?: boolean | undefined;
}

export const Resume: FunctionComponent<ResumeProps> = ({ active }) => {
  if (!active) {
    return <HomeDetails />;
  }

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Event
            year={experiences.bb.year}
            company={experiences.bb.company}
            title={experiences.bb.title}
            description={experiences.bb.description}
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Event
            year={experiences.fusion.year}
            company={experiences.fusion.company}
            title={experiences.fusion.title}
            description={experiences.fusion.description}
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="grey" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Event
            year={experiences.as.year}
            company={experiences.as.company}
            title={experiences.as.title}
            description={experiences.as.description}
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Event
            year={experiences.oa.year}
            company={experiences.oa.company}
            title={experiences.oa.title}
            description={experiences.oa.description}
          />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
