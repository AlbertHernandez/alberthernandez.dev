"use client";

import Image from "next/image";
import Link from "next/link";

import { Code, ExternalLink, Lightbulb, Moon, Sun, Users } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Colors } from "@/shared/colors";
import { React } from "@/shared/icons";
import { Technologies } from "@/shared/technologies";
import { TechnologyNames } from "@/shared/technology-names";

import { Button } from "./components/button";

const ICON_TECHNOLOGY_SIZE = 16;

const experiences = [
  {
    company: "Edpuzzle",
    logo: "/edpuzzle.webp",
    role: "Senior Software Engineer",
    period: "May 2024 - Present",
    startDate: "2024-05-01",
    website: "https://edpuzzle.com",
    points: [
      "Develop an education platform used by millions of teachers and students worldwide, featuring high-performance systems with over 300 million requests per day.",
      "Create search and recommendation tools enabling teachers to discover new materials for their students according to their profiles and preferences.",
      "Ensure code quality and reliability through testing, using design patterns such as CQRS, event-driven architecture, and feature flags. Follow hexagonal architecture and Domain-Driven Design (DDD) principles, and employ Continuous Integration/Continuous Deployment (CI/CD) practices with daily deployments.",
    ],
    technologies: [
      Technologies.JavaScript,
      Technologies.TypeScript,
      Technologies.React,
      Technologies.NodeJS,
      Technologies.Jest,
      Technologies.MongoDB,
      Technologies.Redis,
      Technologies.Docker,
      Technologies.GitHubActions,
      Technologies.AmazonWebServices,
      Technologies.Datadog,
    ],
  },
  {
    company: "CoverWallet, an Aon company",
    logo: "/coverwallet.webp",
    role: "Senior Software Engineer",
    period: "Feb 2019 - May 2024",
    startDate: "2019-02-01",
    endDate: "2024-05-01",
    website: "https://www.coverwallet.com",
    points: [
      "Create internal libraries, making them independent of any specific framework so that all microservices in the platform could utilize them.",
      "Integrate Feature Flag systems, Observability, Cloud Native Development, and Trunk-based development practices, which helped teams deliver software with a greater quality and reliability.",
      "Optimize import and export processes by designing ETLs to reduce manual work for agents, achieving over 80% time savings. Create of a backoffice to visualize, execute, and monitor them in real-time.",
      "Design and implement bridges between cloud systems like GCP and Salesforce, enabling real-time communication via events between both solutions.",
      "Enhanced a public API to enable external developers to interact with the platform easily.",
      "Develop matching systems between agents and end customers to allocate the most suitable agent based on customer profiles.",
    ],
    technologies: [
      Technologies.JavaScript,
      Technologies.TypeScript,
      Technologies.NodeJS,
      Technologies.NestJS,
      Technologies.Jest,
      Technologies.MongoDB,
      {
        name: TechnologyNames.PostgreSQL,
        color: Colors.PostgreSQL,
        icon: (
          <svg
            width={ICON_TECHNOLOGY_SIZE}
            height={ICON_TECHNOLOGY_SIZE}
            viewBox="-4 0 264 264"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <g>
              <title>PostgreSQL</title>
              <path
                d="M255.007926,158.085617 C253.473109,153.437413 249.452194,150.199279 244.251788,149.42182 C241.799982,149.055852 238.991667,149.211935 235.668988,149.897164 C229.877358,151.092028 225.580342,151.546679 222.44449,151.635363 C234.280794,131.650217 243.905921,108.859714 249.446873,87.4065589 C258.406282,52.7182633 253.61855,36.9154365 248.023797,29.7669469 C233.217182,10.8477783 211.614448,0.683454965 185.55152,0.371879908 C171.649478,0.202198614 159.443658,2.94725173 153.077358,4.92075751 C147.149155,3.87547344 140.774577,3.29134411 134.08606,3.18315012 C121.550337,2.9833164 110.473164,5.71595381 101.008259,11.332582 C95.7670577,9.56127483 87.3580785,7.06335335 77.6460416,5.46882217 C54.8035104,1.71868822 36.3939769,4.64110855 22.9282587,14.153903 C6.62230023,25.6721293 -0.937090069,45.6838799 0.461154734,73.6339954 C0.904572748,82.5082679 5.86908083,109.507695 13.6850624,135.114199 C18.1771824,149.831538 22.9672794,162.053912 27.9223279,171.443732 C34.9490254,184.758688 42.4676212,192.600092 50.9085266,195.415501 C55.6400924,196.992296 64.2358984,198.09552 73.2774873,190.566873 C74.4232794,191.953885 75.9515935,193.33321 77.9812656,194.613801 C80.5578199,196.239076 83.7090439,197.566965 86.8555381,198.353885 C98.1969885,201.189395 108.820102,200.479926 117.882975,196.506309 C117.93855,198.117986 117.981709,199.658125 118.018365,200.987788 C118.07867,203.145164 118.137792,205.259972 118.217016,207.237617 C118.753848,220.612286 119.663741,231.011326 122.359723,238.286928 C122.507529,238.687778 122.706771,239.29733 122.917247,239.943538 C124.261691,244.062005 126.511298,250.955677 132.232573,256.355326 C138.158411,261.947714 145.325229,263.663446 151.888998,263.662855 C155.180933,263.662855 158.322106,263.231261 161.076619,262.640628 C170.897441,260.536462 182.050291,257.329663 190.118134,245.84218 C197.745515,234.981986 201.453672,218.625182 202.124711,192.851363 C202.211621,192.122975 202.292028,191.427104 202.369478,190.763751 C202.421506,190.316194 202.474716,189.858587 202.528517,189.402162 L204.325838,189.560018 L204.788767,189.591353 C214.791095,190.047187 227.021155,187.925875 234.532065,184.437062 C240.467363,181.68255 259.485857,171.642383 255.007926,158.085617"
                fill="#000000"
              ></path>
              <path
                d="M237.905589,160.722476 C208.165838,166.857016 206.121386,156.78788 206.121386,156.78788 C237.521885,110.194697 250.64824,51.0516028 239.320388,36.5766651 C208.417109,-2.90823095 154.921977,15.7655797 154.029229,16.2503834 L153.741894,16.3018199 C147.866309,15.0821247 141.290716,14.3555104 133.900416,14.2349007 C120.443566,14.0143741 110.236083,17.7627344 102.490457,23.636545 C102.490457,23.636545 7.06039723,-15.6768961 11.4987159,73.0806097 C12.4429007,91.9631224 38.5625866,215.954032 69.7171363,178.502947 C81.1041109,164.808425 92.1061986,153.229303 92.1061986,153.229303 C97.5708822,156.859418 104.112776,158.711132 110.970975,158.046005 L111.503667,157.593718 C111.338125,159.294079 111.413801,160.957192 111.717099,162.925968 C103.691233,171.893062 106.049626,173.467492 90.0055797,176.770069 C73.7711594,180.115806 83.308194,186.072388 89.5349654,187.629081 C97.0837136,189.516859 114.54788,192.190965 126.34812,175.672166 L125.877506,177.556988 C129.022226,180.075603 131.230448,193.940397 130.860342,206.508637 C130.490236,219.077469 130.243104,227.706383 132.720924,234.446337 C135.198744,241.186291 137.668286,256.351187 158.759612,251.831871 C176.383409,248.055132 185.516046,238.268009 186.786587,221.94254 C187.688203,210.336222 189.728517,212.051954 189.857404,201.675381 L191.493912,196.762901 C193.381099,181.029838 191.793663,175.95418 202.651492,178.314938 L205.290125,178.546697 C213.2817,178.9103 223.741044,177.261376 229.879723,174.408129 C243.098309,168.273589 250.93794,158.031224 237.904406,160.722476 L237.905589,160.722476"
                fill="#336791"
              ></path>
              <path
                d="M108.076342,81.5250624 C105.396915,81.152 102.969349,81.4972748 101.741376,82.426679 C101.050236,82.9499122 100.836804,83.5559169 100.779455,83.973321 C100.625145,85.0783187 101.399649,86.2997875 101.874993,86.9300323 C103.220619,88.7137552 105.18703,89.9399538 107.133339,90.2101432 C107.415353,90.249164 107.695594,90.2680831 107.974651,90.2680831 C111.220471,90.2680831 114.170679,87.7411917 114.430818,85.8758799 C114.755991,83.5399538 111.36473,81.9826697 108.076342,81.5250624"
                fill="#FFFFFF"
              ></path>
              <path
                d="M196.860453,81.5989654 L196.859861,81.5989654 C196.604453,79.7679446 193.345626,79.2458938 190.253524,79.6757136 C187.166152,80.1061247 184.171603,81.4996397 184.421691,83.3347991 C184.622707,84.7620139 187.19867,87.198448 190.249386,87.1978568 C190.506568,87.1978568 190.766707,87.1807113 191.028619,87.1440554 C193.064794,86.8620416 194.558818,85.5690346 195.268286,84.8235012 C196.349635,83.688351 196.974559,82.4219492 196.860453,81.5989654"
                fill="#FFFFFF"
              ></path>
              <path
                d="M247.802088,160.025423 C246.66812,156.596323 243.018494,155.492508 236.954309,156.745312 C218.949173,160.461155 212.501284,157.886965 210.38352,156.327908 C224.378975,135.007187 235.89188,109.236323 242.102688,85.1906513 C245.04521,73.8007206 246.670485,63.2231316 246.802919,54.601903 C246.949543,45.1375889 245.338457,38.1842032 242.014005,33.9362587 C228.611547,16.8108637 208.942115,7.62501617 185.131751,7.37256351 C168.763122,7.18869284 154.93321,11.3781062 152.252009,12.5558245 C146.60582,11.1516674 140.450587,10.2896628 133.750245,10.1796952 C121.461654,9.98104388 110.840314,12.9229746 102.045857,18.9191686 C98.2259584,17.4978661 88.3536998,14.10897 76.2814965,12.1644342 C55.4089238,8.80332564 38.8233164,11.3497275 26.9870115,19.7350577 C12.8638522,29.740933 6.34383372,47.626642 7.60727945,72.8943741 C8.03236952,81.3961755 12.8756767,107.547788 20.5202032,132.593219 C30.5822448,165.556915 41.5192979,184.218309 53.0280647,188.056536 C54.374873,188.505866 55.9286097,188.820397 57.6407945,188.820397 C61.8390762,188.820397 66.9856813,186.927889 72.3409885,180.490051 C81.2359538,169.788896 89.5408776,160.821801 92.6022356,157.563566 C97.1262818,159.992314 102.09552,161.347991 107.179455,161.483972 C107.188323,161.616998 107.201921,161.750023 107.213746,161.882457 C106.193885,163.092102 105.357303,164.152166 104.644286,165.05733 C101.122365,169.528166 100.389247,170.458753 89.0519353,172.793497 C85.8273995,173.458624 77.2611547,175.224018 77.1364065,181.227898 C76.9998337,187.787529 87.2605266,190.542633 88.4299677,190.834697 C92.5040924,191.854559 96.4286374,192.357691 100.171677,192.357691 C109.275344,192.357099 117.285838,189.365506 123.688203,183.576831 C123.490734,206.962697 124.466254,230.006836 127.273977,237.028212 C129.573247,242.775501 135.191649,256.822984 152.93842,256.821801 C155.54158,256.821801 158.408425,256.519095 161.561423,255.843326 C180.082106,251.872074 188.124527,243.686577 191.236139,225.640055 C192.901025,215.995418 195.758411,192.963695 197.101672,180.610069 C199.937774,181.49454 203.589173,181.899529 207.536185,181.898938 C215.768388,181.898938 225.266993,180.150097 231.224166,177.384942 C237.91564,174.277469 249.991982,166.650679 247.802088,160.025423 L247.802088,160.025423 Z M203.696185,76.5445912 C203.634697,80.1918522 203.132748,83.5027067 202.600647,86.9590023 C202.028342,90.6760277 201.435935,94.5189838 201.286947,99.1843326 C201.139732,103.724342 201.706716,108.444674 202.255372,113.008924 C203.363326,122.228471 204.500249,131.720573 200.098587,141.086744 C199.41454,139.871778 198.754143,138.546254 198.14873,137.078245 C197.601848,135.752129 196.414079,133.621949 194.769885,130.673515 C188.370476,119.197857 173.385312,92.3243603 181.056443,81.3583372 C183.340933,78.0935982 189.139658,74.7384018 203.696185,76.5445912 L203.696185,76.5445912 Z M186.052286,14.7581339 C207.386014,15.2293395 224.261321,23.2102725 236.209958,38.4780416 C245.373931,50.1890069 235.282919,103.476028 206.069949,149.446651 C205.781432,149.080092 205.487594,148.709986 205.183704,148.33042 C205.062503,148.178476 204.938938,148.024166 204.814189,147.868083 C212.362938,135.400942 210.886651,123.066236 209.572952,112.129774 C209.033164,107.641792 208.523529,103.402716 208.653007,99.4214134 C208.787215,95.2000739 209.34533,91.5811917 209.884527,88.0811455 C210.548471,83.7675751 211.223058,79.3050162 211.036822,74.0437136 C211.17576,73.4921016 211.231926,72.8399815 211.159206,72.0660693 C210.683861,67.0205635 204.924157,51.9224758 193.18363,38.2551501 C186.762346,30.7808961 177.396767,22.4156674 164.609774,16.7736166 C170.109931,15.6337367 177.631483,14.5707159 186.052286,14.7581339 L186.052286,14.7581339 Z M66.6741062,175.777995 C60.7742818,182.871501 56.6995658,181.512277 55.3598522,181.065903 C46.6292471,178.153533 36.499806,159.702023 27.568776,130.441755 C19.8408868,105.123769 15.3245266,79.6650716 14.9674273,72.5260416 C13.8387806,49.9483788 19.3117413,34.2129515 31.2349561,25.7572656 C50.6389284,11.9965266 82.5413764,20.2328684 95.3602956,24.4104573 C95.1758337,24.591963 94.9842771,24.7622356 94.8015889,24.9466975 C73.7664296,46.1911501 74.2654226,82.4875751 74.3168591,84.7058476 C74.3150855,85.56194 74.3866236,86.7739492 74.485358,88.4412009 C74.8471871,94.5455889 75.5205912,105.907732 73.7214965,118.775132 C72.0489238,130.732046 75.7346143,142.435326 83.8320185,150.883917 C84.6703741,151.758337 85.5453857,152.579547 86.4493672,153.352277 C82.8446744,157.212379 75.0115473,165.74788 66.6741062,175.777995 L66.6741062,175.777995 Z M89.1530346,145.78461 C82.6265127,138.975483 79.6627067,129.503483 81.020157,119.795584 C82.920351,106.202753 82.2185681,94.3646744 81.8419584,88.0048776 C81.7893395,87.1150855 81.7426328,86.335261 81.7148453,85.7197968 C84.7880277,82.9954365 99.0288406,75.3645081 109.184296,77.6915658 C113.819492,78.7534042 116.642587,81.9087667 117.816758,87.3373857 C123.893358,115.440037 118.621413,127.153367 114.385293,136.565654 C113.512055,138.504868 112.687298,140.337663 111.982559,142.234309 L111.436859,143.699954 C110.054577,147.406337 108.768665,150.851991 107.971695,154.124416 C101.034273,154.103132 94.2848591,151.139917 89.1530346,145.78461 L89.1530346,145.78461 Z M90.2178291,183.685025 C88.1922956,183.178938 86.3701432,182.299788 85.3012102,181.570808 C86.1939584,181.150448 87.7831686,180.579326 90.5388637,180.011751 C103.876286,177.265515 105.93552,175.328074 110.433552,169.61685 C111.465238,168.30788 112.634088,166.823316 114.252859,165.015353 C114.25345,165.014171 114.254042,165.01358 114.254633,165.012988 C116.666236,162.31346 117.768868,162.771067 119.768979,163.600554 C121.390115,164.271594 122.968684,166.303039 123.608979,168.539048 C123.911686,169.594975 124.252231,171.599815 123.138956,173.158873 C113.742633,186.31479 100.051067,186.1457 90.2178291,183.685025 L90.2178291,183.685025 Z M160.016554,248.637487 C143.700545,252.133395 137.923695,243.80837 134.116804,234.291436 C131.659677,228.146845 130.452397,200.440314 131.309081,169.84388 C131.320314,169.436527 131.262374,169.043363 131.150042,168.673848 C131.05249,167.96024 130.902319,167.238356 130.694208,166.511741 C129.419529,162.059824 126.315012,158.335704 122.5903,156.792018 C121.110467,156.178919 118.393792,155.05382 115.129644,155.888628 C115.826106,153.0206 117.033386,149.782467 118.341764,146.275326 L118.891012,144.79963 C119.509432,143.136517 120.284527,141.413691 121.105145,139.590356 C125.538143,129.741746 131.609423,116.25297 125.020231,85.7795104 C122.551871,74.3659307 114.310208,68.7924619 101.815871,70.0866513 C94.3250624,70.861746 87.472776,73.8840831 84.0549099,75.6169607 C83.3200185,75.9894319 82.6477968,76.3488961 82.0199169,76.6994919 C82.9735612,65.1990023 86.578254,43.707418 100.060527,30.1098568 C108.54873,21.548933 119.854115,17.3210901 133.628453,17.5487113 C160.768591,17.9933118 178.172453,31.9213672 187.994457,43.5276859 C196.457829,53.5294226 201.040998,63.6038799 202.870245,69.0372286 C189.115418,67.6389838 179.76048,70.3544758 175.017681,77.1340416 C164.700822,91.8815335 180.662097,120.506236 188.333229,134.262836 C189.739751,136.784406 190.954125,138.963067 191.336055,139.888924 C193.833977,145.943058 197.067972,149.984665 199.429321,152.935464 C200.152979,153.839446 200.855353,154.716231 201.389229,155.481866 C197.223464,156.683233 189.740342,159.457848 190.422023,173.328554 C189.872185,180.289035 185.960647,212.874938 183.974134,224.387843 C181.351464,239.597672 175.754346,245.263372 160.016554,248.637487 L160.016554,248.637487 Z M228.120831,170.700564 C223.861062,172.678208 216.732083,174.161589 209.959612,174.479667 C202.479446,174.830263 198.671963,173.641903 197.776259,172.91115 C197.355307,164.267455 200.573339,163.364065 203.978199,162.408055 C204.513256,162.257293 205.035307,162.111261 205.53903,161.935076 C205.852379,162.189894 206.195289,162.442938 206.570716,162.690661 C212.582873,166.658956 223.306494,167.087002 238.444785,163.962383 C238.50036,163.950559 238.555935,163.939917 238.610919,163.928684 C236.569423,165.837746 233.075289,168.400111 228.120831,170.700564 L228.120831,170.700564 Z"
                fill="#FFFFFF"
              ></path>
            </g>
          </svg>
        ),
      },
      Technologies.Redis,
      Technologies.Docker,
      Technologies.Kubernetes,
      Technologies.CircleCI,
      Technologies.GoogleCloudPlatform,
      Technologies.Datadog,
    ],
  },
];

export default function Portfolio() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getThemeIcon = () => {
    if (resolvedTheme === "light") {
      return <Sun className="h-5 w-5" aria-hidden="true" />;
    } else if (resolvedTheme === "dark") {
      return <Moon className="h-5 w-5" aria-hidden="true" />;
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(`#${sectionId}`);
    if (section instanceof HTMLElement) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    if (resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  if (!mounted) return;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground dark:bg-gray-900 dark:text-gray-100">
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <header
        className={`fixed left-1/2 transform -translate-x-1/2 z-50 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg transition-all duration-500 ease-in-out ${
          visible ? "top-4 opacity-100" : "-top-full opacity-0"
        }`}
      >
        <nav
          className="inline-flex h-14 items-center justify-between px-6 space-x-4"
          aria-label="Main"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="flex items-center space-x-2"
            aria-label="Go to About section"
          >
            <span className="font-bold text-lg text-primary transition-all ease-in-out hover:scale-110">
              Albert Hernández
            </span>
          </button>
          <div className="hidden md:flex items-center space-x-4 text-sm font-medium">
            <button
              onClick={() => scrollToSection("about-me")}
              className="text-primary transition-all ease-in-out hover:scale-110"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-primary transition-all ease-in-out hover:scale-110"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-primary transition-all ease-in-out hover:scale-110"
            >
              Education
            </button>
          </div>
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full group hover:bg-transparent transition-all ease-in-out"
              aria-label="Toggle theme"
            >
              <div
                className={`transition-transform duration-300 ${
                  resolvedTheme === "dark"
                    ? "hover:-rotate-12"
                    : "hover:rotate-12"
                }`}
              >
                {getThemeIcon()}
              </div>
            </Button>
          </div>
        </nav>
      </header>
      <main id="main-content" className="flex-1 pt-16">
        <section
          id="about"
          className="container py-8 md:py-12 lg:py-24 mx-auto"
        >
          <div className="mx-auto max-w-[980px] flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="md:w-1/3 flex justify-center items-center">
              <div className="rounded-full border-4 shadow-lg border-[#27314b] dark:border-[#e5e7eb]">
                <Image
                  src="/albert.webp"
                  alt="Albert Hernández"
                  width={250}
                  height={250}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-2/3">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl mb-4 text-primary">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Albert Hernández
                </span>
              </h1>
              <p className="text-base text-muted-foreground dark:text-gray-400 mb-6">
                I&apos;m a passionate Backend Software Engineer based in Spain,
                with over 5 years of experience in building scalable and
                efficient systems. I also create content on YouTube about web
                programing. Let&apos;s connect!
              </p>
              <div className="flex space-x-4">
                <Link
                  href="mailto:alberthernandezdev@gmail.com"
                  aria-label="Email"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <svg
                    role="img"
                    className="fill-current w-6 h-6 transform transition-transform duration-200 hover:scale-110"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Gmail</title>
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                </Link>
                <Link
                  href="https://github.com/AlbertHernandez"
                  target="_blank"
                  aria-label="GitHub"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <svg
                    role="img"
                    className="fill-current w-6 h-6 transform transition-transform duration-200 hover:scale-110"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/albert-hernandez-dev"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <svg
                    role="img"
                    className="fill-current w-6 h-6 transform transition-transform duration-200 hover:scale-110"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
                <Link
                  href="https://x.com/AlbertHernandev"
                  target="_blank"
                  aria-label="X"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <svg
                    role="img"
                    className="fill-current w-6 h-6 transform transition-transform duration-200 hover:scale-110"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>X</title>
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.youtube.com/@AlbertHernandez"
                  target="_blank"
                  aria-label="YouTube"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <svg
                    role="img"
                    className="fill-current w-6 h-6 transform transition-transform duration-200 hover:scale-110"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>YouTube</title>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about-me"
          className="py-12 md:py-12 lg:py-16 bg-gray-50 dark:bg-gray-800"
        >
          <div className="container mx-auto max-w-[1042px]">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl mb-6 text-left">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
              More than 5 years of experience as a Backend Software Engineer.
              Working with product teams focused on the end customer as well as
              platform teams.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Code
                  className="w-8 h-8 text-primary dark:text-primary-dark flex-shrink-0"
                  style={{ marginTop: "-2px" }}
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">Backend Developer</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Software Engineer with expertise in backend services,
                    driving efficiency and scalability in complex systems to
                    support millions of users.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users
                  className="w-8 h-8 text-primary dark:text-primary-dark flex-shrink-0"
                  style={{ marginTop: "-2px" }}
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Cross-functional Collaborator
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    With experience in frontend, backend, and SRE teams, I enjoy
                    collaborating with cross-functional teams to bring
                    innovative ideas to life.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Lightbulb
                  className="w-8 h-8 text-primary dark:text-primary-dark flex-shrink-0"
                  style={{ marginTop: "-2px" }}
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Value-Driven Solutions
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    I am passionate about working in product and platform teams,
                    creating digital solutions that deliver value and impact end
                    users.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <svg
                  className="w-8 h-8 text-primary dark:text-primary-dark flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ marginTop: "-2px" }}
                >
                  <title>YouTube</title>
                  <path d="M23.498 6.186a2.963 2.963 0 0 0-2.084-2.084C19.963 3.5 12 3.5 12 3.5s-7.963 0-9.414.602A2.963 2.963 0 0 0 .502 6.186C0 7.638 0 12 0 12s0 4.362.502 5.814a2.963 2.963 0 0 0 2.084 2.084C4.037 20.5 12 20.5 12 20.5s7.963 0 9.414-.602a2.963 2.963 0 0 0 2.084-2.084C24 16.362 24 12 24 12s0-4.362-.502-5.814zM9.546 15.568V8.432L15.818 12l-6.272 3.568z" />
                </svg>
                <div>
                  <h3 className="text-xl font-bold mb-2">Content Creator</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    In my free time, I create programming videos on{" "}
                    <Link
                      href="https://www.youtube.com/@AlbertHernandez"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary dark:text-primary-dark hover:underline"
                    >
                      YouTube
                    </Link>
                    , where I combine my passion for teaching with programming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="experience"
          className="container py-12 md:py-12 lg:py-16 mx-auto"
        >
          <div className="mx-auto max-w-[980px] flex flex-col items-start gap-2 space-y-6">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl flex items-center mb-8 w-full justify-between text-primary">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div key={exp.company} className="relative flex items-start">
                  {index !== experiences.length - 1 && (
                    <div className="absolute top-0 left-6 h-[calc(100%+4rem)] w-px bg-gray-300 dark:bg-gray-700" />
                  )}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-4 border-white dark:border-gray-800 bg-white dark:bg-gray-800 z-10">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </div>
                  <div className="ml-6 flex-grow">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                      <div>
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xl font-bold text-primary hover:underline mb-1 group"
                        >
                          {exp.company}
                          <ExternalLink className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                        <h3 className="text-lg font-semibold mb-2 sm:mb-0">
                          {exp.role}
                        </h3>
                      </div>
                      <div className="text-sm text-muted-foreground dark:text-gray-400 w-full sm:w-auto sm:text-right">
                        <div className="flex items-center sm:justify-end">
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                      {exp.points.map((point, i) => (
                        <li
                          key={i}
                          className="text-sm leading-relaxed dark:text-gray-300"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center px-3 py-2 rounded-lg transition-colors duration-200"
                          style={{
                            backgroundColor: `#6767671A`,
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = `${tech.color}33`;
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = `#6767671A`;
                          }}
                        >
                          <div className="w-4 h-4 mr-1.5 flex items-center justify-center">
                            {tech.icon}
                          </div>
                          <span className="text-xs font-medium">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="education"
          className="py-12 md:py-12 lg:py-16 bg-gray-50 dark:bg-gray-800"
        >
          <div className="container mx-auto max-w-[1042px]">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl flex items-center mb-8 w-full justify-between text-primary">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="flex flex-row items-start gap-4 sm:gap-8">
              <div className="w-16 h-16 relative flex-shrink-0">
                <Image
                  src="/upv.webp"
                  alt="Universitat Politecnica de Valencia logo"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                  <Link
                    href="https://www.upv.es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl font-bold text-primary hover:underline inline-flex items-center group"
                  >
                    Universitat Politècnica de València (UPV)
                    <ExternalLink className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <div className="text-sm text-muted-foreground dark:text-gray-400 w-full sm:w-auto sm:text-right mt-1 sm:mt-0">
                    <div className="flex items-center sm:justify-end">
                      <span>2015 - 2019</span>
                    </div>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4">
                  Bachelor&apos;s Degree in Computer Science
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 md:py-12" role="contentinfo">
        <div className="container mx-auto max-w-[1042px] flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm leading-loose text-muted-foreground dark:text-gray-400 mb-4 md:mb-0">
            Built by Albert Hernández. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="mailto:alberthernandezdev@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <svg
                role="img"
                className="fill-current w-6 h-6 transform transition-transform duration-200 hover:scale-110"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Gmail</title>
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
            </Link>
            <Link
              href="https://github.com/AlbertHernandez"
              target="_blank"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <svg
                role="img"
                className="fill-current w-6 h-6 transform transition-transform duration-200 hover:scale-110"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/in/albert-hernandez-dev"
              target="_blank"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <svg
                role="img"
                className="fill-current w-6 h-6 transform transition-transform duration-200 hover:scale-110"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
            <Link
              href="https://x.com/AlbertHernandev"
              target="_blank"
              aria-label="X"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <svg
                role="img"
                className="fill-current w-6 h-6 transform transition-transform duration-200 hover:scale-110"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </Link>
            <Link
              href="https://www.youtube.com/@AlbertHernandez"
              target="_blank"
              aria-label="YouTube"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <svg
                role="img"
                className="fill-current w-6 h-6 transform transition-transform duration-200 hover:scale-110"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>YouTube</title>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
