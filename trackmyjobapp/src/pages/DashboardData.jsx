import React from "react";
import ApplicationsImg from "../images/applications.png";
import OnlineAssessmentImg from "../images/binary-code.png";
import InterviewImg from "../images/job-interview.png";
import RejectedImg from "../images/file.png";

export const DashboardData = {
  uid: "dfhjasfhsfbjsdfjhsdfjhsdf",
  username: "Gopi Krishna",
  n_applications: 140,
  n_online_assessments: 12,
  n_interviews: 3,
  n_rejected: 74,
};

export const cardsData = [
  {
    name: "Job Applications",
    image: ApplicationsImg,
    number: DashboardData.n_applications,
  },
  {
    name: "Online Assessments",
    image: OnlineAssessmentImg,
    number: DashboardData.n_online_assessments,
  },
  {
    name: "Interviews",
    image: InterviewImg,
    number: DashboardData.n_interviews,
  },
  {
    name: "Rejected",
    image: RejectedImg,
    number: DashboardData.n_rejected,
  },
];
