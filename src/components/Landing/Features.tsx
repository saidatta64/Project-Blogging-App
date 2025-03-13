import { FeatureSteps } from "../feature-section";

export default function Features() {
  const featuresData = [
    {
      step: "Step 1",
      title: "Share Your Project Idea",
      content: "Describe your project concept, goals, and the problem it solves.",
      image: "/logo.png",
    },
    {
      step: "Step 2",
      title: "Build Your Project",
      content: "Document how you developed your project, including technologies and tools used.",
      image: "/logo.png",
    },
    {
      step: "Step 3",
      title: "Deploy & Share",
      content: "Publish your project code or research papers and share it with the community.",
      image: "/logo.png",
    },
  ];

  return <FeatureSteps features={featuresData} title="Get Started Now!!" />;
}
