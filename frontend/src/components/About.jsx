import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const aboutContent = [
  {
    title: "Our Vision",
    content:
      "At 401Chain, we envision a future where the complexities and inefficiencies of traditional pension systems are replaced with a seamless, decentralized solution. Our mission is to empower individuals, providing them with transparent, secure, and personalized pension plans through the innovative use of blockchain technology.",
  },
  {
    title: "Who We Are",
    content:
      "401Chain is driven by a team of passionate individuals who believe in the power of Web3 technology to transform lives. Our team comprises enthusiasts in blockchain and user experience, dedicated to revolutionizing the pension landscape. With a shared commitment to transparency and financial inclusivity, we're working tirelessly to create a decentralized pension system that truly serves the people.",
  },
  {
    title: "The Problem",
    content:
      "In India and the UK, existing pension systems face significant challenges. Low adoption rates, poor investment returns, and complex regulations hinder the financial security of individuals. Recent government interventions in the UK have highlighted the vulnerabilities of traditional pension funds. We recognized these issues as opportunities for innovation and set out to create a solution that ensures everyone can retire with peace of mind.",
  },
  {
    title: "The Solution",
    content:
      "401Chain leverages cutting-edge Web3 technology, including blockchain and smart contracts, to provide a decentralized pension system. Through increased security, reduced costs, and enhanced efficiency, we're creating a platform where pension funds are secure, transparent, and personalized. With features like automatic fund transfers and customizable investment portfolios, individuals can take control of their financial future like never before.",
  },
  {
    title: "How It Works",
    content:
      "Our platform simplifies the pension process. Users can connect their wallets, verify their identity, and participate in the decentralized autonomous organization (DAO) to manage their pension contributions. Through Chainlink automation and Uniswap integration, pension funds are allocated efficiently and securely. The entire process is designed to be user-friendly, ensuring a seamless experience for every participant.",
  },
  {
    title: "Get Involved",
    content:
      "Join us in shaping the future of pensions. Whether you're an individual looking for a secure retirement plan or a passionate advocate for financial inclusivity, there are many ways to get involved. Contribute to our community, propose ideas on the DAO, or spread the word about 401Chain. Together, we're building a brighter, decentralized future for pensions.",
  },
];

const About = () => {
  return (
    <div
      id="about-container"
      className="flex flex-col justify-center items-center"
    >
      <h2 className="w-fit text-3xl font-bold text-[#2E8B57] mx-6 mt-4 mb-8 pb-2 border-b-[1px] border-[#2E8B57]">
        About
      </h2>
      <div className="w-[80%] flex-col space-y-6 mb-16">
        {aboutContent.map(({ title, content }) => (
          <Card className="bg-[#2E8B57] text-white">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default About;
